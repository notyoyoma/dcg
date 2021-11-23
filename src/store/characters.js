import generic from "./generic";

export default {
  ...generic.root,
  state() {
    // this should mirror the structure of /data/characters.json
    return { characters: [] };
  },
  mutations: {
    ...generic.mutations,
  },
  actions: {
    ...generic.actions,
  },
};
