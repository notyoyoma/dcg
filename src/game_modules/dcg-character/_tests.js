import assert     from "assert";
import Character  from "dcg-character";
import races from "./races.json";
import guilds from "./guilds.json";
import spells from "./spells.json";

describe('Character', function() {


  let char1Obj = {};
  let char1 = new Character(char1Obj);

  let char2Obj = {
    maxHP:        30,
    currentHP:    20,
    maxMana:      32,
    currentMana:  20,
    guilds: {artisan:{xp:500, lvl:5}},
    currentGuild: "artisan",
    race: races["human"],
    stats: {
      "strength":      16,
      "intelligence":  11,
      "wisdom":        9,
      "constitution":  14,
      "charisma":      4,
      "dexterity":     12
    },
    name: "Marty"
  };
  let char2 = new Character(char2Obj);

  describe('constructor()', function() {

    it('should set default values when no data is passed', function() {
      assert.equal(15, char1.maxHP);
      assert.equal(13, char1.activeStats.attack)
    });

    it('should successfully create character from saved data', function() {
      assert.equal(30, char2.maxHP);
      assert.equal(16, char2.activeStats.attack)
    });

    it('should trigger updateActiveStats()', function() {
    });

  });

  describe("equip(item)", function() {

    it('should add equipment to appendage', function() {
    });

    it('should fail if stats too low', function() {
    });

    it('should remove old equipment from appendage and place in inventory', function() {
    });

    it('should trigger updateActiveStats()', function() {
    });

  });

  describe("unequip(appendage)", function() {

    it('should remove equipment from appendage', function() {
    });

    it('should put equipment in inventory', function() {
    });

    it('should fail if inventory is full', function() {
    });

    it('should fail if equipment cursed', function() {
    });

    it('should trigger updateActiveStats()', function() {
    });

    it('should NOT trigger updateActiveStats() if this is being called from updateActiveStats()', function() {
    });

  });

  describe("modifyStat()", function() {

    it('should change core stat', function() {
    });

    it('should fail if core stat too high or too low', function() {
    });

    it('should trigger updateActiveStats()', function() {
    });

  });

  describe("updateActiveStats()", function() {

    it('should update activeStats when core stats change', function() {
      assert.equal(16, char2.activeStats.attack);
      char2.modifyStat({strength:+1});
      assert.equal(17, char2.activeStats.attack);
    });

    it('if stats are too low, should unequip equipment with requirements', function() {
    });

  });
});
