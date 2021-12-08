import { GenericStore, GenericLogic } from "./Generic";

export class Npcs extends GenericLogic {}

const base = new GenericStore({
  moduleName: "npcs",
  logicClass: Npcs,
});

export default {
  ...base.properties,
  state() {
    // this should mirror the structure of /data/npcs.json
    return { npcs: [] };
  },
  mutations: {
    ...base.mutations,
  },
  actions: {
    ...base.actions,
  },
};
