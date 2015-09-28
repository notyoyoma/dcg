// Layout Engine
import  GoldenLayout  from  'golden-layout/dist/goldenlayout.js';
import  Skin          from  'dcg-ui-skin';

// Avaliable Windows
let modules = {
    tileMap: require('dcg-ui-tile-map'),
  },
  ui_initializers  =  [],
  windows          =  {};

for ( let key in modules) {
  ui_initializers.push( modules[key].init );
  windows[key] = modules[key].layoutObj;
}

// Default Layout
let myLayout = new GoldenLayout({
  "content": [{
    "type": "row",
    "content": [
      windows.tileMap,
    ],
  }]
});
let angularModuleComponent = require('./golden-angular-component.js');
myLayout.registerComponent( 'angularModule', angularModuleComponent );

export default function gameUi(game) {
  game.setSkin(new Skin());
  for (let initializer of ui_initializers) {
    initializer(game);
  }
  myLayout.init();
};


console.log('Finished dcg-ui-loader/main.js');
