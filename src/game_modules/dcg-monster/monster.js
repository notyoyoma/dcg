import monsters from './monsters.json';

// TODO - write tests
export default class Monster {
  constructor(id) {
    this.race = id;
    this.initStats();
  }

  initStats() {
    let race = monsters[this.race];
    this.stats = {};
    for (let propKey in race.stats) {
      let prop = race.stats[propKey];
      if (typeof prop == "number") {
        let min = prop / 2,
            max = prop + min;
        this.stats[propKey] = Math.floor( Math.random() * (max - min) + min );
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
    if (this.hostility < 0 && (Math.random() * 200 - this.hostility) > 210) {
      // TODO join modal
    }
  }
}
