import BaseModule from "./BaseModule";

class Character {
  constructor(savedObj) {
    Object.assign(this, savedObj);
  }
}

export default class Characters extends BaseModule {
  moduleName = "characters";
  all = {};

  charactersInCurrentRoom() {
    // search this.data for caracters in roomID
    return [];
  }

  async loadData() {
    await super.loadData();

    this.data.characters.forEach((obj) => {
      this.all[obj.name] = new Character(obj);
    });
  }

  find(nameToFind) {
    return this.all[nameToFind];
  }
}
