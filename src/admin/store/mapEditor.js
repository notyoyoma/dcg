import clone from "lodash/clone";
import isEmpty from "lodash/isEmpty";
import unset from "lodash/unset";
import set from "lodash/set";
import { shouldInteract, interactWithLayer } from "./layerLogic";

const defaultState = {
  currentToolIndex: false,
  currentFloorIndex: 0,
  currentLayerKey: "rooms",
  mouseHeldDown: false,
  hideLayers: [],
};

export default {
  namespaced: true,
  state: clone(defaultState),
  getters: {
    currentFloor(state, getters, { map }) {
      if (isEmpty(map.floors)) return false;
      return map.floors[state.currentFloorIndex || 0];
    },
    layerIsVisible(state) {
      return (layerId) => !state.hideLayers.includes(layerId);
    },
  },
  mutations: {
    reset(state) {
      Object.merge(state, defaultState);
    },
    setCurrentLayer(state, key) {
      state.currentLayerKey = key;
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
    },
  },
  actions: {
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
  },
};
