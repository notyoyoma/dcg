import game from "@/game";
import { BindApplicator } from "lodash-decorators/applicators";
import { DecoratorFactory, DecoratorConfig } from "lodash-decorators";

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
    if (process.env.NODE_ENV !== "production") console.debug(eventName);
    if (!this.eventListeners[eventName]) return [];
    return this.eventListeners[eventName].map(({ fn }) => fn(payload));
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

class ListenerApplicator extends BindApplicator {
  constructor(...args) {
    super(...args);
    this.listeners = [];
  }
}

function addListenerToInstance(boundFn, self, eventName) {
  if (self) {
    const id = `${self.constructor.name}.${boundFn.name}`;
    game.on(eventName, id, boundFn);
  } else {
    throw "fuck you";
  }
}

const listenDecorator = DecoratorFactory.createInstanceDecorator(
  new DecoratorConfig(addListenerToInstance, new ListenerApplicator())
);

export function listen(eventName) {
  return listenDecorator(eventName);
}
