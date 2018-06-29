import {Layer} from './Layer';

class Floors extends Layer {
  constructor() {
    super();
    this.title = "Floors"
    this.id = "layer.floors"
  }
}

export default new Floors();
