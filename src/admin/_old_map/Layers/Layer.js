import { menuFactory } from "../UI";
import get from "lodash/get";

export class Layer {
  constructor(data, setter) {
    this.data = data;
    this.setter = setter;
    this.id = "";
    this._isVisible = true;
    this.toolComponent = false;
    this.menuComponent = false;
    this.tiles = [];
    this.renderComponent = {};

    this.interaction = {};

    this.menuComponent = menuFactory([{ label: "Reset", fn: this.reset }]);
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

  getData(path, dflt) {
    return get(this.data, path, dflt);
  }

  interactionPath(e) {
    const { offsetX: x, offsetY: y } = e;
    const xIndex = Math.floor(x / 15);
    const yIndex = Math.floor(y / 15);
    return [yIndex, xIndex];
  }

  setData(path, val) {
    if (get(this.data, path) != val) {
      this.setter("setMapData", { path, val, layerKey: this.id });
    }
  }

  renderCanvas() {}

  mousedown() {
    const self = this;
    $(window).mouseup(() => (self.interaction.mousedown = false));
  }

  mousemove() {}

  mouseup() {
    this.interaction = {};
  }

  interact() {}
}
