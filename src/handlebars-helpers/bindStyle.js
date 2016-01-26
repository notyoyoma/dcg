import Handlebars from "handlebars/runtime";
require("object.observe");

var uniq = uniq || 0;

export default function(data, options) {

  var parseDataProp = function(str) {
    // only grab the value in brackets. eg. {x}
    let reg    = /(?:\{([a-z]*)\})/;
    return reg.exec(str)[1]
  }

  return function (value) {
    uniq += 1;
    let id  = 'dataBindStyle_' + (uniq),
        obj = {};

    // Setup an object for efficient access
    for (let key in options.hash) {
      obj[ parseDataProp(options.hash[key]) ] = {
        cssProp: key,
        cssStyle: function(val) {
          return options.hash[key].replace(/\{[a-z]*\}/, val);
        }
      };
    }

    // Bind the data to the template
    Object.observe(data, function (changes) {
      // loop through the changes
      for (let change of changes) {
        // if the changed attribute is in the styles hash
        if (obj.hasOwnProperty(change.name)) {
          // update the elements style with the new value
          let cur = obj[change.name];
          document.getElementById(id).style[cur.cssProp] = cur.cssStyle(change.object[change.name]);
        }
      }
    });

    // Return a string with the ID and styles
    let attrArr  = [`id="${id}"`],
        styleArr = [];
    for (let key in obj) {
      styleArr.push( `${obj[key].cssProp}:${obj[key].cssStyle( data[key] )}` );
    }
    attrArr.push(`style="${styleArr.join(';')}"`);
    let attrString = attrArr.join(' ');

    return new Handlebars.SafeString( attrString );
  }();
};
