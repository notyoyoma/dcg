import axios from "axios";
import { getLSD, setLSD } from "@/utils/localStorage";
import game from "@/game";
import { Listener } from "@/game/events";

// a game.[module]
export class GameSingleton extends Listener {
  constructor() {
    super();
    this.moduleKey = this.constructor.name.toLowerCase();
    game.addModule(this);
  }

  destroy() {
    game.removeModule(this);
  }
}

// A game.[module] singleton with .data and a vuex store
export default class GameModule extends GameSingleton {
  data = {};

  async loadData(allowCache = true) {
    const lsd = getLSD(this.moduleKey);
    if (allowCache && lsd) this.data = lsd;
    else {
      const { data } = await axios.get(`/data/${this.moduleKey}.json`);
      this.data = data;
    }
  }

  // TODO debounce by game loop duration, and queue all changes during game loop for single update
  update(value) {
    if (typeof value === "string") {
      this.context.commit("setState", { [value]: this.data[value] });
    } else if (typeof value === "object") {
      this.context.commit("setState", value);
    } else if (!value) {
      this.context.commit("setState", this.data);
    }
  }

  save() {
    setLSD(this.moduleKey, this.data);
  }

  get vuexActions() {
    const self = this;
    return {
      initialize(context) {
        self.context = context;
        self.update();
      },
    };
  }
}
