import log from "dcg-log"

export default class Party {
  constructor(data, world) {
    this.members     = data.members || [];
    this.location    = data.location || { x:0, y:0, z:0 };
    this.currentZone = data.currentZone || 0;
    this.facing      = data.facing || 0;
    this.maxSize     = 4;
    this.world       = world;
    this.updaters    = [];
  }

  addMember(character) {
    if (this.members.length + 1 > this.maxSize) {
      log.error({
        type: 'party',
        text: 'Cannot have more than 4 characters in a party.'
      });
    } else {
      this.members.push(character);
    }
  }

  kickMember(index) {
    let character = this.members[index].pop();
    character.currentZone = this.currentZone;
  }

  reorderMember(newindex,oldIndex) {
    let character = this.members[oldIndex].pop();
    this.members.splice(newIndex, 0, character);
  }

  moveForward() {
    let resultObj = this.world.map.tryMove(this.location, this.facing);
    if (resultObj.success) {
      this.location = resultObj.location;
      this.facing   = resultObj.location;
    } else {
      log.message({
        type: 'party',
        message: resultObj.message
      });
    }
  }

  turn(delta) {
    let newFace = this.facing + delta;
    if (newFace < 0) {
      this.facing = 4 + newFace;
    } else if (newFace > 3) {
      this.facing = newFace - 4;
    } else {
      this.facing = newFace;
    }
    this.update();
  }
  turnLeft() {
    this.turn(-1);
  }
  turnRight() {
    this.turn(1);
  }
  turnAround() {
    this.turn(-2);
  }

  addUpdater(func) {
    this.updaters.push(func);
  }
  update() {
    for (let i in this.updaters) {
      this.updaters[i]();
    }
  }
}
