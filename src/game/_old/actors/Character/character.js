// Required Modules
import log from "game/events/Log";

// Character Data
import races from "./races.json";
import guilds from "./guilds.json";
import spells from "./spells.json";
import alignments from "./alignments.json";

// Sub Modules
import Inventory from "./inventory.js";

export default class Character {
  /*
   * Create the character from saved <data>.
   * Structure of data in ./doc/character-data.md
   */
  constructor(data) {
    this.maxHP = data.maxHP || 15;
    this.currentHP = data.currentHP || this.maxHP;
    this.maxMana = data.maxMana || 30;
    this.currentMana = data.currentMana || this.maxMana;
    this.guilds = data.guilds || { artisan: { xp: 0, lvl: 1 } };
    this.currentGuild = data.currentGuild || "artisan";
    this.statuses = data.statuses || {};
    this.gender = data.gender || "m";
    this.race = races[data.race] || races["human"];
    this.alignment = data.alignment || this.race.defaultAlignment;
    this.stats = data.stats || this.race.defaultStats;
    this.learnedStats = data.learnedStats || {};
    this.equipped = data.equipped || {};
    this.name = data.name || "no name";
    this.inventory = new Inventory(data.inventory || false);

    this.updateActiveStats();
  }

  /*
   * sets this.activeStats based on:
   *    this.stats
   *    this.learnedStats
   *    this.equipped
   */
  updateActiveStats() {
    this.activeStats = JSON.parse(JSON.stringify(this.stats));

    // Core stats => core activeStats
    this.activeStats.attack = this.stats.strength;
    this.activeStats.accuracy = this.stats.dexterity;
    this.activeStats.dodge = this.stats.dexterity;
    this.activeStats.defence = this.stats.constitution;
    this.activeStats.spellPower = this.stats.intelligence;

    // Learned stats (acquired from guilds)
    for (let learnedStat in this.learnedStats) {
      if (this.activeStats[learnedStat]) {
        this.activeStats[learnedStat] += this.learnedStats[learnedStat];
      } else {
        this.activeStats[learnedStat] = this.learnedStats[learnedStat];
      }
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

  /*
   * attempt to equip an item
   */
  equip(item) {
    let appendage = item.appendage;

    // failure cases
    if (!this.meetsRequirements(item.requirements)) {
      log.message({
        type: "party",
        message: `${this.name} can't equip ${item.name} because one or more stats are too low.`,
      });
      return false;
    }
    if (this.equipped[appendage] && !this.unequip(appendage)) {
      log.message({
        type: "party",
        message: `${this.name} can't equip ${item.name} because he can't unequip the previous item.`,
      });
      return false;
    }

    // success case
    this.equipped[appendage] = item;
    this.updateActiveStats();
    return true;
  }

  /*
   * attempt to equip an item
   */
  unequip(appendage) {
    let item = this.equipped[appendage];

    // failure cases
    if (item.cursed) {
      log.message({
        type: "party",
        message: `${this.name} can't unequip ${item.name} because it is cursed.`,
      });
      return false;
    }
    if (this.inventory.isFull()) {
      log.message({
        type: "party",
        message: `${this.name} can't unequip ${item.name} because his inventory is full.`,
      });
      return false;
    }

    // success case
    this.inventory.addItem(item);
    delete this.equipped[appendage];
    this.updateActiveStats();
    return true;
  }

  /*
   * Test Character's Stats against requirements. Return true if the character
   * meets the requirements. Else return false.
   */
  meetsRequirements(requirements) {
    for (let requirement in requirements) {
      if (this.activeStats[requirement] < requirements[requirement]) {
        return false;
      }
    }
    return true;
  }

  /*
   * modifies this.stats (core stats)
   * will not allow stats above this.race.maxStats
   * will not allow stats below this.race.minStats
   * triggers updateActiveStats();
   */
  modifyCoreStat(mods) {
    for (let mod in mods) {
      this.stats[mod] = Math.max(
        Math.min(this.stats[mod] + mods[mod], this.race.maxStats[mod]),
        this.race.minStats[mod]
      );
    }
    this.updateActiveStats();
  }

  /*
   * Attempts to join this character to a guild.
   *
   * If this is the first time joining the guild, will check
   * guild requirements. If the character does not meet them,
   * will print a message to the party log
   */
  joinGuild(guildName) {
    let guild = guilds[guildName];
    if (this.guilds.hasOwnProperty(guildName)) {
      // Only checks requirements if joining the first time
      this.currentGuild = guildName;
      this.setExp();
    } else if (this.meetsRequirements(guild.requirements)) {
      // If the character's core stats meet the requirements, join the guild
      this.guilds[guildName] = { xp: 0 };
      this.currentGuild = guildName;
      this.setExp();
    } else {
      // Otherwise, log the message.
      log.message({
        type: "party",
        message: `${this.name}'s stats are too low to join ${humanize(
          guildName
        )}.`,
      });
    }
  }

  /*
   * Attempt to level up in the current guild
   */
  makeLevel() {
    let curGuild = this.guilds[this.currentGuild];
    if (curGuild.exp >= curGuild.expNextLvl) {
      curGuild.lvl += 1;
      this.setExp();
      // OLD - if guild quest for lvl, assign
      // OLD - else probability asign random quest
      // OLD - increase maxHP based on guild settings
      // OLD - increase maxMana based on guild settings
      // OLD - increase learnedStats based on guild settings
      // OLD - add new spells from guild lvl
    }
  }

  /*
   * Set the current guild's exp requirements
   */
  setExp() {
    let curGuild = this.guilds[this.currentGuild];
    curGuild.expNextLvl = this.calculateExp(curGuild.lvl);
    curGuild.expToPin = this.calculateExp(curGuild.lvl + 1);
  }

  /*
   * Calculate the exp needed to advance to the next level in the current guild.
   * Factors in the levels in other guilds.
   */
  calculateExp(cgLvl) {
    // Desired guild level
    let curGuild = guilds[this.currentGuild],
      curGuildStat = this.guilds[this.currentGuild];

    let baseXP = 50, // Amount of XP for level 1 of an easy guild
      cgExF = curGuild.experienceFactor, // Current guild experience factor
      ogExF = 1, // Multiplication of other guild experience factors
      ogLvl = 1, // Sum of ther guild levels
      rExF; // Race experience factor

    for (let otherGuild in this.guilds) {
      if (otherGuild != this.currentGuild) {
        ogExF *= guilds[otherGuild].experienceFactor;
        ogLvl += this.guilds[otherGuild].level;
      }
    }

    let xp = baseXP * cgExF * (1 + (cgLvl * cgLvl) / 20);
    xp *= ogExF * (1 + ogLvl / 20);
    xp *= rExF;

    return Math.trunc(xp);
  }

  getInfluence(withAlignment) {
    let magnitude = Math.max(
      this.activeStats.attack,
      this.activeStats.accuracy,
      this.activeStats.dodge,
      this.activeStats.defence,
      this.activeStats.spellPower
    );
    let effect;
    switch (Math.abs(alignments[this.alignment] - alignments[withAlignment])) {
      case 0:
        // if the [monster, npm, item] is the same alignment as the character
        // influence = magnitutde
        effect = 1;
      case 1:
        // if the [monster, npm, item] is a different alignment, but not opposite
        // influence = -magnitutde
        effect = -1;
      case 2:
        // if the [monster, npm, item] is a opposite alignment
        // influence = -magnitutde * 2
        effect = -2;
    }
    return Math.min(50, magnitude * effect);
  }

  getActionPriority() {
    return Math.max(this.stats.dexterity, this.stats.intelligence);
  }
}
