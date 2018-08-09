import {TileLayer} from "./TileLayer";
import {toolFactory} from "../Tools";
import {menuFactory} from "../UI";
import {floorTiles as tiles} from "../Tools/Tiles";

export class Floors extends TileLayer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Floors";
    this.key = "floors";
    this.tiles = tiles;

    this.toolComponent = toolFactory({tiles});
    this.menuComponent = menuFactory([
      {label: "Reset", fn: this.reset}
    ]);
  }

  reset() {
    // TODO - reset current layer
  }

}
