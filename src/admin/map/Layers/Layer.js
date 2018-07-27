export class Layer {
  constructor(data, setter) {
    this.data = data;
    this.setter = setter;
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
    return this.data;
  }

  set data(newData) {
    this.setter(newData)
  }

  renderCanvas() {}

  mousedown() {}

  mousemove() {}

  mouseup() {}

  interact() {}
}
