import {TileLayer} from "./TileLayer";
import {toolFactory} from "../Tools";
import {menuFactory} from "../UI";
import {effectTiles as tiles} from "../Tools/Tiles";


export class Effects extends TileLayer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Effects";
    this.key = "effects";

    this.toolComponent = toolFactory({tiles});
    this.menuComponent = menuFactory([
      {label: "Reset", fn: this.reset}
    ]);
  }

  reset() {
    // TODO - add layer reset
  }
}
