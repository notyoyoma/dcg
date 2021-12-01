import rooms from "./rooms";
import walls from "./walls";
import { effects } from "./genericTile";

// layers by key
export default { walls, rooms, effects };

// layers in the order they are presented in the sidebar
export const sidebarLayers = [walls, rooms, effects];

// layers keys in the order they are rendered
export const renderOrder = ["rooms", "effects", "walls"];
