export class Layer {
  constructor(data, setter) {
    this.data = data;
    this.setter = setter;
    this.key = '';
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

  setData(newData) {
    this.setter('setMapData', {key: this.key, newData});
  }

  renderCanvas() {}

  mousedown() {}

  mousemove() {}

  mouseup() {}

  interact() {}
}
