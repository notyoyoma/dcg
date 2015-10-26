// A couple global modules
// Humanize is for turning camelCase, hyphen-case, or snake_case to "Human case"
global.humanize = require('humanize-string/index.js');

// Load world data
import worldData from "dcg-world-data";

// Load and initialize the Game logic
import GameWorld from "dcg-game-loader";

let game = new GameWorld( worldData );

// Load and initialize the UI Object
import GameUi from "dcg-ui-loader";

let ui = new GameUi(game);

window.game = game;
