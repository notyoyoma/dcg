// Layout Engine Requirements
import GoldenLayout from "golden-layout";
import Skin from "dcg-ui-skin";
import Controls from "dcg-ui-controls";
let uiModuleComponent = require("./golden-ui-component.js");

// Layout Engine
export default function gameUi(game) {
  // List all avaliable UI Modules here
  let modules = {
      tileMap: require("dcg-ui-tile-map"),
      party: require("dcg-ui-party"),
      character: require("dcg-ui-character"),
      encounter: require("dcg-ui-encounter"),
    },
    windows = {};

  // Get the template from each module
  for (let key in modules) {
    windows[key] = uiModuleComponent.getLayoutObj(modules[key], game);
  }

  // Setup default layout
  let myLayout = new GoldenLayout({
    content: [
      {
        type: "row",
        content: [
          windows.tileMap,
          windows.party,
          windows.character,
          windows.encounter,
        ],
      },
    ],
  });

  myLayout.registerComponent("uiModule", uiModuleComponent.register);

  game.setSkin(new Skin());
  game.bindControls(new Controls(game));
  myLayout.init();
}

console.log("Finished dcg-ui-loader/main.js");
