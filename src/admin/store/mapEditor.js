const defaultState = {
  currentTool: false,
  currentFloorIndex: 0,
  currentLayerKey: 0,
};

export default {
  namespaced: true,
  state: _.clone(defaultState),
  getters: {
    currentFloor(state, getters, { map }) {
      if (_.isEmpty(map.floors)) return false;
      return map.floors[state.currentFloorIndex];
    },
    currentLayer(state, getters, { map }) {
      if (_.isEmpty(map.layers)) return false;
      return _.find(map.layers, { id: state.currentLayerKey });
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
      state.currentTool = tool;
    },
    setFloor(state, floorIndex) {
      state.currentFloorIndex = floorIndex;
    },
    setMapData(state, { path, val, layerKey }) {
      let newFloors = [...state.floors];
      const setPath = [state.currentFloorIndex, layerKey, ...path];
      if (val === 0) {
        _.unset(newFloors, setPath);
      } else {
        _.set(newFloors, setPath, val);
      }
      state.floors = newFloors;
    },
  },
};
