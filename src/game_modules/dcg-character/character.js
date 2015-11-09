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
    this.learnedStats  =  data.learnedStats   ||  {};
    this.abilities     =  data.abilities      ||  {};
    this.equipped      =  data.equipped       ||  {};
    this.name          =  data.name           ||  "no name";

    this.updateActiveStats();
  }

  /*
   * sets this.activeStats based on:
   *    this.stats
   *    this.learnedStats
   *    this.equipped
   */
  updateActiveStats() {
    this.activeStats = this.stats;

    // Core stats
    this.activeStats.attack      = this.stats.strength;
    this.activeStats.accuracy    = this.stats.dexterity;
    this.activeStats.defence     = this.stats.constitution;
    this.activeStats.magicAttack = this.stats.intelligence;

    // Learned stats (acquired from guilds)
    for (let learnedStat in this.learnedStats) {
      this.activeStats[learnedStat] = this.learnedStats[learnedStat]
    }

    // Equipment stats
    for (let appendage in this.equipped) {
      // Loop through each item the character has equipped
      let item = this.equipped[appendage];

      // Check that character's stats are still high enough to equip the item.
      if (!this.meetsRequirements(item.requirements)) {
        // If the item can't be equipped anymore, unequip it.
        this.unequip(appendage);
        // Quit this function. Unequip() will call it again after the item has been unequipped.
        return;
      }

      // Loop through each effect that the item has
      for (let mod in item.modifies) {
        // Modify the activeStats based on item stat modifier
        this.activeStats[mod] += item.modifies[mod];
      }
    }
  }

  modifyCoreStat(mods) {
    for (let mod in mods) {
      this.stats[mod] = Math.max(
        Math.min(
          this.stats[mod] + mods[mod],
          this.race.maxStats[mod]
        ),
        this.race.minStats[mod]
      );
    }
    this.updateActiveStats();
  }

  // Call when a character attemps to change current guild
  joinGuild(guildName) {
    let guild = guilds[guildName];
    if (this.guilds.hasOwnProperty(guildName)) {
      // Only checks requirements if joining the first time
      this.currentGuild = guildName
      this.calculateExp();
    } else if (this.meetsRequirements(guild.requirements)) {
      // If the character's core stats meet the requirements, join the guild
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

  makeLevel() {
    let curGuild = this.guilds[this.currentGuild];
    if (curGuild.exp >= curGuild.expNextLvl) {
      curGuild.lvl += 1;
      curGuild.expNextLvl = this.calculateExp(curGuild.lvl);
      curGuild.expPin = thiscalculateExp(curGuild.lvl + 1);
      // TODO - if guild quest for lvl, assign
      // TODO - else probability asign random quest
      // TODO - increase maxHP based on guild settings
      // TODO - increase maxMana based on guild settings
      // TODO - increase spellPower based on guild settings
      // TODO - increase abilities based on guild settings
      // TODO - add new spells from guild lvl
    }
  }

  /*
   * Test Character's Stats against requirements. Return true if the character
   * meets the requirements. Else return false.
   */
  meetsRequirements(requirements) {
    for (let requirement in requirements) {
      if (this.stats[requirement] < requirements[requirement]) {
        return false;
      }
    }
    return true;
  }

  /*
   * Calculate the exp needed to advance to the next level in the current guild.
   * Factors in the levels in other guilds.
   */
  calculateExp(cgLvl) {                           // Desired guild level
    let curGuild     = guilds[this.currentGuild],
        curGuildStat = this.guilds[this.currentGuild];

    let baseXP = 50,                              // Amount of XP for level 1 of an easy guild
        cgExF  = curGuild.experienceFactor,       // Current guild experience factor
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

    return Math.trunc(xp);
  }
}
