import { format, parse, differenceInMinutes as diff } from "date-fns";
import LogicModule from "./LogicModule";
import game, { on } from "@/game";

const dtf = "yyyy-MM-dd:HH:mm:ss";

export class activeEncounter {
  log = [];
  respawn = 15; // minutes

  constructor(floor, roomId) {
    this.floor = floor;
    this.roomId = roomId;
    this.key = `${floor},${roomId}`;

    const previous = game.encounter.data.previous[this.key];
    const now = new Date();
    if (previous && !previous.cleared) {
      const minutesSinceSpawn = diff(now, parse(previous.spawned, dtf, now));
      if (minutesSinceSpawn > this.respawn) this.spawn();
      else this.reload(previous);
    } else {
      this.spawn();
    }
  }

  spawn() {
    const { roomId, floor } = this;
    this.monsters = game.monsters.spawn({ roomId, floor });
    this.hostility = 1; // TODO - rng
    this.log = []; // TODO flavor text based on above
    this.spawned = format(new Date(), dtf);
  }

  reload(previous) {
    const { monsters, log, hostility, spawned } = previous;
    this.monsters = monsters;
    this.hostility = hostility;
    this.log = log;
    this.spawned = spawned;
    this.log.push(""); // TODO flavor text
  }

  serialize() {
    const { key, hostility, monsters, spawned, log } = this;
    return [
      key,
      {
        hostility,
        monsters,
        spawned,
        log: log.slice(-5), // only preserve the last 5 log messages
      },
    ];
  }
}

export default class Encounter extends LogicModule {
  current = null;

  @on("Party.after.move")
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
    const [key, obj] = this.current.serialize();
    this.data.previous[key] = obj;
  }
}
