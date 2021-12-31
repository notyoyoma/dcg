import game from "@/game";
import { properties, mutations } from "./baseModule";

export default {
  ...properties,
  mutations,

  state() {
    return game.Map.initialState;
  },
  actions: game.Map.vuexActions,
};
