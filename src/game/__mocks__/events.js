export function event(classProto, fnName, descriptor) {}

export class Listener {
  unbinds = [];

  bind(eventName, fn) {}

  unbind() {}
}

export function listen(eventName) {
  return () => {};
}
