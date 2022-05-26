import { encounter } from "@/game/modules";
import { properties, mutations } from "./baseModule";

export default {
  ...properties,
  mutations,

  state() {
    return encounter.initialState;
  },
  actions: encounter.vuexActions,
};
