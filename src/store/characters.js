import { GenericStore, GenericLogic } from "./Generic";

export class Characters extends GenericLogic {}

const base = new GenericStore({
  moduleName: "characters",
  logicClass: Characters,
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
