// Import Modules
import mapObj from "dcg-map";
import Party from "dcg-party";

export default class GameWorld {
  constructor(data) {
    this.map = new mapObj(data.map);
    this.party = new Party(data.party, this);
  }

  setSkin(skin) {
    this.skin = skin;
  }
  bindControls(controls) {
    this.controls = controls;
  }
}
