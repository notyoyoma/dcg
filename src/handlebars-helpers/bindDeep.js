import Handlebars     from "handlebars/runtime";
import DeepObserver   from "observed";
require("object.observe");

var uniq = uniq || 0;

module.exports = function(data, options) {

  return function (value) {
    uniq += 1;
    var id = 'dataBindDeep_' + (uniq),
        observer = DeepObserver(data);

    observer.on('change', function(change) {
      document.getElementById(id).innerHTML = options.fn(data);
    });

    return new Handlebars.SafeString( `<div id="${id}">${options.fn(data)}</div>` );
  }();
};
