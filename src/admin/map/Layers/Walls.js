import {Layer} from "./Layer";
import {toolFactory} from "../Tools";
import {walls} from "../Tools/Walls";

export class Walls extends Layer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Walls";
    this.key = "walls";

    this.toolComponent = toolFactory({tiles: walls});
  }

  mousedown() {}
  mousemove() {}
  mouseup() {}
}