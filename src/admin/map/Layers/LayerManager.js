import {Effects} from './Effects';
import {Floors} from './Floors';

export class LayerManager {
  constructor($store) {
    this.$store = $store;
    this.layers = [];
    updateFloors();
  }

  updateFloors() {
    const currentFloor = this.$store.getters.getCurrentFloor();
    const {floors, effects} = currentFloor;
    this.layers = [
      new Floors(floors),
      new Effects(effects),
    ];
  }

  get current() {
    return this.layers[this.$store.currentLayerIndex];
  }

}
