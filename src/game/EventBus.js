export default class EventBus {
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
