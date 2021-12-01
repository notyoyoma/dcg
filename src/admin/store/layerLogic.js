import store from "./index";

export function wallCoordInteraction(x, y) {
  /* Which triangle was clicked?
    x =     0  1  2  3  4  5  6  7  8  9 10 11 12 13 14
    y =  0  b  a  a  a  a  a  a  a  a  a  a  a  a  a  c
         1  b  b  a  a  a  a  a  a  a  a  a  a  a  c  c
         2  b  b  b  a  a  a  a  a  a  a  a  a  c  c  c
         3  b  b  b  b  a  a  a  a  a  a  a  c  c  c  c
         4  b  b  b  b  b  a  a  a  a  a  c  c  c  c  c
         5  b  b  b  b  b  b  a  a  a  c  c  c  c  c  c
         6  b  b  b  b  b  b  b  a  c  c  c  c  c  c  c
         7  b  b  b  b  b  b  b  d  c  c  c  c  c  c  c
         8  b  b  b  b  b  b  d  d  d  c  c  c  c  c  c
         9  b  b  b  b  b  d  d  d  d  d  c  c  c  c  c
        10  b  b  b  b  d  d  d  d  d  d  d  c  c  c  c
        11  b  b  b  d  d  d  d  d  d  d  d  d  c  c  c
        12  b  b  d  d  d  d  d  d  d  d  d  d  d  c  c
        13  b  d  d  d  d  d  d  d  d  d  d  d  d  d  c
        14  d  d  d  d  d  d  d  d  d  d  d  d  d  d  d
  */
  const xM = x % 15;
  const yM = y % 15;
  const aOrB = xM + yM < 14;
  const aOrC = xM > yM;
  const xI = Math.floor(x / 15);
  const yI = Math.floor(y / 15);
  let triangle;

  if (aOrB && aOrC) triangle = "a";
  if (aOrB && !aOrC) triangle = "b";
  if (!aOrB && aOrC) triangle = "c";
  if (!aOrB && !aOrC) triangle = "d";
  return { triangle, xM, yM, xI, yI };
}

const layerActChecks = {
  default: ({ type }) => type === "mousedown",
  rooms: ({ type }, mouseHeldDown) => mouseHeldDown || type === "mouseup",
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

export function shouldInteract(event, layerKey, mouseHeldDown) {
  const actCheck = layerActChecks[layerKey] || layerActChecks.default;
  return actCheck(event, mouseHeldDown);
}

export const layerCoordMappers = {
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

import { getNextRoomId } from "../components/map/layers/rooms";

const interactions = {
  default({ currentToolIndex, currentLayerKey, currentFloorIndex }, coordPath) {
    const value = currentToolIndex === 0 ? null : currentToolIndex;
    const path = [currentFloorIndex, currentLayerKey, ...coordPath];
    store.commit("map/setValueAtPath", { path, value });
  },
  rooms({ currentToolIndex, currentFloorIndex, layerValueBin }, coordPath) {
    const path = [currentFloorIndex, "roomCoords", ...coordPath];
    if (currentToolIndex === 0) {
      // erase acts like the default
      store.commit("map/setValueAtPath", { path, value: null });
    } else if (currentToolIndex === 1) {
      const nextRoomId = getNextRoomId();
      store.commit("mapEditor/setLayerValueBin", nextRoomId);
      store.commit("map/setValueAtPath", { path, value: nextRoomId });
      store.commit("mapEditor/setCurrentTool", 2); // set tool to edit
    } else if (currentToolIndex === 2) {
      store.commit("map/setValueAtPath", { path, value: layerValueBin });
    } else if (currentToolIndex === 3) {
      const { roomCoords } = store.getters["mapEditor/currentFloor"];
      const clickedRoomId = roomCoords[path[2]][path[3]];
      store.commit("mapEditor/setLayerValueBin", clickedRoomId);
      store.commit("mapEditor/setCurrentTool", 2); // set tool to edit
    }
  },
};

export function interactWithLayer(args) {
  const { currentLayerKey, event } = args;
  const interact = interactions[currentLayerKey] || interactions.default;
  const coordMapper =
    layerCoordMappers[currentLayerKey] || layerCoordMappers.default;
  const coordPath = coordMapper(event);
  const coordPathStr = JSON.stringify(coordPath);
  if (!args.dragCoordPaths.includes(coordPathStr)) {
    interact(args, coordPath);
    store.commit("mapEditor/addDragCoordPath", coordPathStr);
  }
}
