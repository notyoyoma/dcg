export default class EventBus {
  eventListeners = {};
  coreEventQueue = [];

  constructor(moduleName) {
    this.moduleName = moduleName;
  }

  on(eventName, listenerId, fn, beforeId = null) {
    if (!this.eventListeners[eventName]) {
      this.eventListeners[eventName] = [];
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
