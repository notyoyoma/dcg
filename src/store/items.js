import { GenericStore, GenericLogic } from "./Generic";

export class Items extends GenericLogic {}

const base = new GenericStore({
  moduleName: "items",
  logicClass: Items,
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
