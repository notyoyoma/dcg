import { Layer } from "./Layer";
import Tileset from "../Tools/Tileset";
import TileLayerRenderer from "../Canvas/TileLayer";

export class TileLayer extends Layer {
  constructor() {
    super(...arguments);
    this.renderComponent = TileLayerRenderer;
    this.toolComponent = Tileset;
  }

  mousedown(e, tool) {
    super.mousedown();
    this.interaction.mousedown = true;
    const { offsetX: x, offsetY: y } = e;
    this.interact({ x, y, tool });
  }

  mousemove(e, tool) {
    super.mousemove();
    const { offsetX: x, offsetY: y } = e;
    if (this.interaction.mousedown) {
      this.interact({ x, y, tool });
    }
  }

  interact({ x, y, tool }) {
    // do logic with this.interaction
    const xIndex = Math.floor(x / 15);
    const yIndex = Math.floor(y / 15);
    this.setData([yIndex, xIndex], tool);
  }
}
