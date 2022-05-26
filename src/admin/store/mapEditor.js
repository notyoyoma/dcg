import set from "lodash/set";
import uniq from "lodash/uniq";
import compact from "lodash/compact";
import flatten from "lodash/flatten";
import { wallCoordInteraction } from "./layerLogic";
import { emptyFloor } from "@/components/map/layers";
import { map } from "@/game/modules";
import axios from "axios";

const layerCoordMappers = {
  default: ({ offsetX: x, offsetY: y }) => [
    Math.floor(y / 15),
    Math.floor(x / 15),
  ],
  walls({ offsetX: x, offsetY: y }) {
    const { triangle, xI, yI } = wallCoordInteraction(x, y);

    switch (triangle) {
      case "a":
        return [yI, xI, 0];
      case "b":
        return [yI, xI, 1];
      case "c":
        return [yI, xI + 1, 1];
      case "d":
        return [yI + 1, xI, 0];
    }
  },
};

const layerActChecks = {
  default: ({ type }, mouseHeldDown) => mouseHeldDown || type === "mouseup",
  walls({ offsetX: x, offsetY: y, type }, mouseHeldDown) {
    // only accept mousedown and drag
    if (type !== "mousedown" && !(type === "mousemove" && mouseHeldDown))
      return false;

    // out of bounds
    if (x < 0 || y < 0 || x > 600 || y > 600) return false;

    // get interaction coords
    const { triangle, xM, yM, xI, yI } = wallCoordInteraction(x, y);

    // disable walls against edges
    if (xI === 0 && triangle === "b") return false;
    if (xI === 14 && triangle === "c") return false;
    if (yI === 0 && triangle === "a") return false;
    if (yI === 4 && triangle === "d") return false;

    //dead zones for dragging
    if (
      type !== "mousedown" &&
      ((xM < 2 && yM < 2) ||
        (xM < 2 && yM > 12) ||
        (xM > 12 && yM < 2) ||
        (xM > 12 && yM > 12) ||
        (xM > 5 && xM < 9 && yM > 5 && yM < 9))
    )
      return false;

    return true;
  },
};

function shouldInteract(event, layerKey, mouseHeldDown) {
  const actCheck = layerActChecks[layerKey] || layerActChecks.default;
  return actCheck(event, mouseHeldDown);
}

function interact({ state, commit, getters }, event) {
  const { currentLayerKey, mouseHeldDown, dragCoordPaths } = state;
  if (!shouldInteract(event, currentLayerKey, mouseHeldDown)) return;

  const interactions = {
    default(
      { currentToolIndex, currentLayerKey, currentFloorIndex },
      coordPath
    ) {
      const value = currentToolIndex === 0 ? null : currentToolIndex;
      const path = [currentFloorIndex, currentLayerKey, ...coordPath];
      commit("setValueAtPath", { path, value });
    },
    rooms({ currentToolIndex, currentFloorIndex, layerValueBin }, coordPath) {
      const path = [currentFloorIndex, "roomCoords", ...coordPath];
      if (currentToolIndex === 0) {
        // erase acts like the default
        commit("setValueAtPath", { path, value: null });
      } else if (currentToolIndex === 1) {
        const { roomCoords } = getters["currentFloor"];
        const roomIds = uniq(compact(flatten(roomCoords))).sort(
          (a, b) => a - b
        );
        for (let i = 1; i < roomIds.length; i++) {
          if (i !== roomIds[i - 1]) {
            return i;
          }
        }
        const nextRoomId = roomIds.length + 1;
        commit("setLayerValueBin", nextRoomId);
        commit("setValueAtPath", {
          path,
          value: nextRoomId,
        });
        commit("setCurrentTool", 2); // set tool to edit
      } else if (currentToolIndex === 2) {
        commit("setValueAtPath", {
          path,
          value: layerValueBin,
        });
      } else if (currentToolIndex === 3) {
        const { roomCoords } = getters["currentFloor"];
        const clickedRoomId = roomCoords[path[2]][path[3]];
        commit("setLayerValueBin", clickedRoomId);
        commit("setCurrentTool", 2); // set tool to edit
      }
    },
  };

  const interaction = interactions[currentLayerKey] || interactions.default;
  const coordMapper =
    layerCoordMappers[currentLayerKey] || layerCoordMappers.default;
  const coordPath = coordMapper(event);
  const coordPathStr = JSON.stringify(coordPath);
  if (!dragCoordPaths.includes(coordPathStr)) {
    interaction(state, coordPath);
    commit("addDragCoordPath", coordPathStr);
  }
}

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
      set(map.data.floors, path, value);
      state.floors = [...map.data.floors];
      map.update({
        currentFloor: map.data.floors[state.currentFloorIndex],
      });
    },
    updateFromGameData(state) {
      state.floors = [...map.data.floors];
      map.update({
        currentFloor: map.data.floors[state.currentFloorIndex],
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
    interact,
    addFloor({ commit }) {
      map.data.floors.push({ ...emptyFloor });
      commit("updateFromGameData");
    },
    async writeToFile({ state, commit }) {
      const data = {
        floors: state.floors,
        width: 40,
        height: 40,
      };
      await axios.post("/data/map.json", data).catch(console.log);
      await map.loadData(false).catch(console.log);
      commit("updateFromGameData");
      console.log("Saved to file");
    },
    async refreshFromFile({ commit }) {
      await map.loadData(false).catch(console.log);
      commit("updateFromGameData");
      console.log("Reloaded from file");
    },
  },
};
