import GenericStore from "./Generic";

const base = new GenericStore({
  moduleName: "map",
});

export default {
  ...base.properties,
  state() {
    return {
      currentFloorIndex: 0,
      currentFloor: {},
      currentFloorExplored: [],
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
