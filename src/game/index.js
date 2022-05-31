import EventBus from "./EventBus";

export class Game extends EventBus {
  _moduleListeners = {};
  _moduleUnlisteners = {};
  _moduleKeys = [];

  addListener(moduleKey, listener) {
    if (!this._moduleListeners[moduleKey])
      this._moduleListeners[moduleKey] = [];

    this._moduleListeners[moduleKey].push(listener);
  }

  addModule(module) {
    const moduleKey = module.moduleKey;
    this[moduleKey] = module;

    // bind events with instance
    const events = this._moduleListeners[moduleKey];
    this._moduleUnlisteners[moduleKey] = [];
    if (!events) return;

    events.forEach(({ className, eventName, fn }) => {
      const listenerId = `${className}.${fn.name}`;
      this.on(eventName, listenerId, fn.bind(module));
      this._moduleUnlisteners[moduleKey].push(() =>
        this.off(eventName, listenerId)
      );
    });
  }

  removeModule(module) {
    const moduleKey = module.moduleKey;
    this._moduleUnlisteners[moduleKey].forEach((unlisten) => unlisten());
    delete this._moduleUnlisteners[moduleKey];
    delete this[module.moduleKey];
  }

  initialize() {
    // emit loaded
    this.emit("Game.loaded");
  }
}

const game = new Game();
export default game;
