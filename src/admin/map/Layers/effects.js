import {Layer} from './Layer';
import {toolFactory} from '../Tools';
import {menuFactory} from '../UI';


export class Effects extends Layer {
  constructor(data, setter) {
    super(data, setter);
    this.title = "Effects"
    this.key = "effects"

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
