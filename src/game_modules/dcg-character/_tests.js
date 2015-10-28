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

  describe('#constructor()', function() {

    it('should set default values when no data is passed', function() {
      assert.equal(15, char1.maxHP);
      assert.equal(13, char1.equippedStats.attack)
    });

    it('should successfully create character from saved data', function() {
      assert.equal(30, char2.maxHP);
      assert.equal(16, char2.equippedStats.attack)
    });

  });

  describe("#updateEquippedStats()", function() {
  });
});
