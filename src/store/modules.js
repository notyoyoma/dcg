// load all the module data, and add the modules to store
import characters, { Characters } from "./characters";
import items, { Items } from "./items";
import map, { Map } from "./map";
import monsters, { Monsters } from "./monsters";
import npcs, { Npcs } from "./npcs";
import party, { Party } from "./party";

export default {
  characters,
  items,
  map,
  monsters,
  npcs,
  party,
};

export const logicClasses = {
  Characters,
  Items,
  Map,
  Monsters,
  Npcs,
  Party,
};

export const initializeOrder = [
  "characters",
  "party",
  "npcs",
  "items",
  "monsters",
  "map",
];
