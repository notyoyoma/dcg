import generic from "./generic";

export default {
  ...generic.root,
  state() {
    // this should mirror the structure of /data/npcs.json
    return { npcs: [] };
  },
  mutations: {
    ...generic.mutations,
  },
  actions: {
    ...generic.actions,
  },
};
