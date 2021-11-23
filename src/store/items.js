import generic from "./generic";

export default {
  ...generic.root,
  state() {
    // this should mirror the structure of /data/items.json
    return { items: [] };
  },
  mutations: {
    ...generic.mutations,
  },
  actions: {
    ...generic.actions,
  },
};
