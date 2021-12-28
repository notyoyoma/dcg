import EventBus from "./EventBus";

export class Game extends EventBus {
  coreEventQueue = [];

  _addModule(moduleName, instance) {
    this[moduleName] = instance;
  }

  queueCoreEventListener(eventObj) {
    this.coreEventQueue.push(eventObj);
  }

  bindCoreEvents() {
    this.coreEventQueue.forEach(
      ({ eventName, className, fnName, moduleName, fn }) => {
        const instance = this[moduleName];
        this.on(eventName, `CORE.${className}.${fnName}`, fn.bind(instance));
      }
    );

    this.emit("Game.loaded");
  }
  /**
   * @param  {string} eventName Name of event to listen for
   * @param  {function} fn function to trigger
   * @param  {object} self instance of the class that is binding
   * @param  {string} beforeId=null ID to insert listener ahead of
   * @returns {function} Function for unbinding the event
   */
  bind(eventName, fn, self, beforeId = null) {
    const className = self.constructor.name;
    const listenerId = `${className}.${fn.name}`;
    this.on(eventName, listenerId, fn.bind(self), beforeId);
    return () => this.off(eventName, listenerId);
  }
}

const game = new Game();
export default game;
const areFalse = (result) => result === false;

export function event(classProto, fnName, descriptor) {
  const original = descriptor.value;
  const className = classProto.constructor.name;

  descriptor.value = function (...args) {
    const beforeChecks = game.emit(`${className}.before.${fnName}`);
    if (beforeChecks.some(areFalse)) return;
    original.apply(this, args);
    game.emit(`${className}.after.${fnName}`);
  };
}

export function on(eventName) {
  return function (classProto, fnName, descriptor) {
    const className = classProto.constructor.name;
    const moduleName = className.toLowerCase();
    if (typeof eventName === "string") {
      game.queueCoreEventListener({
        eventName,
        className,
        fnName,
        moduleName,
        fn: descriptor.value,
      });
    }
    if (Array.isArray(eventName)) {
      eventName.forEach((e) => {
        game.queueCoreEventListener({
          eventName: e,
          className,
          fnName,
          moduleName,
          fn: descriptor.value,
        });
      });
    }
  };
}

export class Bindable {
  unbinds = [];

  bind(eventName, fn) {
    this.unbinds.push = game.bind(eventName, fn, this);
  }

  unbind() {
    this.unbinds.forEach((unbind) => unbind());
  }
}
