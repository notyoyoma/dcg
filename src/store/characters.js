import GenericStore from "./Generic";

const base = new GenericStore({
  moduleName: "characters",
});

export default {
  ...base.properties,
  state() {
    // this should mirror the structure of /data/characters.json
    return { characters: [] };
  },
  mutations: {
    ...base.mutations,
  },
  actions: {
    ...base.actions,
  },
};
