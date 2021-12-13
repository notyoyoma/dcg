import set from "lodash/set";
import GenericLogic from "./Generic";
import game from "./index.js";

export default class Map extends GenericLogic {
  width = 40;
  height = 40;

  constructor(...args) {
    super(...args);
    const savedExploredData = localStorage.getItem("map.explored");
    if (savedExploredData) {
      this.exploredData = JSON.parse(savedExploredData);
    } else {
      this.exploredData = [];
    }
  }

  initialize() {
    const currentFloorIndex = game.party.data.location.z;
    this.update({
      currentFloorIndex,
      currentFloor: this.data.floors[currentFloorIndex],
      currentFloorExplored: this.exploredData[currentFloorIndex],
    });
  }

  setExplored(z, y, x) {
    set(this.exploredData, [z, y, x], true);
  }

  saveExplored() {
    localStorage.setItem("map.explored", JSON.stringify(this.exploredData));
  }

  isOutOfBounds({ x, y, z }) {
    if (z < 0 || y < 0 || x < 0) return true; // no negative indexes
    // check if floor is deeper than map goes
    if (z > this.data.floors.length - 1) return true;
    // check if coords are larger than map
    if (y > this.height - 1 || x > this.width - 1) return true;
    return false;
  }
}
