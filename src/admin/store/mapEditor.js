import clone from "lodash/clone";
import isEmpty from "lodash/isEmpty";
import unset from "lodash/unset";
import set from "lodash/set";

const defaultState = {
  currentToolIndex: false,
  currentFloorIndex: 0,
  currentLayerKey: 0,
};

export default {
  namespaced: true,
  state: clone(defaultState),
  getters: {
    currentFloor(state, getters, { map }) {
      if (isEmpty(map.floors)) return false;
      return map.floors[state.currentFloorIndex];
    },
    currentLayer(state, getters, { map }) {
      if (isEmpty(map.layers)) return false;
      return map.layers.find((layer) => layer.id === state.currentLayerKey);
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
  },
};
