import  assert     from  "assert";
import  Character  from  "./character";
import  races      from  "./races.json";
import  guilds     from  "./guilds.json";
import  spells     from  "./spells.json";

describe('Character', function() {


  // Build char obj with just a name
  const buildBlankCharObj = function(override) {
    return _.merge({}, override);
  };

  // Build char obj with some default values
  const buildDefaultCharObj = function(override) {
    return _.merge({}, {
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
    }, override);
  };

  const item1 = {
    appendage: 'hand',
    name: 'Sword of testing',
    modifies: {
      attack: 3
    }
  };


  describe('constructor()', function() {

    let conChar  = new Character(buildBlankCharObj({ name: 'constructor char' }));
    let conChar2 = new Character(buildDefaultCharObj({ name: 'constructor char2' }));

    it('should set default values when no data is passed', function() {
      assert.equal(15, conChar.maxHP);
    });

    it('should successfully create character from saved data', function() {
      assert.equal(30, conChar2.maxHP);
    });

    it('should trigger updateActiveStats()', function() {
      assert.equal(13, conChar.activeStats.attack)
      assert.equal(16, conChar2.activeStats.attack)
    });

    it('should load equipped items from saved data', function() {
      let conChar3 = new Character(buildDefaultCharObj(
        {
          name: 'constructor char3',
          equipped: {
            hand: item1
          }
        }
      ));
      assert.equal(19, conChar3.activeStats.attack)
      assert.equal('Sword of testing', conChar3.equipped.hand.name)
    });

  });

  describe("equip(item)", function() {

    let item2 = {
      appendage: 'hand',
      name: 'Sword of high requirement',
      modifies: {
        attack: 50
      },
      requirements: {
        strength: 18,
        dexterity: 18
      }
    };

    let item3 = {
      appendage: 'hand',
      name: 'Sword of normal requirement',
      modifies: {
        attack: 10
      },
      requirements: {
        strength: 12,
        dexterity: 10
      }
    };

    let equipChar = new Character(buildDefaultCharObj({ name: 'equip char1' }));

    it('should add equipment to appendage', function() {
      equipChar.equip(item1);
      assert.equal(equipChar.equipped.hand, item1);
    });

    it('should fail if stats too low', function() {
      equipChar.equip(item2);
      assert.equal(equipChar.equipped.hand, item1);
    });

    it('should remove old equipment from appendage and place in inventory', function() {
      equipChar.equip(item3);
      assert.equal(equipChar.equipped.hand, item3);
      assert.equal(equipChar.inventory.slots[0], item1);
    });

    it('should trigger updateActiveStats()', function() {
      equipChar.equip(item1);
      assert.equal(19, equipChar.activeStats.attack);
      equipChar.equip(item3);
      assert.equal(26, equipChar.activeStats.attack);
    });

  });

  describe("unequip(appendage)", function() {

    let unequipChar = new Character(buildDefaultCharObj(
      {
        name: 'unequip char2',
        equipped: {
          hand: item1
        }
      }
    ));
    unequipChar.unequip('hand');

    let unequipChar2 = new Character(buildDefaultCharObj(
      {
        name: 'unequip char2',
        equipped: {
          hand: item1
        }
      }
    ));

    let unequipChar3 = new Character(buildDefaultCharObj(
      {
        name: 'unequip char2',
        equipped: {
          hand: {
            appendage: 'hand',
            name: 'Sword of self-stabbing',
            modifies: {
              attack: -10
            },
            cursed: true
          }
        }
      }
    ));

    it('should remove equipment from appendage', function() {
      assert.equal(undefined, unequipChar.equipped.hand);
    });

    it('should put equipment in inventory', function() {
      assert.equal(item1, unequipChar.inventory.slots[0]);
    });

    it('should fail if inventory is full', function() {
      unequipChar2.inventory.slots = Array(30);
      unequipChar2.unequip('hand');
      assert.equal(item1, unequipChar2.equipped.hand);
    });

    it('should fail if equipment cursed', function() {
      unequipChar3.unequip('hand');
      assert.equal("Sword of self-stabbing", unequipChar3.equipped.hand.name);
    });

    it('should trigger updateActiveStats()', function() {
      assert.equal(16, unequipChar.activeStats.attack);
    });

  });

  describe("modifyStat()", function() {

    let modStatChar = new Character(buildDefaultCharObj({ name: 'modifyStat char' }));

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
    
    let upActStatChar = new Character(buildDefaultCharObj({ name: 'updateActiveStats char' }));

    it('should update activeStats when core stats change', function() {
      assert.equal(16, upActStatChar.activeStats.attack);
      upActStatChar.modifyCoreStat({strength:1});
      assert.equal(17, upActStatChar.activeStats.attack);
    });

    it('should update activeStats with stats learned from guilds', function() {
      let upActStatChar2 = new Character(buildDefaultCharObj(
        {
          name: 'updateActiveStats char2',
          learnedStats: {
            perception: 5,
            attack: 20,
            multipleSwings: 1
          }
        }
      ));
      assert.equal(36, upActStatChar2.activeStats.attack);
      assert.equal(5, upActStatChar2.activeStats.perception);
      assert.equal(1, upActStatChar2.activeStats.multipleSwings);
    });

    it('if stats are too low equip items, should unequip items', function() {
      let unequipItem = {
        appendage: 'hand',
        name: 'Useless heavy sword',
        modifies: {
          attack: 1
        },
        requirements: {
          strength: 40
        }
      };
      let upActStatChar3 = new Character(buildDefaultCharObj(
        {
          name: 'updateActiveStats char3',
          stats: {
            "strength": 11,
            "intelligence": 12,
            "wisdom": 12,
            "constitution": 8,
            "charisma": 9,
            "dexterity": 11
          },
          equipped: {
            hand: unequipItem
          }
        }
      ));

      assert.equal(undefined, upActStatChar3.equipped.hand);
      assert.equal(unequipItem, upActStatChar3.inventory.slots[0]);
    });

    it('should update activeStats with modifiers from equipped items', function() {
      let upActStatChar4 = new Character(buildDefaultCharObj(
        {
          name: 'updateActiveStats char4',
          equipped: {
            hand: item1
          }
        }
      ));

      assert.equal(19, upActStatChar4.activeStats.attack);
    });

  });
});
