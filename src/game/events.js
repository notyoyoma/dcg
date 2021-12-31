import game from "@/game";

export class EventBus {
  eventListeners = {};

  /**
   * @param  {string} eventName
   * @param  {string} listenerId
   * @param  {function} fn
   * @param  {string} beforeId=null
   */
  on(eventName, listenerId, fn, beforeId = null) {
    if (!this.eventListeners[eventName]) {
      this.eventListeners[eventName] = [];
    }

    // do not allow listeners with duplicate IDs
    const oldListener = this.eventListeners[eventName].find(
      ({ id }) => listenerId === id
    );
    if (oldListener) {
      this.off(eventName, listenerId);
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

  off(eventName, idToRemove) {
    if (!this.eventListeners[eventName]) return;
    const events = this.eventListeners[eventName];
    const index = events.findIndex(({ id }) => id === idToRemove);
    events.splice(index, 1);
  }

  emit(eventName, payload = {}) {
    if (!this.eventListeners[eventName]) return [];
    return this.eventListeners[eventName].map(({ fn }) => fn(payload));
  }
}

export class Listener {
  queuedListeners = [];
  unbinds = [];

  constructor() {
    this.queuedListeners.forEach(([...args]) => this.bind(...args));
  }

  bind(eventName, fn) {
    const bindId = `${this.constructor.name}.${fn.name}`;
    game.on(eventName, bindId, fn.bind(this));
    const unbind = () => game.off(eventName, bindId);
    this.unbinds.push = unbind;
    return unbind;
  }

  destructor() {
    this.unbinds.forEach((unbind) => unbind());
  }
}

const areFalse = (result) => result === false;

export function event(classProto, fnName, descriptor) {
  const original = descriptor.value;
  const className = classProto.constructor.name;

  descriptor.value = function (...args) {
    const beforeChecks = game.emit(`before:${className}.${fnName}`);
    if (beforeChecks.some(areFalse)) return;
    original.apply(this, args);
    game.emit(`after:${className}.${fnName}`);
  };
}

export function listen(eventName) {
  return function (classProto, fnName, descriptor) {
    // Make sure the classProto is a child of Listener
    if (classProto.queuedListeners === undefined)
      classProto.queuedListeners = [];

    // @listen("Game.loaded")
    if (typeof eventName === "string")
      classProto.queuedListeners.push([eventName, descriptor.value]);

    // @listen(["Game.loaded", "before:Party.move"])
    if (Array.isArray(eventName))
      classProto.queuedListeners.push(
        ...eventName.map((eN) => [eN, descriptor.value])
      );
  };
}
