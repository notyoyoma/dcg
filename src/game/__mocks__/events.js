export function event(classProto, fnName, descriptor) {}

export function listen(eventName) {
  return () => {};
}

export class Listener {
  unbinds = [];

  bind(eventName, fn) {}

  unbind() {}
}
