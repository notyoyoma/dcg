import { format, parse, differenceInMinutes as diff } from "date-fns";
import BaseModule from "./BaseModule";
import { event, listen, Listener } from "@/game/events";
import { partyFeelsTowardParty } from "@/utils/alignment";
import { randomGausian, roll, rollArray } from "@/utils/rng";
import { getLSD, setLSD } from "@/utils/localStorage";

import { monsters, party, map } from ".";

const dtf = "yyyy-MM-dd:HH:mm:ss";

export class ActiveEncounter extends Listener {
  log = [];
  respawn = 15; // minutes

  constructor(floor, roomId) {
    super();
    this.floor = floor;
    this.roomId = roomId;
    this.key = `${floor},${roomId}`;

    if (!roomId) return;

    const previous = encounter.previous[this.key];
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
    this.monsters = monsters.spawn({ roomId, floor });
    const rand = randomGausian();
    const feelings = partyFeelsTowardParty(this.monsters.party, party.party);
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
    const { monsters: prevMonsters, log, hostility, spawned } = previous;
    this.monsters = monsters.respawn(prevMonsters);
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
      this.bind("before:Party.move", this.monstersAreBlocking);
      this.bind("before:Encounter.tick", this.monsterFlavorText);
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
    const { strength: monsterstrength = 0 } = this.monsters.statsSummary;
    const { strength: partyStrength = 0 } = party.statsSummary;
    if (this.hostility > 0.2 && monsterstrength > partyStrength) {
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
    encounter.update();
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
    return [...party.actions, ...this.monsters.actions(this.hostility)];
  }
}

export class Encounter extends BaseModule {
  moduleName = "encounter";
  initialState = {
    turnSpeed: 2000,
    log: [],
    currentEncounter: {},
    actions: [],
  };
  current = null;
  tickInterval = 0;
  previousLSDKey = "encounter.previous";

  constructor() {
    super();
    this.previous = getLSD(this.previousLSDKey) || {};
  }

  @listen(["Game.loaded", "after:Party.move"])
  checkRoom() {
    const { x, y, z } = party.data.location;
    const roomId = map.data.floors[z].roomCoords[y][x];
    if (this.current && this.current.roomId != roomId) {
      this.unloadCurrentEncounter();
    }
    if (roomId && (!this.current || this.current.roomId != roomId)) {
      this.loadEncounter(z, roomId);
    } else {
      this.update();
    }
    this.save();
  }

  update() {
    if (this.current)
      super.update({
        currentEncounter: this.current.toObj,
        log: this.current.log,
      });
    else
      super.update({
        currentEncounter: {},
        log: [],
      });
  }

  save() {
    super.save();
    setLSD(this.previousLSDKey, this.previous);
  }

  /**
   * @param  {} floor - index to access Map.data.floors[floor]
   * @param  {} roomId - id to access Map.data.floors[floor].rooms[roomId]
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

  @listen("after:ActiveEncounter.start")
  startTick() {
    this.tickInterval = setInterval(this.tick.bind(this), this.data.turnSpeed);
  }

  @listen("after:ActiveEncounter.end")
  stopTick() {
    clearInterval(this.tickInterval);
    this.tickInterval = 0;
  }

  setSpeed(newSpeed) {
    this.stopTick();
    this.data.turnSpeed = newSpeed;
    super.update({ turnSpeed: newSpeed });
    this.startTick();
  }

  @event // Encounter.tick
  tick() {
    console.debug("tick");
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

export const encounter = new Encounter();
