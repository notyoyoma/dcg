import { EventBus } from "./events";
import Characters from "./modules/Characters";
import Items from "./modules/Items";
import Map from "./modules/Map";
import Monsters from "./modules/Monsters";
import Npcs from "./modules/Npcs";
import Party from "./modules/Party";
import Encounter from "./modules/Encounter";

export class Game extends EventBus {
  coreEventQueue = [];

  constructor() {
    super();

    // Setup Modules
    this.Characters = new Characters();
    this.Items = new Items();
    this.Map = new Map();
    this.Monsters = new Monsters();
    this.Npcs = new Npcs();
    this.Party = new Party();
    this.Encounter = new Encounter();
  }

  // Initialize these in order?
  get modules() {
    return [
      this.Characters,
      this.Party,
      this.Npcs,
      this.Encounter,
      this.Items,
      this.Monsters,
      this.Map,
    ];
  }

  initialize() {
    // emit loaded
    this.emit("Game.loaded");
  }
}

const game = new Game();
export default game;
