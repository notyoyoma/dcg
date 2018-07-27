import {Layer} from './Layer';

export class Effects extends Layer {
  constructor(data) {
    super(data);
    this.title = "Effects"
    this.id = "layer.effects"

    this.toolComponent = toolFactory({
      options: ['fog', 'puddle',
        'light-0', 'light-1', 'light-2', 'light-3', 'light-4', 'light-5']
    });
    this.menuComponent = menuFactory([
      {label: 'Reset', fn: this.reset}
    ]);
  }

  reset() {
    // TODO - add layer reset
  }
}
