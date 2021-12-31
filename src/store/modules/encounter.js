import game from "@/game";
import { properties, mutations } from "./baseModule";

export default {
  ...properties,
  mutations,

  state() {
    return game.Encounter.initialState;
  },
  actions: game.Encounter.vuexActions,
};
