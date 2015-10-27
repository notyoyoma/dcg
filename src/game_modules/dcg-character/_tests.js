import assert     from "assert";
import Character  from "dcg-character";


describe('Character', function() {

  let charObj = {};
  let char1 = new Character(charObj);

  describe('#constructor', function() {
    assert.equal(15, char1.maxHP);
  });
});
