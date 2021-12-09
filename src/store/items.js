import GenericStore from "./Generic";

const base = new GenericStore({
  moduleName: "items",
});

export default {
  ...base.properties,
  state() {
    // this should mirror the structure of /data/items.json
    return { items: [] };
  },
  mutations: {
    ...base.mutations,
  },
  actions: {
    ...base.actions,
  },
};
