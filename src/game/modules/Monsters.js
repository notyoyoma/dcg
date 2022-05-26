import get from "lodash/get";
import zip from "lodash/zip";
import fill from "lodash/fill";
import { map } from ".";
import BaseModule from "./BaseModule";
import { rollGausian, statsRoll, rollArray, FairRoll } from "@/utils/rng";
import { objectReduce } from "@/utils/object";
import pluralize from "pluralize";

export class Monster {
  constructor(id) {
    this.baseMonster = monsters.data.monsters.find(({ name }) => name === id);
    if (!this.baseMonster) throw `monsters[name: ${id}] not found`;
    const { name, spells } = this.baseMonster;
    this.name = name;
    this.spells = spells;
  }

  initialize(floor) {
    const { stats, maxSpawn, alignments } = this.baseMonster;
    this.stats = statsRoll(stats, floor);
    this.hp = this.stats.hp;
    this.count = rollGausian(maxSpawn);
    this.alive = this.count;
    this.loot = this.stats.loot * this.count;
    this.alignment = rollArray(alignments);
  }

  load(prevObj) {
    this.stats = prevObj.stats;
    this.count = prevObj.count;
    this.alive = prevObj.alive;
    this.loot = prevObj.loot;
    this.alignment = prevObj.alignment;
    this.hp = prevObj.hp;
  }

  get fight() {
    return "fight";
  }
}

class BaseMonsterParty {
  constructor() {}

  get areDead() {
    return !this.party.some(({ alive }) => alive);
  }

  behaviorSummary(hostility) {
    if (hostility > 0.2) return "The monsters attack!";
    if (hostility > 0) return "The monsters glare at you...";
    if (hostility < -0.8) return "The monsters offer to join!";
    return "The monsters look at you warily...";
  }

  actions(hostility) {
    if (hostility < 0.2) return [];
    return this.aliveMonsters.map((m) => ["fight", m]);
  }

  get statsSummary() {
    return this.party.reduce((r, { stats }) => {
      Object.keys(stats).forEach((k) => {
        if (r[k] === undefined) r[k] = stats[k];
        else r[k] += stats[k];
      });
      return r;
    }, {});
  }

  get textSummary() {
    const remainingMonsters = {};
    let dead = 0;
    this.party.forEach(({ name, count, alive }) => {
      const deadCount = count - alive;
      if (deadCount) {
        dead += deadCount;
      }
      if (alive) {
        if (!remainingMonsters[name]) remainingMonsters[name] = 0;
        remainingMonsters[name] += alive;
      }
    });

    const alive = objectReduce(remainingMonsters, (r, v) => (r += v), 0);
    let summary = Object.keys(remainingMonsters)
      .map((name) => {
        const count = remainingMonsters[name];
        return `${count} ${pluralize(name, count)}`;
      })
      .join(", and ");
    if (dead)
      summary += `${summary ? " and " : ""}${dead} dead monster${
        dead > 1 ? "s" : ""
      }`;
    const areIs = alive > 1 || dead > 1 ? "are" : "is";
    return `There ${areIs} ${summary} in the room.`;
  }

  get aliveMonsters() {
    return this.party.filter(({ alive }) => alive > 0);
  }
}

export class MonsterParty extends BaseMonsterParty {
  constructor(partyId, floor) {
    super();
    const monsterIds = monsters.data.monsterParties[partyId];
    if (!monsterIds) throw `monsterParties[${partyId}] not found`;
    this.party = monsterIds.map((id) => {
      const monster = new Monster(id);
      monster.initialize(floor);
      return monster;
    });
  }
}

export class OldMonsterParty extends BaseMonsterParty {
  constructor(previousParty) {
    super();
    this.party = previousParty.party.map((data) => {
      const monster = new Monster(data.name);
      monster.load(data);
      return monster;
    });
  }
}

export class Monsters extends BaseModule {
  moduleName = "monsters";
  fairSpawn = new FairRoll("monsters.fairSpawn");

  spawn({ roomId, floor }) {
    const floorMonstersArr = map.data.floors[floor].monsters;
    const floorMonsters = zip(
      fill(Array(floorMonstersArr.length), 1),
      floorMonstersArr
    );

    const roomMonsters = get(
      map.data.floors[floor].rooms,
      [roomId, "monsterTable"],
      []
    );
    // const questMonsters = Party.characterQuests; // TODO feature/quests
    return new MonsterParty(
      // roll for which monster party to spawn
      this.fairSpawn.roll([...floorMonsters, ...roomMonsters]),
      // set difficulty based on floor
      floor
    );
  }

  respawn(previous) {
    return new OldMonsterParty(previous);
  }
}

export const monsters = new Monsters();
