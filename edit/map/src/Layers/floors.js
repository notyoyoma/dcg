import {Layer} from './Layer';
import {toolFactory} from '../Tools';
import {menuFactory} from '../UI';

class Floors extends Layer {
  constructor() {
    super();
    this.title = "Floors"
    this.id = "layer.floors"

    this.toolComponent = toolFactory({options: ['stairs-up', 'stairs-down', 'no-floor']})
    this.menuComponent = menuFactory([
      {label: 'Reset', fn: this.reset}
    ]);
  }

  reset() {
		// TODO - reset current layer
  }
}

export const floors = new Floors();
