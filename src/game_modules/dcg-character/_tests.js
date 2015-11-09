import  assert     from  "assert";
import  Character  from  "dcg-character";
import  races      from  "./races.json";
import  guilds     from  "./guilds.json";
import  spells     from  "./spells.json";

describe('Character', function() {


  // Build char obj with just a name
  const buildBlankCharObj = function(name) {
    return {name: name};
  };

  // Build char obj with some default values
  const buildDefaultCharObj = function(name) {
    return {
      maxHP:         30,
      currentHP:     20,
      maxMana:       32,
      currentMana:   20,
      guilds:        {artisan:{xp:500, lvl:5}},
      currentGuild:  "artisan",
      race:          races["human"],
      stats: {
        "strength":      16,
        "intelligence":  11,
        "wisdom":        9,
        "constitution":  14,
        "charisma":      4,
        "dexterity":     12
      },
      name: name
    };
  };

  describe('constructor()', function() {

    let conChar  = new Character(buildBlankCharObj('constructor char'));
    let conChar2 = new Character(buildDefaultCharObj('constructor char2'));

    it('should set default values when no data is passed', function() {
      assert.equal(15, conChar.maxHP);
      assert.equal(13, conChar.activeStats.attack)
    });

    it('should successfully create character from saved data', function() {
      assert.equal(30, conChar2.maxHP);
      assert.equal(16, conChar2.activeStats.attack)
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

  });

  describe("modifyStat()", function() {

    let modStatChar = new Character(buildDefaultCharObj('modifyStat char'));

    it('should change core stat', function() {
      modStatChar.modifyCoreStat({strength:1});
      assert.equal(17, modStatChar.stats.strength);
      modStatChar.modifyCoreStat({strength:-1});
      assert.equal(16, modStatChar.stats.strength);
    });

    it('should respect race minStats / maxStats', function() {
      modStatChar.modifyCoreStat({strength:20});
      assert.equal(17, modStatChar.stats.strength);
      modStatChar.modifyCoreStat({strength:-20});
      assert.equal(4, modStatChar.stats.strength);
    });

    it('should trigger updateActiveStats()', function() {
      modStatChar.modifyCoreStat({strength:20});
      assert.equal(17, modStatChar.stats.strength);
      assert.equal(17, modStatChar.activeStats.attack);
      modStatChar.modifyCoreStat({strength:-20});
      assert.equal(4, modStatChar.activeStats.attack);
    });

  });

  describe("updateActiveStats()", function() {
    
    let upActStatChar = new Character(buildDefaultCharObj('updateActiveStats char'));

    it('should update activeStats when core stats change', function() {
      assert.equal(16, upActStatChar.activeStats.attack);
      upActStatChar.modifyCoreStat({strength:1});
      assert.equal(17, upActStatChar.activeStats.attack);
    });

    it('should update activeStats with stats learned from guilds', function() {
    });

    it('if stats are too low equip items, should unequip items', function() {
    });

    it('should update activeStats with modifiers from equipped items', function() {
    });

  });
});
