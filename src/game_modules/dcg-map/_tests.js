import  assert     from  "assert";
import  merge      from  "merge";
import  GameMap    from  "dcg-map";
import  worldData  from  "dcg-world-data";

describe('Map', function() {


  // Build char obj with just a name
  const buildMapObj = function(override) {
    return new GameMap(merge.recursive({}, worldData.map, override));
  };
  let mapObj = buildMapObj();

  describe('constructor()', function() {
    it('should load map from saved data', function() {
      assert.equal(mapObj.getTile(0,0).walls.right, 4);
      assert.equal(mapObj.getTile(3,3).walls.bottom, 3);
    });
  });

  describe('tryMove()', function() {
    it('prevents movement through walls', function() {
      // Try to move right from the starting point (through a wall)
      assert.equal(mapObj.tryMove({x:0,y:0}, 1).success, false);
      assert.equal(mapObj.tryMove({x:3,y:3}, 1).success, false);
    });

    it('prevents movement outside the map', function() {
      for (let i=0; i<mapObj.size; i+=1) {
        // Test entire left wall
        assert.equal(mapObj.tryMove({x:0,y:i}, 3).success, false);
        // Test entire top wall
        assert.equal(mapObj.tryMove({x:i,y:0}, 0).success, false);
        // Test entire right wall
        assert.equal(mapObj.tryMove({x:mapObj.size-1,y:i}, 1).success, false);
        // Test entire bottom wall
        assert.equal(mapObj.tryMove({x:i,y:mapObj.size-1}, 2).success, false);
      }
    });
  });
});
