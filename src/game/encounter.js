import { format, parse, differenceInMinutes as diff } from "date-fns";
import LogicModule from "./LogicModule";
import game, { event, on } from "@/game";
import { partyFeelsTowardParty } from "@/utils/alignment";
import { randomGausian } from "@/utils/rng";

const dtf = "yyyy-MM-dd:HH:mm:ss";

export class ActiveEncounter {
  log = [];
  respawn = 15; // minutes

  constructor(floor, roomId) {
    this.floor = floor;
    this.roomId = roomId;
    this.key = `${floor},${roomId}`;

    if (!roomId) return;

    const previous = game.encounter.data.previous[this.key];
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

  @event // ActiveEncounter.before.start ActiveEncounter.before.start
  start() {
    if (!this.looted) this.lootSummary();
    if (!this.monsters.areDead)
      this.addLog = this.monsters.behaviorSummary(this.hostility);
  }

  @event // ActiveEncounter.before.end, ActiveEncounter.after.end
  end() {}

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
}

export default class Encounter extends LogicModule {
  current = null;
  tickInterval = 0;

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
    this.context.commit("setState", {
      currentEncounter: this.current ? this.current.toObj : {},
    });
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
    if (object.spawned) this.data.previous[object.key] = object;
    this.current = null;
  }

  @on("ActiveEncounter.after.start")
  startTick() {
    this.tickInterval = setInterval(this.tick, this.data.turnSpeed);
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

  @event
  tick() {
    console.log("tick");
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
