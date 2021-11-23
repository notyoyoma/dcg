import generic from "./generic";

export default {
  ...generic.root,
  state() {
    // this should mirror the structure of /data/monsters.json
    return { monsters: [] };
  },
  mutations: {
    ...generic.mutations,
  },
  actions: {
    ...generic.actions,
  },
};
