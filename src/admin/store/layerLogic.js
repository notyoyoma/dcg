import store from "./index";

const layerActChecks = {
  default: ({ type }) => type === "mousedown",
  rooms: (event, mouseHeldDown) => mouseHeldDown || event.type === "mouseup",
  walls({ offsetX: x, offsetY: y, type }, mouseHeldDown) {
    // only accept mousedown and drag
    if (type !== "mousedown" && !(type === "mousemove" && mouseHeldDown))
      return false;
    // out of bounds
    if (x < 0 || y < 0 || x > 600 || y > 600) return false;
    const xM = x % 15;
    const yM = y % 15;
    /* 4 dead pixels around tile intersections */
    if (
      (xM < 2 && yM < 2) ||
      (xM < 2 && yM > 12) ||
      (xM > 12 && yM < 2) ||
      (xM > 12 && yM > 12)
    )
      return false;

    // disable triangles around the edge of the map
    // intial check for closeness
    if (x < 7 || x > 593 || y < 7 || y > 593) return false;
    // const modSum = xM + yM;

    // SKIP if the cursor is...
    // on a pixel that is between the interatable triangles
    // if (xM == yM || modSum == 14) return false;
    // //    in top left 3x3     in top right 3x3     in bottom left 3x3   in bottom right 3x3
    // if (
    //   (x < 3 && y < 3) ||
    //   (x > 11 && y < 3) ||
    //   (x < 3 && y > 11) ||
    //   (x > 11 && y > 11)
    // )
    //   return false;
    //  in the middle 3x3
    // if (x > 4 && x < 8 && y > 4 && y < 8) return false;
    console.log("do");
    return true;
  },
};

export function shouldInteract(event, layerKey, mouseHeldDown) {
  const actCheck = layerActChecks[layerKey] || layerActChecks.default;
  return actCheck(event, mouseHeldDown);
}

const layerCoordMappers = {
  default: ({ offsetX: x, offsetY: y }) => [
    Math.floor(y / 15),
    Math.floor(x / 15),
  ],
  walls({ offsetX: x, offsetY: y }) {
    // BUGGY AF, get a testing library
    const xM = x % 15;
    const yM = y % 15;

    const modSum = xM + yM;
    let xD = 0;
    let yD = 0;
    if (modSum > 15) {
      xD = xM < yM ? 0 : 1;
      yD = yM < xM ? 0 : 1;
    }
    const xIndex = Math.floor(x / 15) + xD;
    const yIndex = Math.floor(y / 15) + yD;

    // Which wall should we set? 0 if top, 1 if left
    const wIndex =
      (xM > yM && modSum <= 15) || (xM < yM && modSum >= 15) ? 0 : 1;

    console.log([xM, yM, xD, yD, wIndex]);

    return [yIndex, xIndex, wIndex];
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
