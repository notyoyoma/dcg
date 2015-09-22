//map.js

(function() {
  var MAP = function(data) {
    // Init variables
    var size, floors, defaultTile;
    // Game state variables
    var currentFloor;
    this.load(data);
  };

  MAP.prototype = {
    load: function(data) {
      this.size         =  data.size;
      this.defaultTile  =  data.defaultTile;

      // Create new FLOOR objects for each floor.
      this.floors = [];
      for (var i=0; i < data.floors.length; i+=1) {
        this.floors[i] = new FLOOR(data.floors[i]);
      }
    },
    getTile: function(x,y,z) {
      // If z is not passed, use the current floor
      return this.floors[ z || currentFloor ].getTile(x,y);
    }
  };

  var FLOOR = function(data) {
    var tiles, walls, defaultTile;
    this.load(data);
  };

  FLOOR.prototype = {
    load: function(data) {
      this.tiles        =  data.tiles;
      this.walls        =  data.walls;
      this.defaultTile  =  $extend(MAP.defaultTile, data.defaultTile);
    },
    getTile: function(x,y) {
      return this.tiles[x][y];
    }
  };

  window.G.map = MAP;
})();
