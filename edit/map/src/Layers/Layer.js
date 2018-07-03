export class Layer {
  constructor() {
    this._data = [];
    this._isVisible = true;
    this.active = false;
    this.toolComponent = false;
  }

  toggleVisible() {
    this._isVisible = !this._isVisible;
  }

  setActive(newValue) {
    this.active = newValue;
  }

  menu () {
    return false;
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
