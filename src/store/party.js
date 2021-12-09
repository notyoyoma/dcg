import GenericStore from "./Generic";

const base = new GenericStore({
  moduleName: "party",
});

export default {
  ...base.properties,
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
  mutations: {
    ...base.mutations,
  },
  actions: {
    ...base.actions,
  },
};
