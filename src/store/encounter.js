import GenericStore from "./Generic";

const base = new GenericStore({
  moduleName: "encounter",
});

export default {
  ...base.properties,
  state() {
    return {
      turnSpeed: 2000,
      log: [],
      currentEncounter: {},
      actions: [],
    };
  },
  mutations: {
    ...base.mutations,
  },
  actions: {
    ...base.actions,
  },
};
