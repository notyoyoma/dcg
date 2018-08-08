import {Layer} from "./Layer";

export class TileLayer extends Layer {

  mousedown(e, tool) {
    super.mousedown();
    this.interaction.mousedown = true;
    const {offsetX: x, offsetY: y} = e;
    this.interact({x, y, tool});
  }

  mousemove(e, tool) {
    super.mousemove();
    const {offsetX: x, offsetY: y} = e;
    if (this.interaction.mousedown) {
      this.interact({x, y, tool});
    }
  }

  interact({x, y, tool}) {
    // do logic with this.interaction
    const xIndex = Math.floor(x / 15);
    const yIndex = Math.floor(y / 15);
    if (_.isEmpty(this.data[yIndex])) this.data[yIndex] = [];
    this.setData([yIndex, xIndex], tool);
  }
}
