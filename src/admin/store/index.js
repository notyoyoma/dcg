import Vuex from "vuex";
import gameModules, { initializeOrder } from "@/store/modules";
import mapEditor from "./mapEditor";
import game from "@/game";

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
  modules: { ...gameModules, mapEditor },
});

const moduleLoadingPromises = Object.keys(gameModules).map((moduleName) =>
  store.dispatch(`${moduleName}/loadModuleData`)
);

// once all modules have loaded data, initialize them in order
const adminModules = [...initializeOrder, "mapEditor"];
Promise.all(moduleLoadingPromises).then(async () => {
  console.log("ADMIN INITIALIZING (this should never appear in prod)");
  const initializePromises = adminModules.map((moduleName) =>
    store.dispatch(`${moduleName}/initializeModule`)
  );
  await Promise.all(initializePromises);

  // done loading. display UI
  game.bindCoreEvents();
  store.commit("setLoading");
});

export default store;
