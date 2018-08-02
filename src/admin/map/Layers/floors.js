import {Layer} from './Layer';
import {toolFactory} from '../Tools';
import {menuFactory} from '../UI';
import {tiles} from '../Tools/Tiles';

export class Floors extends Layer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Floors";
    this.key = "floors";

    this.toolComponent = toolFactory({
      options: tiles
    });
    this.menuComponent = menuFactory([
      {label: 'Reset', fn: this.reset}
    ]);

    this.interaction = {};

    this.mousedown = this.mousedown.bind(this);
    this.mousemove = this.mousemove.bind(this);
    this.mouseup = this.mouseup.bind(this);
  }

  reset() {
		// TODO - reset current layer
  }

  mousedown(e, tool) {
    this.interaction.mousedown = true;
    const self = this;
    const {offsetX: x, offsetY: y} = e;
    this.interact({x, y, tool});
    $(window).mouseup(()=>{self.interaction.mousedown = false})
  }

  mousemove(e, tool) {
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
