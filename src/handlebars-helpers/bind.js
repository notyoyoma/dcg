import Handlebars from "handlebars/runtime";
require("object.observe");

module.exports = function(data, options) {

  var uniq = 0;

  return function (value) {
    var id = 'dataBind_' + (++uniq);

    Object.observe(data, function (changes) {
      // when the data variable changes, update the view
      document.getElementById(id).innerHTML = options.fn(data);
    });

    return new Handlebars.SafeString( `<div id="${id}">${options.fn(data)}</div>` );
  }();
};
