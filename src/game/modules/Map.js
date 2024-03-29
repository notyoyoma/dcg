import set from "lodash/set";
import GameModule from "./GameModule";
import { party } from ".";
import { getLSD, setLSD } from "@/utils/localStorage";

const mapExploredKey = "Map.explored";

export class Map extends GameModule {
  initialState = {
    currentFloorIndex: 0,
    currentFloor: {},
    currentFloorExplored: [],
    width: 40,
    height: 40,
  };
  width = 40;
  height = 40;

  constructor() {
    super();
    this.exploredData = getLSD(mapExploredKey) || [];
  }

  update() {
    const currentFloorIndex = party.data.location.z;
    super.update({
      currentFloorIndex,
      currentFloor: this.data.floors[currentFloorIndex],
      currentFloorExplored: this.exploredData[currentFloorIndex],
    });
  }

  setExplored(z, y, x) {
    set(this.exploredData, [z, y, x], true);
    const currentFloorIndex = party.data.location.z;
    super.update({
      currentFloorExplored: this.exploredData[currentFloorIndex],
    });
    this.save();
  }

  save() {
    super.save();
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

export const map = new Map();
