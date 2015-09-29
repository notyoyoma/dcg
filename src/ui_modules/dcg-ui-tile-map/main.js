import angular from 'angular';
require('./style.scss');

// Layout Object for Golden Layout
export const layoutObj = {
  "title": "Map",
  "type": "component",
  "componentName": "angularModule",
  "componentState": {
    "module": "tile-map",
    "template": require('./template.html')
  }
};

// UI
export function init(world) {
  angular.module('tile-map', [])
  .controller('tileMapController', function( $scope, $timeout, container, state ) {
    $scope.msg = "hi";
    $scope.world = world;
  });
};

console.log('Finished dcg-ui-tile-map/main.js');
