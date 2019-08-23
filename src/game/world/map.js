// Map Object

export default class Map {
  constructor(data) {
    this.size           =  data.size;
    this.defaultTile    =  data.defaultTile;
    this.zones          =  data.zones;

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
      result.newTile = this.currentFloor.getTile(location.x,location.y);
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
    this.defaultTile  =  _.merge(mapRef.defaultTile, data.defaultTile);
    this.floorSize    =  mapRef.size;
  }

  getTile(x,y) {
    if (typeof this.tiles[y]    == "undefined"
    ||  typeof this.tiles[y][x] == "undefined") {
      return this.defaultTile;
    }
    return _.merge(this.tiles[y][x]);
  }

  getTileWalls(x,y) {
    if (typeof this.tiles[y]             == "undefined"
    ||  typeof this.tiles[y][x]          == "undefined"
    ||  typeof this.tiles[y][x]['walls'] == "undefined" ) {
      return {right:0,bottom:0,top:0,left:0};
    }
    return {
      right:  (x+1 < this.floorSize) ? this.tiles[y][x]['walls']['right']    : 4,
      bottom: (y+1 < this.floorSize) ? this.tiles[y][x]['walls']['bottom']   : 4,
      top:    (y-1 >= 0)             ? this.tiles[y-1][x]['walls']['bottom'] : 4,
      left:   (x-1 >= 0)             ? this.tiles[y][x-1]['walls']['right']  : 4,
    };
  }
}
