import { TileLayer } from "./TileLayer";
import { floorTiles as tiles } from "../Tools/Tiles";

export class Floors extends TileLayer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Floors";
    this.id = "floors";
    this.tiles = tiles;
  }
}
