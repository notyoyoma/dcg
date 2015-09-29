// Get goldenlayout CSS
require("golden-layout/src/css/goldenlayout-base.css");
require("golden-layout/src/css/goldenlayout-dark-theme.css");

// Get skin SCSS
require("./main.scss");
require("./tile-map.scss");

export default class Skin {
  constructor() {
  }

  getWallStyle( wallsArr ) {
    let propArr = [
      'border-right',
      'border-bottom'
    ],
    result = "";
    wallsArr.forEach(function(wallId, index) {
      switch (wallId) {
        case 2:
          result += propArr[index] + '-style: dotted;';
          result += propArr[index] + '-color: initial;';
          break;
        case 3:
          result += propArr[index] + '-style: dashed;';
          result += propArr[index] + '-color: initial;';
          break;
        case 4:
          result += propArr[index] + '-color: initial;';
          break;
        default:
          result += propArr[index] + '-style: hidden;';
          break;
      }
    });
    return result;
  }
  getTileStyle( tile ) {
    return "";
  }
}
