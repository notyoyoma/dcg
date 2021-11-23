import Vuex from "vuex";
import gameModules from "@/store/modules";
import mapEditor from "./mapEditor";

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
  store.dispatch(`${moduleName}/loadModuleData`, moduleName)
);

// once all modules have loaded, continue
Promise.all(moduleLoadingPromises).then(() => store.commit("setLoading"));

export default store;
