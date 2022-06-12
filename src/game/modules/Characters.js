import GameModule from "./GameModule";

class Character {
  constructor(savedObj) {
    Object.assign(this, savedObj);
  }

  act() {
    console.info(`${this.name} acted!`);
    // TODO split out to fight/cast/etc
  }

  get actions() {
    // TODO multiple swings generate multiple actions
    return [
      {
        actor: this,
        execute: this.act.bind(this),
      },
    ];
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
