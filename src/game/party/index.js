export default class Party {
  constructor(data) {
    this.location          = data.location || { x:0, y:0, z:0 };
    this.currentZone       = data.currentZone || 0;
    this.facing            = data.facing || 0;
    this.maxSize           = 4;
    this.selectedCharacter = 0;

    this.initCharacters(data);
  }

  initCharacters(data) {
    if (data.characters && data.characters.length) {
      this.characters = [];
      for (let charName of data.characters) {
        this.characters.push(
          this.world.characters.find(function(c) {
            return charName == c.name;
          })
        );
      }
      this.currentCharacter = this.characters[0];
    } else {
      //TODO - create character modal
    }
  }

  addMember(character) {
    if (this.characters.length + 1 > this.maxSize) {
      log.error({
        type: 'party',
        text: 'Cannot have more than 4 characters in a party.'
      });
    } else {
      this.characters.push(character);
    }
  }

  kickMember(index) {
    let character = this.characters[index].pop();
    character.currentZone = this.currentZone;
  }

  reorderMember(newindex,oldIndex) {
    let character = this.characters[oldIndex].pop();
    this.characters.splice(newIndex, 0, character);
  }

  // Movement Methods
  moveForward() {
    let resultObj = this.world.map.tryMove(this.location, this.facing);
    if (resultObj.success) {
      if ( this.currentZone != resultObj.newTile.zone ) {
        this.currentZone = resultObj.newTile.zone
        this.doEncounter();
      }
    }
    if (resultObj.message) {
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
}
