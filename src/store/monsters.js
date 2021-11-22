import { loadData } from "./generic";

export default {
  namespaced: true,
  state() {
    // this should mirror the structure of /data/monsters.json
    return [];
  },
  actions: {
    load: loadData("monsters"),
  },
};
