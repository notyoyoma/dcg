import rooms from "./rooms";
import walls from "./walls";
import { effects, floors } from "./genericTile";

// layers by key
export default { walls, rooms, effects, floors };

// layers in the order they are presented in the sidebar
export const sidebarLayers = [walls, rooms, effects, floors];

// layers keys in the order they are rendered
export const renderOrder = ["rooms", "effects", "floors", "walls"];

// empty floor with empty layers
export const emptyFloor = {
  floors: [[]],
  effects: [[]],
  walls: [[[]]],
  roomCoords: [[]],
  rooms: {},
};
