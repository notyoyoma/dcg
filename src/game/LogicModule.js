import { getLSD, setLSD } from "@/utils/localStorage";

export default class LogicModule {
  data = {};

  constructor(context, moduleName, data) {
    this.moduleName = moduleName;
    this.context = context;

    this.data = getLSD(this.moduleName) || data;
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

  initialize() {
    this.update(this.data);
  }
}
