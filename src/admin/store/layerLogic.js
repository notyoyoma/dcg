import store from "./index";

const layerActChecks = {
  default: ({ type }) => type === "mousedown",
  rooms: (event, mouseHeldDown) => mouseHeldDown || event.type === "mouseup",
  walls({ offsetX: x, offsetY: y, type }, mouseHeldDown) {
    if (type !== "mousemove" || !mouseHeldDown) return false;
    const xM = x % 15;
    const yM = y % 15;
    const modSum = xM + yM;

    // SKIP if the cursor is...
    // on a pixel that is between the interatable triangles
    if (x == y || modSum == 14) return false;
    //    in top left 3x3     in top right 3x3     in bottom left 3x3   in bottom right 3x3
    if (
      (x < 3 && y < 3) ||
      (x > 11 && y < 3) ||
      (x < 3 && y > 11) ||
      (x > 11 && y > 11)
    )
      return false;
    //  in the middle 3x3
    if (x > 4 && x < 8 && y > 4 && y < 8) return false;
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
    const xM = x % 15;
    const yM = y % 15;

    const modSum = xM + yM;
    // If the cursor is...
    // on the upper or left interactable triangles
    let xD, yD;
    if (modSum < 14) {
      xD = 0;
      yD = 0;
    } else {
      xD = x > y ? 1 : 0;
      yD = x > y ? 0 : 1;
    }
    const xIndex = Math.floor(x / 15) + xD;
    const yIndex = Math.floor(y / 15) + yD;

    // Which wall should we set? 0 if top, 1 if left
    const wIndex = (xM > yM && modSum < 14) || (xM < yM && modSum > 14) ? 0 : 1;

    return [yIndex, xIndex, wIndex];
  },
};

const interactions = {
  default: ({
    currentToolIndex,
    event,
    currentLayerKey,
    currentFloorIndex,
  }) => {
    const value = currentToolIndex === 0 ? null : currentToolIndex;
    const coordMapper =
      layerCoordMappers[currentLayerKey] || layerCoordMappers.default;
    const coordPath = coordMapper(event, currentLayerKey);
    const path = [currentFloorIndex, currentLayerKey, ...coordPath];
    store.commit("map/setValueAtPath", { path, value });
  },
};

export function interactWithLayer(args) {
  const interact = interactions[args.currentLayerKey] || interactions.default;
  interact(args);
}
