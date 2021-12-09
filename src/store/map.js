import set from "lodash/set";
import { GenericStore, GenericLogic } from "./Generic";

export class Map extends GenericLogic {
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
    const currentFloorIndex = this.game.party.data.location.z;
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

const base = new GenericStore({
  moduleName: "map",
  logicClass: Map,
});

export default {
  ...base.properties,
  state() {
    return {
      currentFloorIndex: 0,
      currentFloor: {},
      explored: [],
      width: 40,
      height: 40,
    };
  },
  mutations: {
    ...base.mutations,
  },
  actions: {
    ...base.actions,
  },
};
