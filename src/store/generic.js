import axios from "axios";

export default {
  root: {
    namespaced: true,
  },
  mutations: {
    setState(state, newState) {
      Object.assign(state, newState);
    },
  },
  actions: {
    async loadModuleData({ commit }, moduleName) {
      const { data } = await axios.get(`/data/${moduleName}`);
      commit("setState", data);
    },
  },
};
