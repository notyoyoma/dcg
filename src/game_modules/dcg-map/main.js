// Map Object
import merge from "merge";

class Map {
  constructor(data) {
    this.size         =  data.size;
    this.defaultTile  =  data.defaultTile;
    this.floors       =  [];
    this.loadFloors(data.floors);
    this.currentFloor =  data.currentFloor || 0;

    // Initialize Static Objects
    this.initFloorMatrix();
  }

  loadFloors(floors) {
    // Create new Floor objects for each floor.
    for (var i=0; i < floors.length; i+=1) {
      this.floors[i] = new Floor(floors[i], this);
    }
  }

  initFloorMatrix() {
    this.floorMatrix = [];
    for (let y = 0; y < this.size; y += 1) {
      this.floorMatrix.push( new Array(this.size) );
      for (let x = 0; x < this.size; x += 1) {
        this.floorMatrix[y][x] = [x,y]
      }
    }
  }

  getFloorMatrix(index) {
    return this.floorMatrix;
  }

  getTile(x,y,z) {
    // If z is not passed, use the current floor
    return this.floors[ z || this.currentFloor ].getTile(x,y);
  }

  getTileWalls(x,y,z) {
    // If z is not passed, use the current floor
    return this.floors[ z || this.currentFloor ].getTileWalls(x,y);
  }

}

class Floor {
  constructor(data, mapRef) {
    this.tiles        =  data.tiles;
    this.walls        =  data.walls;
    this.defaultTile  =  merge(mapRef.defaultTile, data.defaultTile);
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
