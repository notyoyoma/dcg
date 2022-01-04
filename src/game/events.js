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
    const listeners = this.eventListeners[eventName];
    if (process.env.NODE_ENV !== "production")
      console.debug([
        eventName,
        listeners && listeners.length ? listeners : "no listeners",
      ]);
    if (!listeners) return [];
    return listeners.map(({ fn }) => fn(payload));
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

export class Listener {
  unbinds = [];

  bind(eventName, fn) {
    const listenerId = `${this.constructor.name}.${fn.name}`;
    game.on(eventName, listenerId, fn.bind(this));
    this.unbinds.push([eventName, listenerId]);
  }

  unbind() {
    this.unbinds.forEach(([eventName, listenerId]) =>
      game.off(eventName, listenerId)
    );
  }
}

export const coreListeners = {};

export function listen(eventName) {
  return (target, fnName, descriptor) => {
    const className = target.constructor.name;
    if (!coreListeners[className]) {
      coreListeners[className] = [];
    }

    if (typeof eventName === "string")
      coreListeners[className].push([eventName, descriptor.value]);

    if (Array.isArray(eventName))
      coreListeners[className].push(
        ...eventName.map((eN) => [eN, descriptor.value])
      );
  };
}
