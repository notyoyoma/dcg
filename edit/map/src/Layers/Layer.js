export class Layer {
  constructor() {
    this._data = [];
    this._isVisible = true;
    this.toolComponent = false;
    this.menuComponent = false;
  }

  toggleVisible() {
    this._isVisible = !this._isVisible;
  }

  get visible() {
    return this._isVisible;
  }

  get data() {
    return this._data;
  }

  renderCanvas() {
  }

  mousedown() {
  }

  mouseup() {
  }
}
