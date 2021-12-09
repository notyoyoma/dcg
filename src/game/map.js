import set from "lodash/set";
import GenericLogic from "./Generic";
import game from "./index.js";

export default class Map extends GenericLogic {
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
}
