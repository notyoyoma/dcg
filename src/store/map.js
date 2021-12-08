import { GenericStore, GenericLogic } from "./Generic";

export class Map extends GenericLogic {
  initialize() {
    const floorIndex = this.game.party.data.location.z;
    this.update({
      currentFloor: this.data[floorIndex],
    });
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
      currentFloor: {},
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
