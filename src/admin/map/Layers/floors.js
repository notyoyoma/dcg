import {TileLayer} from "./TileLayer";
import {toolFactory} from "../Tools";
import {floorTiles as tiles} from "../Tools/Tiles";

export class Floors extends TileLayer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Floors";
    this.id= "floors";
    this.tiles = tiles;

    this.toolComponent = toolFactory({tiles});
  }

  reset() {
    // TODO - reset current layer
  }

}
