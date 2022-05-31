import Vuex from "vuex";
import modules from "./modules";

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
  Object.keys(modules).forEach((key) => {
    store.dispatch(`${key}/initialize`);
  });

  game.initialize();
  store.commit("setLoading");
});

export default store;
