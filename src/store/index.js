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

const moduleLoadingPromises = Object.keys(modules).map((moduleName) =>
  store.dispatch(`${moduleName}/loadModuleData`)
);

// once all modules have loaded, continue
Promise.all(moduleLoadingPromises).then(() => store.commit("setLoading"));

export default store;
