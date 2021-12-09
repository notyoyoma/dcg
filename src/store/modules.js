// load all the module data, and add the modules to store
import characters from "./characters";
import items from "./items";
import map from "./map";
import monsters from "./monsters";
import npcs from "./npcs";
import party from "./party";

export default {
  characters,
  items,
  map,
  monsters,
  npcs,
  party,
};

export const initializeOrder = [
  "characters",
  "party",
  "npcs",
  "items",
  "monsters",
  "map",
];
