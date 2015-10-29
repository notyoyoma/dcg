import races from "./races.json";
import guilds from "./guilds.json";
import spells from "./spells.json";

export default class Character {
  constructor(data) {
    this.maxHP         =  data.maxHP          ||  15;
    this.currentHP     =  data.currentHP      ||  15;
    this.maxMana       =  data.maxMana        ||  30;
    this.currentMana   =  data.currentMana    ||  this.maxMana;
    this.guilds        =  data.guilds         ||  {artisan:{xp:0, lvl:1}};
    this.currentGuild  =  data.currentGuild   ||  "artisan";
    this.statuses      =  data.statuses       ||  {};
    this.race          =  data.race           ||  races["human"];
    this.stats         =  data.stats          ||  this.race.defaultStats;
    this.abilities     =  data.abilities      ||  {};
    this.appendage     =  data.appendage      ||  {};
    this.name          =  data.name           ||  "no name";

    this.updateActiveStats();
  }

  updateActiveStats() {
    // TODO - update stats from race and equips
    this.activeStats = this.stats;

    this.activeStats.attack      = this.stats.strength;
    this.activeStats.accuracy    = this.stats.dexterity;
    this.activeStats.defence     = this.stats.constitution;
    this.activeStats.magicAttack = this.intelligence;

    // Loop through each item the character has equipped
    for (let apendage in this.equipped) {
      // Loop through each effect that the item has
      for (let mod in this.equipped[apendage]) {
        this.activeStats[mod] += equipment[mod];
      }
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
    let curGuild     = guilds[this.currentGuild],
        curGuildStat = this.guilds[this.currentGuild];

    let baseXP = 50,                              // Amount of XP for level 1 of an easy guild
        cgExF  = curGuild.experienceFactor,       // Current guild experience factor
        cgLvl  = curGuildStat["lvl"],             // Current guild level
        ogExF  = 1,                               // Multiplication of other guild experience factors
        ogLvl  = 1,                               // Sum of ther guild levels
        rExF;                                     // Race experience factor

    for (let otherGuild in this.guilds) {
      if (otherGuild != this.currentGuild) {
        ogExF *= guilds[otherGuild].experienceFactor;
        ogLvl += this.guilds[otherGuild].level;
      }
    }

    let xp  = (baseXP * cgExF) * ( 1 + ( cgLvl * cgLvl / 20 ) );
        xp *= ogExF * ( 1 + ogLvl / 20 );
        xp *= rExF;
  }

  makeLevel() {
    let curGuild = this.guilds[this.currentGuild];
    if (curGuild.exp >= curGuild.expNextLvl) {
      curGuild.lvl += 1;
      this.calculateExp();
      // TODO - if guild quest for lvl, assign
      // TODO - else probability asign random quest
      // TODO - increase maxHP based on guild settings
      // TODO - increase maxMana based on guild settings
      // TODO - increase spellPower based on guild settings
      // TODO - increase abilities based on guild settings
      // TODO - add new spells from guild lvl
    }
  }
}
