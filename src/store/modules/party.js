import game from "@/game";
import { properties, mutations } from "./baseModule";

export default {
  ...properties,
  mutations,

  state() {
    return game.Party.initialState;
  },
  actions: game.Party.vuexActions,

  getters: {
    selectedCharacter(state) {
      return state.characters[state.selectedCharacter || 0];
    },
  },
};
