import game from "@/game";
import { get } from "@/utils/object";

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

// can only be used in GameSingletons
export function listen(eventName) {
  return (target, fnName, descriptor) => {
    const className = target.constructor.name;
    const moduleKey = className.toLowerCase();

    const fn = descriptor.value;
    if (typeof eventName === "string")
      game.addListener(moduleKey, { className, eventName, fn });

    if (Array.isArray(eventName))
      eventName.forEach((eventName) => {
        game.addListener(moduleKey, { className, eventName, fn });
      });
  };
}

export const mixin = {
  data: () => ({
    unbinds: [],
  }),
  methods: {
    $bind(eventName, fn) {
      const componentName = this.$options.name;
      if (!componentName)
        throw `You must define component name in ${this.$options.__file}`;
      const fnName = fn.name.match(/[^\s]+$/)[0];
      const listenerId = `${componentName}.${fnName}`;
      game.on(eventName, listenerId, fn);
      const unbind = () => game.off(eventName, listenerId);
      this.unbinds.push(unbind);
      return unbind;
    },
  },
  beforeDestroy() {
    this.unbinds.forEach((unbind) => unbind());
  },
};

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

// a game.[module]
export class GameSingleton extends Listener {
  constructor() {
    super();
    this.moduleKey = this.constructor.name.toLowerCase();
    game.addModule(this);
  }

  destroy() {
    game.removeModule(this);
  }

  get(...args) {
    return get(this, ...args);
  }
}
