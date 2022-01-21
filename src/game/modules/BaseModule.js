import axios from "axios";
import { getLSD, setLSD } from "@/utils/localStorage";

export default class BaseModule {
  _instance = null;
  data = {};

  constructor() {
    this._instance = this;
  }

  get instance() {
    if (this._instance === null) {
      this._instance = new this.constructor();
    }
    return this._instance;
  }

  async loadData() {
    const lsd = getLSD(this.moduleName);
    if (lsd) this.data = lsd;
    else {
      const { data } = await axios.get(`/data/${this.moduleName}.json`);
      this.data = data;
    }
  }

  injectData(data) {
    this.data = data;
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
    setLSD(this.moduleName, this.data);
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
