import BaseModule from "./BaseModule";
import { Map, Characters } from ".";
import { event } from "@/game/events";
import get from "lodash/get";

export default class Party extends BaseModule {
  moduleName = "party";
  initialState = {
    characters: [],
    location: {
      x: 0,
      y: 0,
      z: 0,
    },
    facing: 0,
    selectedCharacter: 0,
    party: [],
  };

  teleport(location) {
    if (Map.isOutOfBounds(location)) return;
    this.data.location = { ...location };
    this.update("location");
    // TODO - new decorator
    // needs to emit("after:Party.move");
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
    const wallValue = get(Map.data, path);

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
    if (Map.isOutOfBounds(location)) return;
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

  update(arg) {
    super.update(arg);
    super.update({ party: this.party });
    this.save();
  }

  get party() {
    return this.data.characters.map((charName) => Characters.find(charName));
  }

  get statsSummary() {
    return this.party.reduce((r, { stats }) => {
      Object.keys(stats).forEach((k) => {
        if (r[k] === undefined) r[k] = stats[k];
        else r[k] += stats[k];
      });
      return r;
    }, {});
  }

  get actions() {
    return this.party.map((m) => [m.currentAction, m]);
  }
}
