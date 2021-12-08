import Vuex from "vuex";
import modules, { initializeOrder } from "./modules";

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

// once all modules have loaded data, initialize them in order
Promise.all(moduleLoadingPromises).then(async () => {
  const initializePromises = initializeOrder.map((moduleName) =>
    store.dispatch(`${moduleName}/initializeModule`)
  );
  await Promise.all(initializePromises);
  store.commit("setLoading");
});

export default store;
