// Import Modules
import  mapObj     from  "dcg-map";
import  Character  from  "dcg-character";
import  Party      from  "dcg-party";
import  log        from  "dcg-log"


export default class GameWorld {
  constructor(data) {
    this.map = new mapObj(data.map);
    this.loadCharacters(data.characters);
    this.party = new Party(data.party, this);
  }

  loadCharacters(data) {
    this.characters = [];
    for (let charData of data) {
      this.characters.push(new Character(charData));
    }
  }

  setSkin(skin) {
    this.skin = skin;
  }

  bindControls(controls) {
    this.controls = controls;
  }
}
