import {Layer} from './Layer';

class Effects extends Layer {
  constructor() {
    super();
    this.title = "Effects"
    this.id = "layer.effects"
  }
}

export const effects = new Effects();
