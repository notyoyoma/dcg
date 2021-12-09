import GenericStore from "./Generic";

const base = new GenericStore({
  moduleName: "monsters",
});

export default {
  ...base.properties,
  state() {
    // this should mirror the structure of /data/monsters.json
    return { monsters: [] };
  },
  mutations: {
    ...base.mutations,
  },
  actions: {
    ...base.actions,
  },
};
