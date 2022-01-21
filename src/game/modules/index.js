import Characters from "./Characters";
import Items from "./Items";
import Map from "./Map";
import Monsters from "./Monsters";
import Npcs from "./Npcs";
import Party from "./Party";
import Encounter from "./Encounter";

export default {
  Characters: new Characters(),
  Items: new Items(),
  Map: new Map(),
  Monsters: new Monsters(),
  Npcs: new Npcs(),
  Party: new Party(),
  Encounter: new Encounter(),
};
