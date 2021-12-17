import { format, parse, differenceInMinutes as diff } from "date-fns";
import LogicModule from "./LogicModule";
import game, { event, on } from "@/game";

const dtf = "yyyy-MM-dd:HH:mm:ss";

export class activeEncounter {
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

    if (this.monsters.totalLoot > 5000) {
      this.addLog = "There is a massive chest in the room!";
    } else if (this.monsters.totalLoot > 2000) {
      this.addLog = "There is a chest in the room!";
    } else if (this.monsters.totalLoot > 1000) {
      this.addLog = "There is a small chest in the room!";
    }

    this.start();
  }

  spawn() {
    const { roomId, floor } = this;
    this.monsters = game.monsters.spawn({ roomId, floor });
    this.hostility = 1; // TODO - rng
    this.log = []; // TODO flavor text based on above
    this.spawned = format(new Date(), dtf);
    this.addLog = "You walk in the room";
  }

  reload(previous) {
    const { monsters, log, hostility, spawned } = previous;
    this.monsters = game.monsters.respawn(monsters);
    this.hostility = hostility;
    this.log = log;
    this.spawned = spawned;
    this.addLog = "You walk back in the room";
  }

  @event
  start() {
    this.addLog = this.monsters.textSummary;
    if (!this.monsters.areDead) this.addLog = this.monsterBehaviorSummary;
  }

  get monsterBehaviorSummary() {
    if (this.hostility > 0.5) return "The monsters attack!";
    if (this.hostility < -0.9) return "The monsters offer to join!";
    if (this.hostility > 0) return "The monsters glare at you...";
    return "The monsters look at you warily...";
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
      currentEncounter: this.current,
    });
  }

  loadEncounter(floor, roomId) {
    this.current = new activeEncounter(floor, roomId);
    this.update();
  }

  unloadCurrentEncounter() {
    const { key } = this.current;
    const object = this.current.toObj;
    if (object.spawned) this.data.previous[key] = object;
    this.current = null;
  }
}
