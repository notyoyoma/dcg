import races from "./character-races.json";

export default class Character {
  constructor(data) {
    this.maxHP        =  data.maxHP        ||  15;
    this.currentHP    =  data.currentHP    ||  15;
    this.maxMana      =  data.maxMana      ||  50;
    this.currentMana  =  data.currentMana  ||  50;
    this.factions     =  data.factions     ||  {journeyman:{xp:0}};
    this.statuses     =  data.statuses     ||  {};
    this.race         =  data.race         ||  races["human"];
    this.stats        =  data.stats        ||  this.race.defaultStats();
    this.equipped     =  data.equipped     ||  {};

    this.updateStats();
  }

  updateStats() {
    // TODO - update stats from race and equips
    this.attack       = this.stats.strength     + this.getModifiedStats("strength,attack");
    this.accuracy     = this.stats.desterity    + this.getModifiedStats("dexterity,accuracy");
    this.defence      = this.stats.constitution + this.getModifiedStats("defence,constitution");
    this.magicAttack  = this.stats.intelligence + this.getModifiedStats("intelligence,magicAttack");
    this.magicDefence = this.stats.intelligence + this.getModifiedStats("intelligence,magicDefence");
  }

  getModifiedStats(stat) {
    let mod = 0;
    for (let equipped of this.equipped) {
      if (equipped.modifies[stat]) {
        mod += equipped.modifies[stat];
      }
    }
    for (let status of this.statuses) {
      if (status.modifies[stat]) {
        mod += equipped.modifies[stat];
      }
    }
    return mod;
  }

  modifyAttributes(obj) {
    for (let key in obj) {
      this.stats[key] = eval(`${this.stats[key]}${obj[key]}`);
    }
  }
}
