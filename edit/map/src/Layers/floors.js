import {Layer} from './Layer';
import {toolFactory} from '../Tools'

class Floors extends Layer {
  constructor() {
    super();
    this.title = "Floors"
    this.id = "layer.floors"

    this.toolComponent = toolFactory({options: ['stairs-up', 'stairs-down', 'no-floor']})
  }
}

export const floors = new Floors();
