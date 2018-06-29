export class Layer {
  constructor() {
    this._data = [];
    this._isVisible = true;
  }

  toggleVisible() {
    this._isVisible = !this._isVisible;
  }

  menu () {
    return '...';
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
