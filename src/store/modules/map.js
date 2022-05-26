import { map } from "@/game/modules";
import { properties, mutations } from "./baseModule";

export default {
  ...properties,
  mutations,

  state() {
    return map.initialState;
  },
  actions: map.vuexActions,
};
