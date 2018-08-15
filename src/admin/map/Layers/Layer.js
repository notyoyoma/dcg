import {menuFactory} from "../UI";

export class Layer {
  constructor(data, setter) {
    this.data = data;
    this.setter = setter;
    this.id= "";
    this._isVisible = true;
    this.toolComponent = false;
    this.menuComponent = false;
    this.tiles = [];
    this.renderComponent = {}

    this.interaction = {};
    
    this.menuComponent = menuFactory([
      {label: "Reset", fn: this.reset}
    ]);
  }

  reset() {
    this.data = [[]];
  }

  toggleVisible() {
    this._isVisible = !this._isVisible;
  }

  get visible() {
    return this._isVisible;
  }

  setData(path, val) {
    if (_.get(this.data, path) != val) {
      this.setter("setMapData", {path, val, layerKey: this.id});
    }
  }

  renderCanvas() {}

  mousedown() {
    const self = this;
    $(window).mouseup(()=>self.interaction.mousedown = false);
  }

  mousemove() {}

  mouseup() {
    this.interaction = {};
  }

  interact() {}
}
