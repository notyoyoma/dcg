import GameModule from "./GameModule";

class Character {
  constructor(savedObj) {
    Object.assign(this, savedObj);
  }
}

export class Characters extends GameModule {
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

export const characters = new Characters();
