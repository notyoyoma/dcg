import Vuex from "vuex";
import coreModules from "@/store/modules";
import mapEditor from "./mapEditor";

const modules = { ...coreModules, mapEditor };
const store = new Vuex.Store({
  state: () => ({
    loading: true,
    isDevEnv: process.env.NODE_ENV === "development",
  }),
  mutations: {
    setLoading(state, loading = false) {
      state.loading = loading;
    },
  },
  modules,
});

import game from "@/game";
import * as gameModules from "@/game/modules";

const loadDataPromises = Object.keys(gameModules).map((key) => {
  const module = gameModules[key];
  game.addModule(module);
  return module.loadData();
});

// once all modules have loaded data, initialize them in order
Promise.all(loadDataPromises).then(() => {
  console.log("ADMIN INITIALIZING (this should never appear in prod)");
  Object.keys(modules).forEach((key) => {
    store.dispatch(`${key}/initialize`);
  });

  game.initialize();
  store.commit("setLoading");
});

export default store;
