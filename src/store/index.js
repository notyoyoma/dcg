import axios from "axios";
import Vuex from "vuex";

const store = new Vuex.Store({
  state: () => ({
    loading: true,
    isDevEnv: process.env.NODE_ENV === "development",
  }),
  mutations: {
    loaded(state, loading = false) {
      state.loading = true || loading;
    },
  },
});

async function makeModule(moduleName, module) {
  const { data } = await axios.get(`/data/${moduleName}`);
  store.registerModule(moduleName, {
    namespaced: true,
    state: () => data,
    ...module,
  });
}

// load all the module data, and add the modules to store
import characters from "./characters";
import items from "./items";
import map from "./map";
import monsters from "./monsters";
import npcs from "./npcs";
import party from "./party";
const modules = {
  characters,
  items,
  map,
  monsters,
  npcs,
  party,
};

const moduleLoadingPromises = Object.keys(modules).map((moduleName) =>
  makeModule(moduleName, modules[moduleName])
);

// once all modules have loaded, continue
Promise.all(moduleLoadingPromises).then(() => store.commit("loaded"));

export default store;
