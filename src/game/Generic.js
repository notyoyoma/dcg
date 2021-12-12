export default class GenericLogic {
  data = {};

  constructor(context, moduleName, data) {
    this.moduleName = moduleName;
    this.context = context;

    const LSData = localStorage.getItem(this.moduleName);
    if (LSData) {
      this.data = JSON.parse(LSData);
    } else {
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
    localStorage.setItem(this.moduleName, this.data);
  }

  async initialize() {
    this.update(this.data);
  }
}
