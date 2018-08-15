import {Floors, Effects, Walls, Rooms} from "./Layers";

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
      return _.find(state.layers, {id: state.currentLayerKey});
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
      const {floors, effects, walls, rooms} = state.floors[state.currentFloorIndex];
      state.layers = [
        new Floors(floors, this.commit),
        new Effects(effects, this.commit),
        new Walls(walls, this.commit),
        new Rooms(rooms, this.commit),
      ];
    },
    setMapData(state, {path, val, layerKey}) {
      let newFloors = [...state.floors];
      const setPath = [state.currentFloorIndex, layerKey, ...path]
      if (val === 0) {
        _.unset(newFloors, setPath);
      } else {
        _.set(newFloors, setPath, val);
      }
      state.floors = newFloors;
    },
  }
};
