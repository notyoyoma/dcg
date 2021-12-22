import monsters from "./monsters.json";
import { getData } from "App/game/world";

const monsters = {};
getData("monsters", ({ data }) => (monsters = data));

export default class Monster {
  constructor(id) {
    this.race = id;
    this.initAlignment();
    this.initStats();
    this.hp = this.stats.maxHp;
  }

  initAlignment() {
    let race = monsters[this.race];
    if (typeof race.alignments == "string") {
      this.alignment = race.alignments;
    } else {
      this.alignment =
        race.alignments[Math.floor(Math.random() * race.alignments.length)];
    }
  }

  initStats() {
    let race = monsters[this.race];
    this.stats = {};
    for (let propKey in race.stats) {
      let prop = race.stats[propKey];
      if (typeof prop == "number") {
        let min = prop / 2,
          max = prop + min;
        this.stats[propKey] = Math.floor(Math.random() * (max - min) + min);
      } else {
        this.stats[propKey] = prop;
      }
    }
  }

  initHostility(party) {
    if (this.hostility) return;
    this.hostility = 10; // attack by default
    for (let character of party.characters) {
      this.hostility -= character.getInfluence(this.alignment);
    }
  }

  rollJoin() {
    // If the monster is not hostile
    // Get a random number between 0 and 200
    // If that number minus the monster's hostility (double negative) is greater than 210
    // the creature will offer to join
    if (this.hostility < 0 && Math.random() * 200 - this.hostility > 210) {
      // OLD join modal
    }
  }
}
