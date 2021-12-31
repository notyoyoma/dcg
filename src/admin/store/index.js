import Vuex from "vuex";
import gameModules from "@/store/modules";
import mapEditor from "./mapEditor";
import game from "@/game";

const modules = { ...gameModules, mapEditor };
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

const loadDataPromises = game.modules.map((module) => module.loadData());

// once all modules have loaded data, initialize them in order
Promise.all(loadDataPromises).then(() => {
  console.log("ADMIN INITIALIZING (this should never appear in prod)");
  Object.keys(modules).forEach((key) => {
    store.dispatch(`${key}/initialize`);
  });

  game.emit("Game.loaded");
  store.commit("setLoading");
});

export default store;
