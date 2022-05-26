import EventBus from "./EventBus";

export class Game extends EventBus {
  _coreEventQueue = [];
  _moduleKeys = [];

  addModules(modules) {
    this._moduleKeys = Object.keys(modules);
    this._moduleKeys.forEach((key) => {
      this[key] = modules[key];
    });
  }

  get modules() {
    return this._moduleKeys.map((key) => this[key]);
  }

  addCoreEvent(event) {
    this._coreEventQueue.push(event);
  }

  initializeModule(moduleKey) {
    const module = this[moduleKey];
    const moduleClassName = module.constructor.name;
    const events = this._coreEventQueue.filter(
      ({ className }) => className === moduleClassName
    );
    if (events.length)
      events.forEach(({ eventName, fn }) => {
        const instance = this[moduleKey];
        const listenerId = `${moduleKey}.${fn.name}_CORE`;
        this.on(eventName, listenerId, fn.bind(instance));
      });
  }

  initialize() {
    this._moduleKeys.forEach(this.initializeModule.bind(this));
    // emit loaded
    this.emit("Game.loaded");
  }
}

const game = new Game();
export default game;
