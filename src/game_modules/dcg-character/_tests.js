import assert     from "assert";
import Character  from "dcg-character";


describe('Character', function() {

  let charObj = {};
  let char1 = new Character(charObj);

  describe('#constructor()', function() {
    it('should set default values when no data is passed', function() {
      assert.equal(15, char1.maxHP);
      assert.equal(13, char1.equippedStats.attack)
    });
  });
});