import set from "lodash/set";
import { shouldInteract, interactWithLayer } from "./layerLogic";
import { emptyFloor } from "@/components/map/layers";
import game from "@/game";
import axios from "axios";

export default {
  namespaced: true,
  state: () => ({
    floors: [],
    currentToolIndex: 0,
    currentFloorIndex: 0,
    currentLayerKey: "walls",
    mouseHeldDown: false,
    dragCoordPaths: [],
    hideLayers: [],
    layerValueBin: 0,
  }),
  getters: {
    layerIsVisible(state) {
      return (layerId) => !state.hideLayers.includes(layerId);
    },
    currentFloor({ currentFloorIndex, floors }) {
      return floors[currentFloorIndex];
    },
  },
  mutations: {
    setCurrentLayer(state, key) {
      state.currentLayerKey = key;
      state.currentToolIndex = 0;
    },
    setCurrentTool(state, tool) {
      state.currentToolIndex = tool;
    },
    setFloor(state, floorIndex) {
      state.currentFloorIndex = floorIndex;
    },
    setMouseHeldDown(state, mouseHeldDown) {
      state.mouseHeldDown = mouseHeldDown;
      if (!mouseHeldDown) {
        state.dragCoordPaths = [];
      }
    },
    addDragCoordPath(state, coordPath) {
      state.dragCoordPaths.push(coordPath);
    },
    setLayerValueBin(state, value) {
      state.layerValueBin = value;
    },
    setValueAtPath(state, { path, value }) {
      set(game.Map.data.floors, path, value);
      state.floors = [...game.Map.data.floors];
      game.Map.update({
        currentFloor: game.Map.data.floors[state.currentFloorIndex],
      });
    },
    updateFromGameData(state) {
      state.floors = [...game.Map.data.floors];
      game.Map.update({
        currentFloor: game.Map.data.floors[state.currentFloorIndex],
      });
    },
  },
  actions: {
    initialize({ commit }) {
      commit("updateFromGameData");
    },
    toggleVisible({ state }, id) {
      const isHidden = state.hideLayers.includes(id);
      if (isHidden) {
        state.hideLayers = state.hideLayers.filter((layerId) => layerId !== id);
      } else {
        state.hideLayers.push(id);
      }
    },
    interact({ state }, event) {
      const { currentLayerKey, mouseHeldDown } = state;
      if (!shouldInteract(event, currentLayerKey, mouseHeldDown)) return;
      interactWithLayer({ event, ...state });
    },
    addFloor({ dispatch }) {
      game.Map.data.floors.push({ ...emptyFloor });
      dispatch("initializeModule");
    },
    async writeToFile({ dispatch, state }) {
      const data = {
        floors: state.floors,
        width: 40,
        height: 40,
      };
      await axios.post("/data/map.json", data).catch(console.log);
      await dispatch("map/loadModuleData", null, { root: true });
      dispatch("initializeModule");
      console.log("Saved to file");
    },
    async refreshFromFile({ dispatch }) {
      await dispatch("map/loadModuleData", null, { root: true });
      dispatch("initializeModule");
      console.log("Reloaded from file");
    },
  },
};
