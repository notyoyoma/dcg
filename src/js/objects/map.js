//map.js

class Map {
  constructor(data) {
    this.size         =  data.size;
    this.defaultTile  =  data.defaultTile;
    this.floors       =  [];
    this.loadFloors(data.floors);
    this.currentFloor =  data.currentFloor;
  }

  loadFloors(dataFloors) {
    // Create new Floor objects for each floor.
    for (var i=0; i < dataFloors.floors.length; i+=1) {
      this.floors[i] = new Floor(dataFloors.floors[i]);
    }
  }

  getTile(x,y,z) {
    // If z is not passed, use the current floor
    return this.floors[ z || currentFloor ].getTile(x,y);
  }
}

class Floor {
  constructor(data) {
    this.tiles        =  data.tiles;
    this.walls        =  data.walls;
    //this.defaultTile  =  merge(MAP.defaultTile, data.defaultTile);
  }

  getTile(x,y) {
    return this.tiles[x][y];
  }
}

console.log('Loaded map.js');
