import {Layer} from './Layer';
import {toolFactory} from '../Tools';
import {menuFactory} from '../UI';

export class Floors extends Layer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Floors";
    this.key = "floors";

    this.toolComponent = toolFactory({
      options: ['stairs-up', 'stairs-down', 'no-floor']
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
    $(window).mouseup(()=>{self.interaction.mousedown = false})
  }

  mousemove(e, tool) {
    const {offsetX: x, offsetY: y} = e;
    if (this.interaction.mousedown) {
      this.interact({x, y, tool});
    }
  }

  interact({x, y, tool}) {
    console.log(tool);
    // do logic with this.interaction
    const xIndex = Math.floor(x / 80);
    const yIndex = Math.floor(y / 80);
    this.data[x][y] = tool;
  }
}
