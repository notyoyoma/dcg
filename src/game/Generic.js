export default class GenericLogic {
  data = {};
  eventListeners = {};

  constructor(context, moduleName, data) {
    this.moduleName = moduleName;
    this.context = context;

    const LSData = localStorage.getItem(this.moduleName);
    if (LSData) {
      this.data = JSON.parse(LSData);
    } else {
      this.data = data;
    }
    console.log(`Game.${this.moduleName} loaded`);
    console.log(this);
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

  initialize() {
    this.update(this.data);
    console.log(`Game.${this.moduleName} initialized`);
  }

  addListener(eventName, listenerId, fn, beforeId = null) {
    if (!this.eventListeners[eventName]) {
      this.eventListeners[eventName] = [];
    }
    const newListener = { id: listenerId, fn };
    if (beforeId) {
      const index = this.eventListeners[eventName].findIndex(
        ({ id }) => id === beforeId
      );
      if (index >= 0) {
        this.eventListeners[eventName].splice(index - 1, 0, newListener);
        return;
      }
    }
    this.eventListeners[eventName].push(newListener);
  }

  removeListener(eventName, idToRemove) {
    if (!this.eventListeners[eventName]) return;
    const events = this.eventListeners[eventName];
    const index = events.findIndex(({ id }) => id === idToRemove);
    events.splice(index, 1);
  }

  emit(eventName, payload = {}) {
    if (!this.eventListeners[eventName]) return;
    this.eventListeners[eventName].forEach(({ fn }) => fn(payload));
  }
}
