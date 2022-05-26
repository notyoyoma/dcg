import { party } from "@/game/modules";
import { properties, mutations } from "./baseModule";

export default {
  ...properties,
  mutations,

  state() {
    return party.initialState;
  },
  actions: party.vuexActions,

  getters: {
    selectedCharacter(state) {
      return state.characters[state.selectedCharacter || 0];
    },
  },
};
