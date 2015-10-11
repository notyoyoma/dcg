import Handlebars     from "handlebars/runtime";
import DeepObserver   from "observed";
require("object.observe");

module.exports = function(data, options) {

  var uniq = 0;

  return function (value) {
    var id = 'dataBindDeep_' + (++uniq),
        observer = DeepObserver(data);

    observer.on('change', function(change) {
      document.getElementById(id).innerHTML = options.fn(data);
    });

    return new Handlebars.SafeString( `<div id="${id}">${options.fn(data)}</div>` );
  }();
};
