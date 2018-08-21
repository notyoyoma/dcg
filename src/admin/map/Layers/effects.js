import {TileLayer} from "./TileLayer";
import {effectTiles as tiles} from "../Tools/Tiles";


export class Effects extends TileLayer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Effects";
    this.id= "effects";
    this.tiles = tiles;
  }

  reset() {
    // TODO - add layer reset
  }
}
