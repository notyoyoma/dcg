import { format, parse, differenceInMinutes as diff } from "date-fns";
import LogicModule from "./LogicModule";
import game, { event, on, Bindable } from "@/game";
import { partyFeelsTowardParty } from "@/utils/alignment";
import { randomGausian, roll, rollArray } from "@/utils/rng";
import { getLSD, setLSD } from "@/utils/localStorage";

const dtf = "yyyy-MM-dd:HH:mm:ss";

export class ActiveEncounter extends Bindable {
  log = [];
  respawn = 15; // minutes

  constructor(floor, roomId) {
    super();
    this.floor = floor;
    this.roomId = roomId;
    this.key = `${floor},${roomId}`;

    if (!roomId) return;

    const previous = game.encounter.previous[this.key];
    const now = new Date();
    if (previous && !previous.cleared) {
      const minutesSinceSpawn = diff(now, parse(previous.spawned, dtf, now));
      if (minutesSinceSpawn > this.respawn) this.spawn();
      else this.reload(previous);
    } else {
      this.spawn();
    }

    this.start();
  }

  spawn() {
    const { roomId, floor } = this;
    this.monsters = game.monsters.spawn({ roomId, floor });
    const rand = randomGausian();
    const feelings = partyFeelsTowardParty(
      this.monsters.party,
      game.party.party
    );
    this.hostility = rand * feelings;
    this.log = []; // TODO monster flavor text
    this.spawned = format(new Date(), dtf);
    this.looted = false;
    this.addLog = this.monsters.textSummary;
  }

  /**
   * @param  {} previous = raw js object of previous encounter
   */
  reload(previous) {
    const { monsters, log, hostility, spawned } = previous;
    this.monsters = game.monsters.respawn(monsters);
    this.hostility = hostility;
    this.log = log;
    this.spawned = spawned;
    this.addLog = "You walk back in the room";
  }

  @event // ActiveEncounter.before.start ActiveEncounter.after.start
  start() {
    if (!this.looted) this.lootSummary();
    if (!this.monsters.areDead) {
      this.addLog = this.monsters.behaviorSummary(this.hostility);
      this.bind("Party.before.move", this.monstersAreBlocking);
      this.bind("Encounter.before.tick", this.monsterFlavorText);
    }
  }

  @event // ActiveEncounter.before.end, ActiveEncounter.after.end
  end() {
    this.unbind();
  }

  lootSummary() {
    if (this.looted) return;
    if (this.monsters.totalLoot > 5000) {
      this.addLog = "There is a massive chest in the room!";
    } else if (this.monsters.totalLoot > 2000) {
      this.addLog = "There is a chest in the room!";
    } else if (this.monsters.totalLoot > 1000) {
      this.addLog = "There is a small chest in the room!";
    }
  }

  monstersAreBlocking() {
    const { strength: monsterStrength = 0 } = this.monsters.statsSummary;
    const { strength: partyStrength = 0 } = game.party.statsSummary;
    if (this.hostility > 0.2 && monsterStrength > partyStrength) {
      this.addLog = "The monsters block you!";
      return false;
    }
  }

  monsterFlavorText() {
    // only do flavor text every 1/8 ticks
    if (roll(8) > 1) return;
    const randMonster = rollArray(this.monsters.party);
    const flavorText = randMonster.baseMonster.flavorText || {};
    let flavor = "stares at you blankly.";
    if (this.hostility < -0.8) flavor = flavorText["-0.8"];
    if (this.hostility < 0) flavor = flavorText["0"];
    if (this.hostility < 0.2) flavor = flavorText["0.2"];
    if (this.hostility >= 0.2) flavor = flavorText["1"];
    this.addLog = `A ${randMonster.name} ${flavor}`;
  }

  set addLog(string) {
    this.log.push(string);
    game.encounter.update();
  }

  get toObj() {
    return {
      ...this,
      monsters: {
        party: this.monsters.party.map((monster) => ({ ...monster })),
      },
    };
  }

  get actions() {
    return [...game.party.actions, ...this.monsters.actions(this.hostility)];
  }
}

export default class Encounter extends LogicModule {
  current = null;
  tickInterval = 0;
  previousLSDKey = "encounter.previous";

  constructor(...args) {
    super(...args);
    this.previous = getLSD(this.previousLSDKey) || {};
  }

  @on(["Game.loaded", "Party.after.move"])
  checkRoom() {
    const { x, y, z } = game.party.data.location;
    const roomId = game.map.data.floors[z].roomCoords[y][x];
    if (this.current && this.current.roomId != roomId) {
      this.unloadCurrentEncounter();
    }
    if (roomId && (!this.current || this.current.roomId != roomId)) {
      this.loadEncounter(z, roomId);
    } else {
      this.update();
    }
  }

  update() {
    if (this.current)
      super.update({
        currentEncounter: this.current.toObj,
        log: this.current.log,
        tickInterval: this.tickInterval,
      });
    else
      super.update({
        currentEncounter: {},
        log: [],
        tickInterval: this.tickInterval,
      });
  }

  save() {
    super.save();
    setLSD(this.previousLSDKey, this.previous);
  }

  /**
   * @param  {} floor - index to access game.map.data.floors[floor]
   * @param  {} roomId - id to access game.map.data.floors[floor].rooms[roomId]
   */
  loadEncounter(floor, roomId) {
    this.current = new ActiveEncounter(floor, roomId);
    this.update();
  }

  unloadCurrentEncounter() {
    const object = this.current.toObj;
    this.current.end();
    if (object.spawned) this.previous[object.key] = object;
    this.current = null;
    this.save();
  }

  @on("ActiveEncounter.after.start")
  startTick() {
    this.tickInterval = setInterval(this.tick.bind(this), this.data.turnSpeed);
  }

  @on("ActiveEncounter.after.end")
  stopTick() {
    clearInterval(this.tickInterval);
    this.tickInterval = 0;
  }

  setSpeed(newSpeed) {
    this.stopTick();
    this.data.turnSpeed = newSpeed;
    this.startTick();
  }

  @event // Encounter.tick
  tick() {
    if (!this.current) return;
    super.update({ actions: this.current.actions });
    /*
     * TODO encounter tick
     * get array of monster actions
     * get array of party actions
     * actions = ^.concat
     * actTime = this.data.turnSpeed actions.length
     * each actTime triggers the action for one character
     */
  }
}
