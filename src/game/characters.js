import LogicModule from "./LogicModule";

class Character {
  constructor(savedObj) {
    Object.assign(this, savedObj);
  }
}

export default class Characters extends LogicModule {
  all = {};

  charactersInCurrentRoom() {
    // search this.data for caracters in roomID
    return [];
  }

  initialize() {
    this.data.characters.forEach((obj) => {
      this.all[obj.name] = new Character(obj);
    });
  }

  find(nameToFind) {
    return this.all[nameToFind];
  }
}
