// Import Modules
import mapObj from "dcg-map";

export default class GameWorld {
  constructor(data) {
    this.map = new mapObj(data.map);
  }

  setSkin(skin) {
    this.skin = skin;
  }
}
