import axios from "axios";
import Vuex from "vuex";

const store = new Vuex.Store({
  state: () => {
    loading: true;
  },
  mutations: {
    loaded(state) {
      state.loading = false;
    },
  },
});

async function makeModule(moduleName) {
  const data = await axios.get(`/data/${moduleName}`);
  store.registerModule(moduleName, {
    namespaced: true,
    state: () => data,
  });
}

// load all the module data, and add the modules to store
const moduleLoadingPromises = [
  "characters",
  "items",
  "map",
  "monsters",
  "npcs",
  "party",
].map(makeModule);

// once all modules have loaded, continue
Promise.all(moduleLoadingPromises).then(() => store.commit("loaded"));

export default store;
