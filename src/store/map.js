import { GenericStore, GenericLogic } from "./Generic";
import set from "lodash/set";

export class Map extends GenericLogic {}

const base = new GenericStore({
  moduleName: "map",
  logicClass: Map,
});

export default {
  ...base.properties,
  state() {
    // this should mirror the structure of /data/map.json
    return {
      floors: [],
      width: 40,
      height: 40,
    };
  },
  mutations: {
    ...base.mutations,
    setValueAtPath(state, { path, value }) {
      set(state.floors, path, value);
    },
  },
  actions: {
    ...base.actions,
  },
};
