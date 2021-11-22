import { loadData } from "./generic";

export default {
  namespaced: true,
  state() {
    // this should mirror the structure of /data/party.json
    return {
      characters: [],
      location: {
        x: 0,
        y: 0,
        z: 0,
      },
      facing: 0,
      selectedCharacter: 0,
    };
  },
  getters: {
    selectedCharacter(state) {
      return state.characters[state.selectedCharacter || 0];
    },
  },
  actions: {
    load: loadData("party"),
  },
};
