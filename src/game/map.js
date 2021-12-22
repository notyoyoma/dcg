import set from "lodash/set";
import LogicModule from "./LogicModule";
import game from "./index.js";
import { getLSD, setLSD } from "@/utils/localStorage";

const mapExploredKey = "Map.explored";

export default class Map extends LogicModule {
  width = 40;
  height = 40;

  constructor(...args) {
    super(...args);
    this.exploredData = getLSD(mapExploredKey) || [];
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

  save() {
    // do not call super, no reason to store map data in localstorage
    setLSD(mapExploredKey, this.exploredData);
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
