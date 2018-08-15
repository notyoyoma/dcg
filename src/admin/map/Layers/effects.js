import {TileLayer} from "./TileLayer";
import {toolFactory} from "../Tools";
import {menuFactory} from "../UI";
import {effectTiles as tiles} from "../Tools/Tiles";


export class Effects extends TileLayer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Effects";
    this.id= "effects";
    this.tiles = tiles;

    this.toolComponent = toolFactory({tiles});
  }

  reset() {
    // TODO - add layer reset
  }
}
