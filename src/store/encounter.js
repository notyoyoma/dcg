import GenericStore from "./Generic";

const base = new GenericStore({
  moduleName: "encounter",
});

export default {
  ...base.properties,
  state() {
    // this should mirror the structure of /data/encounter.json
    return { log: [], currentEncounter: {}, turnSpeed: 2000 };
  },
  mutations: {
    ...base.mutations,
  },
  actions: {
    ...base.actions,
  },
};
