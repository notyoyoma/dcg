export const properties = {
  namespaced: true,
};

export const mutations = {
  setState(state, newState) {
    Object.keys(newState).forEach((key) => {
      if (typeof newState[key] === "object") {
        state[key] = { ...newState[key] };
      } else {
        state[key] = newState[key];
      }
    });
  },
};
