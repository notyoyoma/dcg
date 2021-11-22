import { loadData } from "./generic";

export default {
  namespaced: true,
  state() {
    // this should mirror the structure of /data/items.json
    return {
      levels: [],
      width: 40,
      height: 40,
    };
  },
  actions: {
    load: loadData("items"),
  },
};
