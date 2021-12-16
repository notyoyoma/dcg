import game from "@/game";
import LogicModule from "./LogicModule";
import { roll, fairRoll, statsRoll } from "@/utils/rng";

export class Monster {
  constructor(id, floor) {
    const { name, stats, spells, maxSpawn, alignments } =
      game.monsters.data.monsters[id];
    this.name = name;
    this.spells = spells;
    this.stats = statsRoll(stats, floor);
    this.count = roll(maxSpawn);
    this.alive = true;
    this.loot = this.stats.loot * this.count;
  }
}

export default class Monsters extends LogicModule {
  spawn({ roomId, floor }) {
    const floorMonsters = game.map.data.floors[floor].monsters;
    const roomMonsters = game.map.data.floors[floor].rooms[roomId].monsterTable;
    // const questMonsters = game.party.characterQuests; // TODO feature/quests
    const monsterParty = fairRoll([...floorMonsters, ...roomMonsters]);
    return monsterParty.map((id) => new Monster(id, floor));
  }
}
