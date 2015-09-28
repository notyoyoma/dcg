// Get goldenlayout CSS
require("golden-layout/src/css/goldenlayout-base.css");
require("golden-layout/src/css/goldenlayout-dark-theme.css");

// Get skin SCSS
require("./main.scss");

export default class Skin {
  constructor() {
  }

  getTileStyle() {
    return "width:10px;height:10px;border:1px solid transparent;background:#eee";
  }
}
