import { GenericStore, GenericLogic } from "./Generic";

export class Monsters extends GenericLogic {}

const base = new GenericStore({
  moduleName: "monsters",
  logicClass: Monsters,
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
