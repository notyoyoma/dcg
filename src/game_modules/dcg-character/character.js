import races from "./races.json";
import guilds from "./guilds.json";
import spells from "./guilds.json";

export default class Character {
  constructor(data) {
    this.maxHP         =  data.maxHP        ||  15;
    this.currentHP     =  data.currentHP    ||  15;
    this.maxMana       =  data.maxMana      ||  30;
    this.currentMana   =  data.currentMana  ||  this.maxMana;
    this.guilds        =  data.guilds       ||  {artisan:{xp:0, lvl:1}};
    this.currentGuild  =  data.currentGuild ||  "artisan";
    this.statuses      =  data.statuses     ||  {};
    this.race          =  data.race         ||  races["human"];
    this.stats         =  data.stats        ||  this.race.defaultStats;
    this.equipped      =  data.equipped     ||  {};
    this.name          =  data.name         ||  "no name";

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

  // Call when a character attemps to change current guild
  joinGuild(guildName) {
    let guild = guilds[guildName],
        requirements = new Requirements(guild.requirements);
    if (this.guilds.hasOwnProperty(guildName)) {
      // Only checks requirements if joining the first time
      this.currentGuild = guildName
      this.calculateExp();
    } else if (requirements.check(this.stats)) {
      // If the character's stats meet the requirements, join the guild
      this.guilds[guildName] = {xp:0};
      this.currentGuild = guildName;
      this.calculateExp();
    } else {
      // Otherwise, log the message.
      log.message({
        type: 'character',
        message: `${this.name}'s stats are too low to join ${humanize(guildName)}.`
      });
    }
  }

  /*
   * Calculate the exp needed to advance to the next level in the current guild.
   * Factors in the levels in other guilds.
   */
  calculateExp() {
    let otherGuildsModifier = 1,
        guild = guilds[this.currentGuild],
        guildObj = this.guilds[this.currentGuild];
    for (let otherGuild in this.guilds) {
      if (otherGuild != this.currentGuild) {
        // Scale lvlAdjust for other guilds by 1/10, for a gentler xp curve
        let lvlAdjust = Math.ceil(1, this.guilds[otherGuild].lvl / 10);
        otherGuildsModifier += guilds[otherGuild].experienceFactor * lvlAdjust * lvlAdjust
      }
    }

    // Scale lvlAdjust for active guild by 1/5, for a steeper xp curve
    let lvlAdjust = Math.ceil(1, guildObj.lvl / 5);
    guildObj[expNextLvl] = (50 + otherGuildsModifier) * guild.experienceFactor * lvlAdjust * lvlAdjust;
  }

  makeLevel() {
    let curGuild = this.guilds[this.currentGuild];
    if (curGuild.exp >= curGuild.expNextLvl) {
      curGuild.lvl += 1;
      this.calculateExp();
      // TODO - if guild quest for lvl, assign
      // TODO - else probability asign random quest
      // TODO - increase maxHP based on guild settings
      // TODO - increase spellPoints based on guild settings
      // TODO - increase spellPower based on guild settings
      // TODO - add new spells from guild lvl
      // TODO - add new abilities from guild lvl
    }
  }
}

class Requirements {
  constructor(data) {
    this.stats = data;
  }

  check(charStats) {
    for (let req in this.stats) {
      if (charStats[req] < this.stats[req]) {
        return false;
      }
    }
    return true;
  }
}
