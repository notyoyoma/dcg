// load all the module data, and add the modules to store
import characters from "./characters";
import items from "./items";
import map from "./map";
import monsters from "./monsters";
import npcs from "./npcs";
import party from "./party";
import encounter from "./encounter";

export default {
  characters,
  items,
  map,
  monsters,
  npcs,
  party,
  encounter,
};

export const initializeOrder = [
  "characters",
  "party",
  "npcs",
  "encounter",
  "items",
  "monsters",
  "map",
];
