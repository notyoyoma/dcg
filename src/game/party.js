import LogicModule from "./LogicModule";
import game, { event } from "@/game";
import get from "lodash/get";

export default class Party extends LogicModule {
  teleport(location) {
    if (game.map.isOutOfBounds(location)) return;
    this.data.location = { ...location };
    this.update("location");
    game.emit("Party.after.move");
  }

  @event
  move() {
    // get the party's location and direction facing
    const { x, y, z } = this.data.location;
    const { facing } = this.data;
    // if the party is facing right or down, shift to that tile
    const xD = facing === 1 ? 1 : 0;
    const yD = facing === 2 ? 1 : 0;
    // if the party is facing up or down, check the top tile, else left
    const wallIndex = facing % 2 == 0 ? 0 : 1;
    const path = ["floors", z, "walls", y + yD, x + xD, wallIndex];
    const wallValue = get(game.map.data, path);

    // is a wall in the way?
    if (wallValue === 1) return;
    const location = { ...this.data.location };
    switch (facing) {
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
    if (game.map.isOutOfBounds(location)) return;
    this.data.location = location;
    this.update("location");
  }

  turn(delta) {
    let newFace = this.data.facing + delta;
    if (newFace < 0) {
      this.data.facing = 4 + newFace;
    } else if (newFace > 3) {
      this.data.facing = newFace % 4;
    } else {
      this.data.facing = newFace;
    }
    this.update("facing");
  }
}
