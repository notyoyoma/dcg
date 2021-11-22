import { loadData } from "./generic";

export default {
  namespaced: true,
  state() {
    // this should mirror the structure of /data/characters.json
    return [];
  },
  actions: {
    load: loadData("characters"),
  },
};
