import keypress from 'keypress.js';

export default class Controls {
  constructor(game) {
    this.listener = new keypress.Listener();
    this.bindControls(game);
  }

  bindControls(game) {
    this.listener.simple_combo("up",    function(){game.party.moveForward();});
    this.listener.simple_combo("right", function(){game.party.turnRight();});
    this.listener.simple_combo("down",  function(){game.party.turnAround();});
    this.listener.simple_combo("left",  function(){game.party.turnLeft();});
  }
}
