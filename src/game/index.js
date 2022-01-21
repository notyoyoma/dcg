import EventBus from "./EventBus";
import modules from "./modules";

export class Game extends EventBus {
  coreEventQueue = [];
  _moduleKeys = [];

  constructor() {
    super();

    Object.assign(this, modules);
    this._moduleKeys = Object.keys(modules);
  }

  // Initialize these in order?
  get modules() {
    return this._moduleKeys.map((key) => this[key]);
  }

  initializeModule(instance) {
    const className = instance.constructor.name;
    const moduleListeners = coreListeners[className];
    if (moduleListeners)
      moduleListeners.forEach(([eventName, fn]) => {
        const listenerId = `${className}.${fn.name}`;
        this.on(eventName, listenerId, fn.bind(instance));
      });
  }

  initialize() {
    this.modules.forEach(this.initializeModule.bind(this));
    // emit loaded
    this.emit("Game.loaded");
  }
}

const game = new Game();
export default game;
