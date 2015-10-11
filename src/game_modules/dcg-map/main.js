// Map Object
import merge from "merge";

class Map {
  constructor(data) {
    this.size           =  data.size;
    this.defaultTile    =  data.defaultTile;

    this.floors         =  [];
    this.loadFloors(data.floors);
    this.currentFloorId =  data.currentFloorId || 0;
    this.currentFloor   =  this.floors[this.currentFloorId];
  }

  loadFloors(floors) {
    // Create new Floor objects for each floor.
    for (var i=0; i < floors.length; i+=1) {
      this.floors[i] = new Floor(floors[i], this);
    }
  }

  getTile(x,y,z) {
    // If z is not passed, use the current floor
    return this.floors[ z || this.currentFloorId ].getTile(x,y);
  }

  getTileWalls(x,y,z) {
    // If z is not passed, use the current floor
    return this.floors[ z || this.currentFloorId ].getTileWalls(x,y);
  }

}

class Floor {
  constructor(data, mapRef) {
    this.tiles        =  data.tiles;
    this.walls        =  data.walls;
    this.defaultTile  =  merge(mapRef.defaultTile, data.defaultTile);
    this.initTiles(mapRef.size);
  }

  initTiles(size) {
    for (let i=0; i<size; i+=1) {
      if (typeof this.tiles[i] == "undefined") this.tiles[i] = [];
      for (let j=0; j<size; j+=1) {
        this.tiles[i][j] = merge(this.tiles[i][j], this.defaultTile);
        this.tiles[i][j].walls = {
          right: this.walls[i][j][0],
          bottom: this.walls[i][j][1],
        }
      }
    }
  }

  getTile(x,y) {
    if (typeof this.tiles[y]    == "undefined"
    ||  typeof this.tiles[y][x] == "undefined") {
      return this.defaultTile;
    }
    return merge(this.tiles[y][x], defaultTile);
  }

  getTileWalls(x,y) {
    if (typeof this.walls[y]    == "undefined"
    ||  typeof this.walls[y][x] == "undefined") {
      return [0,0];
    }
    return this.walls[y][x];
  }

}

export default Map;

console.log('Finished dcg-map/main.js');
