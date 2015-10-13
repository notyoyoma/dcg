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

  tryMove(location, direction) {
    let tileWalls = this.currentFloor.getTileWalls(location.x, location.y),
        directions = ["top", "right", "bottom", "left"],
        result = { success: tileWalls[directions[direction]] < 4 };

    if (result.success) {
      this.move(location, direction);
      result.message = this.currentFloor.getTile(location);
    } else {
      result.message = "You can't go that way";
    }
    return result;
  }

  move(location, direction) {
    switch (direction) {
      case 0:
        location.y -= 1;
        break;
      case 1:
        location.x += 1;
        break;
      case 2:
        location.y += 1;
        break;
      case 3:
        location.x -= 1;
        break;
    }
  }
}

class Floor {
  constructor(data, mapRef) {
    this.tiles        =  data.tiles;
    this.walls        =  data.walls;
    this.defaultTile  =  merge(mapRef.defaultTile, data.defaultTile);
    this.floorSize    =  mapRef.size;
    this.initTiles();
  }

  initTiles() {
    for (let i=0; i<this.floorSize; i+=1) {
      if (typeof this.tiles[i] == "undefined") this.tiles[i] = [];
      for (let j=0; j<this.floorSize; j+=1) {
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
    return {
      right:   (x+1 < this.floorSize) ? this.walls[y][x][0]   : 4,
      bottom:  (y+1 < this.floorSize) ? this.walls[y][x][1]   : 4,
      top:     (y-1 >= 0)             ? this.walls[y-1][x][1] : 4,
      left:    (x-1 >= 0)             ? this.walls[y][x-1][0] : 4,
    };
  }
}

export default Map;

console.log('Finished dcg-map/main.js');
