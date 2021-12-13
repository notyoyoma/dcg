import cloneDeep from "lodash/cloneDeep";
import unset from "lodash/unset";
import set from "lodash/set";
import { shouldInteract, interactWithLayer } from "./layerLogic";
import { emptyFloor } from "@/admin/components/map/layers";
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
    setMapData(state, { path, val, layerKey }) {
      let newFloors = [...state.floors];
      const setPath = [state.currentFloorIndex, layerKey, ...path];
      if (val === 0) {
        unset(newFloors, setPath);
      } else {
        set(newFloors, setPath, val);
      }
      state.floors = newFloors;
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
      set(state.floors, path, value);
      game.map.data.floors = cloneDeep(state.floors);
      game.map.update({
        currentFloor: state.floors[state.currentFloorIndex],
      });
    },
  },
  actions: {
    initializeModule({ state }) {
      state.floors = cloneDeep(game.map.data.floors);
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
    addFloor({ rootState }) {
      rootState.map.floors.push({ ...emptyFloor });
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
    },
  },
};
