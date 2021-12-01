import clone from "lodash/clone";
import unset from "lodash/unset";
import set from "lodash/set";
import { shouldInteract, interactWithLayer } from "./layerLogic";
import { emptyFloor } from "@/admin/components/map/layers";

const defaultState = {
  currentToolIndex: 0,
  currentFloorIndex: 0,
  currentLayerKey: "walls",
  mouseHeldDown: false,
  dragCoordPaths: [],
  hideLayers: [],
  layerValueBin: 0,
};

export default {
  namespaced: true,
  state: clone(defaultState),
  getters: {
    layerIsVisible(state) {
      return (layerId) => !state.hideLayers.includes(layerId);
    },
    currentFloor({ currentFloorIndex }, getters, { map }) {
      return map.floors[currentFloorIndex];
    },
  },
  mutations: {
    reset(state) {
      Object.merge(state, defaultState);
    },
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
    addFloor({ rootState }) {
      rootState.map.floors.push({ ...emptyFloor });
    },
  },
};
