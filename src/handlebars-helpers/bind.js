import Handlebars from "handlebars/runtime";
require("object.observe");

var uniq = uniq || 0;

module.exports = function(data, options) {

  return function (value) {
    uniq += 1;
    var id = 'dataBind_' + (uniq);

    Object.observe(data, function (changes) {
      // when the data variable changes, update the view
      document.getElementById(id).innerHTML = options.fn(data);
    });

    return new Handlebars.SafeString( `<div id="${id}">${options.fn(data)}</div>` );
  }();
};
