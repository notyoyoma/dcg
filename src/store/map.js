import generic from "./generic";
import set from "lodash/set";

export default {
  ...generic.root,
  state() {
    // this should mirror the structure of /data/map.json
    return {
      floors: [],
      width: 40,
      height: 40,
    };
  },
  mutations: {
    ...generic.mutations,
    setValueAtPath(state, { path, value }) {
      set(state.floors, path, value);
    },
  },
  actions: {
    ...generic.actions,
  },
};
