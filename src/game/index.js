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
