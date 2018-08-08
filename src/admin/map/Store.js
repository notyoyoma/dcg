import {Floors, Effects, Walls} from "./Layers";

export const storeConf = {
  state: {
    floors: [],
    currentFloorIndex: 0,
    layers: [],
    currentLayerKey: 0,
    currentTool: false,
  },
  getters: {
    currentFloor(state) {
      if (_.isEmpty(state.floors)) return false;
      return state.floors[state.currentFloorIndex];
    },
    currentLayer(state) {
      if (_.isEmpty(state.layers)) return false;
      return _.find(state.layers, {key: state.currentLayerKey});
    }
  },
  mutations: {
    initMapData(state, mapData) {
      state.floors = mapData;
    },
    setCurrentLayer(state, key) {
      state.currentLayerKey = key;
    },
    setCurrentTool(state, tool) {
      state.currentTool = tool;
    },
    setFloor(state, floorIndex) {
      state.currentFloorIndex = floorIndex;
      const {floors, effects, walls} = state.floors[state.currentFloorIndex];
      state.layers = [
        new Floors(floors, this.commit),
        new Effects(effects, this.commit),
        new Walls(walls, this.commit),
      ];
    },
    setMapData(state, {path, val, layerKey}) {
      let newFloors = [...state.floors];
      _.set(newFloors, [state.currentFloorIndex, layerKey, ...path], val);
      state.floors = newFloors;
    },
  }
};
