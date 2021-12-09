import GenericStore from "./Generic";

const base = new GenericStore({
  moduleName: "npcs",
});

export default {
  ...base.properties,
  state() {
    // this should mirror the structure of /data/npcs.json
    return { npcs: [] };
  },
  mutations: {
    ...base.mutations,
  },
  actions: {
    ...base.actions,
  },
};
