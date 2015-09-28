console.log('Running app.js');

// Load world data
import worldData from "dcg-world-data";

// Load and initialize the Game Object
import GameWorld from "dcg-game-loader";

let game = new GameWorld( worldData );

// Load and initialize the UI Object
import GameUi from "dcg-ui-loader";

let ui = new GameUi(game);

console.log('Finished app.js');
