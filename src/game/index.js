class Game {
  _addModule(moduleName, instance) {
    this[moduleName] = instance;
  }
}

export default new Game();
