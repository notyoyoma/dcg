import Handlebars from "handlebars/runtime";
require("object.observe");

export default function(data, options) {

  var uniq = 0;

  return function (value) {
    let id  = 'dataBindAttr_' + (++uniq),
        obj = {};

    // Setup an object for efficient access
    for (let key in options.hash) {
      obj[options.hash[key]] = {
        attr: key,
      };
    }

    // Bind the data to the template
    Object.observe(data, function (changes) {
      // loop through the changes
      for (let change of changes) {
        // if the changed attribute is in the attrs hash
        if (obj.hasOwnProperty(change.name)) {
          // update the elements attribute with the new value
          document.getElementById(id).setAttribute(obj[change.name].attr, change.object[change.name]);
        }
      }
    });

    // Return a string with the ID and attributes
    let attrArr = ['id="'+id+'"'];
    for (let key in obj) {
      attrArr.push( `${obj[key].attr}="${data[key]}"` );
    }
    let attrString = attrArr.join(' ');

    return new Handlebars.SafeString( attrString );
  }();
};
