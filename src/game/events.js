import game from "@/game";

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
  return (target, fnName, descriptor) => {
    const className = target.constructor.name;

    const fn = descriptor.value;
    if (typeof eventName === "string")
      game.addCoreEvent({ className, eventName, fn });

    if (Array.isArray(eventName))
      eventName.forEach((eventName) => {
        game.addCoreEvent({ className, eventName, fn });
      });
  };
}

export class Listener {
  unbinds = [];

  bind(eventName, fn) {
    const listenerId = `${this.constructor.name}.${fn.name}`;
    game.on(eventName, listenerId, fn.bind(this));
    const unbind = () => game.off(eventName, listenerId);
    this.unbinds.push(unbind);
    return unbind;
  }

  unbind() {
    this.unbinds.forEach((unbind) => unbind());
  }
}
