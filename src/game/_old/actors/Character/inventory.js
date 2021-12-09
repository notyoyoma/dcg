export default class Inventory {
  constructor(data) {
    if (data) {
      this.slots = data;
    } else {
      this.initializeSlots();
    }
  }

  /*
   * initialize this.slots with an array of null values
   *
   * we have to do this with a loop, because Array(30) would
   * create an array of "undefined" which won't work later.
   */
  initializeSlots() {
    this.slots = [];
    for (let i = 0; i < 30; i += 1) {
      this.slots.push(null);
    }
  }

  /*
   * Drops an item in the first empty slot
   */
  addItem(item) {
    let slotNum = this.slots.indexOf(null);
    if (slotNum != -1) {
      this.slots[slotNum] = item;
    } else {
      log.message({
        type: "party",
        message: `${this.name}'s inventory is full.`,
      });
      return false;
    }
  }

  /*
   * removes an item from the desired slot.
   * returns the item.
   */
  removeItem(slotNum) {
    let item = this.slots[slotNum];
    this.slots[slotNum] = null;
    return item;
  }

  /*
   * check if inventory is full
   */
  isFull() {
    return this.slots.indexOf(null) == -1;
  }
}
