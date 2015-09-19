/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){
// Support: iOS 8.2 (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var b="length"in a&&a.length,c=_.type(a);return"function"===c||_.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}
// Implement the identical functionality for filter and not
function d(a,b,c){if(_.isFunction(b))return _.grep(a,function(a,d){/* jshint -W018 */
return!!b.call(a,d,a)!==c});if(b.nodeType)return _.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(ha.test(b))return _.filter(b,a,c);b=_.filter(b,a)}return _.grep(a,function(a){return U.call(b,a)>=0!==c})}function e(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}
// Convert String-formatted options into Object-formatted ones and store in cache
function f(a){var b=oa[a]={};return _.each(a.match(na)||[],function(a,c){b[c]=!0}),b}/**
 * The ready event handler and self cleanup method
 */
function g(){Z.removeEventListener("DOMContentLoaded",g,!1),a.removeEventListener("load",g,!1),_.ready()}function h(){
// Support: Android<4,
// Old WebKit does not have Object.preventExtensions/freeze method,
// return new empty object instead with no [[set]] accessor
Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=_.expando+h.uid++}function i(a,b,c){var d;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(ua,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:
// Only convert to a number if it doesn't change the string
+c+""===c?+c:ta.test(c)?_.parseJSON(c):c}catch(e){}
// Make sure we set the data so it isn't changed later
sa.set(a,b,c)}else c=void 0;return c}function j(){return!0}function k(){return!1}function l(){try{return Z.activeElement}catch(a){}}
// Support: 1.x compatibility
// Manipulating tables requires a tbody
function m(a,b){return _.nodeName(a,"table")&&_.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function n(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function o(a){var b=Ka.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}
// Mark scripts as having already been evaluated
function p(a,b){for(var c=0,d=a.length;d>c;c++)ra.set(a[c],"globalEval",!b||ra.get(b[c],"globalEval"))}function q(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){
// 1. Copy private data: events, handlers, etc.
if(ra.hasData(a)&&(f=ra.access(a),g=ra.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)_.event.add(b,e,j[e][c])}
// 2. Copy user data
sa.hasData(a)&&(h=sa.access(a),i=_.extend({},h),sa.set(b,i))}}function r(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&_.nodeName(a,b)?_.merge([a],c):c}
// Fix IE bugs, see support tests
function s(a,b){var c=b.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===c&&ya.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function t(b,c){var d,e=_(c.createElement(b)).appendTo(c.body),
// getDefaultComputedStyle might be reliably used only on attached element
f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?
// Use of this method is a temporary fix (more like optimization) until something better comes along,
// since it was removed from specification and supported only in FF
d.display:_.css(e[0],"display");
// We don't have any data stored on the element,
// so use "detach" method as fast way to get rid of the element
return e.detach(),f}/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function u(a){var b=Z,c=Oa[a];
// If the simple way fails, read from inside an iframe
// Use the already-created iframe if possible
// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
// Support: IE
// Store the correct default display
return c||(c=t(a,b),"none"!==c&&c||(Na=(Na||_("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=Na[0].contentDocument,b.write(),b.close(),c=t(a,b),Na.detach()),Oa[a]=c),c}function v(a,b,c){var d,e,f,g,h=a.style;
// Support: IE9
// getPropertyValue is only needed for .css('filter') (#12537)
// Support: iOS < 6
// A tribute to the "awesome hack by Dean Edwards"
// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE
// IE returns zIndex value as an integer.
return c=c||Ra(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||_.contains(a.ownerDocument,a)||(g=_.style(a,b)),Qa.test(g)&&Pa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function w(a,b){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}
// Return a css property mapped to a potentially vendor prefixed property
function x(a,b){
// Shortcut for names that are not vendor prefixed
if(b in a)return b;for(
// Check for vendor prefixed names
var c=b[0].toUpperCase()+b.slice(1),d=b,e=Xa.length;e--;)if(b=Xa[e]+c,b in a)return b;return d}function y(a,b,c){var d=Ta.exec(b);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function z(a,b,c,d,e){for(var f=c===(d?"border":"content")?
// If we already have the right measurement, avoid augmentation
4:
// Otherwise initialize for horizontal or vertical properties
"width"===b?1:0,g=0;4>f;f+=2)
// Both box models exclude margin, so add it if we want it
"margin"===c&&(g+=_.css(a,c+wa[f],!0,e)),d?(
// border-box includes padding, so remove it if we want content
"content"===c&&(g-=_.css(a,"padding"+wa[f],!0,e)),
// At this point, extra isn't border nor margin, so remove border
"margin"!==c&&(g-=_.css(a,"border"+wa[f]+"Width",!0,e))):(
// At this point, extra isn't content, so add padding
g+=_.css(a,"padding"+wa[f],!0,e),
// At this point, extra isn't content nor padding, so add border
"padding"!==c&&(g+=_.css(a,"border"+wa[f]+"Width",!0,e)));return g}function A(a,b,c){
// Start with offset property, which is equivalent to the border-box value
var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g="border-box"===_.css(a,"boxSizing",!1,f);
// Some non-html elements return undefined for offsetWidth, so check for null/undefined
// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
if(0>=e||null==e){
// Computed unit is not pixels. Stop here and return.
if(
// Fall back to computed then uncomputed css if necessary
e=v(a,b,f),(0>e||null==e)&&(e=a.style[b]),Qa.test(e))return e;
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
d=g&&(Y.boxSizingReliable()||e===a.style[b]),
// Normalize "", auto, and prepare for extra
e=parseFloat(e)||0}
// Use the active box-sizing model to add/subtract irrelevant styles
return e+z(a,b,c||(g?"border":"content"),d,f)+"px"}function B(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=ra.get(d,"olddisplay"),c=d.style.display,b?(
// Reset the inline display of this element to learn if it is
// being hidden by cascaded rules or not
f[g]||"none"!==c||(d.style.display=""),
// Set elements which have been overridden with display: none
// in a stylesheet to whatever the default browser style is
// for such an element
""===d.style.display&&xa(d)&&(f[g]=ra.access(d,"olddisplay",u(d.nodeName)))):(e=xa(d),"none"===c&&e||ra.set(d,"olddisplay",e?c:_.css(d,"display"))));
// Set the display of most of the elements in a second loop
// to avoid the constant reflow
for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function C(a,b,c,d,e){return new C.prototype.init(a,b,c,d,e)}
// Animations created synchronously will run synchronously
function D(){return setTimeout(function(){Ya=void 0}),Ya=_.now()}
// Generate parameters to create a standard animation
function E(a,b){var c,d=0,e={height:a};for(
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
b=b?1:0;4>d;d+=2-b)c=wa[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function F(a,b,c){for(var d,e=(cb[b]||[]).concat(cb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))
// We're done with this property
return d}function G(a,b,c){/* jshint validthis: true */
var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&xa(a),p=ra.get(a,"fxshow");
// Handle queue: false promises
c.queue||(h=_._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){
// Ensure the complete handler is called before this completes
l.always(function(){h.unqueued--,_.queue(a,"fx").length||h.empty.fire()})})),
// Height/width overflow pass
1===a.nodeType&&("height"in b||"width"in b)&&(
// Make sure that nothing sneaks out
// Record all 3 overflow attributes because IE9-10 do not
// change the overflow attribute when overflowX and
// overflowY are set to the same value
c.overflow=[n.overflow,n.overflowX,n.overflowY],
// Set display property to inline-block for height/width
// animations on inline elements that are having width/height animated
j=_.css(a,"display"),
// Test default display if display is currently "none"
k="none"===j?ra.get(a,"olddisplay")||u(a.nodeName):j,"inline"===k&&"none"===_.css(a,"float")&&(n.display="inline-block")),c.overflow&&(n.overflow="hidden",l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));
// show/hide pass
for(d in b)if(e=b[d],$a.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){
// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||_.style(a,d)}else j=void 0;if(_.isEmptyObject(m))"inline"===("none"===j?u(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=ra.access(a,"fxshow",{}),
// Store state if its toggle - enables .stop().toggle() to "reverse"
f&&(p.hidden=!o),o?_(a).show():l.done(function(){_(a).hide()}),l.done(function(){var b;ra.remove(a,"fxshow");for(b in m)_.style(a,b,m[b])});for(d in m)g=F(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function H(a,b){var c,d,e,f,g;
// camelCase, specialEasing and expand cssHook pass
for(c in a)if(d=_.camelCase(c),e=b[d],f=a[c],_.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=_.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function I(a,b,c){var d,e,f=0,g=bb.length,h=_.Deferred().always(function(){
// Don't match elem in the :animated selector
delete i.elem}),i=function(){if(e)return!1;for(var b=Ya||D(),c=Math.max(0,j.startTime+j.duration-b),
// Support: Android 2.3
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:_.extend({},b),opts:_.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Ya||D(),duration:c.duration,tweens:[],createTween:function(b,c){var d=_.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);
// Resolve when we played the last frame; otherwise, reject
return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(H(k,j.opts.specialEasing);g>f;f++)if(d=bb[f].call(j,a,k,j.opts))return d;
// attach callbacks from options
return _.map(k,F,j),_.isFunction(j.opts.start)&&j.opts.start.call(a,j),_.fx.timer(_.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function J(a){
// dataTypeExpression is optional and defaults to "*"
return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(na)||[];if(_.isFunction(c))
// For each dataType in the dataTypeExpression
for(;d=f[e++];)
// Prepend if requested
"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}
// Base inspection function for prefilters and transports
function K(a,b,c,d){function e(h){var i;return f[h]=!0,_.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===tb;return e(b.dataTypes[0])||!f["*"]&&e("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function L(a,b){var c,d,e=_.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&_.extend(!0,a,d),a}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function M(a,b,c){
// Remove auto dataType and get content-type in the process
for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}
// Check to see if we have a response for the expected dataType
if(i[0]in c)f=i[0];else{
// Try convertible dataTypes
for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}
// Or just use first one
f=f||g}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function N(a,b,c,d){var e,f,g,h,i,j={},
// Work with a copy of dataTypes in case we need to modify it for conversion
k=a.dataTypes.slice();
// Create converters map with lowercased keys
if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];
// Convert to each sequential dataType
for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),
// Apply the dataFilter if provided
!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())
// There's only work to do if current dataType is non-auto
if("*"===f)f=i;else if("*"!==i&&i!==f){
// If none found, seek a pair
if(
// Seek a direct converter
g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(
// If conv2 outputs current
h=e.split(" "),h[1]===f&&(
// If prev can be converted to accepted input
g=j[i+" "+h[0]]||j["* "+h[0]])){
// Condense equivalence converters
g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}
// Apply converter (if not an equivalence)
if(g!==!0)
// Unless errors are allowed to bubble, catch and return them
if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function O(a,b,c,d){var e;if(_.isArray(b))
// Serialize array item.
_.each(b,function(b,e){c||yb.test(a)?
// Treat each array item as a scalar.
d(a,e):
// Item is non-scalar (array or object), encode its numeric index.
O(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==_.type(b))
// Serialize scalar item.
d(a,b);else
// Serialize object item.
for(e in b)O(a+"["+e+"]",b[e],c,d)}/**
 * Gets a window from an element
 */
function P(a){return _.isWindow(a)?a:9===a.nodeType&&a.defaultView}
// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//
var Q=[],R=Q.slice,S=Q.concat,T=Q.push,U=Q.indexOf,V={},W=V.toString,X=V.hasOwnProperty,Y={},
// Use the correct document accordingly with window argument (sandbox)
Z=a.document,$="2.1.4",
// Define a local copy of jQuery
_=function(a,b){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new _.fn.init(a,b)},
// Support: Android<4.1
// Make sure we trim BOM and NBSP
aa=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// Matches dashed string for camelizing
ba=/^-ms-/,ca=/-([\da-z])/gi,
// Used by jQuery.camelCase as callback to replace()
da=function(a,b){return b.toUpperCase()};_.fn=_.prototype={
// The current version of jQuery being used
jquery:$,constructor:_,
// Start with an empty selector
selector:"",
// The default length of a jQuery object is 0
length:0,toArray:function(){return R.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(a){
// Return just the one element from the set
// Return all the elements in a clean array
return null!=a?0>a?this[a+this.length]:this[a]:R.call(this)},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(a){
// Build a new jQuery matched element set
var b=_.merge(this.constructor(),a);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return b.prevObject=this,b.context=this.context,b},
// Execute a callback for every element in the matched set.
// (You can seed the arguments with an array of args, but this is
// only used internally.)
each:function(a,b){return _.each(this,a,b)},map:function(a){return this.pushStack(_.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(R.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:T,sort:Q.sort,splice:Q.splice},_.extend=_.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for(
// Handle a deep copy situation
"boolean"==typeof g&&(j=g,
// Skip the boolean and the target
g=arguments[h]||{},h++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof g||_.isFunction(g)||(g={}),
// Extend jQuery itself if only one argument is passed
h===i&&(g=this,h--);i>h;h++)
// Only deal with non-null/undefined values
if(null!=(a=arguments[h]))
// Extend the base object
for(b in a)c=g[b],d=a[b],
// Prevent never-ending loop
g!==d&&(
// Recurse if we're merging plain objects or arrays
j&&d&&(_.isPlainObject(d)||(e=_.isArray(d)))?(e?(e=!1,f=c&&_.isArray(c)?c:[]):f=c&&_.isPlainObject(c)?c:{},
// Never move original objects, clone them
g[b]=_.extend(j,f,d)):void 0!==d&&(g[b]=d));
// Return the modified object
return g},_.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+($+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===_.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){
// parseFloat NaNs numeric-cast false positives (null|true|false|"")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
// adding 1 corrects loss of precision from parseFloat (#15100)
return!_.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){
// Not plain objects:
// - Any object or value whose internal [[Class]] property is not "[object Object]"
// - DOM nodes
// - window
// Not plain objects:
// - Any object or value whose internal [[Class]] property is not "[object Object]"
// - DOM nodes
// - window
return"object"!==_.type(a)||a.nodeType||_.isWindow(a)?!1:a.constructor&&!X.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?V[W.call(a)]||"object":typeof a},
// Evaluates a script in a global context
globalEval:function(a){var b,c=eval;a=_.trim(a),a&&(
// If the code includes a valid, prologue position
// strict mode pragma, execute code by injecting a
// script tag into the document.
1===a.indexOf("use strict")?(b=Z.createElement("script"),b.text=a,Z.head.appendChild(b).parentNode.removeChild(b)):
// Otherwise, avoid the DOM node creation, insertion
// and removal by using an indirect global eval
c(a))},
// Convert dashed to camelCase; used by the css and data modules
// Support: IE9-11+
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(a){return a.replace(ba,"ms-").replace(ca,da)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},
// args is for internal usage only
each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},
// Support: Android<4.1
trim:function(a){return null==a?"":(a+"").replace(aa,"")},
// results is for internal usage only
makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?_.merge(d,"string"==typeof a?[a]:a):T.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:U.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){
// Go through the array, only saving the items
// that pass the validator function
for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},
// arg is for internal usage only
map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];
// Go through the array, translating each of the items to their new values
if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);
// Flatten any nested arrays
return S.apply([],i)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(a,b){var c,d,e;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return"string"==typeof b&&(c=a[b],b=a,a=c),_.isFunction(a)?(d=R.call(arguments,2),e=function(){return a.apply(b||this,d.concat(R.call(arguments)))},e.guid=a.guid=a.guid||_.guid++,e):void 0},now:Date.now,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:Y}),
// Populate the class2type map
_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()});var ea=/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
function(a){function b(a,b,c,d){var e,f,g,h,
// QSA vars
i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],h=b.nodeType,"string"!=typeof a||!a||1!==h&&9!==h&&11!==h)return c;if(!d&&I){
// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
if(11!==h&&(e=sa.exec(a)))
// Speed-up: Sizzle("#ID")
if(g=e[1]){if(9===h){
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document (jQuery #6963)
if(f=b.getElementById(g),!f||!f.parentNode)return c;
// Handle the case where IE, Opera, and Webkit return items
// by name instead of ID
if(f.id===g)return c.push(f),c}else
// Context is not a document
if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return $.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName)return $.apply(c,b.getElementsByClassName(g)),c}
// QSA path
if(v.qsa&&(!J||!J.test(a))){
// qSA works strangely on Element-rooted queries
// We can work around this by specifying an extra ID on the root
// and working up from there (Thanks to Andrew Dupont for the technique)
// IE 8 doesn't work on object elements
if(n=l=N,o=b,p=1!==h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute("id"))?n=l.replace(ua,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=ta.test(a)&&k(b.parentNode)||b,p=j.join(",")}if(p)try{return $.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute("id")}}}
// All others
return B(a.replace(ia,"$1"),b,c,d)}/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function c(){function a(c,d){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function d(a){return a[N]=!0,a}/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{
// Remove from its parent by default
b.parentNode&&b.parentNode.removeChild(b),
// release memory in IE
b=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||V)-(~a.sourceIndex||V);
// Use IE sourceIndex if available on both nodes
if(d)return d;
// Check if b follows a
if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function j(a){return d(function(b){return b=+b,d(function(c,d){
// Match elements found at the specified indexes
for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function k(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}
// Easy API for creating new setFilters
function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];
// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)
// Assign to newCache so results back-propagate to previous elements
return j[2]=h[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,
// Get initial elements from seed or context
r=d||p(b||"*",h.nodeType?[h]:h,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
s=!a||!d&&b?r:q(r,m,a,h,i),t=c?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
f||(d?a:o||e)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
g:s;
// Apply postFilter
if(
// Find primary matches
c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),
// Un-match failing elements by moving them back to matcherIn
k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
j=[],k=t.length;k--;)(l=t[k])&&
// Restore matcherIn since elem is not yet a final match
j.push(s[k]=l);f(null,t=[],j,i)}for(
// Move matched elements from seed to results to keep them synchronized
k=t.length;k--;)(l=t[k])&&(j=f?aa(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):$.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
i=n(function(a){return a===b},g,!0),j=n(function(a){return aa(b,a)>-1},g,!0),k=[function(a,c,d){var e=!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d));
// Avoid hanging onto element (issue #299)
return b=null,e}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{
// Return special upon seeing a positional matcher
if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(
// Find the next relative operator (if any) for proper handling
d=++h;e>d&&!w.relative[a[d].type];d++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ia,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,
// We must always have either seed elements or outermost context
t=d||f&&w.find.TAG("*",j),
// Use integer dirruns iff this is the outermost matcher
u=P+=null==s?1:Math.random()||.1,v=t.length;
// Add elements passing elementMatchers directly to results
// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}
// Track unmatched elements for set filters
e&&(
// They will have gone through all possible matchers
(k=!m&&k)&&n--,
// Lengthen the array for every element, matched or not
d&&p.push(k))}if(
// Apply set filters to unmatched elements
n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){
// Reintegrate element matches to eliminate the need for sorting
if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Y.call(i));
// Discard index placeholder values to get only actual matches
r=q(r)}
// Add matches to results
$.apply(i,r),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}
// Override manipulation of globals by nested matchers
return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,
// Local document vars
F,G,H,I,J,K,L,M,
// Instance-specific data
N="sizzle"+1*new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},
// General-purpose constants
V=1<<31,
// Instance methods
W={}.hasOwnProperty,X=[],Y=X.pop,Z=X.push,$=X.push,_=X.slice,
// Use a stripped-down indexOf as it's faster than native
// http://jsperf.com/thor-indexof-vs-for/5
aa=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},ba="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
ca="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/css3-syntax/#characters
da="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
// Loosely modeled on CSS identifier characters
// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
ea=da.replace("w","w#"),
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
fa="\\["+ca+"*("+da+")(?:"+ca+
// Operator (capture 2)
"*([*^$|!~]?=)"+ca+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ea+"))|)"+ca+"*\\]",ga=":("+da+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+fa+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ha=new RegExp(ca+"+","g"),ia=new RegExp("^"+ca+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ca+"+$","g"),ja=new RegExp("^"+ca+"*,"+ca+"*"),ka=new RegExp("^"+ca+"*([>+~]|"+ca+")"+ca+"*"),la=new RegExp("="+ca+"*([^\\]'\"]*?)"+ca+"*\\]","g"),ma=new RegExp(ga),na=new RegExp("^"+ea+"$"),oa={ID:new RegExp("^#("+da+")"),CLASS:new RegExp("^\\.("+da+")"),TAG:new RegExp("^("+da.replace("w","w*")+")"),ATTR:new RegExp("^"+fa),PSEUDO:new RegExp("^"+ga),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ca+"*(even|odd|(([+-]|)(\\d*)n|)"+ca+"*(?:([+-]|)"+ca+"*(\\d+)|))"+ca+"*\\)|)","i"),bool:new RegExp("^(?:"+ba+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ca+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ca+"*((?:-\\d)?\\d*)"+ca+"*\\)|)(?=[^-]|$)","i")},pa=/^(?:input|select|textarea|button)$/i,qa=/^h\d$/i,ra=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
sa=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ta=/[+~]/,ua=/'|\\/g,
// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
va=new RegExp("\\\\([\\da-f]{1,6}"+ca+"?|("+ca+")|.)","ig"),wa=function(a,b,c){var d="0x"+b-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
xa=function(){F()};
// Optimize for push.apply( _, NodeList )
try{$.apply(X=_.call(O.childNodes),O.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
X[O.childNodes.length].nodeType}catch(ya){$={apply:X.length?
// Leverage slice if possible
function(a,b){Z.apply(a,_.call(b))}:
// Support: IE<9
// Otherwise append directly
function(a,b){
// Can't trust NodeList.length
for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}
// Expose support vars for convenience
v=b.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
y=b.isXML=function(a){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
F=b.setDocument=function(a){var b,c,d=a?a.ownerDocument||a:O;
// If no document and documentElement is available, return
// If no document and documentElement is available, return
// Set our document
// Support: IE>8
// If iframe document is assigned to "document" variable and if iframe has been reloaded,
// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
// IE6-8 do not support the defaultView property so parent will be undefined
// IE11 does not have attachEvent, so all must suffer
/* Support tests
	---------------------------------------------------------------------- */
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Support: IE<9
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programatically-set names,
// so use a roundabout getElementsByName test
// ID find and filter
// Support: IE6/7
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See http://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully does not implement inclusive descendent
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return d!==G&&9===d.nodeType&&d.documentElement?(G=d,H=d.documentElement,c=d.defaultView,c&&c!==c.top&&(c.addEventListener?c.addEventListener("unload",xa,!1):c.attachEvent&&c.attachEvent("onunload",xa)),I=!y(d),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(d.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=ra.test(d.getElementsByClassName),v.getById=e(function(a){return H.appendChild(a).id=N,!d.getElementsByName||!d.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&I){var c=b.getElementById(a);
// Check parentNode to catch when Blackberry 4.6 returns
// nodes that are no longer in the document #6963
return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(va,wa);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(va,wa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):v.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
f=b.getElementsByTagName(a);
// Filter out possible comments
if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=ra.test(d.querySelectorAll))&&(e(function(a){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// http://bugs.jquery.com/ticket/12359
H.appendChild(a).innerHTML="<a id='"+N+"'></a><select id='"+N+"-\f]' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
a.querySelectorAll("[msallowcapture^='']").length&&J.push("[*^$]="+ca+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
a.querySelectorAll("[selected]").length||J.push("\\["+ca+"*(?:value|"+ba+")"),
// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
a.querySelectorAll("[id~="+N+"-]").length||J.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
a.querySelectorAll(":checked").length||J.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibing-combinator selector` fails
a.querySelectorAll("a#"+N+"+*").length||J.push(".#.+[+~]")}),e(function(a){
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var b=d.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
a.querySelectorAll("[name=d]").length&&J.push("name"+ca+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=ra.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
v.disconnectedMatch=L.call(a,"div"),
// This should fail with an exception
// Gecko does not error, returns false instead
L.call(a,"[s!='']:x"),K.push("!=",ga)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=ra.test(H.compareDocumentPosition),M=b||ra.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){
// Flag for duplicate removal
if(a===b)return E=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var c=!a.compareDocumentPosition-!b.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return c?c:(c=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&c||!v.sortDetached&&b.compareDocumentPosition(a)===c?a===d||a.ownerDocument===O&&M(O,a)?-1:b===d||b.ownerDocument===O&&M(O,b)?1:D?aa(D,a)-aa(D,b):0:4&c?-1:1)}:function(a,b){
// Exit early if the nodes are identical
if(a===b)return E=!0,0;var c,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];
// Parentless nodes are either documents or disconnected
if(!f||!h)return a===d?-1:b===d?1:f?-1:h?1:D?aa(D,a)-aa(D,b):0;if(f===h)return g(a,b);for(
// Otherwise we need full lists of their ancestors for comparison
c=a;c=c.parentNode;)i.unshift(c);for(c=b;c=c.parentNode;)j.unshift(c);
// Walk down the tree looking for a discrepancy
for(;i[e]===j[e];)e++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},d):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if(
// Set document vars if needed
(a.ownerDocument||a)!==G&&F(a),
// Make sure that attribute selectors are quoted
c=c.replace(la,"='$1']"),v.matchesSelector&&I&&(!K||!K.test(c))&&(!J||!J.test(c)))try{var d=L.call(a,c);
// IE 9's matchesSelector returns false on disconnected nodes
if(d||v.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){
// Set document vars if needed
return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){
// Set document vars if needed
(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
d=c&&W.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(
// Unless we *know* we can detect duplicates, assume their presence
E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return D=null,a},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof a.textContent)return a.textContent;
// Traverse its children
for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else
// If no nodeType, this is expected to be an array
for(;b=a[d++];)
// Do not traverse comment nodes
c+=x(b);
// Do not include comment or processing instruction nodes
return c},w=b.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:d,match:oa,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){
// Move the given value to match[3] whether quoted or unquoted
return a[1]=a[1].replace(va,wa),a[3]=(a[3]||a[4]||a[5]||"").replace(va,wa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return oa.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&ma.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(va,wa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+ca+")"+a+"("+ca+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f.replace(ha," ")+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;
// Shortcut for :nth-*(n)
return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){
// :(first|last|only)-(child|of-type)
if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
o=p="only"===a&&!o&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(o=[g?q.firstChild:q.lastChild],g&&s){for(
// Seek `elem` from a previously-cached index
k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(
// Fallback to seeking `elem` from the start
m=n=0)||o.pop();)
// When found, cache indexes on `parent` and break
if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else
// Use the same loop as above to seek `elem` from the start
for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(
// Cache the index of each encountered element
s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););
// Incorporate the offset, then check against cycle size
return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=aa(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{
// Potentially complex pseudos
not:d(function(a){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var b=[],c=[],e=A(a.replace(ia,"$1"));return e[N]?d(function(a,b,c,d){
// Match elements unmatched by `matcher`
for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){
// Don't keep the element (issue #299)
return b[0]=a,e(b,null,f,c),b[0]=null,!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return a=a.replace(va,wa),function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:d(function(a){
// lang value must be a valid identifier
return na.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(va,wa).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),
// Miscellaneous
target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},
// Boolean properties
enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){
// Accessing this property makes selected-by-default
// options in Safari work properly
return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},
// Contents
empty:function(a){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},
// Element/input types
header:function(a){return qa.test(a.nodeName)},input:function(a){return pa.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},
// Position-in-collection
first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;
// Add button/input type pseudos
for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){
// Comma and first run
(!d||(e=ja.exec(h)))&&(e&&(
// Don't consume trailing commas as valid
h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,
// Combinators
(e=ka.exec(h))&&(d=e.shift(),f.push({value:d,
// Cast descendant combinators to space
type:e[0].replace(ia," ")}),h=h.slice(d.length));
// Filters
for(g in w.filter)!(e=oa[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(
// Generate a function of recursive functions that can be used to check each element
b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);
// Cache the compiled function
f=T(a,t(e,d)),
// Save selector and tokenization
f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);
// Try to minimize operations if there is no seed and only one group
if(c=c||[],1===l.length){if(
// Take a shortcut and set the context if the root selector is an ID
f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(va,wa),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
e=oa.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(va,wa),ta.test(f[0].type)&&k(b.parentNode)||b))){if(
// If seed is empty or no tokens remain, we can return early
f.splice(e,1),a=d.length&&m(f),!a)return $.apply(c,d),c;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(j||A(a,l))(d,b,!I,c,ta.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){
// Should return 1, but returns 4 (following)
return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(ba,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);_.find=ea,_.expr=ea.selectors,_.expr[":"]=_.expr.pseudos,_.unique=ea.uniqueSort,_.text=ea.getText,_.isXMLDoc=ea.isXML,_.contains=ea.contains;var fa=_.expr.match.needsContext,ga=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,ha=/^.[^:#\[\.,]*$/;_.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?_.find.matchesSelector(d,a)?[d]:[]:_.find.matches(a,_.grep(b,function(a){return 1===a.nodeType}))},_.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(_(a).filter(function(){for(b=0;c>b;b++)if(_.contains(e[b],this))return!0}));for(b=0;c>b;b++)_.find(a,e[b],d);
// Needed because $( selector, context ) becomes $( context ).find( selector )
return d=this.pushStack(c>1?_.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!d(this,"string"==typeof a&&fa.test(a)?_(a):a||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var ia,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
ja=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ka=_.fn.init=function(a,b){var c,d;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!a)return this;
// Handle HTML strings
if("string"==typeof a){
// Match html or make sure no context is specified for #id
if(
// Assume that strings that start and end with <> are HTML and skip the regex check
c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:ja.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||ia).find(a):this.constructor(b).find(a);
// HANDLE: $(html) -> $(array)
if(c[1]){
// HANDLE: $(html, props)
if(b=b instanceof _?b[0]:b,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
_.merge(this,_.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:Z,!0)),ga.test(c[1])&&_.isPlainObject(b))for(c in b)
// Properties of context are called as methods if possible
_.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}
// Support: Blackberry 4.6
// gEBID returns nodes no longer in the document (#6963)
// Inject the element directly into the jQuery object
return d=Z.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=Z,this.selector=a,this}
// Execute immediately if ready is not present
return a.nodeType?(this.context=this[0]=a,this.length=1,this):_.isFunction(a)?"undefined"!=typeof ia.ready?ia.ready(a):a(_):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),_.makeArray(a,this))};
// Give the init function the jQuery prototype for later instantiation
ka.prototype=_.fn,
// Initialize central reference
ia=_(Z);var la=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
ma={children:!0,contents:!0,next:!0,prev:!0};_.extend({dir:function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&_(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),_.fn.extend({has:function(a){var b=_(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(_.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=fa.test(a)||"string"!=typeof a?_(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)
// Always skip document fragments
if(c.nodeType<11&&(g?g.index(c)>-1:
// Don't pass non-elements to Sizzle
1===c.nodeType&&_.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?_.unique(f):f)},
// Determine the position of an element within the set
index:function(a){
// No argument, return index in parent
// No argument, return index in parent
// Index in selector
// If it receives a jQuery object, the first element is used
return a?"string"==typeof a?U.call(_(a),this[0]):U.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(_.unique(_.merge(this.get(),_(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),_.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return _.dir(a,"parentNode")},parentsUntil:function(a,b,c){return _.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return _.dir(a,"nextSibling")},prevAll:function(a){return _.dir(a,"previousSibling")},nextUntil:function(a,b,c){return _.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return _.dir(a,"previousSibling",c)},siblings:function(a){return _.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return _.sibling(a.firstChild)},contents:function(a){return a.contentDocument||_.merge([],a.childNodes)}},function(a,b){_.fn[a]=function(c,d){var e=_.map(this,b,c);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=_.filter(d,e)),this.length>1&&(ma[a]||_.unique(e),la.test(a)&&e.reverse()),this.pushStack(e)}});var na=/\S+/g,oa={};/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
_.Callbacks=function(a){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
a="string"==typeof a?oa[a]||f(a):_.extend({},a);var// Last fire value (for non-forgettable lists)
b,
// Flag to know if list was already fired
c,
// Flag to know if list is currently firing
d,
// First callback to fire (used internally by add and fireWith)
e,
// End of the loop when firing
g,
// Index of currently firing callback (modified by remove if needed)
h,
// Actual callback list
i=[],
// Stack of fire calls for repeatable lists
j=!a.once&&[],
// Fire callbacks
k=function(f){for(b=a.memory&&f,c=!0,h=e||0,e=0,g=i.length,d=!0;i&&g>h;h++)if(i[h].apply(f[0],f[1])===!1&&a.stopOnFalse){b=!1;// To prevent further calls using add
break}d=!1,i&&(j?j.length&&k(j.shift()):b?i=[]:l.disable())},
// Actual Callbacks object
l={
// Add a callback or a collection of callbacks to the list
add:function(){if(i){
// First, we save the current length
var c=i.length;!function f(b){_.each(b,function(b,c){var d=_.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&
// Inspect recursively
f(c)})}(arguments),
// Do we need to add the callbacks to the
// current firing batch?
d?g=i.length:b&&(e=c,k(b))}return this},
// Remove a callback from the list
remove:function(){return i&&_.each(arguments,function(a,b){for(var c;(c=_.inArray(b,i,c))>-1;)i.splice(c,1),
// Handle firing indexes
d&&(g>=c&&g--,h>=c&&h--)}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(a){return a?_.inArray(a,i)>-1:!(!i||!i.length)},
// Remove all callbacks from the list
empty:function(){return i=[],g=0,this},
// Have the list do nothing anymore
disable:function(){return i=j=b=void 0,this},
// Is it disabled?
disabled:function(){return!i},
// Lock the list in its current state
lock:function(){return j=void 0,b||l.disable(),this},
// Is it locked?
locked:function(){return!j},
// Call all callbacks with the given context and arguments
fireWith:function(a,b){return!i||c&&!j||(b=b||[],b=[a,b.slice?b.slice():b],d?j.push(b):k(b)),this},
// Call all the callbacks with the given arguments
fire:function(){return l.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!c}};return l},_.extend({Deferred:function(a){var b=[
// action, add listener, listener list, final state
["resolve","done",_.Callbacks("once memory"),"resolved"],["reject","fail",_.Callbacks("once memory"),"rejected"],["notify","progress",_.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return _.Deferred(function(c){_.each(b,function(b,f){var g=_.isFunction(a[b])&&a[b];
// deferred[ done | fail | progress ] for forwarding actions to newDefer
e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&_.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(a){return null!=a?_.extend(a,d):d}},e={};
// All done!
// Keep pipe for back-compat
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return d.pipe=d.then,_.each(b,function(a,f){var g=f[2],h=f[3];
// promise[ done | fail | progress ] = list.add
d[f[1]]=g.add,
// Handle state
h&&g.add(function(){
// state = [ resolved | rejected ]
c=h},b[1^a][2].disable,b[2][2].lock),
// deferred[ resolve | reject | notify ]
e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},
// Deferred helper
when:function(a){var b,c,d,e=0,f=R.call(arguments),g=f.length,
// the count of uncompleted subordinates
h=1!==g||a&&_.isFunction(a.promise)?g:0,
// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
i=1===h?a:_.Deferred(),
// Update function for both resolve and progress values
j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?R.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};
// Add listeners to Deferred subordinates; treat others as resolved
if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&_.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;
// If we're not waiting on anything, resolve the master
return h||i.resolveWith(d,f),i.promise()}});
// The deferred used on DOM ready
var pa;_.fn.ready=function(a){
// Add the callback
return _.ready.promise().done(a),this},_.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Hold (or release) the ready event
holdReady:function(a){a?_.readyWait++:_.ready(!0)},
// Handle when the DOM is ready
ready:function(a){
// Abort if there are pending holds or we're already ready
(a===!0?--_.readyWait:_.isReady)||(
// Remember that the DOM is ready
_.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
a!==!0&&--_.readyWait>0||(
// If there are functions bound, to execute
pa.resolveWith(Z,[_]),
// Trigger any bound ready events
_.fn.triggerHandler&&(_(Z).triggerHandler("ready"),_(Z).off("ready"))))}}),_.ready.promise=function(b){
// Catch cases where $(document).ready() is called after the browser event has already occurred.
// We once tried to use readyState "interactive" here, but it caused issues like the one
// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
// Handle it asynchronously to allow scripts the opportunity to delay ready
// Use the handy event callback
// A fallback to window.onload, that will always work
return pa||(pa=_.Deferred(),"complete"===Z.readyState?setTimeout(_.ready):(Z.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1))),pa.promise(b)},
// Kick off the DOM ready check even if the user does not
_.ready.promise();
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var qa=_.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;
// Sets many values
if("object"===_.type(c)){e=!0;for(h in c)_.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,_.isFunction(d)||(g=!0),j&&(
// Bulk operations run against the entire set
g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(_(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));
// Gets
return e?a:j?b.call(a):i?b(a[0],c):f};/**
 * Determines whether an object can have data
 */
_.acceptData=function(a){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
/* jshint -W018 */
return 1===a.nodeType||9===a.nodeType||!+a.nodeType},h.uid=1,h.accepts=_.acceptData,h.prototype={key:function(a){
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return the key for a frozen object.
if(!h.accepts(a))return 0;var b={},
// Check if the owner object already has a cache key
c=a[this.expando];
// If not, create one
if(!c){c=h.uid++;
// Secure it in a non-enumerable, non-writable property
try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,_.extend(a,b)}}
// Ensure the cache object
return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,
// There may be an unlock assigned to this node,
// if there is no entry for this "owner", create one inline
// and set the unlock as though an owner entry had always existed
e=this.key(a),f=this.cache[e];
// Handle: [ owner, key, value ] args
if("string"==typeof b)f[b]=c;else
// Fresh assignments by object are shallow copied
if(_.isEmptyObject(f))_.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){
// Either a valid cache is found, or will be created.
// New caches will be created and the unlock returned,
// allowing direct access to the newly created
// empty data object. A valid owner object must be provided.
var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// [*]When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,_.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{
// Support array or space separated string of keys
_.isArray(b)?
// If "name" is an array of keys...
// When data is initially created, via ("key", "val") signature,
// keys will be converted to camelCase.
// Since there is no way to tell _how_ a key was added, remove
// both plain key and camelCase key. #12786
// This will only penalize the array argument path.
d=b.concat(b.map(_.camelCase)):(e=_.camelCase(b),
// Try the string as a key before any manipulation
b in g?d=[b,e]:(
// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
d=e,d=d in g?[d]:d.match(na)||[])),c=d.length;for(;c--;)delete g[d[c]]}},hasData:function(a){return!_.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var ra=new h,sa=new h,ta=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ua=/([A-Z])/g;_.extend({hasData:function(a){return sa.hasData(a)||ra.hasData(a)},data:function(a,b,c){return sa.access(a,b,c)},removeData:function(a,b){sa.remove(a,b)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to data_priv methods, these can be deprecated.
_data:function(a,b,c){return ra.access(a,b,c)},_removeData:function(a,b){ra.remove(a,b)}}),_.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;
// Gets all values
if(void 0===a){if(this.length&&(e=sa.get(f),1===f.nodeType&&!ra.get(f,"hasDataAttrs"))){for(c=g.length;c--;)
// Support: IE11+
// The attrs elements can be null (#14894)
g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=_.camelCase(d.slice(5)),i(f,d,e[d])));ra.set(f,"hasDataAttrs",!0)}return e}
// Sets multiple values
// Sets multiple values
return"object"==typeof a?this.each(function(){sa.set(this,a)}):qa(this,function(b){var c,d=_.camelCase(a);
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(f&&void 0===b){if(
// Attempt to get data from the cache
// with the key as-is
c=sa.get(f,a),void 0!==c)return c;if(
// Attempt to get data from the cache
// with the key camelized
c=sa.get(f,d),void 0!==c)return c;if(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
c=i(f,d,void 0),void 0!==c)return c}else
// Set the data...
this.each(function(){
// First, attempt to store a copy or reference of any
// data that might've been store with a camelCased key.
var c=sa.get(this,d);
// For HTML5 data-* attribute interop, we have to
// store property names with dashes in a camelCase form.
// This might not apply to all properties...*
sa.set(this,d,b),
// *... In the case of properties that might _actually_
// have dashes, we need to also store a copy of that
// unchanged property.
-1!==a.indexOf("-")&&void 0!==c&&sa.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){sa.remove(this,a)})}}),_.extend({queue:function(a,b,c){var d;
// Speed up dequeue by getting out quickly if this is just a lookup
return a?(b=(b||"fx")+"queue",d=ra.get(a,b),c&&(!d||_.isArray(c)?d=ra.access(a,b,_.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=_.queue(a,b),d=c.length,e=c.shift(),f=_._queueHooks(a,b),g=function(){_.dequeue(a,b)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===e&&(e=c.shift(),d--),e&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===b&&c.unshift("inprogress"),
// Clear up the last queue stop function
delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(a,b){var c=b+"queueHooks";return ra.get(a,c)||ra.access(a,c,{empty:_.Callbacks("once memory").add(function(){ra.remove(a,[b+"queue",c])})})}}),_.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?_.queue(this[0],a):void 0===b?this:this.each(function(){var c=_.queue(this,a,b);
// Ensure a hooks for this queue
_._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&_.dequeue(this,a)})},dequeue:function(a){return this.each(function(){_.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(a,b){var c,d=1,e=_.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=ra.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var va=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wa=["Top","Right","Bottom","Left"],xa=function(a,b){
// isHidden might be called from jQuery#filter function;
// in that case, element will be second argument
return a=b||a,"none"===_.css(a,"display")||!_.contains(a.ownerDocument,a)},ya=/^(?:checkbox|radio)$/i;!function(){var a=Z.createDocumentFragment(),b=a.appendChild(Z.createElement("div")),c=Z.createElement("input");
// Support: Safari<=5.1
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),
// Support: Safari<=5.1, Android<4.2
// Older WebKit doesn't clone checked state correctly in fragments
Y.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE<=11+
// Make sure textarea (and checkbox) defaultValue is properly cloned
b.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var za="undefined";Y.focusinBubbles="onfocusin"in a;var Aa=/^key/,Ba=/^(?:mouse|pointer|contextmenu)|click/,Ca=/^(?:focusinfocus|focusoutblur)$/,Da=/^([^.]*)(?:\.(.+)|)$/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
_.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ra.get(a);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(q)for(
// Caller can pass in an object of custom data in lieu of the handler
c.handler&&(f=c,c=f.handler,e=f.selector),
// Make sure that the handler has a unique ID, used to find/remove it later
c.guid||(c.guid=_.guid++),
// Init the element's event structure and main handler, if this is the first
(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return typeof _!==za&&_.event.triggered!==b.type?_.event.dispatch.apply(a,arguments):void 0}),
// Handle multiple events separated by a space
b=(b||"").match(na)||[""],j=b.length;j--;)h=Da.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
n&&(
// If event changes its type, use the special event handlers for the changed type
l=_.event.special[n]||{},
// If selector defined, determine special event api type, otherwise given type
n=(e?l.delegateType:l.bindType)||n,
// Update special based on newly reset type
l=_.event.special[n]||{},
// handleObj is passed to all event handlers
k=_.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&_.expr.match.needsContext.test(e),namespace:o.join(".")},f),
// Init the event handler queue if we're the first
(m=i[n])||(m=i[n]=[],m.delegateCount=0,
// Only use addEventListener if the special events handler returns false
l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),
// Add to the element's handler list, delegates in front
e?m.splice(m.delegateCount++,0,k):m.push(k),
// Keep track of which events have ever been used, for event optimization
_.event.global[n]=!0)},
// Detach an event or set of events from an element
remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=ra.hasData(a)&&ra.get(a);if(q&&(i=q.events)){for(
// Once for each type.namespace in types; type may be omitted
b=(b||"").match(na)||[""],j=b.length;j--;)
// Unbind all events (on this namespace, if provided) for the element
if(h=Da.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=_.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||_.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)_.event.remove(a,n+b[j],c,d,!0);
// Remove the expando if it's no longer used
_.isEmptyObject(i)&&(delete q.handle,ra.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||Z],n=X.call(b,"type")?b.type:b,o=X.call(b,"namespace")?b.namespace.split("."):[];
// Don't do events on text and comment nodes
if(g=h=d=d||Z,3!==d.nodeType&&8!==d.nodeType&&!Ca.test(n+_.event.triggered)&&(n.indexOf(".")>=0&&(
// Namespaced trigger; create a regexp to match event type in handle()
o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
b=b[_.expando]?b:new _.Event(n,"object"==typeof b&&b),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
b.result=void 0,b.target||(b.target=d),
// Clone any incoming data and prepend the event, creating the handler arg list
c=null==c?[b]:_.makeArray(c,[b]),
// Allow special events to draw outside the lines
l=_.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!e&&!l.noBubble&&!_.isWindow(d)){for(i=l.delegateType||n,Ca.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
h===(d.ownerDocument||Z)&&m.push(h.defaultView||h.parentWindow||a)}for(
// Fire handlers on the event path
f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,
// jQuery handler
k=(ra.get(g,"events")||{})[b.type]&&ra.get(g,"handle"),k&&k.apply(g,c),
// Native handler
k=j&&g[j],k&&k.apply&&_.acceptData(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!_.acceptData(d)||j&&_.isFunction(d[n])&&!_.isWindow(d)&&(h=d[j],h&&(d[j]=null),_.event.triggered=n,d[n](),_.event.triggered=void 0,h&&(d[j]=h)),b.result}},dispatch:function(a){
// Make a writable jQuery.Event from the native event object
a=_.event.fix(a);var b,c,d,e,f,g=[],h=R.call(arguments),i=(ra.get(this,"events")||{})[a.type]||[],j=_.event.special[a.type]||{};
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(
// Determine handlers
g=_.event.handlers.call(this,a,i),
// Run delegates first; they may want to stop propagation beneath us
b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
(!a.namespace_re||a.namespace_re.test(f.namespace))&&(a.handleObj=f,a.data=f.data,d=((_.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));
// Call the postDispatch hook for the mapped type
return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;
// Find delegate handlers
// Black-hole SVG <use> instance trees (#13180)
// Avoid non-left-click bubbling in Firefox (#3861)
if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],
// Don't conflict with Object.prototype properties (#13203)
e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?_(e,this).index(i)>=0:_.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}
// Add the remaining (directly-bound) handlers
return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},
// Includes some event props shared by KeyEvent and MouseEvent
props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){
// Add which for key events
return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;
// Calculate pageX/Y if missing and clientX/Y available
// Add which for click: 1 === left; 2 === middle; 3 === right
// Note: button is not normalized, so don't use it
return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||Z,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[_.expando])return a;
// Create a writable copy of the event object and normalize some properties
var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Ba.test(e)?this.mouseHooks:Aa.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new _.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];
// Support: Cordova 2.5 (WebKit) (#13255)
// All events should have a target; Cordova deviceready doesn't
// Support: Safari 6.0+, Chrome<28
// Target should not be a text node (#504, #13143)
return a.target||(a.target=Z),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){return this!==l()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===l()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){return"checkbox"===this.type&&this.click&&_.nodeName(this,"input")?(this.click(),!1):void 0},
// For cross-browser consistency, don't fire native .click() on links
_default:function(a){return _.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){
// Piggyback on a donor event to simulate a different one.
// Fake originalEvent to avoid donor's stopPropagation, but if the
// simulated event prevents default then we do the same on the donor.
var e=_.extend(new _.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?_.event.trigger(e,null,b):_.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},_.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},_.Event=function(a,b){
// Allow instantiation without the 'new' keyword
// Allow instantiation without the 'new' keyword
// Event object
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
// Support: Android<4.0
// Put explicitly provided properties onto the event object
// Create a timestamp if incoming event doesn't have one
// Mark it as fixed
return this instanceof _.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?j:k):this.type=a,b&&_.extend(this,b),this.timeStamp=a&&a.timeStamp||_.now(),void(this[_.expando]=!0)):new _.Event(a,b)},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
_.Event.prototype={isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=j,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=j,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=j,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},
// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){_.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;
// For mousenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return(!e||e!==d&&!_.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),
// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
Y.focusinBubbles||_.each({focus:"focusin",blur:"focusout"},function(a,b){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var c=function(a){_.event.simulate(b,a.target,_.event.fix(a),!0)};_.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=ra.access(d,b);e||d.addEventListener(a,c,!0),ra.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=ra.access(d,b)-1;e?ra.access(d,b,e):(d.removeEventListener(a,c,!0),ra.remove(d,b))}}}),_.fn.extend({on:function(a,b,c,d,/*INTERNAL*/e){var f,g;
// Types can be a map of types/handlers
if("object"==typeof a){
// ( types-Object, selector, data )
"string"!=typeof b&&(
// ( types-Object, data )
c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(
// ( types, fn )
d=b,c=b=void 0):null==d&&("string"==typeof b?(
// ( types, selector, fn )
d=c,c=void 0):(
// ( types, data, fn )
d=c,c=b,b=void 0)),d===!1)d=k;else if(!d)return this;
// Use same guid so caller can remove using origFn
return 1===e&&(f=d,d=function(a){
// Can use an empty set, since event contains the info
return _().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=_.guid++)),this.each(function(){_.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)
// ( event )  dispatched jQuery.Event
return d=a.handleObj,_(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){
// ( types-object [, selector] )
for(e in a)this.off(e,b,a[e]);return this}
// ( types [, fn] )
return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=k),this.each(function(){_.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){_.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?_.event.trigger(a,b,c,!0):void 0}});var Ea=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Fa=/<([\w:]+)/,Ga=/<|&#?\w+;/,Ha=/<(?:script|style|link)/i,
// checked="checked" or checked
Ia=/checked\s*(?:[^=]|=\s*.checked.)/i,Ja=/^$|\/(?:java|ecma)script/i,Ka=/^true\/(.*)/,La=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
// We have to close these tags to support XHTML (#13200)
Ma={
// Support: IE9
option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE9
Ma.optgroup=Ma.option,Ma.tbody=Ma.tfoot=Ma.colgroup=Ma.caption=Ma.thead,Ma.th=Ma.td,_.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=_.contains(a.ownerDocument,a);
// Fix IE cloning issues
if(!(Y.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||_.isXMLDoc(a)))for(
// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
g=r(h),f=r(a),d=0,e=f.length;e>d;d++)s(f[d],g[d]);
// Copy the events from the original to the clone
if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;e>d;d++)q(f[d],g[d]);else q(a,h);
// Return the cloned set
// Preserve script evaluation history
return g=r(h,"script"),g.length>0&&p(g,!i&&r(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)
// Add nodes directly
if("object"===_.type(e))
// Support: QtWebKit, PhantomJS
// push.apply(_, arraylike) throws on ancient WebKit
_.merge(l,e.nodeType?[e]:e);else if(Ga.test(e)){for(f=f||k.appendChild(b.createElement("div")),
// Deserialize a standard representation
g=(Fa.exec(e)||["",""])[1].toLowerCase(),h=Ma[g]||Ma._default,f.innerHTML=h[1]+e.replace(Ea,"<$1></$2>")+h[2],
// Descend through wrappers to the right content
j=h[0];j--;)f=f.lastChild;
// Support: QtWebKit, PhantomJS
// push.apply(_, arraylike) throws on ancient WebKit
_.merge(l,f.childNodes),
// Remember the top-level container
f=k.firstChild,
// Ensure the created nodes are orphaned (#12392)
f.textContent=""}else l.push(b.createTextNode(e));for(
// Remove wrapper from fragment
k.textContent="",m=0;e=l[m++];)
// #4087 - If origin and destination elements are the same, and this is
// that element, do not do anything
if((!d||-1===_.inArray(e,d))&&(i=_.contains(e.ownerDocument,e),
// Append to fragment
f=r(k.appendChild(e),"script"),
// Preserve script evaluation history
i&&p(f),c))for(j=0;e=f[j++];)Ja.test(e.type||"")&&c.push(e);return k},cleanData:function(a){for(var b,c,d,e,f=_.event.special,g=0;void 0!==(c=a[g]);g++){if(_.acceptData(c)&&(e=c[ra.expando],e&&(b=ra.cache[e]))){if(b.events)for(d in b.events)f[d]?_.event.remove(c,d):_.removeEvent(c,d,b.handle);ra.cache[e]&&
// Discard any remaining `private` data
delete ra.cache[e]}
// Discard any remaining `user` data
delete sa.cache[c[sa.expando]]}}}),_.fn.extend({text:function(a){return qa(this,function(a){return void 0===a?_.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?_.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||_.cleanData(r(c)),c.parentNode&&(b&&_.contains(c.ownerDocument,c)&&p(r(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(
// Prevent memory leaks
_.cleanData(r(a,!1)),
// Remove any remaining nodes
a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return _.clone(this,a,b)})},html:function(a){return qa(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof a&&!Ha.test(a)&&!Ma[(Fa.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Ea,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},
// Remove element nodes and prevent memory leaks
1===b.nodeType&&(_.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];
// Force removal if there was no new content (e.g., from empty arguments)
// Make the changes, replacing each context element with the new content
return this.domManip(arguments,function(b){a=this.parentNode,_.cleanData(r(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){
// Flatten any nested arrays
a=S.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],p=_.isFunction(m);
// We can't cloneNode fragments that contain checked, in WebKit
if(p||j>1&&"string"==typeof m&&!Y.checkClone&&Ia.test(m))return this.each(function(c){var d=k.eq(c);p&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(c=_.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){
// Use the original fragment for the last item instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(e=_.map(r(c,"script"),n),f=e.length;j>i;i++)g=c,i!==l&&(g=_.clone(g,!0,!0),
// Keep references to cloned scripts for later restoration
f&&
// Support: QtWebKit
// jQuery.merge because push.apply(_, arraylike) throws
_.merge(e,r(g,"script"))),b.call(this[i],g,i);if(f)
// Evaluate executable scripts on first document insertion
for(h=e[e.length-1].ownerDocument,
// Reenable scripts
_.map(e,o),i=0;f>i;i++)g=e[i],Ja.test(g.type||"")&&!ra.access(g,"globalEval")&&_.contains(h,g)&&(g.src?
// Optional AJAX dependency, but won't run scripts if not present
_._evalUrl&&_._evalUrl(g.src):_.globalEval(g.textContent.replace(La,"")))}return this}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){_.fn[a]=function(a){for(var c,d=[],e=_(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),_(e[g])[b](c),
// Support: QtWebKit
// .get() because push.apply(_, arraylike) throws
T.apply(d,c.get());return this.pushStack(d)}});var Na,Oa={},Pa=/^margin/,Qa=new RegExp("^("+va+")(?!px)[a-z%]+$","i"),Ra=function(b){
// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function b(){g.style.cssText=
// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",g.innerHTML="",e.appendChild(f);var b=a.getComputedStyle(g,null);c="1%"!==b.top,d="4px"===b.width,e.removeChild(f)}var c,d,e=Z.documentElement,f=Z.createElement("div"),g=Z.createElement("div");g.style&&(
// Support: IE9-11+
// Style of cloned element affects source element cloned (#8908)
g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",f.appendChild(g),
// Support: node.js jsdom
// Don't assume that getComputedStyle is a property of the global object
a.getComputedStyle&&_.extend(Y,{pixelPosition:function(){
// This test is executed only once but we still do memoizing
// since we can use the boxSizingReliable pre-computing.
// No need to check if the test was already performed, though.
return b(),c},boxSizingReliable:function(){return null==d&&b(),d},reliableMarginRight:function(){
// Support: Android 2.3
// Check if div with explicit width and no margin-right incorrectly
// gets computed margin-right based on width of container. (#3333)
// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
// This support function is only executed once so no memoizing is needed.
var b,c=g.appendChild(Z.createElement("div"));
// Reset CSS: box-sizing; display; margin; border; padding
// Support: Firefox<29, Android 2.3
// Vendor-prefix box-sizing
return c.style.cssText=g.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),g.removeChild(c),b}}))}(),
// A method for quickly swapping in/out CSS properties to get correct calculations.
_.swap=function(a,b,c,d){var e,f,g={};
// Remember the old values, and insert the new ones
for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);
// Revert the old values
for(f in b)a.style[f]=g[f];return e};var
// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
Sa=/^(none|table(?!-c[ea]).+)/,Ta=new RegExp("^("+va+")(.*)$","i"),Ua=new RegExp("^([+-])=("+va+")","i"),Va={position:"absolute",visibility:"hidden",display:"block"},Wa={letterSpacing:"0",fontWeight:"400"},Xa=["Webkit","O","Moz","ms"];_.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(a,b){if(b){
// We should always get a number back from opacity
var c=v(a,"opacity");return""===c?"1":c}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{"float":"cssFloat"},
// Get and set the style property on a DOM Node
style:function(a,b,c,d){
// Don't set styles on text and comment nodes
if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){
// Make sure that we're working with the right name
var e,f,g,h=_.camelCase(b),i=a.style;
// Check if we're setting a value
// Gets hook for the prefixed version, then unprefixed version
// Check if we're setting a value
// If a hook was provided get the non-computed value from there
// Convert "+=" or "-=" to relative numbers (#7345)
// Fixes bug #9237
// Make sure that null and NaN values aren't set (#7116)
// If a number, add 'px' to the (except for certain CSS properties)
// Support: IE9-11+
// background-* props affect original clone's values
// If a hook was provided, use that value, otherwise just set the specified value
return b=_.cssProps[h]||(_.cssProps[h]=x(i,h)),g=_.cssHooks[b]||_.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ua.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(_.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||_.cssNumber[h]||(c+="px"),Y.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=_.camelCase(b);
// Make numeric if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name
// Try prefixed name followed by the unprefixed name
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
// Convert "normal" to computed value
// Make numeric if forced or a qualifier was provided and val looks numeric
return b=_.cssProps[h]||(_.cssProps[h]=x(a.style,h)),g=_.cssHooks[b]||_.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=v(a,b,d)),"normal"===e&&b in Wa&&(e=Wa[b]),""===c||c?(f=parseFloat(e),c===!0||_.isNumeric(f)?f||0:e):e}}),_.each(["height","width"],function(a,b){_.cssHooks[b]={get:function(a,c,d){return c?Sa.test(_.css(a,"display"))&&0===a.offsetWidth?_.swap(a,Va,function(){return A(a,b,d)}):A(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return y(a,c,d?z(a,b,d,"border-box"===_.css(a,"boxSizing",!1,e),e):0)}}}),
// Support: Android 2.3
_.cssHooks.marginRight=w(Y.reliableMarginRight,function(a,b){return b?_.swap(a,{display:"inline-block"},v,[a,"marginRight"]):void 0}),
// These hooks are used by animate to expand properties
_.each({margin:"",padding:"",border:"Width"},function(a,b){_.cssHooks[a+b]={expand:function(c){for(var d=0,e={},
// Assumes a single number if not a string
f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+wa[d]+b]=f[d]||f[d-2]||f[0];return e}},Pa.test(a)||(_.cssHooks[a+b].set=y)}),_.fn.extend({css:function(a,b){return qa(this,function(a,b,c){var d,e,f={},g=0;if(_.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=_.css(a,b[g],!1,d);return f}return void 0!==c?_.style(a,b,c):_.css(a,b)},a,b,arguments.length>1)},show:function(){return B(this,!0)},hide:function(){return B(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){xa(this)?_(this).show():_(this).hide()})}}),_.Tween=C,C.prototype={constructor:C,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(_.cssNumber[c]?"":"px")},cur:function(){var a=C.propHooks[this.prop];return a&&a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b,c=C.propHooks[this.prop];return this.options.duration?this.pos=b=_.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(a){var b;
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=_.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
_.fx.step[a.prop]?_.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[_.cssProps[a.prop]]||_.cssHooks[a.prop])?_.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},
// Support: IE9
// Panic based approach to setting things on disconnected nodes
C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},_.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},_.fx=C.prototype.init,
// Back Compat <1.8 extension point
_.fx.step={};var Ya,Za,$a=/^(?:toggle|show|hide)$/,_a=new RegExp("^(?:([+-])=|)("+va+")([a-z%]*)$","i"),ab=/queueHooks$/,bb=[G],cb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=_a.exec(b),f=e&&e[3]||(_.cssNumber[a]?"":"px"),
// Starting value computation is required for potential unit mismatches
g=(_.cssNumber[a]||"px"!==f&&+d)&&_a.exec(_.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){
// Trust units reported by jQuery.css
f=f||g[3],
// Make sure we update the tween properties later on
e=e||[],
// Iteratively approximate from a nonzero starting point
g=+d||1;do
// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
h=h||".5",
// Adjust and apply
g/=h,_.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}
// Update tween properties
// If a +=/-= token was provided, we're doing a relative animation
return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};_.Animation=_.extend(I,{tweener:function(a,b){_.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],cb[c]=cb[c]||[],cb[c].unshift(b)},prefilter:function(a,b){b?bb.unshift(a):bb.push(a)}}),_.speed=function(a,b,c){var d=a&&"object"==typeof a?_.extend({},a):{complete:c||!c&&b||_.isFunction(a)&&a,duration:a,easing:c&&b||b&&!_.isFunction(b)&&b};
// Normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return d.duration=_.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in _.fx.speeds?_.fx.speeds[d.duration]:_.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){_.isFunction(d.old)&&d.old.call(this),d.queue&&_.dequeue(this,d.queue)},d},_.fn.extend({fadeTo:function(a,b,c,d){
// Show any hidden elements after setting opacity to 0
return this.filter(xa).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=_.isEmptyObject(a),f=_.speed(b,c,d),g=function(){
// Operate on a copy of prop so per-property easing won't be lost
var b=I(this,_.extend({},a),f);
// Empty animations, or finishing resolves immediately
(e||ra.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=_.timers,g=ra.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ab.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
(b||!c)&&_.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=ra.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=_.timers,g=d?d.length:0;
// Look for any active animations, and finish them
for(
// Enable finishing flag on private data
c.finish=!0,
// Empty the queue first
_.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));
// Look for any animations in the old queue and finish them
for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);
// Turn off finishing flag
delete c.finish})}}),_.each(["toggle","show","hide"],function(a,b){var c=_.fn[b];_.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(E(b,!0),a,d,e)}}),
// Generate shortcuts for custom animations
_.each({slideDown:E("show"),slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){_.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),_.timers=[],_.fx.tick=function(){var a,b=0,c=_.timers;for(Ya=_.now();b<c.length;b++)a=c[b],
// Checks the timer has not already been removed
a()||c[b]!==a||c.splice(b--,1);c.length||_.fx.stop(),Ya=void 0},_.fx.timer=function(a){_.timers.push(a),a()?_.fx.start():_.timers.pop()},_.fx.interval=13,_.fx.start=function(){Za||(Za=setInterval(_.fx.tick,_.fx.interval))},_.fx.stop=function(){clearInterval(Za),Za=null},_.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
_.fn.delay=function(a,b){return a=_.fx?_.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=Z.createElement("input"),b=Z.createElement("select"),c=b.appendChild(Z.createElement("option"));a.type="checkbox",
// Support: iOS<=5.1, Android<=4.2+
// Default value for a checkbox should be "on"
Y.checkOn=""!==a.value,
// Support: IE<=11+
// Must access selectedIndex to make default options select
Y.optSelected=c.selected,
// Support: Android<=2.3
// Options inside disabled selects are incorrectly marked as disabled
b.disabled=!0,Y.optDisabled=!c.disabled,
// Support: IE<=11+
// An input loses its value after becoming a radio
a=Z.createElement("input"),a.value="t",a.type="radio",Y.radioValue="t"===a.value}();var db,eb,fb=_.expr.attrHandle;_.fn.extend({attr:function(a,b){return qa(this,_.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){_.removeAttr(this,a)})}}),_.extend({attr:function(a,b,c){var d,e,f=a.nodeType;
// don't get/set attributes on text, comment and attribute nodes
if(a&&3!==f&&8!==f&&2!==f)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// All attributes are lowercase
// Grab necessary hook if one is defined
return typeof a.getAttribute===za?_.prop(a,b,c):(1===f&&_.isXMLDoc(a)||(b=b.toLowerCase(),d=_.attrHooks[b]||(_.expr.match.bool.test(b)?eb:db)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=_.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void _.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(na);if(f&&1===a.nodeType)for(;c=f[e++];)d=_.propFix[c]||c,
// Boolean attributes get special treatment (#10870)
_.expr.match.bool.test(c)&&(
// Set corresponding property to false
a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!Y.radioValue&&"radio"===b&&_.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),
// Hooks for boolean attributes
eb={set:function(a,b,c){
// Remove boolean attributes when set to false
return b===!1?_.removeAttr(a,c):a.setAttribute(c,c),c}},_.each(_.expr.match.bool.source.match(/\w+/g),function(a,b){var c=fb[b]||_.find.attr;fb[b]=function(a,b,d){var e,f;
// Avoid an infinite loop by temporarily removing this function from the getter
return d||(f=fb[b],fb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,fb[b]=f),e}});var gb=/^(?:input|select|textarea|button)$/i;_.fn.extend({prop:function(a,b){return qa(this,_.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[_.propFix[a]||a]})}}),_.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(a&&3!==g&&8!==g&&2!==g)
// Fix name and attach hooks
return f=1!==g||!_.isXMLDoc(a),f&&(b=_.propFix[b]||b,e=_.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||gb.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),Y.optSelected||(_.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),_.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_.propFix[this.toLowerCase()]=this});var hb=/[\t\r\n\f]/g;_.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).addClass(a.call(this,b,this.className))});if(h)for(
// The disjunction here is for better compressibility (see removeClass)
b=(a||"").match(na)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hb," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");
// only assign if different to avoid unneeded rendering.
g=_.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(na)||[];j>i;i++)if(c=this[i],
// This expression is here for better compressibility (see addClass)
d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hb," "):"")){for(f=0;e=b[f++];)
// Remove *all* instances
for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");
// Only assign if different to avoid unneeded rendering.
g=a?_.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):_.isFunction(a)?this.each(function(c){_(this).toggleClass(a.call(this,c,this.className,b),b)}):this.each(function(){if("string"===c)for(
// Toggle individual class names
var b,d=0,e=_(this),f=a.match(na)||[];b=f[d++];)
// Check each className given, space separated list
e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===za||"boolean"===c)&&(this.className&&
// store className if set
ra.set(this,"__className__",this.className),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.className=this.className||a===!1?"":ra.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(hb," ").indexOf(b)>=0)return!0;return!1}});var ib=/\r/g;_.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=_.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,_(this).val()):a,
// Treat null/undefined as ""; convert numbers to string
null==e?e="":"number"==typeof e?e+="":_.isArray(e)&&(e=_.map(e,function(a){return null==a?"":a+""})),b=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()],
// If set returns undefined, fall back to normal setting
b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)
// Handle most common string cases
// Handle cases where value is null/undef or number
return b=_.valHooks[e.type]||_.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ib,""):null==c?"":c)}}}),_.extend({valHooks:{option:{get:function(a){var b=_.find.attr(a,"value");
// Support: IE10-11+
// option.text throws exceptions (#14686, #14858)
return null!=b?b:_.trim(_.text(a))}},select:{get:function(a){
// Loop through all the selected options
for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)
// IE6-9 doesn't update selected after form reset (#2551)
if(c=d[i],(c.selected||i===e)&&(
// Don't return options that are disabled or in a disabled optgroup
Y.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!_.nodeName(c.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
b=_(c).val(),f)return b;
// Multi-Selects return an array
g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=_.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=_.inArray(d.value,f)>=0)&&(c=!0);
// Force browsers to behave consistently when non-matching value is set
return c||(a.selectedIndex=-1),f}}}}),
// Radios and checkboxes getter/setter
_.each(["radio","checkbox"],function(){_.valHooks[this]={set:function(a,b){return _.isArray(b)?a.checked=_.inArray(_(a).val(),b)>=0:void 0}},Y.checkOn||(_.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),
// Return jQuery for attributes-only inclusion
_.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){
// Handle event binding
_.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),_.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var jb=_.now(),kb=/\?/;
// Support: Android 2.3
// Workaround failure to string-cast null input
_.parseJSON=function(a){return JSON.parse(a+"")},
// Cross-browser xml parsing
_.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;
// Support: IE9
try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&_.error("Invalid XML: "+a),b};var lb=/#.*$/,mb=/([?&])_=[^&]*/,nb=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
ob=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pb=/^(?:GET|HEAD)$/,qb=/^\/\//,rb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
sb={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
tb={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
ub="*/".concat("*"),
// Document location
vb=a.location.href,
// Segment location into parts
wb=rb.exec(vb.toLowerCase())||[];_.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:vb,type:"GET",isLocal:ob.test(wb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":_.parseJSON,
// Parse text as xml
"text xml":_.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(a,b){
// Building a settings object
// Extending ajaxSettings
return b?L(L(a,_.ajaxSettings),b):L(_.ajaxSettings,a)},ajaxPrefilter:J(sb),ajaxTransport:J(tb),
// Main method
ajax:function(a,b){
// Callback for when everything is done
function c(a,b,c,g){var i,k,r,s,u,w=b;
// Called once
2!==t&&(
// State is "done" now
t=2,
// Clear timeout if it exists
h&&clearTimeout(h),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
d=void 0,
// Cache response headers
f=g||"",
// Set readyState
v.readyState=a>0?4:0,
// Determine if successful
i=a>=200&&300>a||304===a,
// Get response data
c&&(s=M(l,v,c)),
// Convert no matter what (that way responseXXX fields are always set)
s=N(l,s,v,i),
// If successful, handle type chaining
i?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(_.lastModified[e]=u),u=v.getResponseHeader("etag"),u&&(_.etag[e]=u)),
// if no content
204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,i=!r)):(
// Extract error from statusText and normalize for non-aborts
r=w,(a||!w)&&(w="error",0>a&&(a=0))),
// Set data for the fake xhr object
v.status=a,v.statusText=(b||w)+"",
// Success/Error
i?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),
// Status-dependent callbacks
v.statusCode(q),q=void 0,j&&n.trigger(i?"ajaxSuccess":"ajaxError",[v,l,i?k:r]),
// Complete
p.fireWith(m,[v,w]),j&&(n.trigger("ajaxComplete",[v,l]),
// Handle the global AJAX counter
--_.active||_.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof a&&(b=a,a=void 0),
// Force options to be an object
b=b||{};var d,
// URL without anti-cache param
e,
// Response headers
f,g,
// timeout handle
h,
// Cross-domain detection vars
i,
// To know if global events are to be dispatched
j,
// Loop variable
k,
// Create the final options object
l=_.ajaxSetup({},b),
// Callbacks context
m=l.context||l,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
n=l.context&&(m.nodeType||m.jquery)?_(m):_.event,
// Deferreds
o=_.Deferred(),p=_.Callbacks("once memory"),
// Status-dependent callbacks
q=l.statusCode||{},
// Headers (they are sent all at once)
r={},s={},
// The jqXHR state
t=0,
// Default abort message
u="canceled",
// Fake xhr
v={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(a){var b;if(2===t){if(!g)for(g={};b=nb.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return null==b?null:b},
// Raw string
getAllResponseHeaders:function(){return 2===t?f:null},
// Caches the header
setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},
// Overrides response content-type header
overrideMimeType:function(a){return t||(l.mimeType=a),this},
// Status-dependent callbacks
statusCode:function(a){var b;if(a)if(2>t)for(b in a)
// Lazy-add the new callback in a way that preserves old ones
q[b]=[q[b],a[b]];else
// Execute the appropriate callbacks
v.always(a[v.status]);return this},
// Cancel the request
abort:function(a){var b=a||u;return d&&d.abort(b),c(0,b),this}};
// If request was aborted inside a prefilter, stop there
if(
// Attach deferreds
o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,
// Remove hash character (#7531: and string promotion)
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
l.url=((a||l.url||vb)+"").replace(lb,"").replace(qb,wb[1]+"//"),
// Alias method option to type as per ticket #12004
l.type=b.method||b.type||l.method||l.type,
// Extract dataTypes list
l.dataTypes=_.trim(l.dataType||"*").toLowerCase().match(na)||[""],
// A cross-domain request is in order when we have a protocol:host:port mismatch
null==l.crossDomain&&(i=rb.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]===wb[1]&&i[2]===wb[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(wb[3]||("http:"===wb[1]?"80":"443")))),
// Convert data if not already a string
l.data&&l.processData&&"string"!=typeof l.data&&(l.data=_.param(l.data,l.traditional)),
// Apply prefilters
K(sb,l,b,v),2===t)return v;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
j=_.event&&l.global,
// Watch for a new set of requests
j&&0===_.active++&&_.event.trigger("ajaxStart"),
// Uppercase the type
l.type=l.type.toUpperCase(),
// Determine if request has content
l.hasContent=!pb.test(l.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
e=l.url,
// More options handling for requests with no content
l.hasContent||(
// If data is available, append data to url
l.data&&(e=l.url+=(kb.test(e)?"&":"?")+l.data,
// #9682: remove data so that it's not used in an eventual retry
delete l.data),
// Add anti-cache in url if needed
l.cache===!1&&(l.url=mb.test(e)?
// If there is already a '_' parameter, set its value
e.replace(mb,"$1_="+jb++):
// Otherwise add one to the end
e+(kb.test(e)?"&":"?")+"_="+jb++)),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
l.ifModified&&(_.lastModified[e]&&v.setRequestHeader("If-Modified-Since",_.lastModified[e]),_.etag[e]&&v.setRequestHeader("If-None-Match",_.etag[e])),
// Set the correct header, if data is being sent
(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),
// Set the Accepts header for the server, depending on the dataType
v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+ub+"; q=0.01":""):l.accepts["*"]);
// Check for headers option
for(k in l.headers)v.setRequestHeader(k,l.headers[k]);
// Allow custom headers/mimetypes and early abort
if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))
// Abort if not done already and return
return v.abort();
// Aborting is no longer a cancellation
u="abort";
// Install callbacks on deferreds
for(k in{success:1,error:1,complete:1})v[k](l[k]);
// If no transport, we auto-abort
if(
// Get transport
d=K(tb,l,b,v)){v.readyState=1,
// Send global event
j&&n.trigger("ajaxSend",[v,l]),
// Timeout
l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,d.send(r,c)}catch(w){
// Propagate exception as error if not done
if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return _.get(a,b,c,"json")},getScript:function(a,b){return _.get(a,void 0,b,"script")}}),_.each(["get","post"],function(a,b){_[b]=function(a,c,d,e){
// Shift arguments if data argument was omitted
return _.isFunction(c)&&(e=e||d,d=c,c=void 0),_.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),_._evalUrl=function(a){return _.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},_.fn.extend({wrapAll:function(a){var b;
// The elements to wrap the target around
return _.isFunction(a)?this.each(function(b){_(this).wrapAll(a.call(this,b))}):(this[0]&&(b=_(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return _.isFunction(a)?this.each(function(b){_(this).wrapInner(a.call(this,b))}):this.each(function(){var b=_(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=_.isFunction(a);return this.each(function(c){_(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){_.nodeName(this,"body")||_(this).replaceWith(this.childNodes)}).end()}}),_.expr.filters.hidden=function(a){
// Support: Opera <= 12.12
// Opera reports offsetWidths and offsetHeights less than zero on some elements
return a.offsetWidth<=0&&a.offsetHeight<=0},_.expr.filters.visible=function(a){return!_.expr.filters.hidden(a)};var xb=/%20/g,yb=/\[\]$/,zb=/\r?\n/g,Ab=/^(?:submit|button|image|reset|file)$/i,Bb=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
_.param=function(a,b){var c,d=[],e=function(a,b){
// If value is a function, invoke it and return its value
b=_.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};
// If an array was passed in, assume that it is an array of form elements.
if(
// Set traditional to true for jQuery <= 1.3.2 behavior.
void 0===b&&(b=_.ajaxSettings&&_.ajaxSettings.traditional),_.isArray(a)||a.jquery&&!_.isPlainObject(a))
// Serialize the form elements
_.each(a,function(){e(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(c in a)O(c,a[c],b,e);
// Return the resulting serialization
return d.join("&").replace(xb,"+")},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var a=_.prop(this,"elements");return a?_.makeArray(a):this}).filter(function(){var a=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!_(this).is(":disabled")&&Bb.test(this.nodeName)&&!Ab.test(a)&&(this.checked||!ya.test(a))}).map(function(a,b){var c=_(this).val();return null==c?null:_.isArray(c)?_.map(c,function(a){return{name:b.name,value:a.replace(zb,"\r\n")}}):{name:b.name,value:c.replace(zb,"\r\n")}}).get()}}),_.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Cb=0,Db={},Eb={
// file protocol always yields status code 0, assume 200
0:200,
// Support: IE9
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Fb=_.ajaxSettings.xhr();
// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Db)Db[a]()}),Y.cors=!!Fb&&"withCredentials"in Fb,Y.ajax=Fb=!!Fb,_.ajaxTransport(function(a){var b;
// Cross domain only allowed if supported through XMLHttpRequest
// Cross domain only allowed if supported through XMLHttpRequest
return Y.cors||Fb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Cb;
// Apply custom fields if provided
if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];
// Override mime type if needed
a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(e in c)f.setRequestHeader(e,c[e]);
// Callback
b=function(a){return function(){b&&(delete Db[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(
// file: protocol always yields status 0; see #8605, #14207
f.status,f.statusText):d(Eb[f.status]||f.status,f.statusText,
// Support: IE9
// Accessing binary-data responseText throws an exception
// (#11426)
"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},
// Listen to events
f.onload=b(),f.onerror=b("error"),
// Create the abort callback
b=Db[g]=b("abort");try{
// Do send the request (this may raise an exception)
f.send(a.hasContent&&a.data||null)}catch(h){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(b)throw h}},abort:function(){b&&b()}}:void 0}),
// Install script dataType
_.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return _.globalEval(a),a}}}),
// Handle cache's special case and crossDomain
_.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),
// Bind script tag hack transport
_.ajaxTransport("script",function(a){
// This transport only deals with cross domain requests
if(a.crossDomain){var b,c;return{send:function(d,e){b=_("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),Z.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Gb=[],Hb=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
_.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Gb.pop()||_.expando+"_"+jb++;return this[a]=!0,a}}),
// Detect, normalize options and install callbacks for jsonp requests
_.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Hb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Hb.test(b.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
// Handle iff the expected data type is "jsonp" or we have a parameter to set
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// force json dataType
// Install callback
// Clean-up function (fires after converters)
return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=_.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Hb,"$1"+e):b.jsonp!==!1&&(b.url+=(kb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||_.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){
// Restore preexisting value
a[e]=f,
// Save back as free
b[e]&&(
// make sure that re-using the options doesn't screw things around
b.jsonpCallback=c.jsonpCallback,
// save the callback name for future use
Gb.push(e)),
// Call if it was a function and we have a response
g&&_.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),
// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
_.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||Z;var d=ga.exec(a),e=!c&&[];
// Single tag
// Single tag
return d?[b.createElement(d[1])]:(d=_.buildFragment([a],b,e),e&&e.length&&_(e).remove(),_.merge([],d.childNodes))};
// Keep a copy of the old load method
var Ib=_.fn.load;/**
 * Load a url into a page
 */
_.fn.load=function(a,b,c){if("string"!=typeof a&&Ib)return Ib.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return h>=0&&(d=_.trim(a.slice(h)),a=a.slice(0,h)),_.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&_.ajax({url:a,
// if "type" variable is undefined, then "GET" method will be used
type:e,dataType:"html",data:b}).done(function(a){
// Save response for use in complete callback
f=arguments,g.html(d?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
_("<div>").append(_.parseHTML(a)).find(d):
// Otherwise use the full result
a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},
// Attach a bunch of functions for handling common AJAX events
_.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){_.fn[b]=function(a){return this.on(b,a)}}),_.expr.filters.animated=function(a){return _.grep(_.timers,function(b){return a===b.elem}).length};var Jb=a.document.documentElement;_.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=_.css(a,"position"),l=_(a),m={};
// Set position first, in-case top/left are set even on static elem
"static"===k&&(a.style.position="relative"),h=l.offset(),f=_.css(a,"top"),i=_.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),_.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},_.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){_.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)
// Make sure it's not a disconnected DOM node
// Make sure it's not a disconnected DOM node
// Support: BlackBerry 5, iOS 3 (original iPhone)
// If we don't have gBCR, just use 0,0 rather than error
return b=f.documentElement,_.contains(b,d)?(typeof d.getBoundingClientRect!==za&&(e=d.getBoundingClientRect()),c=P(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};
// Subtract parent offsets and element margins
// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
// Assume getBoundingClientRect is there when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===_.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),_.nodeName(a[0],"html")||(d=a.offset()),d.top+=_.css(a[0],"borderTopWidth",!0),d.left+=_.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-_.css(c,"marginTop",!0),left:b.left-d.left-_.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||Jb;a&&!_.nodeName(a,"html")&&"static"===_.css(a,"position");)a=a.offsetParent;return a||Jb})}}),
// Create scrollLeft and scrollTop methods
_.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;_.fn[b]=function(e){return qa(this,function(b,e,f){var g=P(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),
// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
_.each(["top","left"],function(a,b){_.cssHooks[b]=w(Y.pixelPosition,function(a,c){return c?(c=v(a,b),Qa.test(c)?_(a).position()[b]+"px":c):void 0})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
_.each({Height:"height",Width:"width"},function(a,b){_.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){
// Margin is only for outerHeight, outerWidth
_.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return qa(this,function(b,c,d){var e;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return _.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?_.css(b,c,g):_.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),
// The number of elements contained in the matched element set
_.fn.size=function(){return this.length},_.fn.andSelf=_.fn.addBack,
// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.
// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
"function"==typeof define&&define.amd&&define("jquery",[],function(){return _});var
// Map over jQuery in case of overwrite
Kb=a.jQuery,
// Map over the $ in case of overwrite
Lb=a.$;
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return _.noConflict=function(b){return a.$===_&&(a.$=Lb),b&&a.jQuery===_&&(a.jQuery=Kb),_},typeof b===za&&(a.jQuery=a.$=_),_}),/**
 * @license AngularJS v1.5.0-beta.0
 * (c) 2010-2015 Google, Inc. http://angularjs.org
 * License: MIT
 */
function(a,b,c){"use strict";/**
 * @description
 *
 * This object provides a utility for producing rich Error messages within
 * Angular. It can be called as follows:
 *
 * var exampleMinErr = minErr('example');
 * throw exampleMinErr('one', 'This {0} is {1}', foo, bar);
 *
 * The above creates an instance of minErr in the example namespace. The
 * resulting error will have a namespaced error code of example.one.  The
 * resulting error will replace {0} with the value of foo, and {1} with the
 * value of bar. The object is not restricted in the number of arguments it can
 * take.
 *
 * If fewer arguments are specified than necessary for interpolation, the extra
 * interpolation markers will be preserved in the final string.
 *
 * Since data will be parsed statically during a build step, some restrictions
 * are applied with respect to how minErr instances are created and called.
 * Instances should have names of the form namespaceMinErr for a minErr created
 * using minErr('namespace') . Error codes, namespaces and template strings
 * should all be static strings, not variables or general expressions.
 *
 * @param {string} module The namespace to use for the new minErr instance.
 * @param {function} ErrorConstructor Custom error constructor to be instantiated when returning
 *   error from returned function, for cases when a particular type of error is useful.
 * @returns {function(code:string, template:string, ...templateArgs): Error} minErr instance
 */
function d(a,b){return b=b||Error,function(){var c,d,e=2,f=arguments,g=f[0],h="["+(a?a+":":"")+g+"] ",i=f[1];for(h+=i.replace(/\{\d+\}/g,function(a){var b=+a.slice(1,-1),c=b+e;return c<f.length?ta(f[c]):a}),h+="\nhttp://errors.angularjs.org/1.5.0-beta.0/"+(a?a+"/":"")+g,d=e,c="?";d<f.length;d++,c="&")h+=c+"p"+(d-e)+"="+encodeURIComponent(ta(f[d]));return new b(h)}}/**
 * @private
 * @param {*} obj
 * @return {boolean} Returns true if `obj` is an array or array-like object (NodeList, Arguments,
 *                   String ...)
 */
function e(a){if(null==a||C(a))return!1;
// Support: iOS 8.2 (not reproducible in simulator)
// "length" in obj used to prevent JIT error (gh-11508)
var b="length"in Object(a)&&a.length;return a.nodeType===Sd&&b?!0:x(a)||Jd(a)||0===b||"number"==typeof b&&b>0&&b-1 in a}/**
 * @ngdoc function
 * @name angular.forEach
 * @module ng
 * @kind function
 *
 * @description
 * Invokes the `iterator` function once for each item in `obj` collection, which can be either an
 * object or an array. The `iterator` function is invoked with `iterator(value, key, obj)`, where `value`
 * is the value of an object property or an array element, `key` is the object property key or
 * array element index and obj is the `obj` itself. Specifying a `context` for the function is optional.
 *
 * It is worth noting that `.forEach` does not iterate over inherited properties because it filters
 * using the `hasOwnProperty` method.
 *
 * Unlike ES262's
 * [Array.prototype.forEach](http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.18),
 * Providing 'undefined' or 'null' values for `obj` will not throw a TypeError, but rather just
 * return the value provided.
 *
   ```js
     var values = {name: 'misko', gender: 'male'};
     var log = [];
     angular.forEach(values, function(value, key) {
       this.push(key + ': ' + value);
     }, log);
     expect(log).toEqual(['name: misko', 'gender: male']);
   ```
 *
 * @param {Object|Array} obj Object to iterate over.
 * @param {Function} iterator Iterator function.
 * @param {Object=} context Object to become context (`this`) for the iterator function.
 * @returns {Object|Array} Reference to `obj`.
 */
function f(a,b,c){var d,g;if(a)if(A(a))for(d in a)
// Need to check if hasOwnProperty exists,
// as on IE8 the result of querySelectorAll is an object without a hasOwnProperty function
"prototype"==d||"length"==d||"name"==d||a.hasOwnProperty&&!a.hasOwnProperty(d)||b.call(c,a[d],d,a);else if(Jd(a)||e(a)){var h="object"!=typeof a;for(d=0,g=a.length;g>d;d++)(h||d in a)&&b.call(c,a[d],d,a)}else if(a.forEach&&a.forEach!==f)a.forEach(b,c,a);else if(w(a))
// createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
for(d in a)b.call(c,a[d],d,a);else if("function"==typeof a.hasOwnProperty)
// Slow path for objects inheriting Object.prototype, hasOwnProperty check needed
for(d in a)a.hasOwnProperty(d)&&b.call(c,a[d],d,a);else
// Slow path for objects which do not have a method `hasOwnProperty`
for(d in a)sd.call(a,d)&&b.call(c,a[d],d,a);return a}function g(a,b,c){for(var d=Object.keys(a).sort(),e=0;e<d.length;e++)b.call(c,a[d[e]],d[e]);return d}/**
 * when using forEach the params are value, key, but it is often useful to have key, value.
 * @param {function(string, *)} iteratorFn
 * @returns {function(*, string)}
 */
function h(a){return function(b,c){a(c,b)}}/**
 * A consistent way of creating unique IDs in angular.
 *
 * Using simple numbers allows us to generate 28.6 million unique ids per second for 10 years before
 * we hit number precision issues in JavaScript.
 *
 * Math.pow(2,53) / 60 / 60 / 24 / 365 / 10 = 28.6M
 *
 * @returns {number} an unique alpha-numeric string
 */
function i(){return++Hd}/**
 * Set or clear the hashkey for an object.
 * @param obj object
 * @param h the hashkey (!truthy to delete the hashkey)
 */
function j(a,b){b?a.$$hashKey=b:delete a.$$hashKey}function k(a,b,c){for(var d=a.$$hashKey,e=0,f=b.length;f>e;++e){var g=b[e];if(v(g)||A(g))for(var h=Object.keys(g),i=0,l=h.length;l>i;i++){var m=h[i],n=g[m];c&&v(n)?z(n)?a[m]=new Date(n.valueOf()):B(n)?a[m]=new RegExp(n):(v(a[m])||(a[m]=Jd(n)?[]:{}),k(a[m],[n],!0)):a[m]=n}}return j(a,d),a}/**
 * @ngdoc function
 * @name angular.extend
 * @module ng
 * @kind function
 *
 * @description
 * Extends the destination object `dst` by copying own enumerable properties from the `src` object(s)
 * to `dst`. You can specify multiple `src` objects. If you want to preserve original objects, you can do so
 * by passing an empty object as the target: `var object = angular.extend({}, object1, object2)`.
 *
 * **Note:** Keep in mind that `angular.extend` does not support recursive merge (deep copy). Use
 * {@link angular.merge} for this.
 *
 * @param {Object} dst Destination object.
 * @param {...Object} src Source object(s).
 * @returns {Object} Reference to `dst`.
 */
function l(a){return k(a,Ad.call(arguments,1),!1)}/**
* @ngdoc function
* @name angular.merge
* @module ng
* @kind function
*
* @description
* Deeply extends the destination object `dst` by copying own enumerable properties from the `src` object(s)
* to `dst`. You can specify multiple `src` objects. If you want to preserve original objects, you can do so
* by passing an empty object as the target: `var object = angular.merge({}, object1, object2)`.
*
* Unlike {@link angular.extend extend()}, `merge()` recursively descends into object properties of source
* objects, performing a deep copy.
*
* @param {Object} dst Destination object.
* @param {...Object} src Source object(s).
* @returns {Object} Reference to `dst`.
*/
function m(a){return k(a,Ad.call(arguments,1),!0)}function n(a){return parseInt(a,10)}function o(a,b){return l(Object.create(a),b)}/**
 * @ngdoc function
 * @name angular.noop
 * @module ng
 * @kind function
 *
 * @description
 * A function that performs no operations. This function can be useful when writing code in the
 * functional style.
   ```js
     function foo(callback) {
       var result = calculateResult();
       (callback || angular.noop)(result);
     }
   ```
 */
function p(){}/**
 * @ngdoc function
 * @name angular.identity
 * @module ng
 * @kind function
 *
 * @description
 * A function that returns its first argument. This function is useful when writing code in the
 * functional style.
 *
   ```js
     function transformer(transformationFn, value) {
       return (transformationFn || angular.identity)(value);
     };
   ```
  * @param {*} value to be returned.
  * @returns {*} the value passed in.
 */
function q(a){return a}function r(a){return function(){return a}}function s(a){return A(a.toString)&&a.toString!==Object.prototype.toString}/**
 * @ngdoc function
 * @name angular.isUndefined
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is undefined.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is undefined.
 */
function t(a){return"undefined"==typeof a}/**
 * @ngdoc function
 * @name angular.isDefined
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is defined.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is defined.
 */
function u(a){return"undefined"!=typeof a}/**
 * @ngdoc function
 * @name angular.isObject
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is an `Object`. Unlike `typeof` in JavaScript, `null`s are not
 * considered to be objects. Note that JavaScript arrays are objects.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is an `Object` but not `null`.
 */
function v(a){
// http://jsperf.com/isobject4
return null!==a&&"object"==typeof a}/**
 * Determine if a value is an object with a null prototype
 *
 * @returns {boolean} True if `value` is an `Object` with a null prototype
 */
function w(a){return null!==a&&"object"==typeof a&&!Ed(a)}/**
 * @ngdoc function
 * @name angular.isString
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is a `String`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `String`.
 */
function x(a){return"string"==typeof a}/**
 * @ngdoc function
 * @name angular.isNumber
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is a `Number`.
 *
 * This includes the "special" numbers `NaN`, `+Infinity` and `-Infinity`.
 *
 * If you wish to exclude these then you can use the native
 * [`isFinite'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isFinite)
 * method.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `Number`.
 */
function y(a){return"number"==typeof a}/**
 * @ngdoc function
 * @name angular.isDate
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a value is a date.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `Date`.
 */
function z(a){return"[object Date]"===Dd.call(a)}/**
 * @ngdoc function
 * @name angular.isFunction
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is a `Function`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `Function`.
 */
function A(a){return"function"==typeof a}/**
 * Determines if a value is a regular expression object.
 *
 * @private
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a `RegExp`.
 */
function B(a){return"[object RegExp]"===Dd.call(a)}/**
 * Checks if `obj` is a window object.
 *
 * @private
 * @param {*} obj Object to check
 * @returns {boolean} True if `obj` is a window obj.
 */
function C(a){return a&&a.window===a}function D(a){return a&&a.$evalAsync&&a.$watch}function E(a){return"[object File]"===Dd.call(a)}function F(a){return"[object FormData]"===Dd.call(a)}function G(a){return"[object Blob]"===Dd.call(a)}function H(a){return"boolean"==typeof a}function I(a){return a&&A(a.then)}function J(a){return Kd.test(Dd.call(a))}/**
 * @ngdoc function
 * @name angular.isElement
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is a DOM element (or wrapped jQuery element).
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is a DOM element (or wrapped jQuery element).
 */
function K(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}/**
 * @param str 'key1,key2,...'
 * @returns {object} in the form of {key1:true, key2:true, ...}
 */
function L(a){var b,c={},d=a.split(",");for(b=0;b<d.length;b++)c[d[b]]=!0;return c}function M(a){return rd(a.nodeName||a[0]&&a[0].nodeName)}function N(a,b){var c=a.indexOf(b);return c>=0&&a.splice(c,1),c}/**
 * @ngdoc function
 * @name angular.copy
 * @module ng
 * @kind function
 *
 * @description
 * Creates a deep copy of `source`, which should be an object or an array.
 *
 * * If no destination is supplied, a copy of the object or array is created.
 * * If a destination is provided, all of its elements (for arrays) or properties (for objects)
 *   are deleted and then all elements/properties from the source are copied to it.
 * * If `source` is not an object or array (inc. `null` and `undefined`), `source` is returned.
 * * If `source` is identical to 'destination' an exception will be thrown.
 *
 * @param {*} source The source that will be used to make a copy.
 *                   Can be any type, including primitives, `null`, and `undefined`.
 * @param {(Object|Array)=} destination Destination into which the source is copied. If
 *     provided, must be of the same type as `source`.
 * @returns {*} The copy or updated `destination`, if `destination` was specified.
 *
 * @example
 <example module="copyExample">
 <file name="index.html">
 <div ng-controller="ExampleController">
 <form novalidate class="simple-form">
 Name: <input type="text" ng-model="user.name" /><br />
 E-mail: <input type="email" ng-model="user.email" /><br />
 Gender: <input type="radio" ng-model="user.gender" value="male" />male
 <input type="radio" ng-model="user.gender" value="female" />female<br />
 <button ng-click="reset()">RESET</button>
 <button ng-click="update(user)">SAVE</button>
 </form>
 <pre>form = {{user | json}}</pre>
 <pre>master = {{master | json}}</pre>
 </div>

 <script>
  angular.module('copyExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.master= {};

      $scope.update = function(user) {
        // Example with 1 argument
        $scope.master= angular.copy(user);
      };

      $scope.reset = function() {
        // Example with 2 arguments
        angular.copy($scope.master, $scope.user);
      };

      $scope.reset();
    }]);
 </script>
 </file>
 </example>
 */
function O(a,b,c,d){if(C(a)||D(a))throw Fd("cpws","Can't copy! Making copies of Window or Scope instances is not supported.");if(J(b))throw Fd("cpta","Can't copy! TypedArray destination cannot be mutated.");if(b){if(a===b)throw Fd("cpi","Can't copy! Source and destination are identical.");c=c||[],d=d||[],v(a)&&(c.push(a),d.push(b));var e;if(Jd(a)){b.length=0;for(var g=0;g<a.length;g++)b.push(O(a[g],null,c,d))}else{var h=b.$$hashKey;if(Jd(b)?b.length=0:f(b,function(a,c){delete b[c]}),w(a))
// createMap() fast path --- Safe to avoid hasOwnProperty check because prototype chain is empty
for(e in a)b[e]=O(a[e],null,c,d);else if(a&&"function"==typeof a.hasOwnProperty)
// Slow path, which must rely on hasOwnProperty
for(e in a)a.hasOwnProperty(e)&&(b[e]=O(a[e],null,c,d));else
// Slowest path --- hasOwnProperty can't be called as a method
for(e in a)sd.call(a,e)&&(b[e]=O(a[e],null,c,d));j(b,h)}}else if(b=a,v(a)){var i;if(c&&-1!==(i=c.indexOf(a)))return d[i];
// TypedArray, Date and RegExp have specific copy functionality and must be
// pushed onto the stack before returning.
// Array and other objects create the base object and recurse to copy child
// objects. The array/object will be pushed onto the stack when recursed.
if(Jd(a))return O(a,[],c,d);if(J(a))b=new a.constructor(a);else if(z(a))b=new Date(a.getTime());else if(B(a))b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex;else{if(!A(a.cloneNode)){var k=Object.create(Ed(a));return O(a,k,c,d)}b=a.cloneNode(!0)}d&&(c.push(a),d.push(b))}return b}/**
 * Creates a shallow copy of an object, an array or a primitive.
 *
 * Assumes that there are no proto properties for objects.
 */
function P(a,b){if(Jd(a)){b=b||[];for(var c=0,d=a.length;d>c;c++)b[c]=a[c]}else if(v(a)){b=b||{};for(var e in a)("$"!==e.charAt(0)||"$"!==e.charAt(1))&&(b[e]=a[e])}return b||a}/**
 * @ngdoc function
 * @name angular.equals
 * @module ng
 * @kind function
 *
 * @description
 * Determines if two objects or two values are equivalent. Supports value types, regular
 * expressions, arrays and objects.
 *
 * Two objects or values are considered equivalent if at least one of the following is true:
 *
 * * Both objects or values pass `===` comparison.
 * * Both objects or values are of the same type and all of their properties are equal by
 *   comparing them with `angular.equals`.
 * * Both values are NaN. (In JavaScript, NaN == NaN => false. But we consider two NaN as equal)
 * * Both values represent the same regular expression (In JavaScript,
 *   /abc/ == /abc/ => false. But we consider two regular expressions as equal when their textual
 *   representation matches).
 *
 * During a property comparison, properties of `function` type and properties with names
 * that begin with `$` are ignored.
 *
 * Scope and DOMWindow objects are being compared only by identify (`===`).
 *
 * @param {*} o1 Object or value to compare.
 * @param {*} o2 Object or value to compare.
 * @returns {boolean} True if arguments are equal.
 */
function Q(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;// NaN === NaN
var c,d,e,f=typeof a,g=typeof b;if(f==g&&"object"==f){if(!Jd(a)){if(z(a))return z(b)?Q(a.getTime(),b.getTime()):!1;if(B(a))return B(b)?a.toString()==b.toString():!1;if(D(a)||D(b)||C(a)||C(b)||Jd(b)||z(b)||B(b))return!1;e=qa();for(d in a)if("$"!==d.charAt(0)&&!A(a[d])){if(!Q(a[d],b[d]))return!1;e[d]=!0}for(d in b)if(!(d in e)&&"$"!==d.charAt(0)&&u(b[d])&&!A(b[d]))return!1;return!0}if(!Jd(b))return!1;if((c=a.length)==b.length){for(d=0;c>d;d++)if(!Q(a[d],b[d]))return!1;return!0}}return!1}function R(a,b,c){return a.concat(Ad.call(b,c))}function S(a,b){return Ad.call(a,b||0)}/* jshint -W101 */
/**
 * @ngdoc function
 * @name angular.bind
 * @module ng
 * @kind function
 *
 * @description
 * Returns a function which calls function `fn` bound to `self` (`self` becomes the `this` for
 * `fn`). You can supply optional `args` that are prebound to the function. This feature is also
 * known as [partial application](http://en.wikipedia.org/wiki/Partial_application), as
 * distinguished from [function currying](http://en.wikipedia.org/wiki/Currying#Contrast_with_partial_function_application).
 *
 * @param {Object} self Context which `fn` should be evaluated in.
 * @param {function()} fn Function to be bound.
 * @param {...*} args Optional arguments to be prebound to the `fn` function call.
 * @returns {function()} Function that wraps the `fn` with all the specified bindings.
 */
/* jshint +W101 */
function T(a,b){var c=arguments.length>2?S(arguments,2):[];return!A(b)||b instanceof RegExp?b:c.length?function(){return arguments.length?b.apply(a,R(c,arguments,0)):b.apply(a,c)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function U(a,d){var e=d;return"string"==typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?e=c:C(d)?e="$WINDOW":d&&b===d?e="$DOCUMENT":D(d)&&(e="$SCOPE"),e}/**
 * @ngdoc function
 * @name angular.toJson
 * @module ng
 * @kind function
 *
 * @description
 * Serializes input into a JSON-formatted string. Properties with leading $$ characters will be
 * stripped since angular uses this notation internally.
 *
 * @param {Object|Array|Date|string|number} obj Input to be serialized into JSON.
 * @param {boolean|number} [pretty=2] If set to true, the JSON output will contain newlines and whitespace.
 *    If set to an integer, the JSON output will contain that many spaces per indentation.
 * @returns {string|undefined} JSON-ified string representing `obj`.
 */
function V(a,b){return"undefined"==typeof a?c:(y(b)||(b=b?2:null),JSON.stringify(a,U,b))}/**
 * @ngdoc function
 * @name angular.fromJson
 * @module ng
 * @kind function
 *
 * @description
 * Deserializes a JSON string.
 *
 * @param {string} json JSON string to deserialize.
 * @returns {Object|Array|string|number} Deserialized JSON string.
 */
function W(a){return x(a)?JSON.parse(a):a}function X(a,b){var c=Date.parse("Jan 01, 1970 00:00:00 "+a)/6e4;return isNaN(c)?b:c}function Y(a,b){return a=new Date(a.getTime()),a.setMinutes(a.getMinutes()+b),a}function Z(a,b,c){c=c?-1:1;var d=X(b,a.getTimezoneOffset());return Y(a,c*(d-a.getTimezoneOffset()))}/**
 * @returns {string} Returns the string representation of the element.
 */
function $(a){a=xd(a).clone();try{
// turns out IE does not let you set .html() on elements which
// are not allowed to have children. So we just ignore it.
a.empty()}catch(b){}var c=xd("<div>").append(a).html();try{return a[0].nodeType===Ud?rd(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+rd(b)})}catch(b){return rd(c)}}
/////////////////////////////////////////////////
/**
 * Tries to decode the URI component without throwing an exception.
 *
 * @private
 * @param str value potential URI component to check.
 * @returns {boolean} True if `value` can be decoded
 * with the decodeURIComponent function.
 */
function _(a){try{return decodeURIComponent(a)}catch(b){}}/**
 * Parses an escaped url query string into key-value pairs.
 * @returns {Object.<string,boolean|Array>}
 */
function aa(/**string*/a){var b={};return f((a||"").split("&"),function(a){var c,d,e;a&&(d=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),-1!==c&&(d=a.substring(0,c),e=a.substring(c+1)),d=_(d),u(d)&&(e=u(e)?_(e):!0,sd.call(b,d)?Jd(b[d])?b[d].push(e):b[d]=[b[d],e]:b[d]=e))}),b}function ba(a){var b=[];return f(a,function(a,c){Jd(a)?f(a,function(a){b.push(da(c,!0)+(a===!0?"":"="+da(a,!0)))}):b.push(da(c,!0)+(a===!0?"":"="+da(a,!0)))}),b.length?b.join("&"):""}/**
 * We need our custom method because encodeURIComponent is too aggressive and doesn't follow
 * http://www.ietf.org/rfc/rfc3986.txt with regards to the character set (pchar) allowed in path
 * segments:
 *    segment       = *pchar
 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
 *    pct-encoded   = "%" HEXDIG HEXDIG
 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
 *                     / "*" / "+" / "," / ";" / "="
 */
function ca(a){return da(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}/**
 * This method is intended for encoding *key* or *value* parts of query component. We need a custom
 * method because encodeURIComponent is too aggressive and encodes stuff that doesn't have to be
 * encoded per http://tools.ietf.org/html/rfc3986:
 *    query       = *( pchar / "/" / "?" )
 *    pchar         = unreserved / pct-encoded / sub-delims / ":" / "@"
 *    unreserved    = ALPHA / DIGIT / "-" / "." / "_" / "~"
 *    pct-encoded   = "%" HEXDIG HEXDIG
 *    sub-delims    = "!" / "$" / "&" / "'" / "(" / ")"
 *                     / "*" / "+" / "," / ";" / "="
 */
function da(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function ea(a,b){var c,d,e=Pd.length;for(d=0;e>d;++d)if(c=Pd[d]+b,x(c=a.getAttribute(c)))return c;return null}/**
 * @ngdoc directive
 * @name ngApp
 * @module ng
 *
 * @element ANY
 * @param {angular.Module} ngApp an optional application
 *   {@link angular.module module} name to load.
 * @param {boolean=} ngStrictDi if this attribute is present on the app element, the injector will be
 *   created in "strict-di" mode. This means that the application will fail to invoke functions which
 *   do not use explicit function annotation (and are thus unsuitable for minification), as described
 *   in {@link guide/di the Dependency Injection guide}, and useful debugging info will assist in
 *   tracking down the root of these bugs.
 *
 * @description
 *
 * Use this directive to **auto-bootstrap** an AngularJS application. The `ngApp` directive
 * designates the **root element** of the application and is typically placed near the root element
 * of the page - e.g. on the `<body>` or `<html>` tags.
 *
 * Only one AngularJS application can be auto-bootstrapped per HTML document. The first `ngApp`
 * found in the document will be used to define the root element to auto-bootstrap as an
 * application. To run multiple applications in an HTML document you must manually bootstrap them using
 * {@link angular.bootstrap} instead. AngularJS applications cannot be nested within each other.
 *
 * You can specify an **AngularJS module** to be used as the root module for the application.  This
 * module will be loaded into the {@link auto.$injector} when the application is bootstrapped. It
 * should contain the application code needed or have dependencies on other modules that will
 * contain the code. See {@link angular.module} for more information.
 *
 * In the example below if the `ngApp` directive were not placed on the `html` element then the
 * document would not be compiled, the `AppController` would not be instantiated and the `{{ a+b }}`
 * would not be resolved to `3`.
 *
 * `ngApp` is the easiest, and most common way to bootstrap an application.
 *
 <example module="ngAppDemo">
   <file name="index.html">
   <div ng-controller="ngAppDemoController">
     I can add: {{a}} + {{b}} =  {{ a+b }}
   </div>
   </file>
   <file name="script.js">
   angular.module('ngAppDemo', []).controller('ngAppDemoController', function($scope) {
     $scope.a = 1;
     $scope.b = 2;
   });
   </file>
 </example>
 *
 * Using `ngStrictDi`, you would see something like this:
 *
 <example ng-app-included="true">
   <file name="index.html">
   <div ng-app="ngAppStrictDemo" ng-strict-di>
       <div ng-controller="GoodController1">
           I can add: {{a}} + {{b}} =  {{ a+b }}

           <p>This renders because the controller does not fail to
              instantiate, by using explicit annotation style (see
              script.js for details)
           </p>
       </div>

       <div ng-controller="GoodController2">
           Name: <input ng-model="name"><br />
           Hello, {{name}}!

           <p>This renders because the controller does not fail to
              instantiate, by using explicit annotation style
              (see script.js for details)
           </p>
       </div>

       <div ng-controller="BadController">
           I can add: {{a}} + {{b}} =  {{ a+b }}

           <p>The controller could not be instantiated, due to relying
              on automatic function annotations (which are disabled in
              strict mode). As such, the content of this section is not
              interpolated, and there should be an error in your web console.
           </p>
       </div>
   </div>
   </file>
   <file name="script.js">
   angular.module('ngAppStrictDemo', [])
     // BadController will fail to instantiate, due to relying on automatic function annotation,
     // rather than an explicit annotation
     .controller('BadController', function($scope) {
       $scope.a = 1;
       $scope.b = 2;
     })
     // Unlike BadController, GoodController1 and GoodController2 will not fail to be instantiated,
     // due to using explicit annotations using the array style and $inject property, respectively.
     .controller('GoodController1', ['$scope', function($scope) {
       $scope.a = 1;
       $scope.b = 2;
     }])
     .controller('GoodController2', GoodController2);
     function GoodController2($scope) {
       $scope.name = "World";
     }
     GoodController2.$inject = ['$scope'];
   </file>
   <file name="style.css">
   div[ng-controller] {
       margin-bottom: 1em;
       -webkit-border-radius: 4px;
       border-radius: 4px;
       border: 1px solid;
       padding: .5em;
   }
   div[ng-controller^=Good] {
       border-color: #d6e9c6;
       background-color: #dff0d8;
       color: #3c763d;
   }
   div[ng-controller^=Bad] {
       border-color: #ebccd1;
       background-color: #f2dede;
       color: #a94442;
       margin-bottom: 0;
   }
   </file>
 </example>
 */
function fa(a,b){var c,d,e={};
// The element `element` has priority over any other element
f(Pd,function(b){var e=b+"app";!c&&a.hasAttribute&&a.hasAttribute(e)&&(c=a,d=a.getAttribute(e))}),f(Pd,function(b){var e,f=b+"app";!c&&(e=a.querySelector("["+f.replace(":","\\:")+"]"))&&(c=e,d=e.getAttribute(f))}),c&&(e.strictDi=null!==ea(c,"strict-di"),b(c,d?[d]:[],e))}/**
 * @ngdoc function
 * @name angular.bootstrap
 * @module ng
 * @description
 * Use this function to manually start up angular application.
 *
 * See: {@link guide/bootstrap Bootstrap}
 *
 * Note that Protractor based end-to-end tests cannot use this function to bootstrap manually.
 * They must use {@link ng.directive:ngApp ngApp}.
 *
 * Angular will detect if it has been loaded into the browser more than once and only allow the
 * first loaded script to be bootstrapped and will report a warning to the browser console for
 * each of the subsequent scripts. This prevents strange results in applications, where otherwise
 * multiple instances of Angular try to work on the DOM.
 *
 * ```html
 * <!doctype html>
 * <html>
 * <body>
 * <div ng-controller="WelcomeController">
 *   {{greeting}}
 * </div>
 *
 * <script src="angular.js"></script>
 * <script>
 *   var app = angular.module('demo', [])
 *   .controller('WelcomeController', function($scope) {
 *       $scope.greeting = 'Welcome!';
 *   });
 *   angular.bootstrap(document, ['demo']);
 * </script>
 * </body>
 * </html>
 * ```
 *
 * @param {DOMElement} element DOM element which is the root of angular application.
 * @param {Array<String|Function|Array>=} modules an array of modules to load into the application.
 *     Each item in the array should be the name of a predefined module or a (DI annotated)
 *     function that will be invoked by the injector as a `config` block.
 *     See: {@link angular.module modules}
 * @param {Object=} config an object for defining configuration options for the application. The
 *     following keys are supported:
 *
 * * `strictDi` - disable automatic function annotation for the application. This is meant to
 *   assist in finding bugs which break minified code. Defaults to `false`.
 *
 * @returns {auto.$injector} Returns the newly created injector for this app.
 */
function ga(c,d,e){v(e)||(e={});var g={strictDi:!1};e=l(g,e);var h=function(){if(c=xd(c),c.injector()){var a=c[0]===b?"document":$(c);
//Encode angle brackets to prevent input from being sanitized to empty string #8683
throw Fd("btstrpd","App Already Bootstrapped with this Element '{0}'",a.replace(/</,"&lt;").replace(/>/,"&gt;"))}d=d||[],d.unshift(["$provide",function(a){a.value("$rootElement",c)}]),e.debugInfoEnabled&&
// Pushing so that this overrides `debugInfoEnabled` setting defined in user's `modules`.
d.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]),d.unshift("ng");var f=$a(d,e.strictDi);return f.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,c,d){a.$apply(function(){b.data("$injector",d),c(b)(a)})}]),f},i=/^NG_ENABLE_DEBUG_INFO!/,j=/^NG_DEFER_BOOTSTRAP!/;return a&&i.test(a.name)&&(e.debugInfoEnabled=!0,a.name=a.name.replace(i,"")),a&&!j.test(a.name)?h():(a.name=a.name.replace(j,""),Gd.resumeBootstrap=function(a){return f(a,function(a){d.push(a)}),h()},void(A(Gd.resumeDeferredBootstrap)&&Gd.resumeDeferredBootstrap()))}/**
 * @ngdoc function
 * @name angular.reloadWithDebugInfo
 * @module ng
 * @description
 * Use this function to reload the current application with debug information turned on.
 * This takes precedence over a call to `$compileProvider.debugInfoEnabled(false)`.
 *
 * See {@link ng.$compileProvider#debugInfoEnabled} for more.
 */
function ha(){a.name="NG_ENABLE_DEBUG_INFO!"+a.name,a.location.reload()}/**
 * @name angular.getTestability
 * @module ng
 * @description
 * Get the testability service for the instance of Angular on the given
 * element.
 * @param {DOMElement} element DOM element which is the root of angular application.
 */
function ia(a){var b=Gd.element(a).injector();if(!b)throw Fd("test","no injector found for element argument to getTestability");return b.get("$$testability")}function ja(a,b){return b=b||"_",a.replace(Qd,function(a,c){return(c?b:"")+a.toLowerCase()})}function ka(){var b;if(!Rd){
// bind to jQuery if present;
var d=Od();yd=t(d)?a.jQuery:// use jQuery (if present)
d?// use jqLite
a[d]:c,// use jQuery specified by `ngJq`
// Use jQuery if it exists with proper functionality, otherwise default to us.
// Angular 1.2+ requires jQuery 1.7+ for on()/off() support.
// Angular 1.3+ technically requires at least jQuery 2.1+ but it may work with older
// versions. It will not work for sure with jQuery <1.7, though.
yd&&yd.fn.on?(xd=yd,l(yd.fn,{scope:ke.scope,isolateScope:ke.isolateScope,controller:ke.controller,injector:ke.injector,inheritedData:ke.inheritedData}),
// All nodes removed from the DOM via various jQuery APIs like .remove()
// are passed through jQuery.cleanData. Monkey-patch this method to fire
// the $destroy event on all removed nodes.
b=yd.cleanData,yd.cleanData=function(a){var c;if(Id)Id=!1;else for(var d,e=0;null!=(d=a[e]);e++)c=yd._data(d,"events"),c&&c.$destroy&&yd(d).triggerHandler("$destroy");b(a)}):xd=Ca,Gd.element=xd,
// Prevent double-proxying.
Rd=!0}}/**
 * throw error if the argument is falsy.
 */
function la(a,b,c){if(!a)throw Fd("areq","Argument '{0}' is {1}",b||"?",c||"required");return a}function ma(a,b,c){return c&&Jd(a)&&(a=a[a.length-1]),la(A(a),b,"not a function, got "+(a&&"object"==typeof a?a.constructor.name||"Object":typeof a)),a}/**
 * throw error if the name given is hasOwnProperty
 * @param  {String} name    the name to test
 * @param  {String} context the context in which the name is used, such as module or directive
 */
function na(a,b){if("hasOwnProperty"===a)throw Fd("badname","hasOwnProperty is not a valid {0} name",b)}/**
 * Return the value accessible from the object by path. Any undefined traversals are ignored
 * @param {Object} obj starting object
 * @param {String} path path to traverse
 * @param {boolean} [bindFnToScope=true]
 * @returns {Object} value as accessible by path
 */
//TODO(misko): this function needs to be removed
function oa(a,b,c){if(!b)return a;for(var d,e=b.split("."),f=a,g=e.length,h=0;g>h;h++)d=e[h],a&&(a=(f=a)[d]);return!c&&A(a)?T(f,a):a}/**
 * Return the DOM siblings between the first and last node in the given array.
 * @param {Array} array like object
 * @returns {Array} the inputted object or a jqLite collection containing the nodes
 */
function pa(a){for(var b,c=a[0],d=a[a.length-1],e=1;c!==d&&(c=c.nextSibling);e++)(b||a[e]!==c)&&(b||(b=xd(Ad.call(a,0,e))),b.push(c));return b||a}/**
 * Creates a new object without a prototype. This object is useful for lookup without having to
 * guard against prototypically inherited properties via hasOwnProperty.
 *
 * Related micro-benchmarks:
 * - http://jsperf.com/object-create2
 * - http://jsperf.com/proto-map-lookup/2
 * - http://jsperf.com/for-in-vs-object-keys2
 *
 * @returns {Object}
 */
function qa(){return Object.create(null)}/**
 * @ngdoc type
 * @name angular.Module
 * @module ng
 * @description
 *
 * Interface for configuring angular {@link angular.module modules}.
 */
function ra(a){function b(a,b,c){return a[b]||(a[b]=c())}var c=d("$injector"),e=d("ng"),f=b(a,"angular",Object);
// We need to expose `angular.$$minErr` to modules such as `ngResource` that reference it during bootstrap
return f.$$minErr=f.$$minErr||d,b(f,"module",function(){/** @type {Object.<string, angular.Module>} */
var a={};/**
     * @ngdoc function
     * @name angular.module
     * @module ng
     * @description
     *
     * The `angular.module` is a global place for creating, registering and retrieving Angular
     * modules.
     * All modules (angular core or 3rd party) that should be available to an application must be
     * registered using this mechanism.
     *
     * Passing one argument retrieves an existing {@link angular.Module},
     * whereas passing more than one argument creates a new {@link angular.Module}
     *
     *
     * # Module
     *
     * A module is a collection of services, directives, controllers, filters, and configuration information.
     * `angular.module` is used to configure the {@link auto.$injector $injector}.
     *
     * ```js
     * // Create a new module
     * var myModule = angular.module('myModule', []);
     *
     * // register a new service
     * myModule.value('appName', 'MyCoolApp');
     *
     * // configure existing services inside initialization blocks.
     * myModule.config(['$locationProvider', function($locationProvider) {
     *   // Configure existing providers
     *   $locationProvider.hashPrefix('!');
     * }]);
     * ```
     *
     * Then you can create an injector and load your modules like this:
     *
     * ```js
     * var injector = angular.injector(['ng', 'myModule'])
     * ```
     *
     * However it's more likely that you'll just use
     * {@link ng.directive:ngApp ngApp} or
     * {@link angular.bootstrap} to simplify this process for you.
     *
     * @param {!string} name The name of the module to create or retrieve.
     * @param {!Array.<string>=} requires If specified then new module is being created. If
     *        unspecified then the module is being retrieved for further configuration.
     * @param {Function=} configFn Optional configuration function for the module. Same as
     *        {@link angular.Module#config Module#config()}.
     * @returns {module} new module with the {@link angular.Module} api.
     */
return function(d,f,g){var h=function(a,b){if("hasOwnProperty"===a)throw e("badname","hasOwnProperty is not a valid {0} name",b)};return h(d,"module"),f&&a.hasOwnProperty(d)&&(a[d]=null),b(a,d,function(){/**
         * @param {string} provider
         * @param {string} method
         * @param {String=} insertMethod
         * @returns {angular.Module}
         */
function a(a,b,c,d){return d||(d=e),function(){return d[c||"push"]([a,b,arguments]),k}}/**
         * @param {string} provider
         * @param {string} method
         * @returns {angular.Module}
         */
function b(a,b){return function(c,f){return f&&A(f)&&(f.$$moduleName=d),e.push([a,b,arguments]),k}}if(!f)throw c("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",d);/** @type {!Array.<Array.<*>>} */
var e=[],h=[],i=[],j=a("$injector","invoke","push",h),k={
// Private state
_invokeQueue:e,_configBlocks:h,_runBlocks:i,/**
           * @ngdoc property
           * @name angular.Module#requires
           * @module ng
           *
           * @description
           * Holds the list of modules which the injector will load before the current module is
           * loaded.
           */
requires:f,/**
           * @ngdoc property
           * @name angular.Module#name
           * @module ng
           *
           * @description
           * Name of the module.
           */
name:d,/**
           * @ngdoc method
           * @name angular.Module#provider
           * @module ng
           * @param {string} name service name
           * @param {Function} providerType Construction function for creating new instance of the
           *                                service.
           * @description
           * See {@link auto.$provide#provider $provide.provider()}.
           */
provider:b("$provide","provider"),/**
           * @ngdoc method
           * @name angular.Module#factory
           * @module ng
           * @param {string} name service name
           * @param {Function} providerFunction Function for creating new instance of the service.
           * @description
           * See {@link auto.$provide#factory $provide.factory()}.
           */
factory:b("$provide","factory"),/**
           * @ngdoc method
           * @name angular.Module#service
           * @module ng
           * @param {string} name service name
           * @param {Function} constructor A constructor function that will be instantiated.
           * @description
           * See {@link auto.$provide#service $provide.service()}.
           */
service:b("$provide","service"),/**
           * @ngdoc method
           * @name angular.Module#value
           * @module ng
           * @param {string} name service name
           * @param {*} object Service instance object.
           * @description
           * See {@link auto.$provide#value $provide.value()}.
           */
value:a("$provide","value"),/**
           * @ngdoc method
           * @name angular.Module#constant
           * @module ng
           * @param {string} name constant name
           * @param {*} object Constant value.
           * @description
           * Because the constant are fixed, they get applied before other provide methods.
           * See {@link auto.$provide#constant $provide.constant()}.
           */
constant:a("$provide","constant","unshift"),/**
           * @ngdoc method
           * @name angular.Module#decorator
           * @module ng
           * @param {string} The name of the service to decorate.
           * @param {Function} This function will be invoked when the service needs to be
           *                                    instantiated and should return the decorated service instance.
           * @description
           * See {@link auto.$provide#decorator $provide.decorator()}.
           */
decorator:b("$provide","decorator"),/**
           * @ngdoc method
           * @name angular.Module#animation
           * @module ng
           * @param {string} name animation name
           * @param {Function} animationFactory Factory function for creating new instance of an
           *                                    animation.
           * @description
           *
           * **NOTE**: animations take effect only if the **ngAnimate** module is loaded.
           *
           *
           * Defines an animation hook that can be later used with
           * {@link $animate $animate} service and directives that use this service.
           *
           * ```js
           * module.animation('.animation-name', function($inject1, $inject2) {
           *   return {
           *     eventName : function(element, done) {
           *       //code to run the animation
           *       //once complete, then run done()
           *       return function cancellationFunction(element) {
           *         //code to cancel the animation
           *       }
           *     }
           *   }
           * })
           * ```
           *
           * See {@link ng.$animateProvider#register $animateProvider.register()} and
           * {@link ngAnimate ngAnimate module} for more information.
           */
animation:b("$animateProvider","register"),/**
           * @ngdoc method
           * @name angular.Module#filter
           * @module ng
           * @param {string} name Filter name - this must be a valid angular expression identifier
           * @param {Function} filterFactory Factory function for creating new instance of filter.
           * @description
           * See {@link ng.$filterProvider#register $filterProvider.register()}.
           *
           * <div class="alert alert-warning">
           * **Note:** Filter names must be valid angular {@link expression} identifiers, such as `uppercase` or `orderBy`.
           * Names with special characters, such as hyphens and dots, are not allowed. If you wish to namespace
           * your filters, then you can use capitalization (`myappSubsectionFilterx`) or underscores
           * (`myapp_subsection_filterx`).
           * </div>
           */
filter:b("$filterProvider","register"),/**
           * @ngdoc method
           * @name angular.Module#controller
           * @module ng
           * @param {string|Object} name Controller name, or an object map of controllers where the
           *    keys are the names and the values are the constructors.
           * @param {Function} constructor Controller constructor function.
           * @description
           * See {@link ng.$controllerProvider#register $controllerProvider.register()}.
           */
controller:b("$controllerProvider","register"),/**
           * @ngdoc method
           * @name angular.Module#directive
           * @module ng
           * @param {string|Object} name Directive name, or an object map of directives where the
           *    keys are the names and the values are the factories.
           * @param {Function} directiveFactory Factory function for creating new instance of
           * directives.
           * @description
           * See {@link ng.$compileProvider#directive $compileProvider.directive()}.
           */
directive:b("$compileProvider","directive"),/**
           * @ngdoc method
           * @name angular.Module#config
           * @module ng
           * @param {Function} configFn Execute this function on module load. Useful for service
           *    configuration.
           * @description
           * Use this method to register work which needs to be performed on module loading.
           * For more about how to configure services, see
           * {@link providers#provider-recipe Provider Recipe}.
           */
config:j,/**
           * @ngdoc method
           * @name angular.Module#run
           * @module ng
           * @param {Function} initializationFn Execute this function after injector creation.
           *    Useful for application initialization.
           * @description
           * Use this method to register work which should be performed when the injector is done
           * loading all modules.
           */
run:function(a){return i.push(a),this}};return g&&j(g),k})}})}/* global: toDebugString: true */
function sa(a){var b=[];return JSON.stringify(a,function(a,c){if(c=U(a,c),v(c)){if(b.indexOf(c)>=0)return"...";b.push(c)}return c})}function ta(a){return"function"==typeof a?a.toString().replace(/ \{[\s\S]*$/,""):t(a)?"undefined":"string"!=typeof a?sa(a):a}function ua(b){l(b,{bootstrap:ga,copy:O,extend:l,merge:m,equals:Q,element:xd,forEach:f,injector:$a,noop:p,bind:T,toJson:V,fromJson:W,identity:q,isUndefined:t,isDefined:u,isString:x,isFunction:A,isObject:v,isNumber:y,isElement:K,isArray:Jd,version:Yd,isDate:z,lowercase:rd,uppercase:td,callbacks:{counter:0},getTestability:ia,$$minErr:d,$$csp:Nd,reloadWithDebugInfo:ha}),(zd=ra(a))("ng",["ngLocale"],["$provide",function(a){
// $$sanitizeUriProvider needs to be before $compileProvider as it is used by it.
a.provider({$$sanitizeUri:oc}),a.provider("$compile",ib).directive({a:lf,input:Cf,textarea:Cf,form:qf,script:ug,select:xg,style:zg,option:yg,ngBind:Ff,ngBindHtml:Hf,ngBindTemplate:Gf,ngClass:Jf,ngClassEven:Lf,ngClassOdd:Kf,ngCloak:Mf,ngController:Nf,ngForm:rf,ngHide:og,ngIf:Qf,ngInclude:Rf,ngInit:Tf,ngNonBindable:fg,ngPluralize:jg,ngRepeat:kg,ngShow:ng,ngStyle:pg,ngSwitch:qg,ngSwitchWhen:rg,ngSwitchDefault:sg,ngOptions:ig,ngTransclude:tg,ngModel:cg,ngList:Uf,ngChange:If,pattern:Bg,ngPattern:Bg,required:Ag,ngRequired:Ag,minlength:Dg,ngMinlength:Dg,maxlength:Cg,ngMaxlength:Cg,ngValue:Ef,ngModelOptions:eg}).directive({ngInclude:Sf}).directive(mf).directive(Of),a.provider({$anchorScroll:_a,$animate:ze,$animateCss:Ae,$$animateQueue:ye,$$AnimateRunner:xe,$browser:fb,$cacheFactory:gb,$controller:nb,$document:ob,$exceptionHandler:pb,$filter:Cc,$$forceReflow:Fe,$interpolate:Db,$interval:Eb,$http:zb,$httpParamSerializer:rb,$httpParamSerializerJQLike:sb,$httpBackend:Bb,$location:Sb,$log:Tb,$parse:ic,$rootScope:nc,$q:jc,$$q:kc,$sce:sc,$sceDelegate:rc,$sniffer:tc,$templateCache:hb,$templateRequest:uc,$$testability:vc,$timeout:wc,$window:zc,$$rAF:mc,$$jqLite:Va,$$HashMap:oe,$$cookieReader:Bc})}])}function va(){return++$d}/**
 * Converts snake_case to camelCase.
 * Also there is special case for Moz prefix starting with upper case letter.
 * @param name Name to normalize
 */
function wa(a){return a.replace(be,function(a,b,c,d){return d?c.toUpperCase():c}).replace(ce,"Moz$1")}function xa(a){return!ge.test(a)}function ya(a){
// The window object can accept data but has no nodeType
// Otherwise we are only interested in elements (1) and documents (9)
var b=a.nodeType;return b===Sd||!b||b===Wd}function za(a){for(var b in Zd[a.ng339])return!0;return!1}function Aa(a,b){var c,d,e,g,h=b.createDocumentFragment(),i=[];if(xa(a))
// Convert non-html into a text node
i.push(b.createTextNode(a));else{for(
// Convert html into DOM nodes
c=c||h.appendChild(b.createElement("div")),d=(he.exec(a)||["",""])[1].toLowerCase(),e=je[d]||je._default,c.innerHTML=e[1]+a.replace(ie,"<$1></$2>")+e[2],
// Descend through wrappers to the right content
g=e[0];g--;)c=c.lastChild;i=R(i,c.childNodes),c=h.firstChild,c.textContent=""}
// Remove wrapper from fragment
// Clear inner HTML
return h.textContent="",h.innerHTML="",f(i,function(a){h.appendChild(a)}),h}function Ba(a,c){c=c||b;var d;return(d=fe.exec(a))?[c.createElement(d[1])]:(d=Aa(a,c))?d.childNodes:[]}
/////////////////////////////////////////////
function Ca(a){if(a instanceof Ca)return a;var b;if(x(a)&&(a=Ld(a),b=!0),!(this instanceof Ca)){if(b&&"<"!=a.charAt(0))throw ee("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element");return new Ca(a)}b?Ma(this,Ba(a)):Ma(this,a)}function Da(a){return a.cloneNode(!0)}function Ea(a,b){if(b||Ga(a),a.querySelectorAll)for(var c=a.querySelectorAll("*"),d=0,e=c.length;e>d;d++)Ga(c[d])}function Fa(a,b,c,d){if(u(d))throw ee("offargs","jqLite#off() does not support the `selector` argument");var e=Ha(a),g=e&&e.events,h=e&&e.handle;if(h)//no listeners registered
if(b)f(b.split(" "),function(b){if(u(c)){var d=g[b];if(N(d||[],c),d&&d.length>0)return}ae(a,b,h),delete g[b]});else for(b in g)"$destroy"!==b&&ae(a,b,h),delete g[b]}function Ga(a,b){var d=a.ng339,e=d&&Zd[d];if(e){if(b)return void delete e.data[b];e.handle&&(e.events.$destroy&&e.handle({},"$destroy"),Fa(a)),delete Zd[d],a.ng339=c}}function Ha(a,b){var d=a.ng339,e=d&&Zd[d];return b&&!e&&(a.ng339=d=va(),e=Zd[d]={events:{},data:{},handle:c}),e}function Ia(a,b,c){if(ya(a)){var d=u(c),e=!d&&b&&!v(b),f=!b,g=Ha(a,!e),h=g&&g.data;if(d)// data('key', value)
h[b]=c;else{if(f)// data()
return h;if(e)// data('key')
// don't force creation of expandoStore if it doesn't exist yet
return h&&h[b];// mass-setter: data({key1: val1, key2: val2})
l(h,b)}}}function Ja(a,b){return a.getAttribute?(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" ")>-1:!1}function Ka(a,b){b&&a.setAttribute&&f(b.split(" "),function(b){a.setAttribute("class",Ld((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+Ld(b)+" "," ")))})}function La(a,b){if(b&&a.setAttribute){var c=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");f(b.split(" "),function(a){a=Ld(a),-1===c.indexOf(" "+a+" ")&&(c+=a+" ")}),a.setAttribute("class",Ld(c))}}function Ma(a,b){
// THIS CODE IS VERY HOT. Don't make changes without benchmarking.
if(b)
// if a Node (the most common case)
if(b.nodeType)a[a.length++]=b;else{var c=b.length;
// if an Array or NodeList and not a Window
if("number"==typeof c&&b.window!==b){if(c)for(var d=0;c>d;d++)a[a.length++]=b[d]}else a[a.length++]=b}}function Na(a,b){return Oa(a,"$"+(b||"ngController")+"Controller")}function Oa(a,b,c){
// if element is the document object work with the html element instead
// this makes $(document).scope() possible
a.nodeType==Wd&&(a=a.documentElement);for(var d=Jd(b)?b:[b];a;){for(var e=0,f=d.length;f>e;e++)if(u(c=xd.data(a,d[e])))return c;
// If dealing with a document fragment node with a host element, and no parent, use the host
// element as the parent. This enables directives within a Shadow DOM or polyfilled Shadow DOM
// to lookup parent controllers.
a=a.parentNode||a.nodeType===Xd&&a.host}}function Pa(a){for(Ea(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Qa(a,b){b||Ea(a);var c=a.parentNode;c&&c.removeChild(a)}function Ra(b,c){c=c||a,"complete"===c.document.readyState?
// Force the action to be run async for consistent behaviour
// from the action's point of view
// i.e. it will definitely not be in a $apply
c.setTimeout(b):
// No need to unbind this handler as load is only ever called once
xd(c).on("load",b)}function Sa(a,b){
// check dom last since we will most likely fail on name
var c=le[b.toLowerCase()];
// booleanAttr is here twice to minimize DOM access
return c&&me[M(a)]&&c}function Ta(a){return ne[a]}function Ua(a,b){var c=function(c,d){
// jQuery specific api
c.isDefaultPrevented=function(){return c.defaultPrevented};var e=b[d||c.type],f=e?e.length:0;if(f){if(t(c.immediatePropagationStopped)){var g=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0,c.stopPropagation&&c.stopPropagation(),g&&g.call(c)}}c.isImmediatePropagationStopped=function(){return c.immediatePropagationStopped===!0},
// Copy event handlers in case event handlers array is modified during execution.
f>1&&(e=P(e));for(var h=0;f>h;h++)c.isImmediatePropagationStopped()||e[h].call(a,c)}};
// TODO: this is a hack for angularMocks/clearDataCache that makes it possible to deregister all
//       events on `element`
return c.elem=a,c}
// Provider for private $$jqLite service
function Va(){this.$get=function(){return l(Ca,{hasClass:function(a,b){return a.attr&&(a=a[0]),Ja(a,b)},addClass:function(a,b){return a.attr&&(a=a[0]),La(a,b)},removeClass:function(a,b){return a.attr&&(a=a[0]),Ka(a,b)}})}}/**
 * Computes a hash of an 'obj'.
 * Hash of a:
 *  string is string
 *  number is number as string
 *  object is either result of calling $$hashKey function on the object or uniquely generated id,
 *         that is also assigned to the $$hashKey property of the object.
 *
 * @param obj
 * @returns {string} hash string such that the same input will have the same hash string.
 *         The resulting string key is in 'type:hashKey' format.
 */
function Wa(a,b){var c=a&&a.$$hashKey;if(c)return"function"==typeof c&&(c=a.$$hashKey()),c;var d=typeof a;return c="function"==d||"object"==d&&null!==a?a.$$hashKey=d+":"+(b||i)():d+":"+a}/**
 * HashMap which can use objects as keys
 */
function Xa(a,b){if(b){var c=0;this.nextUid=function(){return++c}}f(a,this.put,this)}function Ya(a){
// For anonymous functions, showing at the very least the function signature can help in
// debugging.
var b=a.toString().replace(se,""),c=b.match(pe);return c?"function("+(c[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Za(a,b,c){var d,e,g,h;if("function"==typeof a){if(!(d=a.$inject)){if(d=[],a.length){if(b)throw x(c)&&c||(c=a.name||Ya(a)),te("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",c);e=a.toString().replace(se,""),g=e.match(pe),f(g[1].split(qe),function(a){a.replace(re,function(a,b,c){d.push(c)})})}a.$inject=d}}else Jd(a)?(h=a.length-1,ma(a[h],"fn"),d=a.slice(0,h)):ma(a,"fn",!0);return d}
///////////////////////////////////////
/**
 * @ngdoc service
 * @name $injector
 *
 * @description
 *
 * `$injector` is used to retrieve object instances as defined by
 * {@link auto.$provide provider}, instantiate types, invoke methods,
 * and load modules.
 *
 * The following always holds true:
 *
 * ```js
 *   var $injector = angular.injector();
 *   expect($injector.get('$injector')).toBe($injector);
 *   expect($injector.invoke(function($injector) {
 *     return $injector;
 *   })).toBe($injector);
 * ```
 *
 * # Injection Function Annotation
 *
 * JavaScript does not have annotations, and annotations are needed for dependency injection. The
 * following are all valid ways of annotating function with injection arguments and are equivalent.
 *
 * ```js
 *   // inferred (only works if code not minified/obfuscated)
 *   $injector.invoke(function(serviceA){});
 *
 *   // annotated
 *   function explicit(serviceA) {};
 *   explicit.$inject = ['serviceA'];
 *   $injector.invoke(explicit);
 *
 *   // inline
 *   $injector.invoke(['serviceA', function(serviceA){}]);
 * ```
 *
 * ## Inference
 *
 * In JavaScript calling `toString()` on a function returns the function definition. The definition
 * can then be parsed and the function arguments can be extracted. This method of discovering
 * annotations is disallowed when the injector is in strict mode.
 * *NOTE:* This does not work with minification, and obfuscation tools since these tools change the
 * argument names.
 *
 * ## `$inject` Annotation
 * By adding an `$inject` property onto a function the injection parameters can be specified.
 *
 * ## Inline
 * As an array of injection names, where the last item in the array is the function to call.
 */
/**
 * @ngdoc method
 * @name $injector#get
 *
 * @description
 * Return an instance of the service.
 *
 * @param {string} name The name of the instance to retrieve.
 * @param {string=} caller An optional string to provide the origin of the function call for error messages.
 * @return {*} The instance.
 */
/**
 * @ngdoc method
 * @name $injector#invoke
 *
 * @description
 * Invoke the method and supply the method arguments from the `$injector`.
 *
 * @param {Function|Array.<string|Function>} fn The injectable function to invoke. Function parameters are
 *   injected according to the {@link guide/di $inject Annotation} rules.
 * @param {Object=} self The `this` for the invoked method.
 * @param {Object=} locals Optional object. If preset then any argument names are read from this
 *                         object first, before the `$injector` is consulted.
 * @returns {*} the value returned by the invoked `fn` function.
 */
/**
 * @ngdoc method
 * @name $injector#has
 *
 * @description
 * Allows the user to query if the particular service exists.
 *
 * @param {string} name Name of the service to query.
 * @returns {boolean} `true` if injector has given service.
 */
/**
 * @ngdoc method
 * @name $injector#instantiate
 * @description
 * Create a new instance of JS type. The method takes a constructor function, invokes the new
 * operator, and supplies all of the arguments to the constructor function as specified by the
 * constructor annotation.
 *
 * @param {Function} Type Annotated constructor function.
 * @param {Object=} locals Optional object. If preset then any argument names are read from this
 * object first, before the `$injector` is consulted.
 * @returns {Object} new instance of `Type`.
 */
/**
 * @ngdoc method
 * @name $injector#annotate
 *
 * @description
 * Returns an array of service names which the function is requesting for injection. This API is
 * used by the injector to determine which services need to be injected into the function when the
 * function is invoked. There are three ways in which the function can be annotated with the needed
 * dependencies.
 *
 * # Argument names
 *
 * The simplest form is to extract the dependencies from the arguments of the function. This is done
 * by converting the function into a string using `toString()` method and extracting the argument
 * names.
 * ```js
 *   // Given
 *   function MyController($scope, $route) {
 *     // ...
 *   }
 *
 *   // Then
 *   expect(injector.annotate(MyController)).toEqual(['$scope', '$route']);
 * ```
 *
 * You can disallow this method by using strict injection mode.
 *
 * This method does not work with code minification / obfuscation. For this reason the following
 * annotation strategies are supported.
 *
 * # The `$inject` property
 *
 * If a function has an `$inject` property and its value is an array of strings, then the strings
 * represent names of services to be injected into the function.
 * ```js
 *   // Given
 *   var MyController = function(obfuscatedScope, obfuscatedRoute) {
 *     // ...
 *   }
 *   // Define function dependencies
 *   MyController['$inject'] = ['$scope', '$route'];
 *
 *   // Then
 *   expect(injector.annotate(MyController)).toEqual(['$scope', '$route']);
 * ```
 *
 * # The array notation
 *
 * It is often desirable to inline Injected functions and that's when setting the `$inject` property
 * is very inconvenient. In these situations using the array notation to specify the dependencies in
 * a way that survives minification is a better choice:
 *
 * ```js
 *   // We wish to write this (not minification / obfuscation safe)
 *   injector.invoke(function($compile, $rootScope) {
 *     // ...
 *   });
 *
 *   // We are forced to write break inlining
 *   var tmpFn = function(obfuscatedCompile, obfuscatedRootScope) {
 *     // ...
 *   };
 *   tmpFn.$inject = ['$compile', '$rootScope'];
 *   injector.invoke(tmpFn);
 *
 *   // To better support inline function the inline annotation is supported
 *   injector.invoke(['$compile', '$rootScope', function(obfCompile, obfRootScope) {
 *     // ...
 *   }]);
 *
 *   // Therefore
 *   expect(injector.annotate(
 *      ['$compile', '$rootScope', function(obfus_$compile, obfus_$rootScope) {}])
 *    ).toEqual(['$compile', '$rootScope']);
 * ```
 *
 * @param {Function|Array.<string|Function>} fn Function for which dependent service names need to
 * be retrieved as described above.
 *
 * @param {boolean=} [strictDi=false] Disallow argument name annotation inference.
 *
 * @returns {Array.<string>} The names of the services which the function requires.
 */
/**
 * @ngdoc service
 * @name $provide
 *
 * @description
 *
 * The {@link auto.$provide $provide} service has a number of methods for registering components
 * with the {@link auto.$injector $injector}. Many of these functions are also exposed on
 * {@link angular.Module}.
 *
 * An Angular **service** is a singleton object created by a **service factory**.  These **service
 * factories** are functions which, in turn, are created by a **service provider**.
 * The **service providers** are constructor functions. When instantiated they must contain a
 * property called `$get`, which holds the **service factory** function.
 *
 * When you request a service, the {@link auto.$injector $injector} is responsible for finding the
 * correct **service provider**, instantiating it and then calling its `$get` **service factory**
 * function to get the instance of the **service**.
 *
 * Often services have no configuration options and there is no need to add methods to the service
 * provider.  The provider will be no more than a constructor function with a `$get` property. For
 * these cases the {@link auto.$provide $provide} service has additional helper methods to register
 * services without specifying a provider.
 *
 * * {@link auto.$provide#provider provider(provider)} - registers a **service provider** with the
 *     {@link auto.$injector $injector}
 * * {@link auto.$provide#constant constant(obj)} - registers a value/object that can be accessed by
 *     providers and services.
 * * {@link auto.$provide#value value(obj)} - registers a value/object that can only be accessed by
 *     services, not providers.
 * * {@link auto.$provide#factory factory(fn)} - registers a service **factory function**, `fn`,
 *     that will be wrapped in a **service provider** object, whose `$get` property will contain the
 *     given factory function.
 * * {@link auto.$provide#service service(class)} - registers a **constructor function**, `class`
 *     that will be wrapped in a **service provider** object, whose `$get` property will instantiate
 *      a new object using the given constructor function.
 *
 * See the individual methods for more information and examples.
 */
/**
 * @ngdoc method
 * @name $provide#provider
 * @description
 *
 * Register a **provider function** with the {@link auto.$injector $injector}. Provider functions
 * are constructor functions, whose instances are responsible for "providing" a factory for a
 * service.
 *
 * Service provider names start with the name of the service they provide followed by `Provider`.
 * For example, the {@link ng.$log $log} service has a provider called
 * {@link ng.$logProvider $logProvider}.
 *
 * Service provider objects can have additional methods which allow configuration of the provider
 * and its service. Importantly, you can configure what kind of service is created by the `$get`
 * method, or how that service will act. For example, the {@link ng.$logProvider $logProvider} has a
 * method {@link ng.$logProvider#debugEnabled debugEnabled}
 * which lets you specify whether the {@link ng.$log $log} service will log debug messages to the
 * console or not.
 *
 * @param {string} name The name of the instance. NOTE: the provider will be available under `name +
                        'Provider'` key.
 * @param {(Object|function())} provider If the provider is:
 *
 *   - `Object`: then it should have a `$get` method. The `$get` method will be invoked using
 *     {@link auto.$injector#invoke $injector.invoke()} when an instance needs to be created.
 *   - `Constructor`: a new instance of the provider will be created using
 *     {@link auto.$injector#instantiate $injector.instantiate()}, then treated as `object`.
 *
 * @returns {Object} registered provider instance

 * @example
 *
 * The following example shows how to create a simple event tracking service and register it using
 * {@link auto.$provide#provider $provide.provider()}.
 *
 * ```js
 *  // Define the eventTracker provider
 *  function EventTrackerProvider() {
 *    var trackingUrl = '/track';
 *
 *    // A provider method for configuring where the tracked events should been saved
 *    this.setTrackingUrl = function(url) {
 *      trackingUrl = url;
 *    };
 *
 *    // The service factory function
 *    this.$get = ['$http', function($http) {
 *      var trackedEvents = {};
 *      return {
 *        // Call this to track an event
 *        event: function(event) {
 *          var count = trackedEvents[event] || 0;
 *          count += 1;
 *          trackedEvents[event] = count;
 *          return count;
 *        },
 *        // Call this to save the tracked events to the trackingUrl
 *        save: function() {
 *          $http.post(trackingUrl, trackedEvents);
 *        }
 *      };
 *    }];
 *  }
 *
 *  describe('eventTracker', function() {
 *    var postSpy;
 *
 *    beforeEach(module(function($provide) {
 *      // Register the eventTracker provider
 *      $provide.provider('eventTracker', EventTrackerProvider);
 *    }));
 *
 *    beforeEach(module(function(eventTrackerProvider) {
 *      // Configure eventTracker provider
 *      eventTrackerProvider.setTrackingUrl('/custom-track');
 *    }));
 *
 *    it('tracks events', inject(function(eventTracker) {
 *      expect(eventTracker.event('login')).toEqual(1);
 *      expect(eventTracker.event('login')).toEqual(2);
 *    }));
 *
 *    it('saves to the tracking url', inject(function(eventTracker, $http) {
 *      postSpy = spyOn($http, 'post');
 *      eventTracker.event('login');
 *      eventTracker.save();
 *      expect(postSpy).toHaveBeenCalled();
 *      expect(postSpy.mostRecentCall.args[0]).not.toEqual('/track');
 *      expect(postSpy.mostRecentCall.args[0]).toEqual('/custom-track');
 *      expect(postSpy.mostRecentCall.args[1]).toEqual({ 'login': 1 });
 *    }));
 *  });
 * ```
 */
/**
 * @ngdoc method
 * @name $provide#factory
 * @description
 *
 * Register a **service factory**, which will be called to return the service instance.
 * This is short for registering a service where its provider consists of only a `$get` property,
 * which is the given service factory function.
 * You should use {@link auto.$provide#factory $provide.factory(getFn)} if you do not need to
 * configure your service in a provider.
 *
 * @param {string} name The name of the instance.
 * @param {Function|Array.<string|Function>} $getFn The injectable $getFn for the instance creation.
 *                      Internally this is a short hand for `$provide.provider(name, {$get: $getFn})`.
 * @returns {Object} registered provider instance
 *
 * @example
 * Here is an example of registering a service
 * ```js
 *   $provide.factory('ping', ['$http', function($http) {
 *     return function ping() {
 *       return $http.send('/ping');
 *     };
 *   }]);
 * ```
 * You would then inject and use this service like this:
 * ```js
 *   someModule.controller('Ctrl', ['ping', function(ping) {
 *     ping();
 *   }]);
 * ```
 */
/**
 * @ngdoc method
 * @name $provide#service
 * @description
 *
 * Register a **service constructor**, which will be invoked with `new` to create the service
 * instance.
 * This is short for registering a service where its provider's `$get` property is the service
 * constructor function that will be used to instantiate the service instance.
 *
 * You should use {@link auto.$provide#service $provide.service(class)} if you define your service
 * as a type/class.
 *
 * @param {string} name The name of the instance.
 * @param {Function|Array.<string|Function>} constructor An injectable class (constructor function)
 *     that will be instantiated.
 * @returns {Object} registered provider instance
 *
 * @example
 * Here is an example of registering a service using
 * {@link auto.$provide#service $provide.service(class)}.
 * ```js
 *   var Ping = function($http) {
 *     this.$http = $http;
 *   };
 *
 *   Ping.$inject = ['$http'];
 *
 *   Ping.prototype.send = function() {
 *     return this.$http.get('/ping');
 *   };
 *   $provide.service('ping', Ping);
 * ```
 * You would then inject and use this service like this:
 * ```js
 *   someModule.controller('Ctrl', ['ping', function(ping) {
 *     ping.send();
 *   }]);
 * ```
 */
/**
 * @ngdoc method
 * @name $provide#value
 * @description
 *
 * Register a **value service** with the {@link auto.$injector $injector}, such as a string, a
 * number, an array, an object or a function.  This is short for registering a service where its
 * provider's `$get` property is a factory function that takes no arguments and returns the **value
 * service**.
 *
 * Value services are similar to constant services, except that they cannot be injected into a
 * module configuration function (see {@link angular.Module#config}) but they can be overridden by
 * an Angular
 * {@link auto.$provide#decorator decorator}.
 *
 * @param {string} name The name of the instance.
 * @param {*} value The value.
 * @returns {Object} registered provider instance
 *
 * @example
 * Here are some examples of creating value services.
 * ```js
 *   $provide.value('ADMIN_USER', 'admin');
 *
 *   $provide.value('RoleLookup', { admin: 0, writer: 1, reader: 2 });
 *
 *   $provide.value('halfOf', function(value) {
 *     return value / 2;
 *   });
 * ```
 */
/**
 * @ngdoc method
 * @name $provide#constant
 * @description
 *
 * Register a **constant service**, such as a string, a number, an array, an object or a function,
 * with the {@link auto.$injector $injector}. Unlike {@link auto.$provide#value value} it can be
 * injected into a module configuration function (see {@link angular.Module#config}) and it cannot
 * be overridden by an Angular {@link auto.$provide#decorator decorator}.
 *
 * @param {string} name The name of the constant.
 * @param {*} value The constant value.
 * @returns {Object} registered instance
 *
 * @example
 * Here a some examples of creating constants:
 * ```js
 *   $provide.constant('SHARD_HEIGHT', 306);
 *
 *   $provide.constant('MY_COLOURS', ['red', 'blue', 'grey']);
 *
 *   $provide.constant('double', function(value) {
 *     return value * 2;
 *   });
 * ```
 */
/**
 * @ngdoc method
 * @name $provide#decorator
 * @description
 *
 * Register a **service decorator** with the {@link auto.$injector $injector}. A service decorator
 * intercepts the creation of a service, allowing it to override or modify the behaviour of the
 * service. The object returned by the decorator may be the original service, or a new service
 * object which replaces or wraps and delegates to the original service.
 *
 * @param {string} name The name of the service to decorate.
 * @param {Function|Array.<string|Function>} decorator This function will be invoked when the service needs to be
 *    instantiated and should return the decorated service instance. The function is called using
 *    the {@link auto.$injector#invoke injector.invoke} method and is therefore fully injectable.
 *    Local injection arguments:
 *
 *    * `$delegate` - The original service instance, which can be monkey patched, configured,
 *      decorated or delegated to.
 *
 * @example
 * Here we decorate the {@link ng.$log $log} service to convert warnings to errors by intercepting
 * calls to {@link ng.$log#error $log.warn()}.
 * ```js
 *   $provide.decorator('$log', ['$delegate', function($delegate) {
 *     $delegate.warn = $delegate.error;
 *     return $delegate;
 *   }]);
 * ```
 */
function $a(a,b){
////////////////////////////////////
// $provider
////////////////////////////////////
function d(a){return function(b,c){return v(b)?void f(b,h(a)):a(b,c)}}function e(a,b){if(na(a,"service"),(A(b)||Jd(b))&&(b=y.instantiate(b)),!b.$get)throw te("pget","Provider '{0}' must define $get factory method.",a);return w[a+q]=b}function g(a,b){return function(){var c=B.invoke(b,this);if(t(c))throw te("undef","Provider '{0}' must return a value from $get factory method.",a);return c}}function i(a,b,c){return e(a,{$get:c!==!1?g(a,b):b})}function j(a,b){return i(a,["$injector",function(a){return a.instantiate(b)}])}function k(a,b){return i(a,r(b),!1)}function l(a,b){na(a,"constant"),w[a]=b,z[a]=b}function m(a,b){var c=y.get(a+q),d=c.$get;c.$get=function(){var a=B.invoke(d,c);return B.invoke(b,null,{$delegate:a})}}
////////////////////////////////////
// Module Loading
////////////////////////////////////
function n(a){la(t(a)||Jd(a),"modulesToLoad","not an array");var b,c=[];return f(a,function(a){function d(a){var b,c;for(b=0,c=a.length;c>b;b++){var d=a[b],e=y.get(d[0]);e[d[1]].apply(e,d[2])}}if(!u.get(a)){u.put(a,!0);try{x(a)?(b=zd(a),c=c.concat(n(b.requires)).concat(b._runBlocks),d(b._invokeQueue),d(b._configBlocks)):A(a)?c.push(y.invoke(a)):Jd(a)?c.push(y.invoke(a)):ma(a,"module")}catch(e){
// Safari & FF's stack traces don't contain error.message content
// unlike those of Chrome and IE
// So if stack doesn't contain message, we create a new string that contains both.
// Since error.stack is read-only in Safari, I'm overriding e and not e.stack here.
/* jshint -W022 */
throw Jd(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),te("modulerr","Failed to instantiate module {0} due to:\n{1}",a,e.stack||e.message||e)}}}),c}
////////////////////////////////////
// internal Injector
////////////////////////////////////
function o(a,c){function d(b,d){if(a.hasOwnProperty(b)){if(a[b]===p)throw te("cdep","Circular dependency found: {0}",b+" <- "+s.join(" <- "));return a[b]}try{return s.unshift(b),a[b]=p,a[b]=c(b,d)}catch(e){throw a[b]===p&&delete a[b],e}finally{s.shift()}}function e(a,c,e,f){"string"==typeof e&&(f=e,e=null);var g,h,i,j=[],k=$a.$$annotate(a,b,f);for(h=0,g=k.length;g>h;h++){if(i=k[h],"string"!=typeof i)throw te("itkn","Incorrect injection token! Expected service name as string, got {0}",i);j.push(e&&e.hasOwnProperty(i)?e[i]:d(i,f))}
// http://jsperf.com/angularjs-invoke-apply-vs-switch
// #5388
return Jd(a)&&(a=a[g]),a.apply(c,j)}function f(a,b,c){
// Check if Type is annotated and use just the given function at n-1 as parameter
// e.g. someModule.factory('greeter', ['$window', function(renamed$window) {}]);
// Object creation: http://jsperf.com/create-constructor/2
var d=Object.create((Jd(a)?a[a.length-1]:a).prototype||null),f=e(a,d,b,c);return v(f)||A(f)?f:d}return{invoke:e,instantiate:f,get:d,annotate:$a.$$annotate,has:function(b){return w.hasOwnProperty(b+q)||a.hasOwnProperty(b)}}}b=b===!0;var p={},q="Provider",s=[],u=new Xa([],!0),w={$provide:{provider:d(e),factory:d(i),service:d(j),value:d(k),constant:d(l),decorator:m}},y=w.$injector=o(w,function(a,b){throw Gd.isString(b)&&s.push(b),te("unpr","Unknown provider: {0}",s.join(" <- "))}),z={},B=z.$injector=o(z,function(a,b){var d=y.get(a+q,b);return B.invoke(d.$get,d,c,a)});return f(n(a),function(a){a&&B.invoke(a)}),B}/**
 * @ngdoc provider
 * @name $anchorScrollProvider
 *
 * @description
 * Use `$anchorScrollProvider` to disable automatic scrolling whenever
 * {@link ng.$location#hash $location.hash()} changes.
 */
function _a(){var a=!0;/**
   * @ngdoc method
   * @name $anchorScrollProvider#disableAutoScrolling
   *
   * @description
   * By default, {@link ng.$anchorScroll $anchorScroll()} will automatically detect changes to
   * {@link ng.$location#hash $location.hash()} and scroll to the element matching the new hash.<br />
   * Use this method to disable automatic scrolling.
   *
   * If automatic scrolling is disabled, one must explicitly call
   * {@link ng.$anchorScroll $anchorScroll()} in order to scroll to the element related to the
   * current hash.
   */
this.disableAutoScrolling=function(){a=!1},/**
   * @ngdoc service
   * @name $anchorScroll
   * @kind function
   * @requires $window
   * @requires $location
   * @requires $rootScope
   *
   * @description
   * When called, it scrolls to the element related to the specified `hash` or (if omitted) to the
   * current value of {@link ng.$location#hash $location.hash()}, according to the rules specified
   * in the
   * [HTML5 spec](http://dev.w3.org/html5/spec/Overview.html#the-indicated-part-of-the-document).
   *
   * It also watches the {@link ng.$location#hash $location.hash()} and automatically scrolls to
   * match any anchor whenever it changes. This can be disabled by calling
   * {@link ng.$anchorScrollProvider#disableAutoScrolling $anchorScrollProvider.disableAutoScrolling()}.
   *
   * Additionally, you can use its {@link ng.$anchorScroll#yOffset yOffset} property to specify a
   * vertical scroll-offset (either fixed or dynamic).
   *
   * @param {string=} hash The hash specifying the element to scroll to. If omitted, the value of
   *                       {@link ng.$location#hash $location.hash()} will be used.
   *
   * @property {(number|function|jqLite)} yOffset
   * If set, specifies a vertical scroll-offset. This is often useful when there are fixed
   * positioned elements at the top of the page, such as navbars, headers etc.
   *
   * `yOffset` can be specified in various ways:
   * - **number**: A fixed number of pixels to be used as offset.<br /><br />
   * - **function**: A getter function called everytime `$anchorScroll()` is executed. Must return
   *   a number representing the offset (in pixels).<br /><br />
   * - **jqLite**: A jqLite/jQuery element to be used for specifying the offset. The distance from
   *   the top of the page to the element's bottom will be used as offset.<br />
   *   **Note**: The element will be taken into account only as long as its `position` is set to
   *   `fixed`. This option is useful, when dealing with responsive navbars/headers that adjust
   *   their height and/or positioning according to the viewport's size.
   *
   * <br />
   * <div class="alert alert-warning">
   * In order for `yOffset` to work properly, scrolling should take place on the document's root and
   * not some child element.
   * </div>
   *
   * @example
     <example module="anchorScrollExample">
       <file name="index.html">
         <div id="scrollArea" ng-controller="ScrollController">
           <a ng-click="gotoBottom()">Go to bottom</a>
           <a id="bottom"></a> You're at the bottom!
         </div>
       </file>
       <file name="script.js">
         angular.module('anchorScrollExample', [])
           .controller('ScrollController', ['$scope', '$location', '$anchorScroll',
             function ($scope, $location, $anchorScroll) {
               $scope.gotoBottom = function() {
                 // set the location.hash to the id of
                 // the element you wish to scroll to.
                 $location.hash('bottom');

                 // call $anchorScroll()
                 $anchorScroll();
               };
             }]);
       </file>
       <file name="style.css">
         #scrollArea {
           height: 280px;
           overflow: auto;
         }

         #bottom {
           display: block;
           margin-top: 2000px;
         }
       </file>
     </example>
   *
   * <hr />
   * The example below illustrates the use of a vertical scroll-offset (specified as a fixed value).
   * See {@link ng.$anchorScroll#yOffset $anchorScroll.yOffset} for more details.
   *
   * @example
     <example module="anchorScrollOffsetExample">
       <file name="index.html">
         <div class="fixed-header" ng-controller="headerCtrl">
           <a href="" ng-click="gotoAnchor(x)" ng-repeat="x in [1,2,3,4,5]">
             Go to anchor {{x}}
           </a>
         </div>
         <div id="anchor{{x}}" class="anchor" ng-repeat="x in [1,2,3,4,5]">
           Anchor {{x}} of 5
         </div>
       </file>
       <file name="script.js">
         angular.module('anchorScrollOffsetExample', [])
           .run(['$anchorScroll', function($anchorScroll) {
             $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
           }])
           .controller('headerCtrl', ['$anchorScroll', '$location', '$scope',
             function ($anchorScroll, $location, $scope) {
               $scope.gotoAnchor = function(x) {
                 var newHash = 'anchor' + x;
                 if ($location.hash() !== newHash) {
                   // set the $location.hash to `newHash` and
                   // $anchorScroll will automatically scroll to it
                   $location.hash('anchor' + x);
                 } else {
                   // call $anchorScroll() explicitly,
                   // since $location.hash hasn't changed
                   $anchorScroll();
                 }
               };
             }
           ]);
       </file>
       <file name="style.css">
         body {
           padding-top: 50px;
         }

         .anchor {
           border: 2px dashed DarkOrchid;
           padding: 10px 10px 200px 10px;
         }

         .fixed-header {
           background-color: rgba(0, 0, 0, 0.2);
           height: 50px;
           position: fixed;
           top: 0; left: 0; right: 0;
         }

         .fixed-header > a {
           display: inline-block;
           margin: 5px 15px;
         }
       </file>
     </example>
   */
this.$get=["$window","$location","$rootScope",function(b,c,d){
// Helper function to get first anchor from a NodeList
// (using `Array#some()` instead of `angular#forEach()` since it's more performant
//  and working in all supported browsers.)
function e(a){var b=null;return Array.prototype.some.call(a,function(a){return"a"===M(a)?(b=a,!0):void 0}),b}function f(){var a=h.yOffset;if(A(a))a=a();else if(K(a)){var c=a[0],d=b.getComputedStyle(c);a="fixed"!==d.position?0:c.getBoundingClientRect().bottom}else y(a)||(a=0);return a}function g(a){if(a){a.scrollIntoView();var c=f();if(c){
// `offset` is the number of pixels we should scroll UP in order to align `elem` properly.
// This is true ONLY if the call to `elem.scrollIntoView()` initially aligns `elem` at the
// top of the viewport.
//
// IF the number of pixels from the top of `elem` to the end of the page's content is less
// than the height of the viewport, then `elem.scrollIntoView()` will align the `elem` some
// way down the page.
//
// This is often the case for elements near the bottom of the page.
//
// In such cases we do not need to scroll the whole `offset` up, just the difference between
// the top of the element and the offset, which is enough to align the top of `elem` at the
// desired position.
var d=a.getBoundingClientRect().top;b.scrollBy(0,d-c)}}else b.scrollTo(0,0)}function h(a){a=x(a)?a:c.hash();var b;
// empty hash, scroll to the top of the page
a?(b=i.getElementById(a))?g(b):(b=e(i.getElementsByName(a)))?g(b):"top"===a&&g(null):g(null)}var i=b.document;
// does not scroll when user clicks on anchor link that is currently on
// (no url change, no $location.hash() change), browser native does scroll
return a&&d.$watch(function(){return c.hash()},function(a,b){
// skip the initial scroll if $location.hash is empty
(a!==b||""!==a)&&Ra(function(){d.$evalAsync(h)})}),h}]}function ab(a,b){return a||b?a?b?(Jd(a)&&(a=a.join(" ")),Jd(b)&&(b=b.join(" ")),a+" "+b):a:b:""}function bb(a){for(var b=0;b<a.length;b++){var c=a[b];if(c.nodeType===ve)return c}}function cb(a){x(a)&&(a=a.split(" "));
// Use createMap() to prevent class assumptions involving property names in
// Object.prototype
var b=qa();return f(a,function(a){
// sometimes the split leaves empty string values
// incase extra spaces were applied to the options
a.length&&(b[a]=!0)}),b}
// if any other type of options value besides an Object value is
// passed into the $animate.method() animation then this helper code
// will be run which will ignore it. While this patch is not the
// greatest solution to this, a lot of existing plugins depend on
// $animate to either call the callback (< 1.2) or return a promise
// that can be changed. This helper function ensures that the options
// are wiped clean incase a callback function is provided.
function db(a){return v(a)?a:{}}/* global stripHash: true */
/**
 * ! This is a private undocumented service !
 *
 * @name $browser
 * @requires $log
 * @description
 * This object has two goals:
 *
 * - hide all the global state in the browser caused by the window object
 * - abstract away all the browser specific features and inconsistencies
 *
 * For tests we provide {@link ngMock.$browser mock implementation} of the `$browser`
 * service, which can be used for convenient testing of the application without the interaction with
 * the real browser apis.
 */
/**
 * @param {object} window The global window object.
 * @param {object} document jQuery wrapped document.
 * @param {object} $log window.console or an object with the same interface.
 * @param {object} $sniffer $sniffer service
 */
function eb(a,b,c,d){/**
   * Executes the `fn` function(supports currying) and decrements the `outstandingRequestCallbacks`
   * counter. If the counter reaches 0, all the `outstandingRequestCallbacks` are executed.
   */
function e(a){try{a.apply(null,S(arguments,1))}finally{if(s--,0===s)for(;u.length;)try{u.pop()()}catch(b){c.error(b)}}}function g(a){var b=a.indexOf("#");return-1===b?"":a.substr(b)}function h(){z=null,j(),k()}function i(){try{return n.state}catch(a){}}function j(){
// This should be the only place in $browser where `history.state` is read.
v=i(),v=t(v)?null:v,
// Prevent callbacks fo fire twice if both hashchange & popstate were fired.
Q(v,C)&&(v=C),C=v}function k(){(x!==l.url()||w!==v)&&(x=l.url(),w=v,f(A,function(a){a(l.url(),v)}))}var l=this,m=(b[0],a.location),n=a.history,o=a.setTimeout,q=a.clearTimeout,r={};l.isMock=!1;var s=0,u=[];
// TODO(vojta): remove this temporary api
l.$$completeOutstandingRequest=e,l.$$incOutstandingRequestCount=function(){s++},/**
   * @private
   * Note: this method is used only by scenario runner
   * TODO(vojta): prefix this method with $$ ?
   * @param {function()} callback Function that will be called when no outstanding request
   */
l.notifyWhenNoOutstandingRequests=function(a){0===s?a():u.push(a)};
//////////////////////////////////////////////////////////////
// URL API
//////////////////////////////////////////////////////////////
var v,w,x=m.href,y=b.find("base"),z=null;j(),w=v,/**
   * @name $browser#url
   *
   * @description
   * GETTER:
   * Without any argument, this method just returns current value of location.href.
   *
   * SETTER:
   * With at least one argument, this method sets url to new value.
   * If html5 history api supported, pushState/replaceState is used, otherwise
   * location.href/location.replace is used.
   * Returns its own instance to allow chaining
   *
   * NOTE: this api is intended for use only by the $location service. Please use the
   * {@link ng.$location $location service} to change url.
   *
   * @param {string} url New url (when used as setter)
   * @param {boolean=} replace Should new url replace current history record?
   * @param {object=} state object to use with pushState/replaceState
   */
l.url=function(b,c,e){
// setter
if(
// In modern browsers `history.state` is `null` by default; treating it separately
// from `undefined` would cause `$browser.url('/foo')` to change `history.state`
// to undefined via `pushState`. Instead, let's change `undefined` to `null` here.
t(e)&&(e=null),
// Android Browser BFCache causes location, history reference to become stale.
m!==a.location&&(m=a.location),n!==a.history&&(n=a.history),b){var f=w===e;
// Don't change anything if previous and current URLs and states match. This also prevents
// IE<10 from getting into redirect loop when in LocationHashbangInHtml5Url mode.
// See https://github.com/angular/angular.js/commit/ffb2701
if(x===b&&(!d.history||f))return l;var h=x&&Jb(x)===Jb(b);
// Don't use history API if only the hash changed
// due to a bug in IE10/IE11 which leads
// to not firing a `hashchange` nor `popstate` event
// in some cases (see #9143).
// Do the assignment again so that those two variables are referentially identical.
return x=b,w=e,!d.history||h&&f?((!h||z)&&(z=b),c?m.replace(b):h?m.hash=g(b):m.href=b,m.href!==b&&(z=b)):(n[c?"replaceState":"pushState"](e,"",b),j(),w=v),l}
// - pendingLocation is needed as browsers don't allow to read out
//   the new location.href if a reload happened or if there is a bug like in iOS 9 (see
//   https://openradar.appspot.com/22186109).
// - the replacement is a workaround for https://bugzilla.mozilla.org/show_bug.cgi?id=407172
return z||m.href.replace(/%27/g,"'")},/**
   * @name $browser#state
   *
   * @description
   * This method is a getter.
   *
   * Return history.state or null if history.state is undefined.
   *
   * @returns {object} state
   */
l.state=function(){return v};var A=[],B=!1,C=null;/**
   * @name $browser#onUrlChange
   *
   * @description
   * Register callback function that will be called, when url changes.
   *
   * It's only called when the url is changed from outside of angular:
   * - user types different url into address bar
   * - user clicks on history (forward/back) button
   * - user clicks on a link
   *
   * It's not called when url is changed by $browser.url() method
   *
   * The listener gets called with new url as parameter.
   *
   * NOTE: this api is intended for use only by the $location service. Please use the
   * {@link ng.$location $location service} to monitor url changes in angular apps.
   *
   * @param {function(string)} listener Listener function to be called when url changes.
   * @return {function(string)} Returns the registered listener fn - handy if the fn is anonymous.
   */
l.onUrlChange=function(b){
// TODO(vojta): refactor to use node's syntax for events
// We listen on both (hashchange/popstate) when available, as some browsers (e.g. Opera)
// don't fire popstate when user change the address bar and don't fire hashchange when url
// changed by push/replaceState
// html5 history api - popstate event
// hashchange event
return B||(d.history&&xd(a).on("popstate",h),xd(a).on("hashchange",h),B=!0),A.push(b),b},/**
   * @private
   * Remove popstate and hashchange handler from window.
   *
   * NOTE: this api is intended for use only by $rootScope.
   */
l.$$applicationDestroyed=function(){xd(a).off("hashchange popstate",h)},/**
   * Checks whether the url has changed outside of Angular.
   * Needs to be exported to be able to check for changes that have been done in sync,
   * as hashchange/popstate events fire in async.
   */
l.$$checkUrlChange=k,
//////////////////////////////////////////////////////////////
// Misc API
//////////////////////////////////////////////////////////////
/**
   * @name $browser#baseHref
   *
   * @description
   * Returns current <base href>
   * (always relative - without domain)
   *
   * @returns {string} The current base href
   */
l.baseHref=function(){var a=y.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""},/**
   * @name $browser#defer
   * @param {function()} fn A function, who's execution should be deferred.
   * @param {number=} [delay=0] of milliseconds to defer the function execution.
   * @returns {*} DeferId that can be used to cancel the task via `$browser.defer.cancel()`.
   *
   * @description
   * Executes a fn asynchronously via `setTimeout(fn, delay)`.
   *
   * Unlike when calling `setTimeout` directly, in test this function is mocked and instead of using
   * `setTimeout` in tests, the fns are queued in an array, which can be programmatically flushed
   * via `$browser.defer.flush()`.
   *
   */
l.defer=function(a,b){var c;return s++,c=o(function(){delete r[c],e(a)},b||0),r[c]=!0,c},/**
   * @name $browser#defer.cancel
   *
   * @description
   * Cancels a deferred task identified with `deferId`.
   *
   * @param {*} deferId Token returned by the `$browser.defer` function.
   * @returns {boolean} Returns `true` if the task hasn't executed yet and was successfully
   *                    canceled.
   */
l.defer.cancel=function(a){return r[a]?(delete r[a],q(a),e(p),!0):!1}}function fb(){this.$get=["$window","$log","$sniffer","$document",function(a,b,c,d){return new eb(a,d,b,c)}]}/**
 * @ngdoc service
 * @name $cacheFactory
 *
 * @description
 * Factory that constructs {@link $cacheFactory.Cache Cache} objects and gives access to
 * them.
 *
 * ```js
 *
 *  var cache = $cacheFactory('cacheId');
 *  expect($cacheFactory.get('cacheId')).toBe(cache);
 *  expect($cacheFactory.get('noSuchCacheId')).not.toBeDefined();
 *
 *  cache.put("key", "value");
 *  cache.put("another key", "another value");
 *
 *  // We've specified no options on creation
 *  expect(cache.info()).toEqual({id: 'cacheId', size: 2});
 *
 * ```
 *
 *
 * @param {string} cacheId Name or id of the newly created cache.
 * @param {object=} options Options object that specifies the cache behavior. Properties:
 *
 *   - `{number=}` `capacity` — turns the cache into LRU cache.
 *
 * @returns {object} Newly created cache object with the following set of methods:
 *
 * - `{object}` `info()` — Returns id, size, and options of cache.
 * - `{{*}}` `put({string} key, {*} value)` — Puts a new key-value pair into the cache and returns
 *   it.
 * - `{{*}}` `get({string} key)` — Returns cached value for `key` or undefined for cache miss.
 * - `{void}` `remove({string} key)` — Removes a key-value pair from the cache.
 * - `{void}` `removeAll()` — Removes all cached values.
 * - `{void}` `destroy()` — Removes references to this cache from $cacheFactory.
 *
 * @example
   <example module="cacheExampleApp">
     <file name="index.html">
       <div ng-controller="CacheController">
         <input ng-model="newCacheKey" placeholder="Key">
         <input ng-model="newCacheValue" placeholder="Value">
         <button ng-click="put(newCacheKey, newCacheValue)">Cache</button>

         <p ng-if="keys.length">Cached Values</p>
         <div ng-repeat="key in keys">
           <span ng-bind="key"></span>
           <span>: </span>
           <b ng-bind="cache.get(key)"></b>
         </div>

         <p>Cache Info</p>
         <div ng-repeat="(key, value) in cache.info()">
           <span ng-bind="key"></span>
           <span>: </span>
           <b ng-bind="value"></b>
         </div>
       </div>
     </file>
     <file name="script.js">
       angular.module('cacheExampleApp', []).
         controller('CacheController', ['$scope', '$cacheFactory', function($scope, $cacheFactory) {
           $scope.keys = [];
           $scope.cache = $cacheFactory('cacheId');
           $scope.put = function(key, value) {
             if (isUndefined($scope.cache.get(key))) {
               $scope.keys.push(key);
             }
             $scope.cache.put(key, isUndefined(value) ? null : value);
           };
         }]);
     </file>
     <file name="style.css">
       p {
         margin: 10px 0 3px;
       }
     </file>
   </example>
 */
function gb(){this.$get=function(){function a(a,c){/**
       * makes the `entry` the freshEnd of the LRU linked list
       */
function e(a){a!=m&&(n?n==a&&(n=a.n):n=a,f(a.n,a.p),f(a,m),m=a,m.n=null)}/**
       * bidirectionally links two entries of the LRU linked list
       */
function f(a,b){a!=b&&(a&&(a.p=b),//p stands for previous, 'prev' didn't minify
b&&(b.n=a))}if(a in b)throw d("$cacheFactory")("iid","CacheId '{0}' is already taken!",a);var g=0,h=l({},c,{id:a}),i={},j=c&&c.capacity||Number.MAX_VALUE,k={},m=null,n=null;/**
       * @ngdoc type
       * @name $cacheFactory.Cache
       *
       * @description
       * A cache object used to store and retrieve data, primarily used by
       * {@link $http $http} and the {@link ng.directive:script script} directive to cache
       * templates and other data.
       *
       * ```js
       *  angular.module('superCache')
       *    .factory('superCache', ['$cacheFactory', function($cacheFactory) {
       *      return $cacheFactory('super-cache');
       *    }]);
       * ```
       *
       * Example test:
       *
       * ```js
       *  it('should behave like a cache', inject(function(superCache) {
       *    superCache.put('key', 'value');
       *    superCache.put('another key', 'another value');
       *
       *    expect(superCache.info()).toEqual({
       *      id: 'super-cache',
       *      size: 2
       *    });
       *
       *    superCache.remove('another key');
       *    expect(superCache.get('another key')).toBeUndefined();
       *
       *    superCache.removeAll();
       *    expect(superCache.info()).toEqual({
       *      id: 'super-cache',
       *      size: 0
       *    });
       *  }));
       * ```
       */
return b[a]={/**
         * @ngdoc method
         * @name $cacheFactory.Cache#put
         * @kind function
         *
         * @description
         * Inserts a named entry into the {@link $cacheFactory.Cache Cache} object to be
         * retrieved later, and incrementing the size of the cache if the key was not already
         * present in the cache. If behaving like an LRU cache, it will also remove stale
         * entries from the set.
         *
         * It will not insert undefined values into the cache.
         *
         * @param {string} key the key under which the cached data is stored.
         * @param {*} value the value to store alongside the key. If it is undefined, the key
         *    will not be stored.
         * @returns {*} the value stored.
         */
put:function(a,b){if(!t(b)){if(j<Number.MAX_VALUE){var c=k[a]||(k[a]={key:a});e(c)}return a in i||g++,i[a]=b,g>j&&this.remove(n.key),b}},/**
         * @ngdoc method
         * @name $cacheFactory.Cache#get
         * @kind function
         *
         * @description
         * Retrieves named data stored in the {@link $cacheFactory.Cache Cache} object.
         *
         * @param {string} key the key of the data to be retrieved
         * @returns {*} the value stored.
         */
get:function(a){if(j<Number.MAX_VALUE){var b=k[a];if(!b)return;e(b)}return i[a]},/**
         * @ngdoc method
         * @name $cacheFactory.Cache#remove
         * @kind function
         *
         * @description
         * Removes an entry from the {@link $cacheFactory.Cache Cache} object.
         *
         * @param {string} key the key of the entry to be removed
         */
remove:function(a){if(j<Number.MAX_VALUE){var b=k[a];if(!b)return;b==m&&(m=b.p),b==n&&(n=b.n),f(b.n,b.p),delete k[a]}delete i[a],g--},/**
         * @ngdoc method
         * @name $cacheFactory.Cache#removeAll
         * @kind function
         *
         * @description
         * Clears the cache object of any entries.
         */
removeAll:function(){i={},g=0,k={},m=n=null},/**
         * @ngdoc method
         * @name $cacheFactory.Cache#destroy
         * @kind function
         *
         * @description
         * Destroys the {@link $cacheFactory.Cache Cache} object entirely,
         * removing it from the {@link $cacheFactory $cacheFactory} set.
         */
destroy:function(){i=null,h=null,k=null,delete b[a]},/**
         * @ngdoc method
         * @name $cacheFactory.Cache#info
         * @kind function
         *
         * @description
         * Retrieve information regarding a particular {@link $cacheFactory.Cache Cache}.
         *
         * @returns {object} an object with the following properties:
         *   <ul>
         *     <li>**id**: the id of the cache instance</li>
         *     <li>**size**: the number of entries kept in the cache instance</li>
         *     <li>**...**: any additional properties from the options object when creating the
         *       cache.</li>
         *   </ul>
         */
info:function(){return l({},h,{size:g})}}}var b={};/**
   * @ngdoc method
   * @name $cacheFactory#info
   *
   * @description
   * Get information about all the caches that have been created
   *
   * @returns {Object} - key-value map of `cacheId` to the result of calling `cache#info`
   */
/**
   * @ngdoc method
   * @name $cacheFactory#get
   *
   * @description
   * Get access to a cache object by the `cacheId` used when it was created.
   *
   * @param {string} cacheId Name or id of a cache to access.
   * @returns {object} Cache object identified by the cacheId or undefined if no such cache.
   */
return a.info=function(){var a={};return f(b,function(b,c){a[c]=b.info()}),a},a.get=function(a){return b[a]},a}}/**
 * @ngdoc service
 * @name $templateCache
 *
 * @description
 * The first time a template is used, it is loaded in the template cache for quick retrieval. You
 * can load templates directly into the cache in a `script` tag, or by consuming the
 * `$templateCache` service directly.
 *
 * Adding via the `script` tag:
 *
 * ```html
 *   <script type="text/ng-template" id="templateId.html">
 *     <p>This is the content of the template</p>
 *   </script>
 * ```
 *
 * **Note:** the `script` tag containing the template does not need to be included in the `head` of
 * the document, but it must be a descendent of the {@link ng.$rootElement $rootElement} (IE,
 * element with ng-app attribute), otherwise the template will be ignored.
 *
 * Adding via the `$templateCache` service:
 *
 * ```js
 * var myApp = angular.module('myApp', []);
 * myApp.run(function($templateCache) {
 *   $templateCache.put('templateId.html', 'This is the content of the template');
 * });
 * ```
 *
 * To retrieve the template later, simply use it in your HTML:
 * ```html
 * <div ng-include=" 'templateId.html' "></div>
 * ```
 *
 * or get it via Javascript:
 * ```js
 * $templateCache.get('templateId.html')
 * ```
 *
 * See {@link ng.$cacheFactory $cacheFactory}.
 *
 */
function hb(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function ib(a,d){function e(a,b,c){var d=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,e={};return f(a,function(a,f){var g=a.match(d);if(!g)throw Be("iscp","Invalid {3} for directive '{0}'. Definition: {... {1}: '{2}' ...}",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f}}),e}function g(a,b){var c={isolateScope:null,bindToController:null};if(v(a.scope)&&(a.bindToController===!0?(c.bindToController=e(a.scope,b,!0),c.isolateScope={}):c.isolateScope=e(a.scope,b,!1)),v(a.bindToController)&&(c.bindToController=e(a.bindToController,b,!0)),v(c.bindToController)){var d=a.controller,f=a.controllerAs;if(!d)
// There is no controller, there may or may not be a controllerAs property
throw Be("noctrl","Cannot bind to controller without directive '{0}'s controller.",b);if(!mb(d,f))
// There is a controller, but no identifier or controllerAs property
throw Be("noident","Cannot bind to controller without identifier for directive '{0}'.",b)}return c}function i(a){var b=a.charAt(0);if(!b||b!==rd(b))throw Be("baddir","Directive name '{0}' is invalid. The first character must be a lowercase letter",a);if(a!==a.trim())throw Be("baddir","Directive name '{0}' is invalid. The name should not contain leading or trailing whitespaces",a)}var j={},k="Directive",m=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,n=/(([\w\-]+)(?:\:([^;]+))?;?)/,s=L("ngSrc,ngSrcset,src,srcset"),w=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,y=/^(on[a-z]+|formaction)$/;/**
   * @ngdoc method
   * @name $compileProvider#directive
   * @kind function
   *
   * @description
   * Register a new directive with the compiler.
   *
   * @param {string|Object} name Name of the directive in camel-case (i.e. <code>ngBind</code> which
   *    will match as <code>ng-bind</code>), or an object map of directives where the keys are the
   *    names and the values are the factories.
   * @param {Function|Array} directiveFactory An injectable directive factory function. See
   *    {@link guide/directive} for more info.
   * @returns {ng.$compileProvider} Self for chaining.
   */
this.directive=function B(b,c){return na(b,"directive"),x(b)?(i(b),la(c,"directiveFactory"),j.hasOwnProperty(b)||(j[b]=[],a.factory(b+k,["$injector","$exceptionHandler",function(a,c){var d=[];return f(j[b],function(e,f){try{var h=a.invoke(e);A(h)?h={compile:r(h)}:!h.compile&&h.link&&(h.compile=r(h.link)),h.priority=h.priority||0,h.index=f,h.name=h.name||b,h.require=h.require||h.controller&&h.name,h.restrict=h.restrict||"EA";var i=h.$$bindings=g(h,h.name);v(i.isolateScope)&&(h.$$isolateBindings=i.isolateScope),h.$$moduleName=e.$$moduleName,d.push(h)}catch(j){c(j)}}),d}])),j[b].push(c)):f(b,h(B)),this},/**
   * @ngdoc method
   * @name $compileProvider#aHrefSanitizationWhitelist
   * @kind function
   *
   * @description
   * Retrieves or overrides the default regular expression that is used for whitelisting of safe
   * urls during a[href] sanitization.
   *
   * The sanitization is a security measure aimed at preventing XSS attacks via html links.
   *
   * Any url about to be assigned to a[href] via data-binding is first normalized and turned into
   * an absolute url. Afterwards, the url is matched against the `aHrefSanitizationWhitelist`
   * regular expression. If a match is found, the original url is written into the dom. Otherwise,
   * the absolute url is prefixed with `'unsafe:'` string and only then is it written into the DOM.
   *
   * @param {RegExp=} regexp New regexp to whitelist urls with.
   * @returns {RegExp|ng.$compileProvider} Current RegExp if called without value or self for
   *    chaining otherwise.
   */
this.aHrefSanitizationWhitelist=function(a){return u(a)?(d.aHrefSanitizationWhitelist(a),this):d.aHrefSanitizationWhitelist()},/**
   * @ngdoc method
   * @name $compileProvider#imgSrcSanitizationWhitelist
   * @kind function
   *
   * @description
   * Retrieves or overrides the default regular expression that is used for whitelisting of safe
   * urls during img[src] sanitization.
   *
   * The sanitization is a security measure aimed at prevent XSS attacks via html links.
   *
   * Any url about to be assigned to img[src] via data-binding is first normalized and turned into
   * an absolute url. Afterwards, the url is matched against the `imgSrcSanitizationWhitelist`
   * regular expression. If a match is found, the original url is written into the dom. Otherwise,
   * the absolute url is prefixed with `'unsafe:'` string and only then is it written into the DOM.
   *
   * @param {RegExp=} regexp New regexp to whitelist urls with.
   * @returns {RegExp|ng.$compileProvider} Current RegExp if called without value or self for
   *    chaining otherwise.
   */
this.imgSrcSanitizationWhitelist=function(a){return u(a)?(d.imgSrcSanitizationWhitelist(a),this):d.imgSrcSanitizationWhitelist()};/**
   * @ngdoc method
   * @name  $compileProvider#debugInfoEnabled
   *
   * @param {boolean=} enabled update the debugInfoEnabled state if provided, otherwise just return the
   * current debugInfoEnabled state
   * @returns {*} current value if used as getter or itself (chaining) if used as setter
   *
   * @kind function
   *
   * @description
   * Call this method to enable/disable various debug runtime information in the compiler such as adding
   * binding information and a reference to the current scope on to DOM elements.
   * If enabled, the compiler will add the following to DOM elements that have been bound to the scope
   * * `ng-binding` CSS class
   * * `$binding` data property containing an array of the binding expressions
   *
   * You may want to disable this in production for a significant performance boost. See
   * {@link guide/production#disabling-debug-data Disabling Debug Data} for more.
   *
   * The default value is true.
   */
var z=!0;this.debugInfoEnabled=function(a){return u(a)?(z=a,this):z},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,d,e,g,h,i,r,u,B,C,E){function F(a,b){try{a.addClass(b)}catch(c){}}
//================================
function G(a,b,c,d,e){a instanceof xd||(
// jquery always rewraps, whereas we need to preserve the original selector so that we can
// modify it.
a=xd(a)),
// We can not compile top level text elements since text nodes can be merged and we will
// not be able to attach scope data to them, so we will wrap them in <span>
f(a,function(b,c){b.nodeType==Ud&&b.nodeValue.match(/\S+/)&&(a[c]=xd(b).wrap("<span></span>").parent()[0])});var g=I(a,b,a,c,d,e);G.$$addScopeClass(a);var h=null;return function(b,c,d){la(b,"scope"),d=d||{};var e=d.parentBoundTranscludeFn,f=d.transcludeControllers,i=d.futureParentElement;
// When `parentBoundTranscludeFn` is passed, it is a
// `controllersBoundTransclude` function (it was previously passed
// as `transclude` to directive.link) so we must unwrap it to get
// its `boundTranscludeFn`
e&&e.$$boundTransclude&&(e=e.$$boundTransclude),h||(h=H(i));var j;if(
// When using a directive with replace:true and templateUrl the $compileNodes
// (or a child element inside of them)
// might change, so we need to recreate the namespace adapted compileNodes
// for call to the link function.
// Note: This will already clone the nodes...
j="html"!==h?xd(_(h,xd("<div>").append(a).html())):c?ke.clone.call(a):a,f)for(var k in f)j.data("$"+k+"Controller",f[k].instance);return G.$$addScopeInfo(j,b),c&&c(j,b),g&&g(b,j,j,e),j}}function H(a){
// TODO: Make this detect MathML as well...
var b=a&&a[0];return b&&"foreignobject"!==M(b)&&b.toString().match(/SVG/)?"svg":"html"}/**
     * Compile function matches each node in nodeList against the directives. Once all directives
     * for a particular node are collected their compile functions are executed. The compile
     * functions return values - the linking functions - are combined into a composite linking
     * function, which is the a linking function for the node.
     *
     * @param {NodeList} nodeList an array of nodes or NodeList to compile
     * @param {function(angular.Scope, cloneAttachFn=)} transcludeFn A linking function, where the
     *        scope argument is auto-generated to the new child of the transcluded parent scope.
     * @param {DOMElement=} $rootElement If the nodeList is the root of the compilation tree then
     *        the rootElement must be set the jqLite collection of the compile root. This is
     *        needed so that the jqLite collection items can be replaced with widgets.
     * @param {number=} maxPriority Max directive priority.
     * @returns {Function} A composite linking function of all of the matched directives or null.
     */
function I(a,b,d,e,f,g){function h(a,d,e,f){var g,h,i,j,k,l,m,n,q;if(o){
// copy nodeList so that if a nodeLinkFn removes or adds an element at this DOM level our
// offsets don't get screwed up
var r=d.length;
// create a sparse array by only copying the elements which have a linkFn
for(q=new Array(r),k=0;k<p.length;k+=3)m=p[k],q[m]=d[m]}else q=d;for(k=0,l=p.length;l>k;)if(i=q[p[k++]],g=p[k++],h=p[k++],g){if(g.scope){j=a.$new(),G.$$addScopeInfo(xd(i),j);var s=g.$$destroyBindings;s&&(g.$$destroyBindings=null,j.$on("$destroyed",s))}else j=a;n=g.transcludeOnThisElement?J(a,g.transclude,f):!g.templateOnThisElement&&f?f:!f&&b?J(a,b):null,g(h,j,i,e,n,g)}else h&&h(a,i.childNodes,c,f)}for(var i,j,k,l,m,n,o,p=[],q=0;q<a.length;q++)i=new ga,
// we must always refer to nodeList[i] since the nodes can be replaced underneath us.
j=K(a[q],[],i,0===q?e:c,f),k=j.length?P(j,a[q],i,b,d,null,[],[],g):null,k&&k.scope&&G.$$addScopeClass(i.$$element),m=k&&k.terminal||!(l=a[q].childNodes)||!l.length?null:I(l,k?(k.transcludeOnThisElement||!k.templateOnThisElement)&&k.transclude:b),(k||m)&&(p.push(q,k,m),n=!0,o=o||k),
//use the previous context only for the first element in the virtual group
g=null;
// return a linking function if we have found anything, null otherwise
return n?h:null}function J(a,b,c){var d=function(d,e,f,g,h){return d||(d=a.$new(!1,h),d.$$transcluded=!0),b(d,e,{parentBoundTranscludeFn:c,transcludeControllers:f,futureParentElement:g})};return d}/**
     * Looks for directives on the given node and adds them to the directive collection which is
     * sorted.
     *
     * @param node Node to search.
     * @param directives An array to which the directives are added to. This array is sorted before
     *        the function returns.
     * @param attrs The shared attrs object which is used to populate the normalized attributes.
     * @param {number=} maxPriority Max directive priority.
     */
function K(a,b,c,d,e){var f,g,h=a.nodeType,i=c.$attr;switch(h){case Sd:/* Element */
// use the node name: <directive>
T(b,jb(M(a)),"E",d,e);
// iterate over the attributes
for(var j,k,l,o,p,q,r=a.attributes,s=0,t=r&&r.length;t>s;s++){var u=!1,w=!1;j=r[s],k=j.name,p=Ld(j.value),
// support ngAttr attribute binding
o=jb(k),(q=ma.test(o))&&(k=k.replace(Ce,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()}));var y=o.replace(/(Start|End)$/,"");U(y)&&o===y+"Start"&&(u=k,w=k.substr(0,k.length-5)+"end",k=k.substr(0,k.length-6)),l=jb(k.toLowerCase()),i[l]=k,(q||!c.hasOwnProperty(l))&&(c[l]=p,Sa(a,l)&&(c[l]=!0)),ba(a,b,p,l,q),T(b,l,"A",d,e,u,w)}if(
// use class as directive
g=a.className,v(g)&&(
// Maybe SVGAnimatedString
g=g.animVal),x(g)&&""!==g)for(;f=n.exec(g);)l=jb(f[2]),T(b,l,"C",d,e)&&(c[l]=Ld(f[3])),g=g.substr(f.index+f[0].length);break;case Ud:/* Text Node */
if(11===wd)
// Workaround for #11781
for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Ud;)a.nodeValue=a.nodeValue+a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);Z(b,a.nodeValue);break;case Vd:/* Comment */
try{f=m.exec(a.nodeValue),f&&(l=jb(f[1]),T(b,l,"M",d,e)&&(c[l]=Ld(f[2])))}catch(z){}}return b.sort(X),b}/**
     * Given a node with an directive-start it collects all of the siblings until it finds
     * directive-end.
     * @param node
     * @param attrStart
     * @param attrEnd
     * @returns {*}
     */
function L(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw Be("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",b,c);a.nodeType==Sd&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--),d.push(a),a=a.nextSibling}while(e>0)}else d.push(a);return xd(d)}/**
     * Wrapper for linking function which converts normal linking function into a grouped
     * linking function.
     * @param linkFn
     * @param attrStart
     * @param attrEnd
     * @returns {Function}
     */
function O(a,b,c){return function(d,e,f,g,h){return e=L(e[0],b,c),a(d,e,f,g,h)}}/**
     * Once the directives have been collected, their compile functions are executed. This method
     * is responsible for inlining directive templates as well as terminating the application
     * of the directives if the terminal directive has been reached.
     *
     * @param {Array} directives Array of collected directives to execute their compile function.
     *        this needs to be pre-sorted by priority order.
     * @param {Node} compileNode The raw DOM node to apply the compile functions to
     * @param {Object} templateAttrs The shared attribute function
     * @param {function(angular.Scope, cloneAttachFn=)} transcludeFn A linking function, where the
     *                                                  scope argument is auto-generated to the new
     *                                                  child of the transcluded parent scope.
     * @param {JQLite} jqCollection If we are working on the root of the compile tree then this
     *                              argument has the root jqLite array so that we can replace nodes
     *                              on it.
     * @param {Object=} originalReplaceDirective An optional directive that will be ignored when
     *                                           compiling the transclusion.
     * @param {Array.<Function>} preLinkFns
     * @param {Array.<Function>} postLinkFns
     * @param {Object} previousCompileContext Context used for previous compilation of the current
     *                                        node
     * @returns {Function} linkFn
     */
function P(a,d,f,g,h,j,k,l,m){
////////////////////
function n(a,b,c,d){a&&(c&&(a=O(a,c,d)),a.require=r.require,a.directiveName=s,(E===r||r.$$isolateScope)&&(a=da(a,{isolateScope:!0})),k.push(a)),b&&(c&&(b=O(b,c,d)),b.require=r.require,b.directiveName=s,(E===r||r.$$isolateScope)&&(b=da(b,{isolateScope:!0})),l.push(b))}function o(a,b,c,d){var e;if(x(b)){var f=b.match(w),g=b.substring(f[0].length),h=f[1]||f[3],i="?"===f[2];if(
//If only parents then start at the parent element
"^^"===h?c=c.parent():(e=d&&d[g],e=e&&e.instance),!e){var j="$"+g+"Controller";e=h?c.inheritedData(j):c.data(j)}if(!e&&!i)throw Be("ctreq","Controller '{0}', required by directive '{1}', can't be found!",g,a)}else if(Jd(b)){e=[];for(var k=0,l=b.length;l>k;k++)e[k]=o(a,b[k],c,d)}return e||null}function p(a,b,c,d,e,f){var g=qa();for(var h in d){var j=d[h],k={$scope:j===E||j.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},l=j.controller;"@"==l&&(l=b[j.name]);var m=i(l,k,!0,j.controllerAs);
// For directives with element transclusion the element is a comment,
// but jQuery .data doesn't support attaching data to comment nodes as it's hard to
// clean up (http://bugs.jquery.com/ticket/8335).
// Instead, we save the controllers for the element in a local hash and attach to .data
// later, once we have the actual element.
g[j.name]=m,M||a.data("$"+j.name+"Controller",m.instance)}return g}function q(a,b,e,g,h,i){
// This is the function that is injected as `$transclude`.
// Note: all arguments are optional!
function j(a,b,d){var e;
// No scope passed in:
return D(a)||(d=b,b=a,a=c),M&&(e=t),d||(d=M?v.parent():v),h(a,b,e,d,H)}var m,n,q,r,s,t,u,v,w;if(d===e?(w=f,v=f.$$element):(v=xd(e),w=new ga(v,f)),E&&(s=b.$new(!0)),h&&(
// track `boundTranscludeFn` so it can be unwrapped if `transcludeFn`
// is later passed as `parentBoundTranscludeFn` to `publicLinkFn`
u=j,u.$$boundTransclude=h),C&&(t=p(v,w,u,C,s,b)),E&&(
// Initialize isolate scope bindings for new isolate scope directive.
G.$$addScopeInfo(v,s,!0,!(F&&(F===E||F===E.$$originalDirective))),G.$$addScopeClass(v,!0),s.$$isolateBindings=E.$$isolateBindings,fa(b,w,s,s.$$isolateBindings,E,s)),t){
// Initialize bindToController bindings for new/isolate scopes
var x,y,z=E||B;z&&t[z.name]&&(x=z.$$bindings.bindToController,r=t[z.name],r&&r.identifier&&x&&(y=r,i.$$destroyBindings=fa(b,w,r.instance,x,z)));for(m in t){r=t[m];var A=r();A!==r.instance&&(
// If the controller constructor has a return value, overwrite the instance
// from setupControllers and update the element data
r.instance=A,v.data("$"+m+"Controller",A),r===y&&(
// Remove and re-install bindToController bindings
i.$$destroyBindings(),i.$$destroyBindings=fa(b,w,A,x,z)))}}
// PRELINKING
for(m=0,n=k.length;n>m;m++)q=k[m],ea(q,q.isolateScope?s:b,v,w,q.require&&o(q.directiveName,q.require,v,t),u);
// RECURSION
// We only pass the isolate scope, if the isolate directive has a template,
// otherwise the child elements do not belong to the isolate directive.
var H=b;
// POSTLINKING
for(E&&(E.template||null===E.templateUrl)&&(H=s),a&&a(H,e.childNodes,c,h),m=l.length-1;m>=0;m--)q=l[m],ea(q,q.isolateScope?s:b,v,w,q.require&&o(q.directiveName,q.require,v,t),u)}m=m||{};
// executes all directives on the current element
for(var r,s,t,u,y,z=-Number.MAX_VALUE,B=m.newScopeDirective,C=m.controllerDirectives,E=m.newIsolateScopeDirective,F=m.templateDirective,H=m.nonTlbTranscludeDirective,I=!1,J=!1,M=m.hasElementTranscludeDirective,N=f.$$element=xd(d),P=j,Q=g,T=0,U=a.length;U>T;T++){r=a[T];var X=r.$$start,Z=r.$$end;if(
// collect multiblock sections
X&&(N=L(d,X,Z)),t=c,z>r.priority)break;if((y=r.scope)&&(
// skip the check for directives with async templates, we'll check the derived sync
// directive when the template arrives
r.templateUrl||(v(y)?(
// This directive is trying to add an isolated scope.
// Check that there is no scope of any kind already
Y("new/isolated scope",E||B,r,N),E=r):
// This directive is trying to add a child scope.
// Check that there is no isolated scope already
Y("new/isolated scope",E,r,N)),B=B||r),s=r.name,!r.templateUrl&&r.controller&&(y=r.controller,C=C||qa(),Y("'"+s+"' controller",C[s],r,N),C[s]=r),(y=r.transclude)&&(I=!0,
// Special case ngIf and ngRepeat so that we don't complain about duplicate transclusion.
// This option should only be used by directives that know how to safely handle element transclusion,
// where the transcluded nodes are added or replaced after linking.
r.$$tlb||(Y("transclusion",H,r,N),H=r),"element"==y?(M=!0,z=r.priority,t=N,N=f.$$element=xd(b.createComment(" "+s+": "+f[s]+" ")),d=N[0],ca(h,S(t),d),Q=G(t,g,z,P&&P.name,{
// Don't pass in:
// - controllerDirectives - otherwise we'll create duplicates controllers
// - newIsolateScopeDirective or templateDirective - combining templates with
//   element transclusion doesn't make sense.
//
// We need only nonTlbTranscludeDirective so that we prevent putting transclusion
// on the same element more than once.
nonTlbTranscludeDirective:H})):(t=xd(Da(d)).contents(),N.empty(),// clear contents
Q=G(t,g))),r.template)if(J=!0,Y("template",F,r,N),F=r,y=A(r.template)?r.template(N,f):r.template,y=ka(y),r.replace){if(P=r,t=xa(y)?[]:lb(_(r.templateNamespace,Ld(y))),d=t[0],1!=t.length||d.nodeType!==Sd)throw Be("tplrt","Template for directive '{0}' must have exactly one root element. {1}",s,"");ca(h,N,d);var aa={$attr:{}},ba=K(d,[],aa),ha=a.splice(T+1,a.length-(T+1));E&&R(ba),a=a.concat(ba).concat(ha),V(f,aa),U=a.length}else N.html(y);if(r.templateUrl)J=!0,Y("template",F,r,N),F=r,r.replace&&(P=r),q=W(a.splice(T,a.length-T),N,f,h,I&&Q,k,l,{controllerDirectives:C,newScopeDirective:B!==r&&B,newIsolateScopeDirective:E,templateDirective:F,nonTlbTranscludeDirective:H}),U=a.length;else if(r.compile)try{u=r.compile(N,f,Q),A(u)?n(null,u,X,Z):u&&n(u.pre,u.post,X,Z)}catch(ia){e(ia,$(N))}r.terminal&&(q.terminal=!0,z=Math.max(z,r.priority))}
// might be normal or delayed nodeLinkFn depending on if templateUrl is present
return q.scope=B&&B.scope===!0,q.transcludeOnThisElement=I,q.templateOnThisElement=J,q.transclude=Q,m.hasElementTranscludeDirective=M,q}function R(a){
// mark all directives as needing isolate scope.
for(var b=0,c=a.length;c>b;b++)a[b]=o(a[b],{$$isolateScope:!0})}/**
     * looks up the directive and decorates it with exception handling and proper parameters. We
     * call this the boundDirective.
     *
     * @param {string} name name of the directive to look up.
     * @param {string} location The directive must be found in specific format.
     *   String containing any of theses characters:
     *
     *   * `E`: element name
     *   * `A': attribute
     *   * `C`: class
     *   * `M`: comment
     * @returns {boolean} true if directive was added.
     */
function T(b,c,d,f,g,h,i){if(c===g)return null;var l=null;if(j.hasOwnProperty(c))for(var m,n=a.get(c+k),p=0,q=n.length;q>p;p++)try{m=n[p],(t(f)||f>m.priority)&&-1!=m.restrict.indexOf(d)&&(h&&(m=o(m,{$$start:h,$$end:i})),b.push(m),l=m)}catch(r){e(r)}return l}/**
     * looks up the directive and returns true if it is a multi-element directive,
     * and therefore requires DOM nodes between -start and -end markers to be grouped
     * together.
     *
     * @param {string} name name of the directive to look up.
     * @returns true if directive was registered as multi-element.
     */
function U(b){if(j.hasOwnProperty(b))for(var c,d=a.get(b+k),e=0,f=d.length;f>e;e++)if(c=d[e],c.multiElement)return!0;return!1}/**
     * When the element is replaced with HTML template then the new attributes
     * on the template need to be merged with the existing attributes in the DOM.
     * The desired effect is to have both of the attributes present.
     *
     * @param {object} dst destination attributes (original DOM)
     * @param {object} src source attributes (from the directive template)
     */
function V(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;
// reapply the old attributes to the new element
f(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))}),
// copy the new attributes on the old attrs object
f(b,function(b,f){"class"==f?(F(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==f?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==f.charAt(0)||a.hasOwnProperty(f)||(a[f]=b,d[f]=c[f])})}function W(a,b,c,d,e,h,i,j){var k,l,m=[],n=b[0],p=a.shift(),q=o(p,{templateUrl:null,transclude:null,replace:null,$$originalDirective:p}),r=A(p.templateUrl)?p.templateUrl(b,c):p.templateUrl,s=p.templateNamespace;return b.empty(),g(r).then(function(g){var o,t,u,w;if(g=ka(g),p.replace){if(u=xa(g)?[]:lb(_(s,Ld(g))),o=u[0],1!=u.length||o.nodeType!==Sd)throw Be("tplrt","Template for directive '{0}' must have exactly one root element. {1}",p.name,r);t={$attr:{}},ca(d,b,o);var x=K(o,[],t);v(p.scope)&&R(x),a=x.concat(a),V(c,t)}else o=n,b.html(g);for(a.unshift(q),k=P(a,o,c,e,b,p,h,i,j),f(d,function(a,c){a==o&&(d[c]=b[0])}),l=I(b[0].childNodes,e);m.length;){var y=m.shift(),z=m.shift(),A=m.shift(),B=m.shift(),C=b[0];if(!y.$$destroyed){if(z!==n){var D=z.className;j.hasElementTranscludeDirective&&p.replace||(
// it was cloned therefore we have to clone as well.
C=Da(o)),ca(A,xd(z),C),
// Copy in CSS classes from original node
F(xd(C),D)}w=k.transcludeOnThisElement?J(y,k.transclude,B):B,k(l,y,C,d,w,k)}}m=null}),function(a,b,c,d,e){var f=e;b.$$destroyed||(m?m.push(b,c,d,f):(k.transcludeOnThisElement&&(f=J(b,k.transclude,e)),k(l,b,c,d,f,k)))}}/**
     * Sorting function for bound directives.
     */
function X(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function Y(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw Be("multidir","Multiple directives [{0}{1}, {2}{3}] asking for {4} on: {5}",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,$(d))}function Z(a,b){var c=d(b,!0);c&&a.push({priority:0,compile:function(a){var b=a.parent(),d=!!b.length;
// When transcluding a template that has bindings in the root
// we don't have a parent and thus need to add the class during linking fn.
return d&&G.$$addBindingClass(b),function(a,b){var e=b.parent();d||G.$$addBindingClass(e),G.$$addBindingInfo(e,c.expressions),a.$watch(c,function(a){b[0].nodeValue=a})}}})}function _(a,c){switch(a=rd(a||"html")){case"svg":case"math":var d=b.createElement("div");return d.innerHTML="<"+a+">"+c+"</"+a+">",d.childNodes[0].childNodes;default:return c}}function aa(a,b){if("srcdoc"==b)return B.HTML;var c=M(a);
// maction[xlink:href] can source SVG.  It's not limited to <maction>.
// maction[xlink:href] can source SVG.  It's not limited to <maction>.
return"xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b)?B.RESOURCE_URL:void 0}function ba(a,b,c,e,f){var g=aa(a,e);f=s[e]||f;var h=d(c,!0,g,f);
// no interpolation found -> ignore
if(h){if("multiple"===e&&"select"===M(a))throw Be("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",$(a));b.push({priority:100,compile:function(){return{pre:function(a,b,i){var j=i.$$observers||(i.$$observers={});if(y.test(e))throw Be("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.");
// If the attribute has changed since last $interpolate()ed
var k=i[e];k!==c&&(
// we need to interpolate again since the attribute value has been updated
// (e.g. by another directive's compile function)
// ensure unset/empty values make interpolateFn falsy
h=k&&d(k,!0,g,f),c=k),
// if attribute was updated so that there is no interpolation going on we don't want to
// register any observers
h&&(
// initialize attr object so that it's ready in case we need the value for isolate
// scope initialization, otherwise the value would not be available from isolate
// directive's linking fn during linking phase
i[e]=h(a),(j[e]||(j[e]=[])).$$inter=!0,(i.$$observers&&i.$$observers[e].$$scope||a).$watch(h,function(a,b){
//special case for class attribute addition + removal
//so that class changes can tap into the animation
//hooks provided by the $animate service. Be sure to
//skip animations when the first digest occurs (when
//both the new and the old values are the same) since
//the CSS classes are the non-interpolated values
"class"===e&&a!=b?i.$updateClass(a,b):i.$set(e,a)}))}}}})}}/**
     * This is a special jqLite.replaceWith, which can replace items which
     * have no parents, provided that the containing jqLite collection is provided.
     *
     * @param {JqLite=} $rootElement The root of the compile tree. Used so that we can replace nodes
     *                               in the root of the tree.
     * @param {JqLite} elementsToRemove The jqLite element which we are going to replace. We keep
     *                                  the shell, but replace its DOM node reference.
     * @param {Node} newNode The new DOM node.
     */
function ca(a,c,d){var e,f,g=c[0],h=c.length,i=g.parentNode;if(a)for(e=0,f=a.length;f>e;e++)if(a[e]==g){a[e++]=d;for(var j=e,k=j+h-1,l=a.length;l>j;j++,k++)l>k?a[j]=a[k]:delete a[j];a.length-=h-1,
// If the replaced element is also the jQuery .context then replace it
// .context is a deprecated jQuery api, so we should set it only when jQuery set it
// http://api.jquery.com/context/
a.context===g&&(a.context=d);break}i&&i.replaceChild(d,g);
// TODO(perf): what's this document fragment for? is it needed? can we at least reuse it?
var m=b.createDocumentFragment();m.appendChild(g),xd.hasData(g)&&(
// Copy over user data (that includes Angular's $scope etc.). Don't copy private
// data here because there's no public interface in jQuery to do that and copying over
// event listeners (which is the main use of private data) wouldn't work anyway.
xd(d).data(xd(g).data()),
// Remove data of the replaced element. We cannot just call .remove()
// on the element it since that would deallocate scope that is needed
// for the new node. Instead, remove the data "manually".
yd?(
// jQuery 2.x doesn't expose the data storage. Use jQuery.cleanData to clean up after
// the replaced element. The cleanData version monkey-patched by Angular would cause
// the scope to be trashed and we do need the very same scope to work with the new
// element. However, we cannot just cache the non-patched version and use it here as
// that would break if another library patches the method after Angular does (one
// example is jQuery UI). Instead, set a flag indicating scope destroying should be
// skipped this one time.
Id=!0,yd.cleanData([g])):delete xd.cache[g[xd.expando]]);for(var n=1,o=c.length;o>n;n++){var p=c[n];xd(p).remove(),// must do this way to clean up expando
m.appendChild(p),delete c[n]}c[0]=d,c.length=1}function da(a,b){return l(function(){return a.apply(null,arguments)},a,b)}function ea(a,b,c,d,f,g){try{a(b,c,d,f,g)}catch(h){e(h,$(c))}}
// Set up $watches for isolate scope and controller bindings. This process
// only occurs for isolate scopes and new scopes with controllerAs.
function fa(a,b,c,e,g,i){var j;f(e,function(e,f){var// @, =, or &
i,k,l,m,n=e.attrName,o=e.optional,q=e.mode;switch(q){case"@":o||sd.call(b,n)||(c[f]=b[n]=void 0),b.$observe(n,function(a){x(a)&&(c[f]=a)}),b.$$observers[n].$$scope=a,x(b[n])&&(
// If the attribute has been provided then we trigger an interpolation to ensure
// the value is there for use in the link fn
c[f]=d(b[n])(a));break;case"=":if(!sd.call(b,n)){if(o)break;b[n]=void 0}if(o&&!b[n])break;k=h(b[n]),m=k.literal?Q:function(a,b){return a===b||a!==a&&b!==b},l=k.assign||function(){
// reset the change, or we will throw this exception on every $digest
throw i=c[f]=k(a),Be("nonassign","Expression '{0}' used with directive '{1}' is non-assignable!",b[n],g.name)},i=c[f]=k(a);var r=function(b){
// we are out of sync and need to copy
// if the parent can be assigned then do so
// parent changed and it has precedence
return m(b,c[f])||(m(b,i)?l(a,b=c[f]):c[f]=b),i=b};r.$stateful=!0;var s;s=e.collection?a.$watchCollection(b[n],r):a.$watch(h(b[n],r),null,k.literal),j=j||[],j.push(s);break;case"&":
// Don't assign noop to destination if expression is not valid
if(
// Don't assign Object.prototype method to scope
k=b.hasOwnProperty(n)?h(b[n]):p,k===p&&o)break;c[f]=function(b){return k(a,b)}}});var k=j?function(){for(var a=0,b=j.length;b>a;++a)j[a]()}:p;return i&&k!==p?(i.$on("$destroy",k),p):k}var ga=function(a,b){if(b){var c,d,e,f=Object.keys(b);for(c=0,d=f.length;d>c;c++)e=f[c],this[e]=b[e]}else this.$attr={};this.$$element=a};ga.prototype={/**
       * @ngdoc method
       * @name $compile.directive.Attributes#$normalize
       * @kind function
       *
       * @description
       * Converts an attribute name (e.g. dash/colon/underscore-delimited string, optionally prefixed with `x-` or
       * `data-`) to its normalized, camelCase form.
       *
       * Also there is special case for Moz prefix starting with upper case letter.
       *
       * For further information check out the guide on {@link guide/directive#matching-directives Matching Directives}
       *
       * @param {string} name Name to normalize
       */
$normalize:jb,/**
       * @ngdoc method
       * @name $compile.directive.Attributes#$addClass
       * @kind function
       *
       * @description
       * Adds the CSS class value specified by the classVal parameter to the element. If animations
       * are enabled then an animation will be triggered for the class addition.
       *
       * @param {string} classVal The className value that will be added to the element
       */
$addClass:function(a){a&&a.length>0&&C.addClass(this.$$element,a)},/**
       * @ngdoc method
       * @name $compile.directive.Attributes#$removeClass
       * @kind function
       *
       * @description
       * Removes the CSS class value specified by the classVal parameter from the element. If
       * animations are enabled then an animation will be triggered for the class removal.
       *
       * @param {string} classVal The className value that will be removed from the element
       */
$removeClass:function(a){a&&a.length>0&&C.removeClass(this.$$element,a)},/**
       * @ngdoc method
       * @name $compile.directive.Attributes#$updateClass
       * @kind function
       *
       * @description
       * Adds and removes the appropriate CSS class values to the element based on the difference
       * between the new and old CSS class values (specified as newClasses and oldClasses).
       *
       * @param {string} newClasses The current CSS className value
       * @param {string} oldClasses The former CSS className value
       */
$updateClass:function(a,b){var c=kb(a,b);c&&c.length&&C.addClass(this.$$element,c);var d=kb(b,a);d&&d.length&&C.removeClass(this.$$element,d)},/**
       * Set a normalized attribute on the element in a way such that all directives
       * can share the attribute. This function properly handles boolean attributes.
       * @param {string} key Normalized key. (ie ngAttribute)
       * @param {string|boolean} value The value to set. If `null` attribute will be deleted.
       * @param {boolean=} writeAttr If false, does not write the value to DOM element attribute.
       *     Defaults to true.
       * @param {string=} attrName Optional none normalized name. Defaults to key.
       */
$set:function(a,b,c,d){
// TODO: decide whether or not to throw an error if "class"
//is set through this function since it may cause $updateClass to
//become unstable.
var g,h=this.$$element[0],i=Sa(h,a),j=Ta(a),k=a;if(i?(this.$$element.prop(a,b),d=i):j&&(this[j]=b,k=j),this[a]=b,
// translate normalized key to actual key
d?this.$attr[a]=d:(d=this.$attr[a],d||(this.$attr[a]=d=ja(a,"-"))),g=M(this.$$element),"a"===g&&"href"===a||"img"===g&&"src"===a)
// sanitize a[href] and img[src] values
this[a]=b=E(b,"src"===a);else if("img"===g&&"srcset"===a){for(var l="",m=Ld(b),n=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,o=/\s/.test(m)?n:/(,)/,p=m.split(o),q=Math.floor(p.length/2),r=0;q>r;r++){var s=2*r;
// sanitize the uri
l+=E(Ld(p[s]),!0),
// add the descriptor
l+=" "+Ld(p[s+1])}
// split the last item into uri and descriptor
var u=Ld(p[2*r]).split(/\s/);
// sanitize the last uri
l+=E(Ld(u[0]),!0),
// and add the last descriptor if any
2===u.length&&(l+=" "+Ld(u[1])),this[a]=b=l}c!==!1&&(null===b||t(b)?this.$$element.removeAttr(d):this.$$element.attr(d,b));
// fire observers
var v=this.$$observers;v&&f(v[k],function(a){try{a(b)}catch(c){e(c)}})},/**
       * @ngdoc method
       * @name $compile.directive.Attributes#$observe
       * @kind function
       *
       * @description
       * Observes an interpolated attribute.
       *
       * The observer function will be invoked once during the next `$digest` following
       * compilation. The observer is then invoked whenever the interpolated value
       * changes.
       *
       * @param {string} key Normalized key. (ie ngAttribute) .
       * @param {function(interpolatedValue)} fn Function that will be called whenever
                the interpolated value of the attribute changes.
       *        See the {@link guide/directive#text-and-attribute-bindings Directives} guide for more info.
       * @returns {function()} Returns a deregistration function for this observer.
       */
$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers=qa()),e=d[a]||(d[a]=[]);return e.push(b),r.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||t(c[a])||
// no one registered attribute interpolation function, so lets call it manually
b(c[a])}),function(){N(e,b)}}};var ha=d.startSymbol(),ia=d.endSymbol(),ka="{{"==ha||"}}"==ia?q:function(a){return a.replace(/\{\{/g,ha).replace(/}}/g,ia)},ma=/^ngAttr[A-Z]/;return G.$$addBindingInfo=z?function(a,b){var c=a.data("$binding")||[];Jd(b)?c=c.concat(b):c.push(b),a.data("$binding",c)}:p,G.$$addBindingClass=z?function(a){F(a,"ng-binding")}:p,G.$$addScopeInfo=z?function(a,b,c,d){var e=c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope";a.data(e,b)}:p,G.$$addScopeClass=z?function(a,b){F(a,b?"ng-isolate-scope":"ng-scope")}:p,G}]}/**
 * Converts all accepted directives format into proper directive name.
 * @param name Name to normalize
 */
function jb(a){return wa(a.replace(Ce,""))}function kb(a,b){var c="",d=a.split(/\s+/),e=b.split(/\s+/);a:for(var f=0;f<d.length;f++){for(var g=d[f],h=0;h<e.length;h++)if(g==e[h])continue a;c+=(c.length>0?" ":"")+g}return c}function lb(a){a=xd(a);var b=a.length;if(1>=b)return a;for(;b--;){var c=a[b];c.nodeType===Vd&&Bd.call(a,b,1)}return a}function mb(a,b){if(b&&x(b))return b;if(x(a)){var c=Ee.exec(a);if(c)return c[3]}}/**
 * @ngdoc provider
 * @name $controllerProvider
 * @description
 * The {@link ng.$controller $controller service} is used by Angular to create new
 * controllers.
 *
 * This provider allows controller registration via the
 * {@link ng.$controllerProvider#register register} method.
 */
function nb(){var a={},b=!1;/**
   * @ngdoc method
   * @name $controllerProvider#register
   * @param {string|Object} name Controller name, or an object map of controllers where the keys are
   *    the names and the values are the constructors.
   * @param {Function|Array} constructor Controller constructor fn (optionally decorated with DI
   *    annotations in the array notation).
   */
this.register=function(b,c){na(b,"controller"),v(b)?l(a,b):a[b]=c},/**
   * @ngdoc method
   * @name $controllerProvider#allowGlobals
   * @description If called, allows `$controller` to find controller constructors on `window`
   */
this.allowGlobals=function(){b=!0},this.$get=["$injector","$window",function(e,f){function g(a,b,c,e){if(!a||!v(a.$scope))throw d("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",e,b);a.$scope[b]=c}/**
     * @ngdoc service
     * @name $controller
     * @requires $injector
     *
     * @param {Function|string} constructor If called with a function then it's considered to be the
     *    controller constructor function. Otherwise it's considered to be a string which is used
     *    to retrieve the controller constructor using the following steps:
     *
     *    * check if a controller with given name is registered via `$controllerProvider`
     *    * check if evaluating the string on the current scope returns a constructor
     *    * if $controllerProvider#allowGlobals, check `window[constructor]` on the global
     *      `window` object (not recommended)
     *
     *    The string can use the `controller as property` syntax, where the controller instance is published
     *    as the specified property on the `scope`; the `scope` must be injected into `locals` param for this
     *    to work correctly.
     *
     * @param {Object} locals Injection locals for Controller.
     * @return {Object} Instance of given controller.
     *
     * @description
     * `$controller` service is responsible for instantiating controllers.
     *
     * It's just a simple call to {@link auto.$injector $injector}, but extracted into
     * a service, so that one can override this service with [BC version](https://gist.github.com/1649788).
     */
return function(d,h,i,j){
// PRIVATE API:
//   param `later` --- indicates that the controller's constructor is invoked at a later time.
//                     If true, $controller will allocate the object with the correct
//                     prototype chain, but will not invoke the controller until a returned
//                     callback is invoked.
//   param `ident` --- An optional label which overrides the label parsed from the controller
//                     expression, if any.
var k,m,n,o;if(i=i===!0,j&&x(j)&&(o=j),x(d)){if(m=d.match(Ee),!m)throw De("ctrlfmt","Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",d);n=m[1],o=o||m[3],d=a.hasOwnProperty(n)?a[n]:oa(h.$scope,n,!0)||(b?oa(f,n,!0):c),ma(d,n,!0)}if(i){
// Instantiate controller later:
// This machinery is used to create an instance of the object before calling the
// controller's constructor itself.
//
// This allows properties to be added to the controller before the constructor is
// invoked. Primarily, this is used for isolate scope bindings in $compile.
//
// This feature is not intended for use by applications, and is thus not documented
// publicly.
// Object creation: http://jsperf.com/create-constructor/2
var p=(Jd(d)?d[d.length-1]:d).prototype;k=Object.create(p||null),o&&g(h,o,k,n||d.name);var q;return q=l(function(){var a=e.invoke(d,k,h,n);
// If result changed, re-assign controllerAs value to scope.
return a!==k&&(v(a)||A(a))&&(k=a,o&&g(h,o,k,n||d.name)),k},{instance:k,identifier:o})}return k=e.instantiate(d,h,n),o&&g(h,o,k,n||d.name),k}}]}/**
 * @ngdoc service
 * @name $document
 * @requires $window
 *
 * @description
 * A {@link angular.element jQuery or jqLite} wrapper for the browser's `window.document` object.
 *
 * @example
   <example module="documentExample">
     <file name="index.html">
       <div ng-controller="ExampleController">
         <p>$document title: <b ng-bind="title"></b></p>
         <p>window.document title: <b ng-bind="windowTitle"></b></p>
       </div>
     </file>
     <file name="script.js">
       angular.module('documentExample', [])
         .controller('ExampleController', ['$scope', '$document', function($scope, $document) {
           $scope.title = $document[0].title;
           $scope.windowTitle = angular.element(window.document)[0].title;
         }]);
     </file>
   </example>
 */
function ob(){this.$get=["$window",function(a){return xd(a.document)}]}/**
 * @ngdoc service
 * @name $exceptionHandler
 * @requires ng.$log
 *
 * @description
 * Any uncaught exception in angular expressions is delegated to this service.
 * The default implementation simply delegates to `$log.error` which logs it into
 * the browser console.
 *
 * In unit tests, if `angular-mocks.js` is loaded, this service is overridden by
 * {@link ngMock.$exceptionHandler mock $exceptionHandler} which aids in testing.
 *
 * ## Example:
 *
 * ```js
 *   angular.module('exceptionOverride', []).factory('$exceptionHandler', function() {
 *     return function(exception, cause) {
 *       exception.message += ' (caused by "' + cause + '")';
 *       throw exception;
 *     };
 *   });
 * ```
 *
 * This example will override the normal action of `$exceptionHandler`, to make angular
 * exceptions fail hard when they happen, instead of just logging to the console.
 *
 * <hr />
 * Note, that code executed in event-listeners (even those registered using jqLite's `on`/`bind`
 * methods) does not delegate exceptions to the {@link ng.$exceptionHandler $exceptionHandler}
 * (unless executed during a digest).
 *
 * If you wish, you can manually delegate exceptions, e.g.
 * `try { ... } catch(e) { $exceptionHandler(e); }`
 *
 * @param {Error} exception Exception associated with the error.
 * @param {string=} cause optional information about the context in which
 *       the error was thrown.
 *
 */
function pb(){this.$get=["$log",function(a){return function(b,c){a.error.apply(a,arguments)}}]}function qb(a){return v(a)?z(a)?a.toISOString():V(a):a}function rb(){/**
   * @ngdoc service
   * @name $httpParamSerializer
   * @description
   *
   * Default {@link $http `$http`} params serializer that converts objects to strings
   * according to the following rules:
   *
   * * `{'foo': 'bar'}` results in `foo=bar`
   * * `{'foo': Date.now()}` results in `foo=2015-04-01T09%3A50%3A49.262Z` (`toISOString()` and encoded representation of a Date object)
   * * `{'foo': ['bar', 'baz']}` results in `foo=bar&foo=baz` (repeated key for each array element)
   * * `{'foo': {'bar':'baz'}}` results in `foo=%7B%22bar%22%3A%22baz%22%7D"` (stringified and encoded representation of an object)
   *
   * Note that serializer will sort the request parameters alphabetically.
   * */
this.$get=function(){return function(a){if(!a)return"";var b=[];return g(a,function(a,c){null===a||t(a)||(Jd(a)?f(a,function(a,d){b.push(da(c)+"="+da(qb(a)))}):b.push(da(c)+"="+da(qb(a))))}),b.join("&")}}}function sb(){/**
   * @ngdoc service
   * @name $httpParamSerializerJQLike
   * @description
   *
   * Alternative {@link $http `$http`} params serializer that follows
   * jQuery's [`param()`](http://api.jquery.com/jquery.param/) method logic.
   * The serializer will also sort the params alphabetically.
   *
   * To use it for serializing `$http` request parameters, set it as the `paramSerializer` property:
   *
   * ```js
   * $http({
   *   url: myUrl,
   *   method: 'GET',
   *   params: myParams,
   *   paramSerializer: '$httpParamSerializerJQLike'
   * });
   * ```
   *
   * It is also possible to set it as the default `paramSerializer` in the
   * {@link $httpProvider#defaults `$httpProvider`}.
   *
   * Additionally, you can inject the serializer and use it explicitly, for example to serialize
   * form data for submission:
   *
   * ```js
   * .controller(function($http, $httpParamSerializerJQLike) {
   *   //...
   *
   *   $http({
   *     url: myUrl,
   *     method: 'POST',
   *     data: $httpParamSerializerJQLike(myData),
   *     headers: {
   *       'Content-Type': 'application/x-www-form-urlencoded'
   *     }
   *   });
   *
   * });
   * ```
   *
   * */
this.$get=function(){return function(a){function b(a,d,e){null===a||t(a)||(Jd(a)?f(a,function(a,c){b(a,d+"["+(v(a)?c:"")+"]")}):v(a)&&!z(a)?g(a,function(a,c){b(a,d+(e?"":"[")+c+(e?"":"]"))}):c.push(da(d)+"="+da(qb(a))))}if(!a)return"";var c=[];return b(a,"",!0),c.join("&")}}}function tb(a,b){if(x(a)){
// Strip json vulnerability protection prefix and trim whitespace
var c=a.replace(Ke,"").trim();if(c){var d=b("Content-Type");(d&&0===d.indexOf(Ge)||ub(c))&&(a=W(c))}}return a}function ub(a){var b=a.match(Ie);return b&&Je[b[0]].test(a)}/**
 * Parse headers into key value object
 *
 * @param {string} headers Raw headers as a string
 * @returns {Object} Parsed headers as key value object
 */
function vb(a){function b(a,b){a&&(d[a]=d[a]?d[a]+", "+b:b)}var c,d=qa();return x(a)?f(a.split("\n"),function(a){c=a.indexOf(":"),b(rd(Ld(a.substr(0,c))),Ld(a.substr(c+1)))}):v(a)&&f(a,function(a,c){b(rd(c),Ld(a))}),d}/**
 * Returns a function that provides access to parsed headers.
 *
 * Headers are lazy parsed when first requested.
 * @see parseHeaders
 *
 * @param {(string|Object)} headers Headers to provide access to.
 * @returns {function(string=)} Returns a getter function which if called with:
 *
 *   - if called with single an argument returns a single header value or null
 *   - if called with no arguments returns an object containing all headers.
 */
function wb(a){var b;return function(c){if(b||(b=vb(a)),c){var d=b[rd(c)];return void 0===d&&(d=null),d}return b}}/**
 * Chain all given functions
 *
 * This function is used for both request and response transforming
 *
 * @param {*} data Data to transform.
 * @param {function(string=)} headers HTTP headers getter fn.
 * @param {number} status HTTP status code of the response.
 * @param {(Function|Array.<Function>)} fns Function or an array of functions.
 * @returns {*} Transformed data.
 */
function xb(a,b,c,d){return A(d)?d(a,b,c):(f(d,function(d){a=d(a,b,c)}),a)}function yb(a){return a>=200&&300>a}/**
 * @ngdoc provider
 * @name $httpProvider
 * @description
 * Use `$httpProvider` to change the default behavior of the {@link ng.$http $http} service.
 * */
function zb(){/**
   * @ngdoc property
   * @name $httpProvider#defaults
   * @description
   *
   * Object containing default values for all {@link ng.$http $http} requests.
   *
   * - **`defaults.cache`** - {Object} - an object built with {@link ng.$cacheFactory `$cacheFactory`}
   * that will provide the cache for all requests who set their `cache` property to `true`.
   * If you set the `defaults.cache = false` then only requests that specify their own custom
   * cache object will be cached. See {@link $http#caching $http Caching} for more information.
   *
   * - **`defaults.xsrfCookieName`** - {string} - Name of cookie containing the XSRF token.
   * Defaults value is `'XSRF-TOKEN'`.
   *
   * - **`defaults.xsrfHeaderName`** - {string} - Name of HTTP header to populate with the
   * XSRF token. Defaults value is `'X-XSRF-TOKEN'`.
   *
   * - **`defaults.headers`** - {Object} - Default headers for all $http requests.
   * Refer to {@link ng.$http#setting-http-headers $http} for documentation on
   * setting default headers.
   *     - **`defaults.headers.common`**
   *     - **`defaults.headers.post`**
   *     - **`defaults.headers.put`**
   *     - **`defaults.headers.patch`**
   *
   *
   * - **`defaults.paramSerializer`** - `{string|function(Object<string,string>):string}` - A function
   *  used to the prepare string representation of request parameters (specified as an object).
   *  If specified as string, it is interpreted as a function registered with the {@link auto.$injector $injector}.
   *  Defaults to {@link ng.$httpParamSerializer $httpParamSerializer}.
   *
   **/
var a=this.defaults={
// transform incoming response data
transformResponse:[tb],
// transform outgoing request data
transformRequest:[function(a){return!v(a)||E(a)||G(a)||F(a)?a:V(a)}],
// default headers
headers:{common:{Accept:"application/json, text/plain, */*"},post:P(He),put:P(He),patch:P(He)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;/**
   * @ngdoc method
   * @name $httpProvider#useApplyAsync
   * @description
   *
   * Configure $http service to combine processing of multiple http responses received at around
   * the same time via {@link ng.$rootScope.Scope#$applyAsync $rootScope.$applyAsync}. This can result in
   * significant performance improvement for bigger applications that make many HTTP requests
   * concurrently (common during application bootstrap).
   *
   * Defaults to false. If no value is specified, returns the current configured value.
   *
   * @param {boolean=} value If true, when requests are loaded, they will schedule a deferred
   *    "apply" on the next tick, giving time for subsequent requests in a roughly ~10ms window
   *    to load and share the same digest cycle.
   *
   * @returns {boolean|Object} If a value is specified, returns the $httpProvider for chaining.
   *    otherwise, returns the current configured value.
   **/
this.useApplyAsync=function(a){return u(a)?(b=!!a,this):b};var e=!0;/**
   * @ngdoc method
   * @name $httpProvider#useLegacyPromiseExtensions
   * @description
   *
   * Configure `$http` service to return promises without the shorthand methods `success` and `error`.
   * This should be used to make sure that applications work without these methods.
   *
   * Defaults to false. If no value is specified, returns the current configured value.
   *
   * @param {boolean=} value If true, `$http` will return a normal promise without the `success` and `error` methods.
   *
   * @returns {boolean|Object} If a value is specified, returns the $httpProvider for chaining.
   *    otherwise, returns the current configured value.
   **/
this.useLegacyPromiseExtensions=function(a){return u(a)?(e=!!a,this):e};/**
   * @ngdoc property
   * @name $httpProvider#interceptors
   * @description
   *
   * Array containing service factories for all synchronous or asynchronous {@link ng.$http $http}
   * pre-processing of request or postprocessing of responses.
   *
   * These service factories are ordered by request, i.e. they are applied in the same order as the
   * array, on request, but reverse order, on response.
   *
   * {@link ng.$http#interceptors Interceptors detailed info}
   **/
var g=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",function(h,i,j,k,m,n){/**
     * @ngdoc service
     * @kind function
     * @name $http
     * @requires ng.$httpBackend
     * @requires $cacheFactory
     * @requires $rootScope
     * @requires $q
     * @requires $injector
     *
     * @description
     * The `$http` service is a core Angular service that facilitates communication with the remote
     * HTTP servers via the browser's [XMLHttpRequest](https://developer.mozilla.org/en/xmlhttprequest)
     * object or via [JSONP](http://en.wikipedia.org/wiki/JSONP).
     *
     * For unit testing applications that use `$http` service, see
     * {@link ngMock.$httpBackend $httpBackend mock}.
     *
     * For a higher level of abstraction, please check out the {@link ngResource.$resource
     * $resource} service.
     *
     * The $http API is based on the {@link ng.$q deferred/promise APIs} exposed by
     * the $q service. While for simple usage patterns this doesn't matter much, for advanced usage
     * it is important to familiarize yourself with these APIs and the guarantees they provide.
     *
     *
     * ## General usage
     * The `$http` service is a function which takes a single argument — a configuration object —
     * that is used to generate an HTTP request and returns  a {@link ng.$q promise}.
     *
     * ```js
     *   // Simple GET request example :
     *   $http.get('/someUrl').
     *     then(function(response) {
     *       // this callback will be called asynchronously
     *       // when the response is available
     *     }, function(response) {
     *       // called asynchronously if an error occurs
     *       // or server returns response with an error status.
     *     });
     * ```
     *
     * ```js
     *   // Simple POST request example (passing data) :
     *   $http.post('/someUrl', {msg:'hello word!'}).
     *     then(function(response) {
     *       // this callback will be called asynchronously
     *       // when the response is available
     *     }, function(response) {
     *       // called asynchronously if an error occurs
     *       // or server returns response with an error status.
     *     });
     * ```
     *
     * The response object has these properties:
     *
     *   - **data** – `{string|Object}` – The response body transformed with the transform
     *     functions.
     *   - **status** – `{number}` – HTTP status code of the response.
     *   - **headers** – `{function([headerName])}` – Header getter function.
     *   - **config** – `{Object}` – The configuration object that was used to generate the request.
     *   - **statusText** – `{string}` – HTTP status text of the response.
     *
     * A response status code between 200 and 299 is considered a success status and
     * will result in the success callback being called. Note that if the response is a redirect,
     * XMLHttpRequest will transparently follow it, meaning that the error callback will not be
     * called for such responses.
     *
     * ## Writing Unit Tests that use $http
     * When unit testing (using {@link ngMock ngMock}), it is necessary to call
     * {@link ngMock.$httpBackend#flush $httpBackend.flush()} to flush each pending
     * request using trained responses.
     *
     * ```
     * $httpBackend.expectGET(...);
     * $http.get(...);
     * $httpBackend.flush();
     * ```
     *
     * ## Shortcut methods
     *
     * Shortcut methods are also available. All shortcut methods require passing in the URL, and
     * request data must be passed in for POST/PUT requests.
     *
     * ```js
     *   $http.get('/someUrl').then(successCallback);
     *   $http.post('/someUrl', data).then(successCallback);
     * ```
     *
     * Complete list of shortcut methods:
     *
     * - {@link ng.$http#get $http.get}
     * - {@link ng.$http#head $http.head}
     * - {@link ng.$http#post $http.post}
     * - {@link ng.$http#put $http.put}
     * - {@link ng.$http#delete $http.delete}
     * - {@link ng.$http#jsonp $http.jsonp}
     * - {@link ng.$http#patch $http.patch}
     *
     *
     * ## Deprecation Notice
     * <div class="alert alert-danger">
     *   The `$http` legacy promise methods `success` and `error` have been deprecated.
     *   Use the standard `then` method instead.
     *   If {@link $httpProvider#useLegacyPromiseExtensions `$httpProvider.useLegacyPromiseExtensions`} is set to
     *   `false` then these methods will throw {@link $http:legacy `$http/legacy`} error.
     * </div>
     *
     * ## Setting HTTP Headers
     *
     * The $http service will automatically add certain HTTP headers to all requests. These defaults
     * can be fully configured by accessing the `$httpProvider.defaults.headers` configuration
     * object, which currently contains this default configuration:
     *
     * - `$httpProvider.defaults.headers.common` (headers that are common for all requests):
     *   - `Accept: application/json, text/plain, * / *`
     * - `$httpProvider.defaults.headers.post`: (header defaults for POST requests)
     *   - `Content-Type: application/json`
     * - `$httpProvider.defaults.headers.put` (header defaults for PUT requests)
     *   - `Content-Type: application/json`
     *
     * To add or overwrite these defaults, simply add or remove a property from these configuration
     * objects. To add headers for an HTTP method other than POST or PUT, simply add a new object
     * with the lowercased HTTP method name as the key, e.g.
     * `$httpProvider.defaults.headers.get = { 'My-Header' : 'value' }`.
     *
     * The defaults can also be set at runtime via the `$http.defaults` object in the same
     * fashion. For example:
     *
     * ```
     * module.run(function($http) {
     *   $http.defaults.headers.common.Authorization = 'Basic YmVlcDpib29w'
     * });
     * ```
     *
     * In addition, you can supply a `headers` property in the config object passed when
     * calling `$http(config)`, which overrides the defaults without changing them globally.
     *
     * To explicitly remove a header automatically added via $httpProvider.defaults.headers on a per request basis,
     * Use the `headers` property, setting the desired header to `undefined`. For example:
     *
     * ```js
     * var req = {
     *  method: 'POST',
     *  url: 'http://example.com',
     *  headers: {
     *    'Content-Type': undefined
     *  },
     *  data: { test: 'test' }
     * }
     *
     * $http(req).then(function(){...}, function(){...});
     * ```
     *
     * ## Transforming Requests and Responses
     *
     * Both requests and responses can be transformed using transformation functions: `transformRequest`
     * and `transformResponse`. These properties can be a single function that returns
     * the transformed value (`function(data, headersGetter, status)`) or an array of such transformation functions,
     * which allows you to `push` or `unshift` a new transformation function into the transformation chain.
     *
     * ### Default Transformations
     *
     * The `$httpProvider` provider and `$http` service expose `defaults.transformRequest` and
     * `defaults.transformResponse` properties. If a request does not provide its own transformations
     * then these will be applied.
     *
     * You can augment or replace the default transformations by modifying these properties by adding to or
     * replacing the array.
     *
     * Angular provides the following default transformations:
     *
     * Request transformations (`$httpProvider.defaults.transformRequest` and `$http.defaults.transformRequest`):
     *
     * - If the `data` property of the request configuration object contains an object, serialize it
     *   into JSON format.
     *
     * Response transformations (`$httpProvider.defaults.transformResponse` and `$http.defaults.transformResponse`):
     *
     *  - If XSRF prefix is detected, strip it (see Security Considerations section below).
     *  - If JSON response is detected, deserialize it using a JSON parser.
     *
     *
     * ### Overriding the Default Transformations Per Request
     *
     * If you wish override the request/response transformations only for a single request then provide
     * `transformRequest` and/or `transformResponse` properties on the configuration object passed
     * into `$http`.
     *
     * Note that if you provide these properties on the config object the default transformations will be
     * overwritten. If you wish to augment the default transformations then you must include them in your
     * local transformation array.
     *
     * The following code demonstrates adding a new response transformation to be run after the default response
     * transformations have been run.
     *
     * ```js
     * function appendTransform(defaults, transform) {
     *
     *   // We can't guarantee that the default transformation is an array
     *   defaults = angular.isArray(defaults) ? defaults : [defaults];
     *
     *   // Append the new transformation to the defaults
     *   return defaults.concat(transform);
     * }
     *
     * $http({
     *   url: '...',
     *   method: 'GET',
     *   transformResponse: appendTransform($http.defaults.transformResponse, function(value) {
     *     return doTransform(value);
     *   })
     * });
     * ```
     *
     *
     * ## Caching
     *
     * To enable caching, set the request configuration `cache` property to `true` (to use default
     * cache) or to a custom cache object (built with {@link ng.$cacheFactory `$cacheFactory`}).
     * When the cache is enabled, `$http` stores the response from the server in the specified
     * cache. The next time the same request is made, the response is served from the cache without
     * sending a request to the server.
     *
     * Note that even if the response is served from cache, delivery of the data is asynchronous in
     * the same way that real requests are.
     *
     * If there are multiple GET requests for the same URL that should be cached using the same
     * cache, but the cache is not populated yet, only one request to the server will be made and
     * the remaining requests will be fulfilled using the response from the first request.
     *
     * You can change the default cache to a new object (built with
     * {@link ng.$cacheFactory `$cacheFactory`}) by updating the
     * {@link ng.$http#defaults `$http.defaults.cache`} property. All requests who set
     * their `cache` property to `true` will now use this cache object.
     *
     * If you set the default cache to `false` then only requests that specify their own custom
     * cache object will be cached.
     *
     * ## Interceptors
     *
     * Before you start creating interceptors, be sure to understand the
     * {@link ng.$q $q and deferred/promise APIs}.
     *
     * For purposes of global error handling, authentication, or any kind of synchronous or
     * asynchronous pre-processing of request or postprocessing of responses, it is desirable to be
     * able to intercept requests before they are handed to the server and
     * responses before they are handed over to the application code that
     * initiated these requests. The interceptors leverage the {@link ng.$q
     * promise APIs} to fulfill this need for both synchronous and asynchronous pre-processing.
     *
     * The interceptors are service factories that are registered with the `$httpProvider` by
     * adding them to the `$httpProvider.interceptors` array. The factory is called and
     * injected with dependencies (if specified) and returns the interceptor.
     *
     * There are two kinds of interceptors (and two kinds of rejection interceptors):
     *
     *   * `request`: interceptors get called with a http `config` object. The function is free to
     *     modify the `config` object or create a new one. The function needs to return the `config`
     *     object directly, or a promise containing the `config` or a new `config` object.
     *   * `requestError`: interceptor gets called when a previous interceptor threw an error or
     *     resolved with a rejection.
     *   * `response`: interceptors get called with http `response` object. The function is free to
     *     modify the `response` object or create a new one. The function needs to return the `response`
     *     object directly, or as a promise containing the `response` or a new `response` object.
     *   * `responseError`: interceptor gets called when a previous interceptor threw an error or
     *     resolved with a rejection.
     *
     *
     * ```js
     *   // register the interceptor as a service
     *   $provide.factory('myHttpInterceptor', function($q, dependency1, dependency2) {
     *     return {
     *       // optional method
     *       'request': function(config) {
     *         // do something on success
     *         return config;
     *       },
     *
     *       // optional method
     *      'requestError': function(rejection) {
     *         // do something on error
     *         if (canRecover(rejection)) {
     *           return responseOrNewPromise
     *         }
     *         return $q.reject(rejection);
     *       },
     *
     *
     *
     *       // optional method
     *       'response': function(response) {
     *         // do something on success
     *         return response;
     *       },
     *
     *       // optional method
     *      'responseError': function(rejection) {
     *         // do something on error
     *         if (canRecover(rejection)) {
     *           return responseOrNewPromise
     *         }
     *         return $q.reject(rejection);
     *       }
     *     };
     *   });
     *
     *   $httpProvider.interceptors.push('myHttpInterceptor');
     *
     *
     *   // alternatively, register the interceptor via an anonymous factory
     *   $httpProvider.interceptors.push(function($q, dependency1, dependency2) {
     *     return {
     *      'request': function(config) {
     *          // same as above
     *       },
     *
     *       'response': function(response) {
     *          // same as above
     *       }
     *     };
     *   });
     * ```
     *
     * ## Security Considerations
     *
     * When designing web applications, consider security threats from:
     *
     * - [JSON vulnerability](http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx)
     * - [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)
     *
     * Both server and the client must cooperate in order to eliminate these threats. Angular comes
     * pre-configured with strategies that address these issues, but for this to work backend server
     * cooperation is required.
     *
     * ### JSON Vulnerability Protection
     *
     * A [JSON vulnerability](http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx)
     * allows third party website to turn your JSON resource URL into
     * [JSONP](http://en.wikipedia.org/wiki/JSONP) request under some conditions. To
     * counter this your server can prefix all JSON requests with following string `")]}',\n"`.
     * Angular will automatically strip the prefix before processing it as JSON.
     *
     * For example if your server needs to return:
     * ```js
     * ['one','two']
     * ```
     *
     * which is vulnerable to attack, your server can return:
     * ```js
     * )]}',
     * ['one','two']
     * ```
     *
     * Angular will strip the prefix, before processing the JSON.
     *
     *
     * ### Cross Site Request Forgery (XSRF) Protection
     *
     * [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery) is a technique by which
     * an unauthorized site can gain your user's private data. Angular provides a mechanism
     * to counter XSRF. When performing XHR requests, the $http service reads a token from a cookie
     * (by default, `XSRF-TOKEN`) and sets it as an HTTP header (`X-XSRF-TOKEN`). Since only
     * JavaScript that runs on your domain could read the cookie, your server can be assured that
     * the XHR came from JavaScript running on your domain. The header will not be set for
     * cross-domain requests.
     *
     * To take advantage of this, your server needs to set a token in a JavaScript readable session
     * cookie called `XSRF-TOKEN` on the first HTTP GET request. On subsequent XHR requests the
     * server can verify that the cookie matches `X-XSRF-TOKEN` HTTP header, and therefore be sure
     * that only JavaScript running on your domain could have sent the request. The token must be
     * unique for each user and must be verifiable by the server (to prevent the JavaScript from
     * making up its own tokens). We recommend that the token is a digest of your site's
     * authentication cookie with a [salt](https://en.wikipedia.org/wiki/Salt_(cryptography&#41;)
     * for added security.
     *
     * The name of the headers can be specified using the xsrfHeaderName and xsrfCookieName
     * properties of either $httpProvider.defaults at config-time, $http.defaults at run-time,
     * or the per-request config object.
     *
     * In order to prevent collisions in environments where multiple Angular apps share the
     * same domain or subdomain, we recommend that each application uses unique cookie name.
     *
     * @param {object} config Object describing the request to be made and how it should be
     *    processed. The object has following properties:
     *
     *    - **method** – `{string}` – HTTP method (e.g. 'GET', 'POST', etc)
     *    - **url** – `{string}` – Absolute or relative URL of the resource that is being requested.
     *    - **params** – `{Object.<string|Object>}` – Map of strings or objects which will be serialized
     *      with the `paramSerializer` and appended as GET parameters.
     *    - **data** – `{string|Object}` – Data to be sent as the request message data.
     *    - **headers** – `{Object}` – Map of strings or functions which return strings representing
     *      HTTP headers to send to the server. If the return value of a function is null, the
     *      header will not be sent. Functions accept a config object as an argument.
     *    - **xsrfHeaderName** – `{string}` – Name of HTTP header to populate with the XSRF token.
     *    - **xsrfCookieName** – `{string}` – Name of cookie containing the XSRF token.
     *    - **transformRequest** –
     *      `{function(data, headersGetter)|Array.<function(data, headersGetter)>}` –
     *      transform function or an array of such functions. The transform function takes the http
     *      request body and headers and returns its transformed (typically serialized) version.
     *      See {@link ng.$http#overriding-the-default-transformations-per-request
     *      Overriding the Default Transformations}
     *    - **transformResponse** –
     *      `{function(data, headersGetter, status)|Array.<function(data, headersGetter, status)>}` –
     *      transform function or an array of such functions. The transform function takes the http
     *      response body, headers and status and returns its transformed (typically deserialized) version.
     *      See {@link ng.$http#overriding-the-default-transformations-per-request
     *      Overriding the Default TransformationjqLiks}
     *    - **paramSerializer** - `{string|function(Object<string,string>):string}` - A function used to
     *      prepare the string representation of request parameters (specified as an object).
     *      If specified as string, it is interpreted as function registered with the
     *      {@link $injector $injector}, which means you can create your own serializer
     *      by registering it as a {@link auto.$provide#service service}.
     *      The default serializer is the {@link $httpParamSerializer $httpParamSerializer};
     *      alternatively, you can use the {@link $httpParamSerializerJQLike $httpParamSerializerJQLike}
     *    - **cache** – `{boolean|Cache}` – If true, a default $http cache will be used to cache the
     *      GET request, otherwise if a cache instance built with
     *      {@link ng.$cacheFactory $cacheFactory}, this cache will be used for
     *      caching.
     *    - **timeout** – `{number|Promise}` – timeout in milliseconds, or {@link ng.$q promise}
     *      that should abort the request when resolved.
     *    - **withCredentials** - `{boolean}` - whether to set the `withCredentials` flag on the
     *      XHR object. See [requests with credentials](https://developer.mozilla.org/docs/Web/HTTP/Access_control_CORS#Requests_with_credentials)
     *      for more information.
     *    - **responseType** - `{string}` - see
     *      [XMLHttpRequest.responseType](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest#xmlhttprequest-responsetype).
     *
     * @returns {HttpPromise} Returns a {@link ng.$q `Promise}` that will be resolved to a response object
     *                        when the request succeeds or fails.
     *
     *
     * @property {Array.<Object>} pendingRequests Array of config objects for currently pending
     *   requests. This is primarily meant to be used for debugging purposes.
     *
     *
     * @example
<example module="httpExample">
<file name="index.html">
  <div ng-controller="FetchController">
    <select ng-model="method" aria-label="Request method">
      <option>GET</option>
      <option>JSONP</option>
    </select>
    <input type="text" ng-model="url" size="80" aria-label="URL" />
    <button id="fetchbtn" ng-click="fetch()">fetch</button><br>
    <button id="samplegetbtn" ng-click="updateModel('GET', 'http-hello.html')">Sample GET</button>
    <button id="samplejsonpbtn"
      ng-click="updateModel('JSONP',
                    'https://angularjs.org/greet.php?callback=JSON_CALLBACK&name=Super%20Hero')">
      Sample JSONP
    </button>
    <button id="invalidjsonpbtn"
      ng-click="updateModel('JSONP', 'https://angularjs.org/doesntexist&callback=JSON_CALLBACK')">
        Invalid JSONP
      </button>
    <pre>http status code: {{status}}</pre>
    <pre>http response data: {{data}}</pre>
  </div>
</file>
<file name="script.js">
  angular.module('httpExample', [])
    .controller('FetchController', ['$scope', '$http', '$templateCache',
      function($scope, $http, $templateCache) {
        $scope.method = 'GET';
        $scope.url = 'http-hello.html';

        $scope.fetch = function() {
          $scope.code = null;
          $scope.response = null;

          $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
            then(function(response) {
              $scope.status = response.status;
              $scope.data = response.data;
            }, function(response) {
              $scope.data = response.data || "Request failed";
              $scope.status = response.status;
          });
        };

        $scope.updateModel = function(method, url) {
          $scope.method = method;
          $scope.url = url;
        };
      }]);
</file>
<file name="http-hello.html">
  Hello, $http!
</file>
<file name="protractor.js" type="protractor">
  var status = element(by.binding('status'));
  var data = element(by.binding('data'));
  var fetchBtn = element(by.id('fetchbtn'));
  var sampleGetBtn = element(by.id('samplegetbtn'));
  var sampleJsonpBtn = element(by.id('samplejsonpbtn'));
  var invalidJsonpBtn = element(by.id('invalidjsonpbtn'));

  it('should make an xhr GET request', function() {
    sampleGetBtn.click();
    fetchBtn.click();
    expect(status.getText()).toMatch('200');
    expect(data.getText()).toMatch(/Hello, \$http!/);
  });

// Commented out due to flakes. See https://github.com/angular/angular.js/issues/9185
// it('should make a JSONP request to angularjs.org', function() {
//   sampleJsonpBtn.click();
//   fetchBtn.click();
//   expect(status.getText()).toMatch('200');
//   expect(data.getText()).toMatch(/Super Hero!/);
// });

  it('should make JSONP request to invalid URL and invoke the error handler',
      function() {
    invalidJsonpBtn.click();
    fetchBtn.click();
    expect(status.getText()).toMatch('0');
    expect(data.getText()).toMatch('Request failed');
  });
</file>
</example>
     */
function o(b){function g(a){
// make a copy since the response must be cacheable
var b=l({},a);return a.data?b.data=xb(a.data,a.headers,a.status,j.transformResponse):b.data=a.data,yb(a.status)?b:m.reject(b)}function h(a,b){var c,d={};return f(a,function(a,e){A(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a}),d}function i(b){var c,d,e,f=a.headers,g=l({},b.headers);f=l({},f.common,f[rd(b.method)]);
// using for-in instead of forEach to avoid unecessary iteration after header has been found
a:for(c in f){d=rd(c);for(e in g)if(rd(e)===d)continue a;g[c]=f[c]}
// execute if header value is a function for merged headers
return h(g,P(b))}if(!Gd.isObject(b))throw d("$http")("badreq","Http request configuration must be an object.  Received: {0}",b);var j=l({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);j.headers=i(b),j.method=td(j.method),j.paramSerializer=x(j.paramSerializer)?n.get(j.paramSerializer):j.paramSerializer;var k=function(b){var d=b.headers,e=xb(b.data,wb(d),c,b.transformRequest);
// send request
// strip content-type if data is undefined
return t(e)&&f(d,function(a,b){"content-type"===rd(b)&&delete d[b]}),t(b.withCredentials)&&!t(a.withCredentials)&&(b.withCredentials=a.withCredentials),r(b,e).then(g,g)},o=[k,c],p=m.when(j);for(
// apply interceptors
f(y,function(a){(a.request||a.requestError)&&o.unshift(a.request,a.requestError),(a.response||a.responseError)&&o.push(a.response,a.responseError)});o.length;){var q=o.shift(),s=o.shift();p=p.then(q,s)}return e?(p.success=function(a){return ma(a,"fn"),p.then(function(b){a(b.data,b.status,b.headers,j)}),p},p.error=function(a){return ma(a,"fn"),p.then(null,function(b){a(b.data,b.status,b.headers,j)}),p}):(p.success=Me("success"),p.error=Me("error")),p}function p(a){f(arguments,function(a){o[a]=function(b,c){return o(l({},c||{},{method:a,url:b}))}})}function q(a){f(arguments,function(a){o[a]=function(b,c,d){return o(l({},d||{},{method:a,url:b,data:c}))}})}/**
     * Makes the request.
     *
     * !!! ACCESSES CLOSURE VARS:
     * $httpBackend, defaults, $log, $rootScope, defaultCache, $http.pendingRequests
     */
function r(d,e){/**
       * Callback registered to $httpBackend():
       *  - caches the response if desired
       *  - resolves the raw $http promise
       *  - calls $apply
       */
function f(a,c,d,e){function f(){g(c,a,d,e)}n&&(yb(a)?n.put(y,[a,c,vb(d),e]):
// remove promise from the cache
n.remove(y)),b?k.$applyAsync(f):(f(),k.$$phase||k.$apply())}/**
       * Resolves the raw $http promise.
       */
function g(a,b,c,e){
//status: HTTP response status code, 0, -1 (aborted by timeout / promise)
b=b>=-1?b:0,(yb(b)?q.resolve:q.reject)({data:a,status:b,headers:wb(c),config:d,statusText:e})}function j(a){g(a.data,a.status,P(a.headers()),a.statusText)}function l(){var a=o.pendingRequests.indexOf(d);-1!==a&&o.pendingRequests.splice(a,1)}var n,p,q=m.defer(),r=q.promise,x=d.headers,y=s(d.url,d.paramSerializer(d.params));
// if we won't have the response in cache, set the xsrf headers and
// send the request to the backend
if(o.pendingRequests.push(d),r.then(l,l),!d.cache&&!a.cache||d.cache===!1||"GET"!==d.method&&"JSONP"!==d.method||(n=v(d.cache)?d.cache:v(a.cache)?a.cache:w),n&&(p=n.get(y),u(p)?I(p)?
// cached request has already been sent, but there is no response yet
p.then(j,j):
// serving from cache
Jd(p)?g(p[1],p[0],P(p[2]),p[3]):g(p,200,{},"OK"):
// put the promise for the non-transformed response into cache as a placeholder
n.put(y,r)),t(p)){var z=yc(d.url)?i()[d.xsrfCookieName||a.xsrfCookieName]:c;z&&(x[d.xsrfHeaderName||a.xsrfHeaderName]=z),h(d.method,y,e,f,x,d.timeout,d.withCredentials,d.responseType)}return r}function s(a,b){return b.length>0&&(a+=(-1==a.indexOf("?")?"?":"&")+b),a}var w=j("$http");/**
     * Make sure that default param serializer is exposed as a function
     */
a.paramSerializer=x(a.paramSerializer)?n.get(a.paramSerializer):a.paramSerializer;/**
     * Interceptors stored in reverse order. Inner interceptors before outer interceptors.
     * The reversal is needed so that we can build up the interception chain around the
     * server request.
     */
var y=[];/**
     * @ngdoc method
     * @name $http#get
     *
     * @description
     * Shortcut method to perform `GET` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */
/**
     * @ngdoc method
     * @name $http#delete
     *
     * @description
     * Shortcut method to perform `DELETE` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */
/**
     * @ngdoc method
     * @name $http#head
     *
     * @description
     * Shortcut method to perform `HEAD` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */
/**
     * @ngdoc method
     * @name $http#jsonp
     *
     * @description
     * Shortcut method to perform `JSONP` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request.
     *                     The name of the callback should be the string `JSON_CALLBACK`.
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */
/**
     * @ngdoc method
     * @name $http#post
     *
     * @description
     * Shortcut method to perform `POST` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {*} data Request content
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */
/**
     * @ngdoc method
     * @name $http#put
     *
     * @description
     * Shortcut method to perform `PUT` request.
     *
     * @param {string} url Relative or absolute URL specifying the destination of the request
     * @param {*} data Request content
     * @param {Object=} config Optional configuration object
     * @returns {HttpPromise} Future object
     */
/**
      * @ngdoc method
      * @name $http#patch
      *
      * @description
      * Shortcut method to perform `PATCH` request.
      *
      * @param {string} url Relative or absolute URL specifying the destination of the request
      * @param {*} data Request content
      * @param {Object=} config Optional configuration object
      * @returns {HttpPromise} Future object
      */
/**
         * @ngdoc property
         * @name $http#defaults
         *
         * @description
         * Runtime equivalent of the `$httpProvider.defaults` property. Allows configuration of
         * default headers, withCredentials as well as request and response transformations.
         *
         * See "Setting HTTP Headers" and "Transforming Requests and Responses" sections above.
         */
return f(g,function(a){y.unshift(x(a)?n.get(a):n.invoke(a))}),o.pendingRequests=[],p("get","delete","head","jsonp"),q("post","put","patch"),o.defaults=a,o}]}function Ab(){return new a.XMLHttpRequest}/**
 * @ngdoc service
 * @name $httpBackend
 * @requires $window
 * @requires $document
 *
 * @description
 * HTTP backend used by the {@link ng.$http service} that delegates to
 * XMLHttpRequest object or JSONP and deals with browser incompatibilities.
 *
 * You should never need to use this service directly, instead use the higher-level abstractions:
 * {@link ng.$http $http} or {@link ngResource.$resource $resource}.
 *
 * During testing this implementation is swapped with {@link ngMock.$httpBackend mock
 * $httpBackend} which can be trained with responses.
 */
function Bb(){this.$get=["$browser","$window","$document",function(a,b,c){return Cb(a,Ab,a.defer,b.angular.callbacks,c[0])}]}function Cb(a,b,c,d,e){function g(a,b,c){
// we can't use jQuery/jqLite here because jQuery does crazy stuff with script elements, e.g.:
// - fetches local scripts via XHR and evals them
// - adds and immediately removes script elements from the document
var f=e.createElement("script"),g=null;return f.type="text/javascript",f.src=a,f.async=!0,g=function(a){ae(f,"load",g),ae(f,"error",g),e.body.removeChild(f),f=null;var h=-1,i="unknown";a&&("load"!==a.type||d[b].called||(a={type:"error"}),i=a.type,h="error"===a.type?404:200),c&&c(h,i)},_d(f,"load",g),_d(f,"error",g),e.body.appendChild(f),g}
// TODO(vojta): fix the signature
return function(e,h,i,j,k,l,m,n){function o(){s&&s(),v&&v.abort()}function q(b,d,e,f,g){
// cancel timeout and subsequent timeout promise resolution
u(y)&&c.cancel(y),s=v=null,b(d,e,f,g),a.$$completeOutstandingRequest(p)}if(a.$$incOutstandingRequestCount(),h=h||a.url(),"jsonp"==rd(e)){var r="_"+(d.counter++).toString(36);d[r]=function(a){d[r].data=a,d[r].called=!0};var s=g(h.replace("JSON_CALLBACK","angular.callbacks."+r),r,function(a,b){q(j,a,d[r].data,"",b),d[r]=p})}else{var v=b();v.open(e,h,!0),f(k,function(a,b){u(a)&&v.setRequestHeader(b,a)}),v.onload=function(){var a=v.statusText||"",b="response"in v?v.response:v.responseText,c=1223===v.status?204:v.status;
// fix status code when it is 0 (0 status is undocumented).
// Occurs when accessing file resources or on Android 4.1 stock browser
// while retrieving files from application cache.
0===c&&(c=b?200:"file"==xc(h).protocol?404:0),q(j,c,b,v.getAllResponseHeaders(),a)};var w=function(){
// The response is always empty
// See https://xhr.spec.whatwg.org/#request-error-steps and https://fetch.spec.whatwg.org/#concept-network-error
q(j,-1,null,null,"")};if(v.onerror=w,v.onabort=w,m&&(v.withCredentials=!0),n)try{v.responseType=n}catch(x){
// WebKit added support for the json responseType value on 09/03/2013
// https://bugs.webkit.org/show_bug.cgi?id=73648. Versions of Safari prior to 7 are
// known to throw when setting the value "json" as the response type. Other older
// browsers implementing the responseType
//
// The json response type can be ignored if not supported, because JSON payloads are
// parsed on the client-side regardless.
if("json"!==n)throw x}v.send(t(i)?null:i)}if(l>0)var y=c(o,l);else I(l)&&l.then(o)}}/**
 * @ngdoc provider
 * @name $interpolateProvider
 *
 * @description
 *
 * Used for configuring the interpolation markup. Defaults to `{{` and `}}`.
 *
 * @example
<example module="customInterpolationApp">
<file name="index.html">
<script>
  var customInterpolationApp = angular.module('customInterpolationApp', []);

  customInterpolationApp.config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('//');
    $interpolateProvider.endSymbol('//');
  });


  customInterpolationApp.controller('DemoController', function() {
      this.label = "This binding is brought you by // interpolation symbols.";
  });
</script>
<div ng-app="App" ng-controller="DemoController as demo">
    //demo.label//
</div>
</file>
<file name="protractor.js" type="protractor">
  it('should interpolate binding with custom symbols', function() {
    expect(element(by.binding('demo.label')).getText()).toBe('This binding is brought you by // interpolation symbols.');
  });
</file>
</example>
 */
function Db(){var a="{{",b="}}";/**
   * @ngdoc method
   * @name $interpolateProvider#startSymbol
   * @description
   * Symbol to denote start of expression in the interpolated string. Defaults to `{{`.
   *
   * @param {string=} value new value to set the starting symbol to.
   * @returns {string|self} Returns the symbol when used as getter and self if used as setter.
   */
this.startSymbol=function(b){return b?(a=b,this):a},/**
   * @ngdoc method
   * @name $interpolateProvider#endSymbol
   * @description
   * Symbol to denote the end of expression in the interpolated string. Defaults to `}}`.
   *
   * @param {string=} value new value to set the ending symbol to.
   * @returns {string|self} Returns the symbol when used as getter and self if used as setter.
   */
this.endSymbol=function(a){return a?(b=a,this):b},this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(m,a).replace(n,b)}function h(a){if(null==a)// null || undefined
return"";switch(typeof a){case"string":break;case"number":a=""+a;break;default:a=V(a)}return a}/**
     * @ngdoc service
     * @name $interpolate
     * @kind function
     *
     * @requires $parse
     * @requires $sce
     *
     * @description
     *
     * Compiles a string with markup into an interpolation function. This service is used by the
     * HTML {@link ng.$compile $compile} service for data binding. See
     * {@link ng.$interpolateProvider $interpolateProvider} for configuring the
     * interpolation markup.
     *
     *
     * ```js
     *   var $interpolate = ...; // injected
     *   var exp = $interpolate('Hello {{name | uppercase}}!');
     *   expect(exp({name:'Angular'})).toEqual('Hello ANGULAR!');
     * ```
     *
     * `$interpolate` takes an optional fourth argument, `allOrNothing`. If `allOrNothing` is
     * `true`, the interpolation function will return `undefined` unless all embedded expressions
     * evaluate to a value other than `undefined`.
     *
     * ```js
     *   var $interpolate = ...; // injected
     *   var context = {greeting: 'Hello', name: undefined };
     *
     *   // default "forgiving" mode
     *   var exp = $interpolate('{{greeting}} {{name}}!');
     *   expect(exp(context)).toEqual('Hello !');
     *
     *   // "allOrNothing" mode
     *   exp = $interpolate('{{greeting}} {{name}}!', false, null, true);
     *   expect(exp(context)).toBeUndefined();
     *   context.name = 'Angular';
     *   expect(exp(context)).toEqual('Hello Angular!');
     * ```
     *
     * `allOrNothing` is useful for interpolating URLs. `ngSrc` and `ngSrcset` use this behavior.
     *
     * ####Escaped Interpolation
     * $interpolate provides a mechanism for escaping interpolation markers. Start and end markers
     * can be escaped by preceding each of their characters with a REVERSE SOLIDUS U+005C (backslash).
     * It will be rendered as a regular start/end marker, and will not be interpreted as an expression
     * or binding.
     *
     * This enables web-servers to prevent script injection attacks and defacing attacks, to some
     * degree, while also enabling code examples to work without relying on the
     * {@link ng.directive:ngNonBindable ngNonBindable} directive.
     *
     * **For security purposes, it is strongly encouraged that web servers escape user-supplied data,
     * replacing angle brackets (&lt;, &gt;) with &amp;lt; and &amp;gt; respectively, and replacing all
     * interpolation start/end markers with their escaped counterparts.**
     *
     * Escaped interpolation markers are only replaced with the actual interpolation markers in rendered
     * output when the $interpolate service processes the text. So, for HTML elements interpolated
     * by {@link ng.$compile $compile}, or otherwise interpolated with the `mustHaveExpression` parameter
     * set to `true`, the interpolated text must contain an unescaped interpolation expression. As such,
     * this is typically useful only when user-data is used in rendering a template from the server, or
     * when otherwise untrusted data is used by a directive.
     *
     * <example>
     *  <file name="index.html">
     *    <div ng-init="username='A user'">
     *      <p ng-init="apptitle='Escaping demo'">{{apptitle}}: \{\{ username = "defaced value"; \}\}
     *        </p>
     *      <p><strong>{{username}}</strong> attempts to inject code which will deface the
     *        application, but fails to accomplish their task, because the server has correctly
     *        escaped the interpolation start/end markers with REVERSE SOLIDUS U+005C (backslash)
     *        characters.</p>
     *      <p>Instead, the result of the attempted script injection is visible, and can be removed
     *        from the database by an administrator.</p>
     *    </div>
     *  </file>
     * </example>
     *
     * @param {string} text The text with markup to interpolate.
     * @param {boolean=} mustHaveExpression if set to true then the interpolation string must have
     *    embedded expression in order to return an interpolation function. Strings with no
     *    embedded expression will return null for the interpolation function.
     * @param {string=} trustedContext when provided, the returned function passes the interpolated
     *    result through {@link ng.$sce#getTrusted $sce.getTrusted(interpolatedResult,
     *    trustedContext)} before returning it.  Refer to the {@link ng.$sce $sce} service that
     *    provides Strict Contextual Escaping for details.
     * @param {boolean=} allOrNothing if `true`, then the returned function returns undefined
     *    unless all embedded expressions evaluate to a value other than `undefined`.
     * @returns {function(context)} an interpolation function which is used to compute the
     *    interpolated string. The function has these parameters:
     *
     * - `context`: evaluation context for all expressions embedded in the interpolated text
     */
function i(f,i,m,n){function o(a){try{return a=C(a),n&&!u(a)?a:h(a)}catch(b){d(Ne.interr(f,b))}}n=!!n;for(var p,q,r,s=0,v=[],w=[],x=f.length,y=[],z=[];x>s;){if(-1==(p=f.indexOf(a,s))||-1==(q=f.indexOf(b,p+j))){
// we did not find an interpolation, so we have to add the remainder to the separators array
s!==x&&y.push(g(f.substring(s)));break}s!==p&&y.push(g(f.substring(s,p))),r=f.substring(p+j,q),v.push(r),w.push(c(r,o)),s=q+k,z.push(y.length),y.push("")}if(
// Concatenating expressions makes it hard to reason about whether some combination of
// concatenated values are unsafe to use and could easily lead to XSS.  By requiring that a
// single expression be used for iframe[src], object[src], etc., we ensure that the value
// that's used is assigned or constructed by some JS code somewhere that is more testable or
// make it obvious that you bound the value to some user controlled value.  This helps reduce
// the load when auditing for XSS issues.
m&&y.length>1&&Ne.throwNoconcat(f),!i||v.length){var B=function(a){for(var b=0,c=v.length;c>b;b++){if(n&&t(a[b]))return;y[z[b]]=a[b]}return y.join("")},C=function(a){return m?e.getTrusted(m,a):e.valueOf(a)};return l(function(a){var b=0,c=v.length,e=new Array(c);try{for(;c>b;b++)e[b]=w[b](a);return B(e)}catch(g){d(Ne.interr(f,g))}},{
// all of these properties are undocumented for now
exp:f,//just for compatibility with regular watchers created via $watch
expressions:v,$$watchDelegate:function(a,b){var c;return a.$watchGroup(w,function(d,e){var f=B(d);A(b)&&b.call(this,f,d!==e?c:f,a),c=f})}})}}var j=a.length,k=b.length,m=new RegExp(a.replace(/./g,f),"g"),n=new RegExp(b.replace(/./g,f),"g");/**
     * @ngdoc method
     * @name $interpolate#startSymbol
     * @description
     * Symbol to denote the start of expression in the interpolated string. Defaults to `{{`.
     *
     * Use {@link ng.$interpolateProvider#startSymbol `$interpolateProvider.startSymbol`} to change
     * the symbol.
     *
     * @returns {string} start symbol.
     */
/**
     * @ngdoc method
     * @name $interpolate#endSymbol
     * @description
     * Symbol to denote the end of expression in the interpolated string. Defaults to `}}`.
     *
     * Use {@link ng.$interpolateProvider#endSymbol `$interpolateProvider.endSymbol`} to change
     * the symbol.
     *
     * @returns {string} end symbol.
     */
return i.startSymbol=function(){return a},i.endSymbol=function(){return b},i}]}function Eb(){this.$get=["$rootScope","$window","$q","$$q",function(a,b,c,d){/**
      * @ngdoc service
      * @name $interval
      *
      * @description
      * Angular's wrapper for `window.setInterval`. The `fn` function is executed every `delay`
      * milliseconds.
      *
      * The return value of registering an interval function is a promise. This promise will be
      * notified upon each tick of the interval, and will be resolved after `count` iterations, or
      * run indefinitely if `count` is not defined. The value of the notification will be the
      * number of iterations that have run.
      * To cancel an interval, call `$interval.cancel(promise)`.
      *
      * In tests you can use {@link ngMock.$interval#flush `$interval.flush(millis)`} to
      * move forward by `millis` milliseconds and trigger any functions scheduled to run in that
      * time.
      *
      * <div class="alert alert-warning">
      * **Note**: Intervals created by this service must be explicitly destroyed when you are finished
      * with them.  In particular they are not automatically destroyed when a controller's scope or a
      * directive's element are destroyed.
      * You should take this into consideration and make sure to always cancel the interval at the
      * appropriate moment.  See the example below for more details on how and when to do this.
      * </div>
      *
      * @param {function()} fn A function that should be called repeatedly.
      * @param {number} delay Number of milliseconds between each function call.
      * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat
      *   indefinitely.
      * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
      *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
      * @param {...*=} Pass additional parameters to the executed function.
      * @returns {promise} A promise which will be notified on each iteration.
      *
      * @example
      * <example module="intervalExample">
      * <file name="index.html">
      *   <script>
      *     angular.module('intervalExample', [])
      *       .controller('ExampleController', ['$scope', '$interval',
      *         function($scope, $interval) {
      *           $scope.format = 'M/d/yy h:mm:ss a';
      *           $scope.blood_1 = 100;
      *           $scope.blood_2 = 120;
      *
      *           var stop;
      *           $scope.fight = function() {
      *             // Don't start a new fight if we are already fighting
      *             if ( angular.isDefined(stop) ) return;
      *
      *             stop = $interval(function() {
      *               if ($scope.blood_1 > 0 && $scope.blood_2 > 0) {
      *                 $scope.blood_1 = $scope.blood_1 - 3;
      *                 $scope.blood_2 = $scope.blood_2 - 4;
      *               } else {
      *                 $scope.stopFight();
      *               }
      *             }, 100);
      *           };
      *
      *           $scope.stopFight = function() {
      *             if (angular.isDefined(stop)) {
      *               $interval.cancel(stop);
      *               stop = undefined;
      *             }
      *           };
      *
      *           $scope.resetFight = function() {
      *             $scope.blood_1 = 100;
      *             $scope.blood_2 = 120;
      *           };
      *
      *           $scope.$on('$destroy', function() {
      *             // Make sure that the interval is destroyed too
      *             $scope.stopFight();
      *           });
      *         }])
      *       // Register the 'myCurrentTime' directive factory method.
      *       // We inject $interval and dateFilter service since the factory method is DI.
      *       .directive('myCurrentTime', ['$interval', 'dateFilter',
      *         function($interval, dateFilter) {
      *           // return the directive link function. (compile function not needed)
      *           return function(scope, element, attrs) {
      *             var format,  // date format
      *                 stopTime; // so that we can cancel the time updates
      *
      *             // used to update the UI
      *             function updateTime() {
      *               element.text(dateFilter(new Date(), format));
      *             }
      *
      *             // watch the expression, and update the UI on change.
      *             scope.$watch(attrs.myCurrentTime, function(value) {
      *               format = value;
      *               updateTime();
      *             });
      *
      *             stopTime = $interval(updateTime, 1000);
      *
      *             // listen on DOM destroy (removal) event, and cancel the next UI update
      *             // to prevent updating time after the DOM element was removed.
      *             element.on('$destroy', function() {
      *               $interval.cancel(stopTime);
      *             });
      *           }
      *         }]);
      *   </script>
      *
      *   <div>
      *     <div ng-controller="ExampleController">
      *       <label>Date format: <input ng-model="format"></label> <hr/>
      *       Current time is: <span my-current-time="format"></span>
      *       <hr/>
      *       Blood 1 : <font color='red'>{{blood_1}}</font>
      *       Blood 2 : <font color='red'>{{blood_2}}</font>
      *       <button type="button" data-ng-click="fight()">Fight</button>
      *       <button type="button" data-ng-click="stopFight()">StopFight</button>
      *       <button type="button" data-ng-click="resetFight()">resetFight</button>
      *     </div>
      *   </div>
      *
      * </file>
      * </example>
      */
function e(e,g,h,i){var j=arguments.length>4,k=j?S(arguments,4):[],l=b.setInterval,m=b.clearInterval,n=0,o=u(i)&&!i,p=(o?d:c).defer(),q=p.promise;return h=u(h)?h:0,q.then(null,null,j?function(){e.apply(null,k)}:e),q.$$intervalId=l(function(){p.notify(n++),h>0&&n>=h&&(p.resolve(n),m(q.$$intervalId),delete f[q.$$intervalId]),o||a.$apply()},g),f[q.$$intervalId]=p,q}var f={};/**
      * @ngdoc method
      * @name $interval#cancel
      *
      * @description
      * Cancels a task associated with the `promise`.
      *
      * @param {Promise=} promise returned by the `$interval` function.
      * @returns {boolean} Returns `true` if the task was successfully canceled.
      */
return e.cancel=function(a){return a&&a.$$intervalId in f?(f[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete f[a.$$intervalId],!0):!1},e}]}/**
 * Encode path using encodeUriSegment, ignoring forward slashes
 *
 * @param {string} path Path to encode
 * @returns {string}
 */
function Fb(a){for(var b=a.split("/"),c=b.length;c--;)b[c]=ca(b[c]);return b.join("/")}function Gb(a,b){var c=xc(a);b.$$protocol=c.protocol,b.$$host=c.hostname,b.$$port=n(c.port)||Pe[c.protocol]||null}function Hb(a,b){var c="/"!==a.charAt(0);c&&(a="/"+a);var d=xc(a);b.$$path=decodeURIComponent(c&&"/"===d.pathname.charAt(0)?d.pathname.substring(1):d.pathname),b.$$search=aa(d.search),b.$$hash=decodeURIComponent(d.hash),
// make sure path starts with '/';
b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}/**
 *
 * @param {string} begin
 * @param {string} whole
 * @returns {string} returns text from whole after begin or undefined if it does not begin with
 *                   expected string.
 */
function Ib(a,b){return 0===b.indexOf(a)?b.substr(a.length):void 0}function Jb(a){var b=a.indexOf("#");return-1==b?a:a.substr(0,b)}function Kb(a){return a.replace(/(#.+)|#$/,"$1")}function Lb(a){return a.substr(0,Jb(a).lastIndexOf("/")+1)}/* return the server only (scheme://host:port) */
function Mb(a){return a.substring(0,a.indexOf("/",a.indexOf("//")+2))}/**
 * LocationHtml5Url represents an url
 * This object is exposed as $location service when HTML5 mode is enabled and supported
 *
 * @constructor
 * @param {string} appBase application base URL
 * @param {string} appBaseNoFile application base URL stripped of any filename
 * @param {string} basePrefix url path prefix
 */
function Nb(a,b,c){this.$$html5=!0,c=c||"",Gb(a,this),/**
   * Parse given html5 (regular) url string into properties
   * @param {string} url HTML5 url
   * @private
   */
this.$$parse=function(a){var c=Ib(b,a);if(!x(c))throw Qe("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',a,b);Hb(c,this),this.$$path||(this.$$path="/"),this.$$compose()},/**
   * Compose url and update `absUrl` property
   * @private
   */
this.$$compose=function(){var a=ba(this.$$search),c=this.$$hash?"#"+ca(this.$$hash):"";this.$$url=Fb(this.$$path)+(a?"?"+a:"")+c,this.$$absUrl=b+this.$$url.substr(1)},this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])
// special case for links to hash fragments:
// keep the old url and only replace the hash fragment
return this.hash(e.slice(1)),!0;var f,g,h;return u(f=Ib(a,d))?(g=f,h=u(f=Ib(c,f))?b+(Ib("/",f)||f):a+g):u(f=Ib(b,d))?h=b+f:b==d+"/"&&(h=b),h&&this.$$parse(h),!!h}}/**
 * LocationHashbangUrl represents url
 * This object is exposed as $location service when developer doesn't opt into html5 mode.
 * It also serves as the base class for html5 mode fallback on legacy browsers.
 *
 * @constructor
 * @param {string} appBase application base URL
 * @param {string} appBaseNoFile application base URL stripped of any filename
 * @param {string} hashPrefix hashbang prefix
 */
function Ob(a,b,c){Gb(a,this),/**
   * Parse given hashbang url into properties
   * @param {string} url Hashbang url
   * @private
   */
this.$$parse=function(d){/*
     * In Windows, on an anchor node on documents loaded from
     * the filesystem, the browser will return a pathname
     * prefixed with the drive name ('/C:/path') when a
     * pathname without a drive is set:
     *  * a.setAttribute('href', '/foo')
     *   * a.pathname === '/C:/foo' //true
     *
     * Inside of Angular, we're always using pathnames that
     * do not include drive names for routing.
     */
function e(a,b,c){/*
      Matches paths for file protocol on windows,
      such as /C:/foo/bar, and captures only /foo/bar.
      */
var d,e=/^\/[A-Z]:(\/.*)/;
// The input URL intentionally contains a first path segment that ends with a colon.
//Get the relative path from the input URL.
// The input URL intentionally contains a first path segment that ends with a colon.
return 0===b.indexOf(c)&&(b=b.replace(c,"")),e.exec(b)?a:(d=e.exec(a),d?d[1]:a)}var f,g=Ib(a,d)||Ib(b,d);t(g)||"#"!==g.charAt(0)?
// There was no hashbang path nor hash fragment:
// If we are in HTML5 mode we use what is left as the path;
// Otherwise we ignore what is left
this.$$html5?f=g:(f="",t(g)&&(a=d,this.replace())):(
// The rest of the url starts with a hash so we have
// got either a hashbang path or a plain hash fragment
f=Ib(c,g),t(f)&&(
// There was no hashbang prefix so we just have a hash fragment
f=g)),Hb(f,this),this.$$path=e(this.$$path,f,a),this.$$compose()},/**
   * Compose hashbang url and update `absUrl` property
   * @private
   */
this.$$compose=function(){var b=ba(this.$$search),d=this.$$hash?"#"+ca(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+d,this.$$absUrl=a+(this.$$url?c+this.$$url:"")},this.$$parseLinkUrl=function(b,c){return Jb(a)==Jb(b)?(this.$$parse(b),!0):!1}}/**
 * LocationHashbangUrl represents url
 * This object is exposed as $location service when html5 history api is enabled but the browser
 * does not support it.
 *
 * @constructor
 * @param {string} appBase application base URL
 * @param {string} appBaseNoFile application base URL stripped of any filename
 * @param {string} hashPrefix hashbang prefix
 */
function Pb(a,b,c){this.$$html5=!0,Ob.apply(this,arguments),this.$$parseLinkUrl=function(d,e){if(e&&"#"===e[0])
// special case for links to hash fragments:
// keep the old url and only replace the hash fragment
return this.hash(e.slice(1)),!0;var f,g;return a==Jb(d)?f=d:(g=Ib(b,d))?f=a+c+g:b===d+"/"&&(f=b),f&&this.$$parse(f),!!f},this.$$compose=function(){var b=ba(this.$$search),d=this.$$hash?"#"+ca(this.$$hash):"";this.$$url=Fb(this.$$path)+(b?"?"+b:"")+d,
// include hashPrefix in $$absUrl when $$url is empty so IE9 does not reload page because of removal of '#'
this.$$absUrl=a+c+this.$$url}}function Qb(a){return function(){return this[a]}}function Rb(a,b){return function(c){return t(c)?this[a]:(this[a]=b(c),this.$$compose(),this)}}/**
 * @ngdoc service
 * @name $location
 *
 * @requires $rootElement
 *
 * @description
 * The $location service parses the URL in the browser address bar (based on the
 * [window.location](https://developer.mozilla.org/en/window.location)) and makes the URL
 * available to your application. Changes to the URL in the address bar are reflected into
 * $location service and changes to $location are reflected into the browser address bar.
 *
 * **The $location service:**
 *
 * - Exposes the current URL in the browser address bar, so you can
 *   - Watch and observe the URL.
 *   - Change the URL.
 * - Synchronizes the URL with the browser when the user
 *   - Changes the address bar.
 *   - Clicks the back or forward button (or clicks a History link).
 *   - Clicks on a link.
 * - Represents the URL object as a set of methods (protocol, host, port, path, search, hash).
 *
 * For more information see {@link guide/$location Developer Guide: Using $location}
 */
/**
 * @ngdoc provider
 * @name $locationProvider
 * @description
 * Use the `$locationProvider` to configure how the application deep linking paths are stored.
 */
function Sb(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};/**
   * @ngdoc method
   * @name $locationProvider#hashPrefix
   * @description
   * @param {string=} prefix Prefix for hash part (containing path and search)
   * @returns {*} current value if used as getter or itself (chaining) if used as setter
   */
this.hashPrefix=function(b){return u(b)?(a=b,this):a},/**
   * @ngdoc method
   * @name $locationProvider#html5Mode
   * @description
   * @param {(boolean|Object)=} mode If boolean, sets `html5Mode.enabled` to value.
   *   If object, sets `enabled`, `requireBase` and `rewriteLinks` to respective values. Supported
   *   properties:
   *   - **enabled** – `{boolean}` – (default: false) If true, will rely on `history.pushState` to
   *     change urls where supported. Will fall back to hash-prefixed paths in browsers that do not
   *     support `pushState`.
   *   - **requireBase** - `{boolean}` - (default: `true`) When html5Mode is enabled, specifies
   *     whether or not a <base> tag is required to be present. If `enabled` and `requireBase` are
   *     true, and a base tag is not present, an error will be thrown when `$location` is injected.
   *     See the {@link guide/$location $location guide for more information}
   *   - **rewriteLinks** - `{boolean}` - (default: `true`) When html5Mode is enabled,
   *     enables/disables url rewriting for relative links.
   *
   * @returns {Object} html5Mode object if used as getter or itself (chaining) if used as setter
   */
this.html5Mode=function(a){return H(a)?(b.enabled=a,this):v(a)?(H(a.enabled)&&(b.enabled=a.enabled),H(a.requireBase)&&(b.requireBase=a.requireBase),H(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b},/**
   * @ngdoc event
   * @name $location#$locationChangeStart
   * @eventType broadcast on root scope
   * @description
   * Broadcasted before a URL will change.
   *
   * This change can be prevented by calling
   * `preventDefault` method of the event. See {@link ng.$rootScope.Scope#$on} for more
   * details about event object. Upon successful change
   * {@link ng.$location#$locationChangeSuccess $locationChangeSuccess} is fired.
   *
   * The `newState` and `oldState` parameters may be defined only in HTML5 mode and when
   * the browser supports the HTML5 History API.
   *
   * @param {Object} angularEvent Synthetic event object.
   * @param {string} newUrl New URL
   * @param {string=} oldUrl URL that was before it was changed.
   * @param {string=} newState New history state object
   * @param {string=} oldState History state object that was before it was changed.
   */
/**
   * @ngdoc event
   * @name $location#$locationChangeSuccess
   * @eventType broadcast on root scope
   * @description
   * Broadcasted after a URL was changed.
   *
   * The `newState` and `oldState` parameters may be defined only in HTML5 mode and when
   * the browser supports the HTML5 History API.
   *
   * @param {Object} angularEvent Synthetic event object.
   * @param {string} newUrl New URL
   * @param {string=} oldUrl URL that was before it was changed.
   * @param {string=} newState New history state object
   * @param {string=} oldState History state object that was before it was changed.
   */
this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(c,d,e,f,g){function h(a,b,c){var e=j.url(),f=j.$$state;try{d.url(a,b,c),
// Make sure $location.state() returns referentially identical (not just deeply equal)
// state object; this makes possible quick checking if the state changed in the digest
// loop. Checking deep equality would be too expensive.
j.$$state=d.state()}catch(g){
// Restore old values if pushState fails
throw j.url(e),j.$$state=f,g}}function i(a,b){c.$broadcast("$locationChangeSuccess",j.absUrl(),a,j.$$state,b)}var j,k,l,m=d.baseHref(),// if base[href] is undefined, it defaults to ''
n=d.url();if(b.enabled){if(!m&&b.requireBase)throw Qe("nobase","$location in HTML5 mode requires a <base> tag to be present!");l=Mb(n)+(m||"/"),k=e.history?Nb:Pb}else l=Jb(n),k=Ob;var o=Lb(l);j=new k(l,o,"#"+a),j.$$parseLinkUrl(n,n),j.$$state=d.state();var p=/^\s*(javascript|mailto):/i;f.on("click",function(a){
// TODO(vojta): rewrite link when opening in new tab/window (in legacy browser)
// currently we open nice url link and redirect then
if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){
// traverse the DOM up to find first A tag
for(var e=xd(a.target);"a"!==M(e[0]);)
// ignore rewriting if no A tag (reached root element, or no parent - removed from document)
if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),i=e.attr("href")||e.attr("xlink:href");v(h)&&"[object SVGAnimatedString]"===h.toString()&&(
// SVGAnimatedString.animVal should be identical to SVGAnimatedString.baseVal, unless during
// an animation.
h=xc(h.animVal).href),
// Ignore when url is started with javascript: or mailto:
p.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||j.$$parseLinkUrl(h,i)&&(
// We do a preventDefault for all urls that are part of the angular application,
// in html5mode and also without, so that we are able to abort navigation without
// getting double entries in the location history.
a.preventDefault(),
// update location manually
j.absUrl()!=d.url()&&(c.$apply(),
// hack to work around FF6 bug 684208 when scenario runner clicks on links
g.angular["ff-684208-preventDefault"]=!0))}}),
// rewrite hashbang url <> html5 url
Kb(j.absUrl())!=Kb(n)&&d.url(j.absUrl(),!0);var q=!0;
// update $location when $browser url changes
// update browser
return d.onUrlChange(function(a,b){
// If we are navigating outside of the app then force a reload
return t(Ib(o,a))?void(g.location.href=a):(c.$evalAsync(function(){var d,e=j.absUrl(),f=j.$$state;j.$$parse(a),j.$$state=b,d=c.$broadcast("$locationChangeStart",a,e,b,f).defaultPrevented,
// if the location was changed by a `$locationChangeStart` handler then stop
// processing this location change
j.absUrl()===a&&(d?(j.$$parse(e),j.$$state=f,h(e,!1,f)):(q=!1,i(e,f)))}),void(c.$$phase||c.$digest()))}),c.$watch(function(){var a=Kb(d.url()),b=Kb(j.absUrl()),f=d.state(),g=j.$$replace,k=a!==b||j.$$html5&&e.history&&f!==j.$$state;(q||k)&&(q=!1,c.$evalAsync(function(){var b=j.absUrl(),d=c.$broadcast("$locationChangeStart",b,a,j.$$state,f).defaultPrevented;
// if the location was changed by a `$locationChangeStart` handler then stop
// processing this location change
j.absUrl()===b&&(d?(j.$$parse(a),j.$$state=f):(k&&h(b,g,f===j.$$state?null:j.$$state),i(a,f)))})),j.$$replace=!1}),j}]}/**
 * @ngdoc service
 * @name $log
 * @requires $window
 *
 * @description
 * Simple service for logging. Default implementation safely writes the message
 * into the browser's console (if present).
 *
 * The main purpose of this service is to simplify debugging and troubleshooting.
 *
 * The default is to log `debug` messages. You can use
 * {@link ng.$logProvider ng.$logProvider#debugEnabled} to change this.
 *
 * @example
   <example module="logExample">
     <file name="script.js">
       angular.module('logExample', [])
         .controller('LogController', ['$scope', '$log', function($scope, $log) {
           $scope.$log = $log;
           $scope.message = 'Hello World!';
         }]);
     </file>
     <file name="index.html">
       <div ng-controller="LogController">
         <p>Reload this page with open console, enter text and hit the log button...</p>
         <label>Message:
         <input type="text" ng-model="message" /></label>
         <button ng-click="$log.log(message)">log</button>
         <button ng-click="$log.warn(message)">warn</button>
         <button ng-click="$log.info(message)">info</button>
         <button ng-click="$log.error(message)">error</button>
         <button ng-click="$log.debug(message)">debug</button>
       </div>
     </file>
   </example>
 */
/**
 * @ngdoc provider
 * @name $logProvider
 * @description
 * Use the `$logProvider` to configure how the application logs messages
 */
function Tb(){var a=!0,b=this;/**
   * @ngdoc method
   * @name $logProvider#debugEnabled
   * @description
   * @param {boolean=} flag enable or disable debug level messages
   * @returns {*} current value if used as getter or itself (chaining) if used as setter
   */
this.debugEnabled=function(b){return u(b)?(a=b,this):a},this.$get=["$window",function(c){function d(a){return a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line)),a}function e(a){var b=c.console||{},e=b[a]||b.log||p,g=!1;
// Note: reading logFn.apply throws an error in IE11 in IE8 document mode.
// The reason behind this is that console.log has type "object" in IE8...
try{g=!!e.apply}catch(h){}return g?function(){var a=[];return f(arguments,function(b){a.push(d(b))}),e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{/**
       * @ngdoc method
       * @name $log#log
       *
       * @description
       * Write a log message
       */
log:e("log"),/**
       * @ngdoc method
       * @name $log#info
       *
       * @description
       * Write an information message
       */
info:e("info"),/**
       * @ngdoc method
       * @name $log#warn
       *
       * @description
       * Write a warning message
       */
warn:e("warn"),/**
       * @ngdoc method
       * @name $log#error
       *
       * @description
       * Write an error message
       */
error:e("error"),/**
       * @ngdoc method
       * @name $log#debug
       *
       * @description
       * Write a debug message
       */
debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}
// Sandboxing Angular Expressions
// ------------------------------
// Angular expressions are generally considered safe because these expressions only have direct
// access to `$scope` and locals. However, one can obtain the ability to execute arbitrary JS code by
// obtaining a reference to native JS functions such as the Function constructor.
//
// As an example, consider the following Angular expression:
//
//   {}.toString.constructor('alert("evil JS code")')
//
// This sandboxing technique is not perfect and doesn't aim to be. The goal is to prevent exploits
// against the expression language, but not to prevent exploits that were enabled by exposing
// sensitive JavaScript or browser APIs on Scope. Exposing such objects on a Scope is never a good
// practice and therefore we are not even trying to protect against interaction with an object
// explicitly exposed in this way.
//
// In general, it is not possible to access a Window object from an angular expression unless a
// window or some DOM object that has a reference to window is published onto a Scope.
// Similarly we prevent invocations of function known to be dangerous, as well as assignments to
// native objects.
//
// See https://docs.angularjs.org/guide/security
function Ub(a,b){if(
// From the JavaScript docs:
// Property names must be strings. This means that non-string objects cannot be used
// as keys in an object. Any non-string object, including a number, is typecasted
// into a string via the toString method.
//
// So, to ensure that we are checking the same `name` that JavaScript would use,
// we cast it to a string, if possible
a=v(a)&&a.toString?a.toString():a,"__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw Se("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",b);return a}function Vb(a,b){
// nifty check if obj is Function that is fast and works across iframes and other contexts
if(a){if(a.constructor===a)throw Se("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",b);if(// isWindow(obj)
a.window===a)throw Se("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",b);if(// isElement(obj)
a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw Se("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",b);if(// block Object so that we can't get hold of dangerous Object.* methods
a===Object)throw Se("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",b)}return a}function Wb(a,b){if(a){if(a.constructor===a)throw Se("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",b);if(a===Te||a===Ue||a===Ve)throw Se("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",b)}}function Xb(a,b){return"undefined"!=typeof a?a:b}function Yb(a,b){return"undefined"==typeof a?b:"undefined"==typeof b?a:a+b}function Zb(a,b){var c=a(b);return!c.$stateful}function $b(a,b){var c,d;switch(a.type){case Ze.Program:c=!0,f(a.body,function(a){$b(a.expression,b),c=c&&a.expression.constant}),a.constant=c;break;case Ze.Literal:a.constant=!0,a.toWatch=[];break;case Ze.UnaryExpression:$b(a.argument,b),a.constant=a.argument.constant,a.toWatch=a.argument.toWatch;break;case Ze.BinaryExpression:$b(a.left,b),$b(a.right,b),a.constant=a.left.constant&&a.right.constant,a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case Ze.LogicalExpression:$b(a.left,b),$b(a.right,b),a.constant=a.left.constant&&a.right.constant,a.toWatch=a.constant?[]:[a];break;case Ze.ConditionalExpression:$b(a.test,b),$b(a.alternate,b),$b(a.consequent,b),a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant,a.toWatch=a.constant?[]:[a];break;case Ze.Identifier:a.constant=!1,a.toWatch=[a];break;case Ze.MemberExpression:$b(a.object,b),a.computed&&$b(a.property,b),a.constant=a.object.constant&&(!a.computed||a.property.constant),a.toWatch=[a];break;case Ze.CallExpression:c=a.filter?Zb(b,a.callee.name):!1,d=[],f(a.arguments,function(a){$b(a,b),c=c&&a.constant,a.constant||d.push.apply(d,a.toWatch)}),a.constant=c,a.toWatch=a.filter&&Zb(b,a.callee.name)?d:[a];break;case Ze.AssignmentExpression:$b(a.left,b),$b(a.right,b),a.constant=a.left.constant&&a.right.constant,a.toWatch=[a];break;case Ze.ArrayExpression:c=!0,d=[],f(a.elements,function(a){$b(a,b),c=c&&a.constant,a.constant||d.push.apply(d,a.toWatch)}),a.constant=c,a.toWatch=d;break;case Ze.ObjectExpression:c=!0,d=[],f(a.properties,function(a){$b(a.value,b),c=c&&a.value.constant,a.value.constant||d.push.apply(d,a.value.toWatch)}),a.constant=c,a.toWatch=d;break;case Ze.ThisExpression:a.constant=!1,a.toWatch=[]}}function _b(a){if(1==a.length){var b=a[0].expression,d=b.toWatch;return 1!==d.length?d:d[0]!==b?d:c}}function ac(a){return a.type===Ze.Identifier||a.type===Ze.MemberExpression}function bc(a){return 1===a.body.length&&ac(a.body[0].expression)?{type:Ze.AssignmentExpression,left:a.body[0].expression,right:{type:Ze.NGValueParameter},operator:"="}:void 0}function cc(a){return 0===a.body.length||1===a.body.length&&(a.body[0].expression.type===Ze.Literal||a.body[0].expression.type===Ze.ArrayExpression||a.body[0].expression.type===Ze.ObjectExpression)}function dc(a){return a.constant}function ec(a,b){this.astBuilder=a,this.$filter=b}function fc(a,b){this.astBuilder=a,this.$filter=b}function gc(a){return"constructor"==a}function hc(a){return A(a.valueOf)?a.valueOf():_e.call(a)}
///////////////////////////////////
/**
 * @ngdoc service
 * @name $parse
 * @kind function
 *
 * @description
 *
 * Converts Angular {@link guide/expression expression} into a function.
 *
 * ```js
 *   var getter = $parse('user.name');
 *   var setter = getter.assign;
 *   var context = {user:{name:'angular'}};
 *   var locals = {user:{name:'local'}};
 *
 *   expect(getter(context)).toEqual('angular');
 *   setter(context, 'newValue');
 *   expect(context.user.name).toEqual('newValue');
 *   expect(getter(context, locals)).toEqual('local');
 * ```
 *
 *
 * @param {string} expression String expression to compile.
 * @returns {function(context, locals)} a function which represents the compiled expression:
 *
 *    * `context` – `{object}` – an object against which any expressions embedded in the strings
 *      are evaluated against (typically a scope object).
 *    * `locals` – `{object=}` – local variables context object, useful for overriding values in
 *      `context`.
 *
 *    The returned function also has the following properties:
 *      * `literal` – `{boolean}` – whether the expression's top-level node is a JavaScript
 *        literal.
 *      * `constant` – `{boolean}` – whether the expression is made entirely of JavaScript
 *        constant literals.
 *      * `assign` – `{?function(context, value)}` – if the expression is assignable, this will be
 *        set to a function to change its value on the given context.
 *
 */
/**
 * @ngdoc provider
 * @name $parseProvider
 *
 * @description
 * `$parseProvider` can be used for configuring the default behavior of the {@link ng.$parse $parse}
 *  service.
 */
function ic(){var a=qa(),b=qa();this.$get=["$filter",function(d){function e(a,b){
// attempt to convert the value to a primitive type
// TODO(docs): add a note to docs that by implementing valueOf even objects and arrays can
//             be cheaply dirty-checked
return null==a||null==b?a===b:"object"==typeof a&&(a=hc(a),"object"==typeof a)?!1:a===b||a!==a&&b!==b}function g(a,b,d,f,g){var h,i=f.inputs;if(1===i.length){var j=e;// init to something unique so that equals check fails
return i=i[0],a.$watch(function(a){var b=i(a);return e(b,j)||(h=f(a,c,c,[b]),j=b&&hc(b)),h},b,d,g)}for(var k=[],l=[],m=0,n=i.length;n>m;m++)k[m]=e,// init to something unique so that equals check fails
l[m]=null;return a.$watch(function(a){for(var b=!1,d=0,g=i.length;g>d;d++){var j=i[d](a);(b||(b=!e(j,k[d])))&&(l[d]=j,k[d]=j&&hc(j))}return b&&(h=f(a,c,c,l)),h},b,d,g)}function h(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a,A(b)&&b.apply(this,arguments),u(a)&&d.$$postDigest(function(){u(f)&&e()})},c)}function i(a,b,c,d){function e(a){var b=!0;return f(a,function(a){u(a)||(b=!1)}),b}var g,h;return g=a.$watch(function(a){return d(a)},function(a,c,d){h=a,A(b)&&b.call(this,a,c,d),e(a)&&d.$$postDigest(function(){e(h)&&g()})},c)}function j(a,b,c,d){var e;return e=a.$watch(function(a){return d(a)},function(a,c,d){A(b)&&b.apply(this,arguments),e()},c)}function k(a,b){if(!b)return a;var c=a.$$watchDelegate,d=c!==i&&c!==h,e=d?function(c,d,e,f){var g=a(c,d,e,f);return b(g,c,d)}:function(c,d,e,f){var g=a(c,d,e,f),h=b(g,c,d);
// we only return the interceptor's result if the
// initial value is defined (for bind-once)
return u(g)?h:g};
// Propagate $$watchDelegates other then inputsWatchDelegate
// If there is an interceptor, but no watchDelegate then treat the interceptor like
// we treat filters - it is assumed to be a pure function unless flagged with $stateful
return a.$$watchDelegate&&a.$$watchDelegate!==g?e.$$watchDelegate=a.$$watchDelegate:b.$stateful||(e.$$watchDelegate=g,e.inputs=a.inputs?a.inputs:[a]),e}var l=Nd().noUnsafeEval,m={csp:l,expensiveChecks:!1},n={csp:l,expensiveChecks:!0};return function(c,e,f){var l,o,q;switch(typeof c){case"string":c=c.trim(),q=c;var r=f?b:a;if(l=r[q],!l){":"===c.charAt(0)&&":"===c.charAt(1)&&(o=!0,c=c.substring(2));var s=f?n:m,t=new Ye(s),u=new $e(t,d,s);l=u.parse(c),l.constant?l.$$watchDelegate=j:o?l.$$watchDelegate=l.literal?i:h:l.inputs&&(l.$$watchDelegate=g),r[q]=l}return k(l,e);case"function":return k(c,e);default:return p}}}]}/**
 * @ngdoc service
 * @name $q
 * @requires $rootScope
 *
 * @description
 * A service that helps you run functions asynchronously, and use their return values (or exceptions)
 * when they are done processing.
 *
 * This is an implementation of promises/deferred objects inspired by
 * [Kris Kowal's Q](https://github.com/kriskowal/q).
 *
 * $q can be used in two fashions --- one which is more similar to Kris Kowal's Q or jQuery's Deferred
 * implementations, and the other which resembles ES6 promises to some degree.
 *
 * # $q constructor
 *
 * The streamlined ES6 style promise is essentially just using $q as a constructor which takes a `resolver`
 * function as the first argument. This is similar to the native Promise implementation from ES6 Harmony,
 * see [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise).
 *
 * While the constructor-style use is supported, not all of the supporting methods from ES6 Harmony promises are
 * available yet.
 *
 * It can be used like so:
 *
 * ```js
 *   // for the purpose of this example let's assume that variables `$q` and `okToGreet`
 *   // are available in the current lexical scope (they could have been injected or passed in).
 *
 *   function asyncGreet(name) {
 *     // perform some asynchronous operation, resolve or reject the promise when appropriate.
 *     return $q(function(resolve, reject) {
 *       setTimeout(function() {
 *         if (okToGreet(name)) {
 *           resolve('Hello, ' + name + '!');
 *         } else {
 *           reject('Greeting ' + name + ' is not allowed.');
 *         }
 *       }, 1000);
 *     });
 *   }
 *
 *   var promise = asyncGreet('Robin Hood');
 *   promise.then(function(greeting) {
 *     alert('Success: ' + greeting);
 *   }, function(reason) {
 *     alert('Failed: ' + reason);
 *   });
 * ```
 *
 * Note: progress/notify callbacks are not currently supported via the ES6-style interface.
 *
 * However, the more traditional CommonJS-style usage is still available, and documented below.
 *
 * [The CommonJS Promise proposal](http://wiki.commonjs.org/wiki/Promises) describes a promise as an
 * interface for interacting with an object that represents the result of an action that is
 * performed asynchronously, and may or may not be finished at any given point in time.
 *
 * From the perspective of dealing with error handling, deferred and promise APIs are to
 * asynchronous programming what `try`, `catch` and `throw` keywords are to synchronous programming.
 *
 * ```js
 *   // for the purpose of this example let's assume that variables `$q` and `okToGreet`
 *   // are available in the current lexical scope (they could have been injected or passed in).
 *
 *   function asyncGreet(name) {
 *     var deferred = $q.defer();
 *
 *     setTimeout(function() {
 *       deferred.notify('About to greet ' + name + '.');
 *
 *       if (okToGreet(name)) {
 *         deferred.resolve('Hello, ' + name + '!');
 *       } else {
 *         deferred.reject('Greeting ' + name + ' is not allowed.');
 *       }
 *     }, 1000);
 *
 *     return deferred.promise;
 *   }
 *
 *   var promise = asyncGreet('Robin Hood');
 *   promise.then(function(greeting) {
 *     alert('Success: ' + greeting);
 *   }, function(reason) {
 *     alert('Failed: ' + reason);
 *   }, function(update) {
 *     alert('Got notification: ' + update);
 *   });
 * ```
 *
 * At first it might not be obvious why this extra complexity is worth the trouble. The payoff
 * comes in the way of guarantees that promise and deferred APIs make, see
 * https://github.com/kriskowal/uncommonjs/blob/master/promises/specification.md.
 *
 * Additionally the promise api allows for composition that is very hard to do with the
 * traditional callback ([CPS](http://en.wikipedia.org/wiki/Continuation-passing_style)) approach.
 * For more on this please see the [Q documentation](https://github.com/kriskowal/q) especially the
 * section on serial or parallel joining of promises.
 *
 * # The Deferred API
 *
 * A new instance of deferred is constructed by calling `$q.defer()`.
 *
 * The purpose of the deferred object is to expose the associated Promise instance as well as APIs
 * that can be used for signaling the successful or unsuccessful completion, as well as the status
 * of the task.
 *
 * **Methods**
 *
 * - `resolve(value)` – resolves the derived promise with the `value`. If the value is a rejection
 *   constructed via `$q.reject`, the promise will be rejected instead.
 * - `reject(reason)` – rejects the derived promise with the `reason`. This is equivalent to
 *   resolving it with a rejection constructed via `$q.reject`.
 * - `notify(value)` - provides updates on the status of the promise's execution. This may be called
 *   multiple times before the promise is either resolved or rejected.
 *
 * **Properties**
 *
 * - promise – `{Promise}` – promise object associated with this deferred.
 *
 *
 * # The Promise API
 *
 * A new promise instance is created when a deferred instance is created and can be retrieved by
 * calling `deferred.promise`.
 *
 * The purpose of the promise object is to allow for interested parties to get access to the result
 * of the deferred task when it completes.
 *
 * **Methods**
 *
 * - `then(successCallback, errorCallback, notifyCallback)` – regardless of when the promise was or
 *   will be resolved or rejected, `then` calls one of the success or error callbacks asynchronously
 *   as soon as the result is available. The callbacks are called with a single argument: the result
 *   or rejection reason. Additionally, the notify callback may be called zero or more times to
 *   provide a progress indication, before the promise is resolved or rejected.
 *
 *   This method *returns a new promise* which is resolved or rejected via the return value of the
 *   `successCallback`, `errorCallback` (unless that value is a promise, in which case it is resolved
 *   with the value which is resolved in that promise using
 *   [promise chaining](http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promises-queues)).
 *   It also notifies via the return value of the `notifyCallback` method. The promise cannot be
 *   resolved or rejected from the notifyCallback method.
 *
 * - `catch(errorCallback)` – shorthand for `promise.then(null, errorCallback)`
 *
 * - `finally(callback, notifyCallback)` – allows you to observe either the fulfillment or rejection of a promise,
 *   but to do so without modifying the final value. This is useful to release resources or do some
 *   clean-up that needs to be done whether the promise was rejected or resolved. See the [full
 *   specification](https://github.com/kriskowal/q/wiki/API-Reference#promisefinallycallback) for
 *   more information.
 *
 * # Chaining promises
 *
 * Because calling the `then` method of a promise returns a new derived promise, it is easily
 * possible to create a chain of promises:
 *
 * ```js
 *   promiseB = promiseA.then(function(result) {
 *     return result + 1;
 *   });
 *
 *   // promiseB will be resolved immediately after promiseA is resolved and its value
 *   // will be the result of promiseA incremented by 1
 * ```
 *
 * It is possible to create chains of any length and since a promise can be resolved with another
 * promise (which will defer its resolution further), it is possible to pause/defer resolution of
 * the promises at any point in the chain. This makes it possible to implement powerful APIs like
 * $http's response interceptors.
 *
 *
 * # Differences between Kris Kowal's Q and $q
 *
 *  There are two main differences:
 *
 * - $q is integrated with the {@link ng.$rootScope.Scope} Scope model observation
 *   mechanism in angular, which means faster propagation of resolution or rejection into your
 *   models and avoiding unnecessary browser repaints, which would result in flickering UI.
 * - Q has many more features than $q, but that comes at a cost of bytes. $q is tiny, but contains
 *   all the important functionality needed for common async tasks.
 *
 *  # Testing
 *
 *  ```js
 *    it('should simulate promise', inject(function($q, $rootScope) {
 *      var deferred = $q.defer();
 *      var promise = deferred.promise;
 *      var resolvedValue;
 *
 *      promise.then(function(value) { resolvedValue = value; });
 *      expect(resolvedValue).toBeUndefined();
 *
 *      // Simulate resolving of promise
 *      deferred.resolve(123);
 *      // Note that the 'then' function does not get called synchronously.
 *      // This is because we want the promise API to always be async, whether or not
 *      // it got called synchronously or asynchronously.
 *      expect(resolvedValue).toBeUndefined();
 *
 *      // Propagate promise resolution to 'then' functions using $apply().
 *      $rootScope.$apply();
 *      expect(resolvedValue).toEqual(123);
 *    }));
 *  ```
 *
 * @param {function(function, function)} resolver Function which is responsible for resolving or
 *   rejecting the newly created promise. The first parameter is a function which resolves the
 *   promise, the second parameter is a function which rejects the promise.
 *
 * @returns {Promise} The newly created promise.
 */
function jc(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return lc(function(b){a.$evalAsync(b)},b)}]}function kc(){this.$get=["$browser","$exceptionHandler",function(a,b){return lc(function(b){a.defer(b)},b)}]}/**
 * Constructs a promise manager.
 *
 * @param {function(function)} nextTick Function for executing functions in the next turn.
 * @param {function(...*)} exceptionHandler Function into which unexpected exceptions are passed for
 *     debugging purposes.
 * @returns {object} Promise manager.
 */
function lc(a,b){function e(a,b,c){function d(b){return function(c){e||(e=!0,b.call(a,c))}}var e=!1;return[d(b),d(c)]}function g(){this.$$state={status:0}}
//Faster, more basic than angular.bind http://jsperf.com/angular-bind-vs-custom-vs-native
function h(a,b){return function(c){b.call(a,c)}}function i(a){var d,e,f;f=a.pending,a.processScheduled=!1,a.pending=c;for(var g=0,h=f.length;h>g;++g){e=f[g][0],d=f[g][a.status];try{A(d)?e.resolve(d(a.value)):1===a.status?e.resolve(a.value):e.reject(a.value)}catch(i){e.reject(i),b(i)}}}function j(b){!b.processScheduled&&b.pending&&(b.processScheduled=!0,a(function(){i(b)}))}function k(){this.promise=new g,
//Necessary to support unbound execution :/
this.resolve=h(this,this.resolve),this.reject=h(this,this.reject),this.notify=h(this,this.notify)}/**
   * @ngdoc method
   * @name $q#all
   * @kind function
   *
   * @description
   * Combines multiple promises into a single promise that is resolved when all of the input
   * promises are resolved.
   *
   * @param {Array.<Promise>|Object.<Promise>} promises An array or hash of promises.
   * @returns {Promise} Returns a single promise that will be resolved with an array/hash of values,
   *   each value corresponding to the promise at the same index/key in the `promises` array/hash.
   *   If any of the promises is resolved with a rejection, this resulting promise will be rejected
   *   with the same rejection value.
   */
function m(a){var b=new k,c=0,d=Jd(a)?[]:{};return f(a,function(a,e){c++,s(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})}),0===c&&b.resolve(d),b.promise}var n=d("$q",TypeError),o=function(){return new k};l(g.prototype,{then:function(a,b,c){if(t(a)&&t(b)&&t(c))return this;var d=new k;return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([d,a,b,c]),this.$$state.status>0&&j(this.$$state),d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return r(b,!0,a)},function(b){return r(b,!1,a)},b)}}),l(k.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?this.$$reject(n("qcycle","Expected promise to be resolved with value other than itself '{0}'",a)):this.$$resolve(a))},$$resolve:function(a){var c,d;d=e(this,this.$$resolve,this.$$reject);try{(v(a)||A(a))&&(c=a&&a.then),A(c)?(this.promise.$$state.status=-1,c.call(a,d[0],d[1],this.notify)):(this.promise.$$state.value=a,this.promise.$$state.status=1,j(this.promise.$$state))}catch(f){d[1](f),b(f)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a,this.promise.$$state.status=2,j(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;this.promise.$$state.status<=0&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;g>f;f++){e=d[f][0],a=d[f][3];try{e.notify(A(a)?a(c):c)}catch(h){b(h)}}})}});/**
   * @ngdoc method
   * @name $q#reject
   * @kind function
   *
   * @description
   * Creates a promise that is resolved as rejected with the specified `reason`. This api should be
   * used to forward rejection in a chain of promises. If you are dealing with the last promise in
   * a promise chain, you don't need to worry about it.
   *
   * When comparing deferreds/promises to the familiar behavior of try/catch/throw, think of
   * `reject` as the `throw` keyword in JavaScript. This also means that if you "catch" an error via
   * a promise error callback and you want to forward the error to the promise derived from the
   * current promise, you have to "rethrow" the error by returning a rejection constructed via
   * `reject`.
   *
   * ```js
   *   promiseB = promiseA.then(function(result) {
   *     // success: do something and resolve promiseB
   *     //          with the old or a new result
   *     return result;
   *   }, function(reason) {
   *     // error: handle the error if possible and
   *     //        resolve promiseB with newPromiseOrValue,
   *     //        otherwise forward the rejection to promiseB
   *     if (canHandle(reason)) {
   *      // handle the error and recover
   *      return newPromiseOrValue;
   *     }
   *     return $q.reject(reason);
   *   });
   * ```
   *
   * @param {*} reason Constant, message, exception or an object representing the rejection reason.
   * @returns {Promise} Returns a promise that was already resolved as rejected with the `reason`.
   */
var p=function(a){var b=new k;return b.reject(a),b.promise},q=function(a,b){var c=new k;return b?c.resolve(a):c.reject(a),c.promise},r=function(a,b,c){var d=null;try{A(c)&&(d=c())}catch(e){return q(e,!1)}return I(d)?d.then(function(){return q(a,b)},function(a){return q(a,!1)}):q(a,b)},s=function(a,b,c,d){var e=new k;return e.resolve(a),e.promise.then(b,c,d)},u=s,w=function x(a){function b(a){d.resolve(a)}function c(a){d.reject(a)}if(!A(a))throw n("norslvr","Expected resolverFn, got '{0}'",a);if(!(this instanceof x))
// More useful when $Q is the Promise itself.
return new x(a);var d=new k;return a(b,c),d.promise};return w.defer=o,w.reject=p,w.when=s,w.resolve=u,w.all=m,w}function mc(){//rAF
this.$get=["$window","$timeout",function(a,b){var c=a.requestAnimationFrame||a.webkitRequestAnimationFrame,d=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!c,f=e?function(a){var b=c(a);return function(){d(b)}}:function(a){var c=b(a,16.66,!1);// 1000 / 60 = 16.666
return function(){b.cancel(c)}};return f.supported=e,f}]}/**
 * DESIGN NOTES
 *
 * The design decisions behind the scope are heavily favored for speed and memory consumption.
 *
 * The typical use of scope is to watch the expressions, which most of the time return the same
 * value as last time so we optimize the operation.
 *
 * Closures construction is expensive in terms of speed as well as memory:
 *   - No closures, instead use prototypical inheritance for API
 *   - Internal state needs to be stored on scope directly, which means that private state is
 *     exposed as $$____ properties
 *
 * Loop operations are optimized by using while(count--) { ... }
 *   - this means that in order to keep the same order of execution as addition we have to add
 *     items to the array at the beginning (unshift) instead of at the end (push)
 *
 * Child scopes are created and removed often
 *   - Using an array would be slow since inserts in middle are expensive so we use linked list
 *
 * There are few watches then a lot of observers. This is why you don't want the observer to be
 * implemented in the same way as watch. Watch requires return of initialization function which
 * are expensive to construct.
 */
/**
 * @ngdoc provider
 * @name $rootScopeProvider
 * @description
 *
 * Provider for the $rootScope service.
 */
/**
 * @ngdoc method
 * @name $rootScopeProvider#digestTtl
 * @description
 *
 * Sets the number of `$digest` iterations the scope should attempt to execute before giving up and
 * assuming that the model is unstable.
 *
 * The current default is 10 iterations.
 *
 * In complex applications it's possible that the dependencies between `$watch`s will result in
 * several digest iterations. However if an application needs more than the default 10 digest
 * iterations for its model to stabilize then you should investigate what is causing the model to
 * continuously change during the digest.
 *
 * Increasing the TTL could have performance implications, so you should not change it without
 * proper justification.
 *
 * @param {number} limit The number of digest iterations.
 */
/**
 * @ngdoc service
 * @name $rootScope
 * @description
 *
 * Every application has a single root {@link ng.$rootScope.Scope scope}.
 * All other scopes are descendant scopes of the root scope. Scopes provide separation
 * between the model and the view, via a mechanism for watching the model for changes.
 * They also provide an event emission/broadcast and subscription facility. See the
 * {@link guide/scope developer guide on scopes}.
 */
function nc(){function a(a){function b(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=i(),this.$$ChildScope=null}return b.prototype=a,b}var b=10,c=d("$rootScope"),g=null,h=null;this.digestTtl=function(a){return arguments.length&&(b=a),b},this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,j,k,l){function m(a){a.currentScope.$$destroyed=!0}/**
     * @ngdoc type
     * @name $rootScope.Scope
     *
     * @description
     * A root scope can be retrieved using the {@link ng.$rootScope $rootScope} key from the
     * {@link auto.$injector $injector}. Child scopes are created using the
     * {@link ng.$rootScope.Scope#$new $new()} method. (Most scopes are created automatically when
     * compiled HTML template is executed.) See also the {@link guide/scope Scopes guide} for
     * an in-depth introduction and usage examples.
     *
     *
     * # Inheritance
     * A scope can inherit from a parent scope, as in this example:
     * ```js
         var parent = $rootScope;
         var child = parent.$new();

         parent.salutation = "Hello";
         expect(child.salutation).toEqual('Hello');

         child.salutation = "Welcome";
         expect(child.salutation).toEqual('Welcome');
         expect(parent.salutation).toEqual('Hello');
     * ```
     *
     * When interacting with `Scope` in tests, additional helper methods are available on the
     * instances of `Scope` type. See {@link ngMock.$rootScope.Scope ngMock Scope} for additional
     * details.
     *
     *
     * @param {Object.<string, function()>=} providers Map of service factory which need to be
     *                                       provided for the current scope. Defaults to {@link ng}.
     * @param {Object.<string, *>=} instanceCache Provides pre-instantiated services which should
     *                              append/override services provided by `providers`. This is handy
     *                              when unit-testing and having the need to override a default
     *                              service.
     * @returns {Object} Newly created scope.
     *
     */
function n(){this.$id=i(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$$isolateBindings=null}function o(a){if(y.$$phase)throw c("inprog","{0} already in progress",y.$$phase);y.$$phase=a}function q(){y.$$phase=null}function r(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}/**
     * function used as an initial value for watchers.
     * because it's unique we can easily tell it apart from other values
     */
function u(){}function w(){for(;C.length;)try{C.shift()()}catch(a){j(a)}h=null}function x(){null===h&&(h=l.defer(function(){y.$apply(w)}))}/**
     * @ngdoc property
     * @name $rootScope.Scope#$id
     *
     * @description
     * Unique scope ID (monotonically increasing) useful for debugging.
     */
/**
      * @ngdoc property
      * @name $rootScope.Scope#$parent
      *
      * @description
      * Reference to the parent scope.
      */
/**
       * @ngdoc property
       * @name $rootScope.Scope#$root
       *
       * @description
       * Reference to the root scope.
       */
n.prototype={constructor:n,/**
       * @ngdoc method
       * @name $rootScope.Scope#$new
       * @kind function
       *
       * @description
       * Creates a new child {@link ng.$rootScope.Scope scope}.
       *
       * The parent scope will propagate the {@link ng.$rootScope.Scope#$digest $digest()} event.
       * The scope can be removed from the scope hierarchy using {@link ng.$rootScope.Scope#$destroy $destroy()}.
       *
       * {@link ng.$rootScope.Scope#$destroy $destroy()} must be called on a scope when it is
       * desired for the scope and its child scopes to be permanently detached from the parent and
       * thus stop participating in model change detection and listener notification by invoking.
       *
       * @param {boolean} isolate If true, then the scope does not prototypically inherit from the
       *         parent scope. The scope is isolated, as it can not see parent scope properties.
       *         When creating widgets, it is useful for the widget to not accidentally read parent
       *         state.
       *
       * @param {Scope} [parent=this] The {@link ng.$rootScope.Scope `Scope`} that will be the `$parent`
       *                              of the newly created scope. Defaults to `this` scope if not provided.
       *                              This is used when creating a transclude scope to correctly place it
       *                              in the scope hierarchy while maintaining the correct prototypical
       *                              inheritance.
       *
       * @returns {Object} The newly created child scope.
       *
       */
$new:function(b,c){var d;
// Only create a child scope class if somebody asks for one,
// but cache it to allow the VM to optimize lookups.
// When the new scope is not isolated or we inherit from `this`, and
// the parent scope is destroyed, the property `$$destroyed` is inherited
// prototypically. In all other cases, this property needs to be set
// when the parent scope is destroyed.
// The listener needs to be added after the parent is set
return c=c||this,b?(d=new n,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope),d.$parent=c,d.$$prevSibling=c.$$childTail,c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=d,(b||c!=this)&&d.$on("$destroy",m),d},/**
       * @ngdoc method
       * @name $rootScope.Scope#$watch
       * @kind function
       *
       * @description
       * Registers a `listener` callback to be executed whenever the `watchExpression` changes.
       *
       * - The `watchExpression` is called on every call to {@link ng.$rootScope.Scope#$digest
       *   $digest()} and should return the value that will be watched. (`watchExpression` should not change
       *   its value when executed multiple times with the same input because it may be executed multiple
       *   times by {@link ng.$rootScope.Scope#$digest $digest()}. That is, `watchExpression` should be
       *   [idempotent](http://en.wikipedia.org/wiki/Idempotence).
       * - The `listener` is called only when the value from the current `watchExpression` and the
       *   previous call to `watchExpression` are not equal (with the exception of the initial run,
       *   see below). Inequality is determined according to reference inequality,
       *   [strict comparison](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators)
       *    via the `!==` Javascript operator, unless `objectEquality == true`
       *   (see next point)
       * - When `objectEquality == true`, inequality of the `watchExpression` is determined
       *   according to the {@link angular.equals} function. To save the value of the object for
       *   later comparison, the {@link angular.copy} function is used. This therefore means that
       *   watching complex objects will have adverse memory and performance implications.
       * - The watch `listener` may change the model, which may trigger other `listener`s to fire.
       *   This is achieved by rerunning the watchers until no changes are detected. The rerun
       *   iteration limit is 10 to prevent an infinite loop deadlock.
       *
       *
       * If you want to be notified whenever {@link ng.$rootScope.Scope#$digest $digest} is called,
       * you can register a `watchExpression` function with no `listener`. (Be prepared for
       * multiple calls to your `watchExpression` because it will execute multiple times in a
       * single {@link ng.$rootScope.Scope#$digest $digest} cycle if a change is detected.)
       *
       * After a watcher is registered with the scope, the `listener` fn is called asynchronously
       * (via {@link ng.$rootScope.Scope#$evalAsync $evalAsync}) to initialize the
       * watcher. In rare cases, this is undesirable because the listener is called when the result
       * of `watchExpression` didn't change. To detect this scenario within the `listener` fn, you
       * can compare the `newVal` and `oldVal`. If these two values are identical (`===`) then the
       * listener was called due to initialization.
       *
       *
       *
       * # Example
       * ```js
           // let's assume that scope was dependency injected as the $rootScope
           var scope = $rootScope;
           scope.name = 'misko';
           scope.counter = 0;

           expect(scope.counter).toEqual(0);
           scope.$watch('name', function(newValue, oldValue) {
             scope.counter = scope.counter + 1;
           });
           expect(scope.counter).toEqual(0);

           scope.$digest();
           // the listener is always called during the first $digest loop after it was registered
           expect(scope.counter).toEqual(1);

           scope.$digest();
           // but now it will not be called unless the value changes
           expect(scope.counter).toEqual(1);

           scope.name = 'adam';
           scope.$digest();
           expect(scope.counter).toEqual(2);



           // Using a function as a watchExpression
           var food;
           scope.foodCounter = 0;
           expect(scope.foodCounter).toEqual(0);
           scope.$watch(
             // This function returns the value being watched. It is called for each turn of the $digest loop
             function() { return food; },
             // This is the change listener, called when the value returned from the above function changes
             function(newValue, oldValue) {
               if ( newValue !== oldValue ) {
                 // Only increment the counter if the value changed
                 scope.foodCounter = scope.foodCounter + 1;
               }
             }
           );
           // No digest has been run so the counter will be zero
           expect(scope.foodCounter).toEqual(0);

           // Run the digest but since food has not changed count will still be zero
           scope.$digest();
           expect(scope.foodCounter).toEqual(0);

           // Update food and run digest.  Now the counter will increment
           food = 'cheeseburger';
           scope.$digest();
           expect(scope.foodCounter).toEqual(1);

       * ```
       *
       *
       *
       * @param {(function()|string)} watchExpression Expression that is evaluated on each
       *    {@link ng.$rootScope.Scope#$digest $digest} cycle. A change in the return value triggers
       *    a call to the `listener`.
       *
       *    - `string`: Evaluated as {@link guide/expression expression}
       *    - `function(scope)`: called with current `scope` as a parameter.
       * @param {function(newVal, oldVal, scope)} listener Callback called whenever the value
       *    of `watchExpression` changes.
       *
       *    - `newVal` contains the current value of the `watchExpression`
       *    - `oldVal` contains the previous value of the `watchExpression`
       *    - `scope` refers to the current scope
       * @param {boolean=} objectEquality Compare for object equality using {@link angular.equals} instead of
       *     comparing for reference equality.
       * @returns {function()} Returns a deregistration function for this listener.
       */
$watch:function(a,b,c,d){var e=k(a);if(e.$$watchDelegate)return e.$$watchDelegate(this,b,c,e,a);var f=this,h=f.$$watchers,i={fn:b,last:u,get:e,exp:d||a,eq:!!c};
// we use unshift since we use a while loop in $digest for speed.
// the while loop reads in reverse order.
return g=null,A(b)||(i.fn=p),h||(h=f.$$watchers=[]),h.unshift(i),r(this,1),function(){N(h,i)>=0&&r(f,-1),g=null}},/**
       * @ngdoc method
       * @name $rootScope.Scope#$watchGroup
       * @kind function
       *
       * @description
       * A variant of {@link ng.$rootScope.Scope#$watch $watch()} where it watches an array of `watchExpressions`.
       * If any one expression in the collection changes the `listener` is executed.
       *
       * - The items in the `watchExpressions` array are observed via standard $watch operation and are examined on every
       *   call to $digest() to see if any items changes.
       * - The `listener` is called whenever any expression in the `watchExpressions` array changes.
       *
       * @param {Array.<string|Function(scope)>} watchExpressions Array of expressions that will be individually
       * watched using {@link ng.$rootScope.Scope#$watch $watch()}
       *
       * @param {function(newValues, oldValues, scope)} listener Callback called whenever the return value of any
       *    expression in `watchExpressions` changes
       *    The `newValues` array contains the current values of the `watchExpressions`, with the indexes matching
       *    those of `watchExpression`
       *    and the `oldValues` array contains the previous values of the `watchExpressions`, with the indexes matching
       *    those of `watchExpression`
       *    The `scope` refers to the current scope.
       * @returns {function()} Returns a de-registration function for all listeners.
       */
$watchGroup:function(a,b){function c(){i=!1,j?(j=!1,b(e,e,h)):b(e,d,h)}var d=new Array(a.length),e=new Array(a.length),g=[],h=this,i=!1,j=!0;if(!a.length){
// No expressions means we call the listener ASAP
var k=!0;return h.$evalAsync(function(){k&&b(e,e,h)}),function(){k=!1}}return 1===a.length?this.$watch(a[0],function(a,c,f){e[0]=a,d[0]=c,b(e,a===c?e:d,f)}):(f(a,function(a,b){var f=h.$watch(a,function(a,f){e[b]=a,d[b]=f,i||(i=!0,h.$evalAsync(c))});g.push(f)}),function(){for(;g.length;)g.shift()()})},/**
       * @ngdoc method
       * @name $rootScope.Scope#$watchCollection
       * @kind function
       *
       * @description
       * Shallow watches the properties of an object and fires whenever any of the properties change
       * (for arrays, this implies watching the array items; for object maps, this implies watching
       * the properties). If a change is detected, the `listener` callback is fired.
       *
       * - The `obj` collection is observed via standard $watch operation and is examined on every
       *   call to $digest() to see if any items have been added, removed, or moved.
       * - The `listener` is called whenever anything within the `obj` has changed. Examples include
       *   adding, removing, and moving items belonging to an object or array.
       *
       *
       * # Example
       * ```js
          $scope.names = ['igor', 'matias', 'misko', 'james'];
          $scope.dataCount = 4;

          $scope.$watchCollection('names', function(newNames, oldNames) {
            $scope.dataCount = newNames.length;
          });

          expect($scope.dataCount).toEqual(4);
          $scope.$digest();

          //still at 4 ... no changes
          expect($scope.dataCount).toEqual(4);

          $scope.names.pop();
          $scope.$digest();

          //now there's been a change
          expect($scope.dataCount).toEqual(3);
       * ```
       *
       *
       * @param {string|function(scope)} obj Evaluated as {@link guide/expression expression}. The
       *    expression value should evaluate to an object or an array which is observed on each
       *    {@link ng.$rootScope.Scope#$digest $digest} cycle. Any shallow change within the
       *    collection will trigger a call to the `listener`.
       *
       * @param {function(newCollection, oldCollection, scope)} listener a callback function called
       *    when a change is detected.
       *    - The `newCollection` object is the newly modified data obtained from the `obj` expression
       *    - The `oldCollection` object is a copy of the former collection data.
       *      Due to performance considerations, the`oldCollection` value is computed only if the
       *      `listener` function declares two or more arguments.
       *    - The `scope` argument refers to the current scope.
       *
       * @returns {function()} Returns a de-registration function for this listener. When the
       *    de-registration function is executed, the internal watch operation is terminated.
       */
$watchCollection:function(a,b){function c(a){f=a;var b,c,d,h,i;
// If the new value is undefined, then return undefined as the watch may be a one-time watch
if(!t(f)){if(v(f))if(e(f)){g!==n&&(
// we are transitioning from something which was not an array into array.
g=n,q=g.length=0,l++),b=f.length,q!==b&&(
// if lengths do not match we need to trigger change notification
l++,g.length=q=b);
// copy the items to oldValue and look for changes.
for(var j=0;b>j;j++)i=g[j],h=f[j],d=i!==i&&h!==h,d||i===h||(l++,g[j]=h)}else{g!==o&&(
// we are transitioning from something which was not an object into object.
g=o={},q=0,l++),
// copy the items to oldValue and look for changes.
b=0;for(c in f)sd.call(f,c)&&(b++,h=f[c],i=g[c],c in g?(d=i!==i&&h!==h,d||i===h||(l++,g[c]=h)):(q++,g[c]=h,l++));if(q>b){
// we used to have more keys, need to find them and destroy them.
l++;for(c in g)sd.call(f,c)||(q--,delete g[c])}}else// if primitive
g!==f&&(g=f,l++);return l}}function d(){
// make a copy for the next time a collection is changed
if(p?(p=!1,b(f,f,i)):b(f,h,i),j)if(v(f))if(e(f)){h=new Array(f.length);for(var a=0;a<f.length;a++)h[a]=f[a]}else{// if object
h={};for(var c in f)sd.call(f,c)&&(h[c]=f[c])}else
//primitive
h=f}c.$stateful=!0;var f,g,h,i=this,j=b.length>1,l=0,m=k(a,c),n=[],o={},p=!0,q=0;return this.$watch(m,d)},/**
       * @ngdoc method
       * @name $rootScope.Scope#$digest
       * @kind function
       *
       * @description
       * Processes all of the {@link ng.$rootScope.Scope#$watch watchers} of the current scope and
       * its children. Because a {@link ng.$rootScope.Scope#$watch watcher}'s listener can change
       * the model, the `$digest()` keeps calling the {@link ng.$rootScope.Scope#$watch watchers}
       * until no more listeners are firing. This means that it is possible to get into an infinite
       * loop. This function will throw `'Maximum iteration limit exceeded.'` if the number of
       * iterations exceeds 10.
       *
       * Usually, you don't call `$digest()` directly in
       * {@link ng.directive:ngController controllers} or in
       * {@link ng.$compileProvider#directive directives}.
       * Instead, you should call {@link ng.$rootScope.Scope#$apply $apply()} (typically from within
       * a {@link ng.$compileProvider#directive directive}), which will force a `$digest()`.
       *
       * If you want to be notified whenever `$digest()` is called,
       * you can register a `watchExpression` function with
       * {@link ng.$rootScope.Scope#$watch $watch()} with no `listener`.
       *
       * In unit tests, you may need to call `$digest()` to simulate the scope life cycle.
       *
       * # Example
       * ```js
           var scope = ...;
           scope.name = 'misko';
           scope.counter = 0;

           expect(scope.counter).toEqual(0);
           scope.$watch('name', function(newValue, oldValue) {
             scope.counter = scope.counter + 1;
           });
           expect(scope.counter).toEqual(0);

           scope.$digest();
           // the listener is always called during the first $digest loop after it was registered
           expect(scope.counter).toEqual(1);

           scope.$digest();
           // but now it will not be called unless the value changes
           expect(scope.counter).toEqual(1);

           scope.name = 'adam';
           scope.$digest();
           expect(scope.counter).toEqual(2);
       * ```
       *
       */
$digest:function(){var a,d,e,f,i,k,m,n,p,r,s=b,t=this,v=[];o("$digest"),
// Check for changes to browser url that happened in sync before the call to $digest
l.$$checkUrlChange(),this===y&&null!==h&&(
// If this is the root scope, and $applyAsync has scheduled a deferred $apply(), then
// cancel the scheduled $apply and flush the queue of expressions to be evaluated.
l.defer.cancel(h),w()),g=null;do{for(// "while dirty" loop
k=!1,n=t;z.length;){try{r=z.shift(),r.scope.$eval(r.expression,r.locals)}catch(x){j(x)}g=null}a:do{// "traverse the scopes" loop
if(f=n.$$watchers)for(
// process our watches
i=f.length;i--;)try{
// Most common watches are on primitives, in which case we can short
// circuit it with === operator, only when === fails do we use .equals
if(a=f[i])if((d=a.get(n))===(e=a.last)||(a.eq?Q(d,e):"number"==typeof d&&"number"==typeof e&&isNaN(d)&&isNaN(e))){if(a===g){
// If the most recently dirty watcher is now clean, short circuit since the remaining watchers
// have already been tested.
k=!1;break a}}else k=!0,g=a,a.last=a.eq?O(d,null):d,a.fn(d,e===u?d:e,n),5>s&&(p=4-s,v[p]||(v[p]=[]),v[p].push({msg:A(a.exp)?"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:d,oldVal:e}))}catch(x){j(x)}
// Insanity Warning: scope depth-first traversal
// yes, this code is a bit crazy, but it works and we have tests to prove it!
// this piece should be kept in sync with the traversal in $broadcast
if(!(m=n.$$watchersCount&&n.$$childHead||n!==t&&n.$$nextSibling))for(;n!==t&&!(m=n.$$nextSibling);)n=n.$parent}while(n=m);
// `break traverseScopesLoop;` takes us to here
if((k||z.length)&&!s--)throw q(),c("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",b,v)}while(k||z.length);for(q();B.length;)try{B.shift()()}catch(x){j(x)}},/**
       * @ngdoc event
       * @name $rootScope.Scope#$destroy
       * @eventType broadcast on scope being destroyed
       *
       * @description
       * Broadcasted when a scope and its children are being destroyed.
       *
       * Note that, in AngularJS, there is also a `$destroy` jQuery event, which can be used to
       * clean up DOM bindings before an element is removed from the DOM.
       */
/**
       * @ngdoc method
       * @name $rootScope.Scope#$destroy
       * @kind function
       *
       * @description
       * Removes the current scope (and all of its children) from the parent scope. Removal implies
       * that calls to {@link ng.$rootScope.Scope#$digest $digest()} will no longer
       * propagate to the current scope and its children. Removal also implies that the current
       * scope is eligible for garbage collection.
       *
       * The `$destroy()` is usually used by directives such as
       * {@link ng.directive:ngRepeat ngRepeat} for managing the
       * unrolling of the loop.
       *
       * Just before a scope is destroyed, a `$destroy` event is broadcasted on this scope.
       * Application code can register a `$destroy` event handler that will give it a chance to
       * perform any necessary cleanup.
       *
       * Note that, in AngularJS, there is also a `$destroy` jQuery event, which can be used to
       * clean up DOM bindings before an element is removed from the DOM.
       */
$destroy:function(){
// We can't destroy a scope that has been already destroyed.
if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy"),this.$$destroyed=!0,this===y&&
//Remove handlers attached to window when $rootScope is removed
l.$$applicationDestroyed(),r(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);
// sever all the references to parent scopes (after this cleanup, the current scope should
// not be retained by any of our references and should be eligible for garbage collection)
a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),
// Disable listeners, watchers and apply/digest methods
this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=p,this.$on=this.$watch=this.$watchGroup=function(){return p},this.$$listeners={},
// All of the code below is bogus code that works around V8's memory leak via optimized code
// and inline caches.
//
// see:
// - https://code.google.com/p/v8/issues/detail?id=2073#c26
// - https://github.com/angular/angular.js/issues/6794#issuecomment-38648909
// - https://github.com/angular/angular.js/issues/1313#issuecomment-10378451
this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},/**
       * @ngdoc method
       * @name $rootScope.Scope#$eval
       * @kind function
       *
       * @description
       * Executes the `expression` on the current scope and returns the result. Any exceptions in
       * the expression are propagated (uncaught). This is useful when evaluating Angular
       * expressions.
       *
       * # Example
       * ```js
           var scope = ng.$rootScope.Scope();
           scope.a = 1;
           scope.b = 2;

           expect(scope.$eval('a+b')).toEqual(3);
           expect(scope.$eval(function(scope){ return scope.a + scope.b; })).toEqual(3);
       * ```
       *
       * @param {(string|function())=} expression An angular expression to be executed.
       *
       *    - `string`: execute using the rules as defined in  {@link guide/expression expression}.
       *    - `function(scope)`: execute the function with the current `scope` parameter.
       *
       * @param {(object)=} locals Local variables object, useful for overriding values in scope.
       * @returns {*} The result of evaluating the expression.
       */
$eval:function(a,b){return k(a)(this,b)},/**
       * @ngdoc method
       * @name $rootScope.Scope#$evalAsync
       * @kind function
       *
       * @description
       * Executes the expression on the current scope at a later point in time.
       *
       * The `$evalAsync` makes no guarantees as to when the `expression` will be executed, only
       * that:
       *
       *   - it will execute after the function that scheduled the evaluation (preferably before DOM
       *     rendering).
       *   - at least one {@link ng.$rootScope.Scope#$digest $digest cycle} will be performed after
       *     `expression` execution.
       *
       * Any exceptions from the execution of the expression are forwarded to the
       * {@link ng.$exceptionHandler $exceptionHandler} service.
       *
       * __Note:__ if this function is called outside of a `$digest` cycle, a new `$digest` cycle
       * will be scheduled. However, it is encouraged to always call code that changes the model
       * from within an `$apply` call. That includes code evaluated via `$evalAsync`.
       *
       * @param {(string|function())=} expression An angular expression to be executed.
       *
       *    - `string`: execute using the rules as defined in {@link guide/expression expression}.
       *    - `function(scope)`: execute the function with the current `scope` parameter.
       *
       * @param {(object)=} locals Local variables object, useful for overriding values in scope.
       */
$evalAsync:function(a,b){
// if we are outside of an $digest loop and this is the first time we are scheduling async
// task also schedule async auto-flush
y.$$phase||z.length||l.defer(function(){z.length&&y.$digest()}),z.push({scope:this,expression:a,locals:b})},$$postDigest:function(a){B.push(a)},/**
       * @ngdoc method
       * @name $rootScope.Scope#$apply
       * @kind function
       *
       * @description
       * `$apply()` is used to execute an expression in angular from outside of the angular
       * framework. (For example from browser DOM events, setTimeout, XHR or third party libraries).
       * Because we are calling into the angular framework we need to perform proper scope life
       * cycle of {@link ng.$exceptionHandler exception handling},
       * {@link ng.$rootScope.Scope#$digest executing watches}.
       *
       * ## Life cycle
       *
       * # Pseudo-Code of `$apply()`
       * ```js
           function $apply(expr) {
             try {
               return $eval(expr);
             } catch (e) {
               $exceptionHandler(e);
             } finally {
               $root.$digest();
             }
           }
       * ```
       *
       *
       * Scope's `$apply()` method transitions through the following stages:
       *
       * 1. The {@link guide/expression expression} is executed using the
       *    {@link ng.$rootScope.Scope#$eval $eval()} method.
       * 2. Any exceptions from the execution of the expression are forwarded to the
       *    {@link ng.$exceptionHandler $exceptionHandler} service.
       * 3. The {@link ng.$rootScope.Scope#$watch watch} listeners are fired immediately after the
       *    expression was executed using the {@link ng.$rootScope.Scope#$digest $digest()} method.
       *
       *
       * @param {(string|function())=} exp An angular expression to be executed.
       *
       *    - `string`: execute using the rules as defined in {@link guide/expression expression}.
       *    - `function(scope)`: execute the function with current `scope` parameter.
       *
       * @returns {*} The result of evaluating the expression.
       */
$apply:function(a){try{o("$apply");try{return this.$eval(a)}finally{q()}}catch(b){j(b)}finally{try{y.$digest()}catch(b){throw j(b),b}}},/**
       * @ngdoc method
       * @name $rootScope.Scope#$applyAsync
       * @kind function
       *
       * @description
       * Schedule the invocation of $apply to occur at a later time. The actual time difference
       * varies across browsers, but is typically around ~10 milliseconds.
       *
       * This can be used to queue up multiple expressions which need to be evaluated in the same
       * digest.
       *
       * @param {(string|function())=} exp An angular expression to be executed.
       *
       *    - `string`: execute using the rules as defined in {@link guide/expression expression}.
       *    - `function(scope)`: execute the function with current `scope` parameter.
       */
$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&C.push(b),x()},/**
       * @ngdoc method
       * @name $rootScope.Scope#$on
       * @kind function
       *
       * @description
       * Listens on events of a given type. See {@link ng.$rootScope.Scope#$emit $emit} for
       * discussion of event life cycle.
       *
       * The event listener function format is: `function(event, args...)`. The `event` object
       * passed into the listener has the following attributes:
       *
       *   - `targetScope` - `{Scope}`: the scope on which the event was `$emit`-ed or
       *     `$broadcast`-ed.
       *   - `currentScope` - `{Scope}`: the scope that is currently handling the event. Once the
       *     event propagates through the scope hierarchy, this property is set to null.
       *   - `name` - `{string}`: name of the event.
       *   - `stopPropagation` - `{function=}`: calling `stopPropagation` function will cancel
       *     further event propagation (available only for events that were `$emit`-ed).
       *   - `preventDefault` - `{function}`: calling `preventDefault` sets `defaultPrevented` flag
       *     to true.
       *   - `defaultPrevented` - `{boolean}`: true if `preventDefault` was called.
       *
       * @param {string} name Event name to listen on.
       * @param {function(event, ...args)} listener Function to call when the event is emitted.
       * @returns {function()} Returns a deregistration function for this listener.
       */
$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]),c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,s(e,1,a))}},/**
       * @ngdoc method
       * @name $rootScope.Scope#$emit
       * @kind function
       *
       * @description
       * Dispatches an event `name` upwards through the scope hierarchy notifying the
       * registered {@link ng.$rootScope.Scope#$on} listeners.
       *
       * The event life cycle starts at the scope on which `$emit` was called. All
       * {@link ng.$rootScope.Scope#$on listeners} listening for `name` event on this scope get
       * notified. Afterwards, the event traverses upwards toward the root scope and calls all
       * registered listeners along the way. The event will stop propagating if one of the listeners
       * cancels it.
       *
       * Any exception emitted from the {@link ng.$rootScope.Scope#$on listeners} will be passed
       * onto the {@link ng.$exceptionHandler $exceptionHandler} service.
       *
       * @param {string} name Event name to emit.
       * @param {...*} args Optional one or more arguments which will be passed onto the event listeners.
       * @return {Object} Event object (see {@link ng.$rootScope.Scope#$on}).
       */
$emit:function(a,b){var c,d,e,f=[],g=this,h=!1,i={name:a,targetScope:g,stopPropagation:function(){h=!0},preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1},k=R([i],arguments,1);do{for(c=g.$$listeners[a]||f,i.currentScope=g,d=0,e=c.length;e>d;d++)
// if listeners were deregistered, defragment the array
if(c[d])try{
//allow all listeners attached to the current scope to run
c[d].apply(null,k)}catch(l){j(l)}else c.splice(d,1),d--,e--;
//if any listener on the current scope stops propagation, prevent bubbling
if(h)return i.currentScope=null,i;
//traverse upwards
g=g.$parent}while(g);return i.currentScope=null,i},/**
       * @ngdoc method
       * @name $rootScope.Scope#$broadcast
       * @kind function
       *
       * @description
       * Dispatches an event `name` downwards to all child scopes (and their children) notifying the
       * registered {@link ng.$rootScope.Scope#$on} listeners.
       *
       * The event life cycle starts at the scope on which `$broadcast` was called. All
       * {@link ng.$rootScope.Scope#$on listeners} listening for `name` event on this scope get
       * notified. Afterwards, the event propagates to all direct and indirect scopes of the current
       * scope and calls all registered listeners along the way. The event cannot be canceled.
       *
       * Any exception emitted from the {@link ng.$rootScope.Scope#$on listeners} will be passed
       * onto the {@link ng.$exceptionHandler $exceptionHandler} service.
       *
       * @param {string} name Event name to broadcast.
       * @param {...*} args Optional one or more arguments which will be passed onto the event listeners.
       * @return {Object} Event object, see {@link ng.$rootScope.Scope#$on}
       */
$broadcast:function(a,b){var c=this,d=c,e=c,f={name:a,targetScope:c,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1};if(!c.$$listenerCount[a])return f;
//down while you can, then up and next sibling or up and next sibling until back at root
for(var g,h,i,k=R([f],arguments,1);d=e;){for(f.currentScope=d,g=d.$$listeners[a]||[],h=0,i=g.length;i>h;h++)
// if listeners were deregistered, defragment the array
if(g[h])try{g[h].apply(null,k)}catch(l){j(l)}else g.splice(h,1),h--,i--;
// Insanity Warning: scope depth-first traversal
// yes, this code is a bit crazy, but it works and we have tests to prove it!
// this piece should be kept in sync with the traversal in $digest
// (though it differs due to having the extra check for $$listenerCount)
if(!(e=d.$$listenerCount[a]&&d.$$childHead||d!==c&&d.$$nextSibling))for(;d!==c&&!(e=d.$$nextSibling);)d=d.$parent}return f.currentScope=null,f}};var y=new n,z=y.$$asyncQueue=[],B=y.$$postDigestQueue=[],C=y.$$applyAsyncQueue=[];return y}]}/**
 * @description
 * Private service to sanitize uris for links and images. Used by $compile and $sanitize.
 */
function oc(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;/**
   * @description
   * Retrieves or overrides the default regular expression that is used for whitelisting of safe
   * urls during a[href] sanitization.
   *
   * The sanitization is a security measure aimed at prevent XSS attacks via html links.
   *
   * Any url about to be assigned to a[href] via data-binding is first normalized and turned into
   * an absolute url. Afterwards, the url is matched against the `aHrefSanitizationWhitelist`
   * regular expression. If a match is found, the original url is written into the dom. Otherwise,
   * the absolute url is prefixed with `'unsafe:'` string and only then is it written into the DOM.
   *
   * @param {RegExp=} regexp New regexp to whitelist urls with.
   * @returns {RegExp|ng.$compileProvider} Current RegExp if called without value or self for
   *    chaining otherwise.
   */
this.aHrefSanitizationWhitelist=function(b){return u(b)?(a=b,this):a},/**
   * @description
   * Retrieves or overrides the default regular expression that is used for whitelisting of safe
   * urls during img[src] sanitization.
   *
   * The sanitization is a security measure aimed at prevent XSS attacks via html links.
   *
   * Any url about to be assigned to img[src] via data-binding is first normalized and turned into
   * an absolute url. Afterwards, the url is matched against the `imgSrcSanitizationWhitelist`
   * regular expression. If a match is found, the original url is written into the dom. Otherwise,
   * the absolute url is prefixed with `'unsafe:'` string and only then is it written into the DOM.
   *
   * @param {RegExp=} regexp New regexp to whitelist urls with.
   * @returns {RegExp|ng.$compileProvider} Current RegExp if called without value or self for
   *    chaining otherwise.
   */
this.imgSrcSanitizationWhitelist=function(a){return u(a)?(b=a,this):b},this.$get=function(){return function(c,d){var e,f=d?b:a;return e=xc(c).href,""===e||e.match(f)?c:"unsafe:"+e}}}
// Helper functions follow.
function pc(a){if("self"===a)return a;if(x(a)){
// Strings match exactly except for 2 wildcards - '*' and '**'.
// '*' matches any character except those from the set ':/.?&'.
// '**' matches any character (like .* in a RegExp).
// More than 2 *'s raises an error as it's ill defined.
if(a.indexOf("***")>-1)throw af("iwcard","Illegal sequence *** in string matcher.  String: {0}",a);return a=Md(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),new RegExp("^"+a+"$")}if(B(a))
// The only other type of matcher allowed is a Regexp.
// Match entire URL / disallow partial matches.
// Flags are reset (i.e. no global, ignoreCase or multiline)
return new RegExp("^"+a.source+"$");throw af("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function qc(a){var b=[];return u(a)&&f(a,function(a){b.push(pc(a))}),b}/**
 * @ngdoc service
 * @name $sceDelegate
 * @kind function
 *
 * @description
 *
 * `$sceDelegate` is a service that is used by the `$sce` service to provide {@link ng.$sce Strict
 * Contextual Escaping (SCE)} services to AngularJS.
 *
 * Typically, you would configure or override the {@link ng.$sceDelegate $sceDelegate} instead of
 * the `$sce` service to customize the way Strict Contextual Escaping works in AngularJS.  This is
 * because, while the `$sce` provides numerous shorthand methods, etc., you really only need to
 * override 3 core functions (`trustAs`, `getTrusted` and `valueOf`) to replace the way things
 * work because `$sce` delegates to `$sceDelegate` for these operations.
 *
 * Refer {@link ng.$sceDelegateProvider $sceDelegateProvider} to configure this service.
 *
 * The default instance of `$sceDelegate` should work out of the box with little pain.  While you
 * can override it completely to change the behavior of `$sce`, the common case would
 * involve configuring the {@link ng.$sceDelegateProvider $sceDelegateProvider} instead by setting
 * your own whitelists and blacklists for trusting URLs used for loading AngularJS resources such as
 * templates.  Refer {@link ng.$sceDelegateProvider#resourceUrlWhitelist
 * $sceDelegateProvider.resourceUrlWhitelist} and {@link
 * ng.$sceDelegateProvider#resourceUrlBlacklist $sceDelegateProvider.resourceUrlBlacklist}
 */
/**
 * @ngdoc provider
 * @name $sceDelegateProvider
 * @description
 *
 * The `$sceDelegateProvider` provider allows developers to configure the {@link ng.$sceDelegate
 * $sceDelegate} service.  This allows one to get/set the whitelists and blacklists used to ensure
 * that the URLs used for sourcing Angular templates are safe.  Refer {@link
 * ng.$sceDelegateProvider#resourceUrlWhitelist $sceDelegateProvider.resourceUrlWhitelist} and
 * {@link ng.$sceDelegateProvider#resourceUrlBlacklist $sceDelegateProvider.resourceUrlBlacklist}
 *
 * For the general details about this service in Angular, read the main page for {@link ng.$sce
 * Strict Contextual Escaping (SCE)}.
 *
 * **Example**:  Consider the following case. <a name="example"></a>
 *
 * - your app is hosted at url `http://myapp.example.com/`
 * - but some of your templates are hosted on other domains you control such as
 *   `http://srv01.assets.example.com/`,  `http://srv02.assets.example.com/`, etc.
 * - and you have an open redirect at `http://myapp.example.com/clickThru?...`.
 *
 * Here is what a secure configuration for this scenario might look like:
 *
 * ```
 *  angular.module('myApp', []).config(function($sceDelegateProvider) {
 *    $sceDelegateProvider.resourceUrlWhitelist([
 *      // Allow same origin resource loads.
 *      'self',
 *      // Allow loading from our assets domain.  Notice the difference between * and **.
 *      'http://srv*.assets.example.com/**'
 *    ]);
 *
 *    // The blacklist overrides the whitelist so the open redirect here is blocked.
 *    $sceDelegateProvider.resourceUrlBlacklist([
 *      'http://myapp.example.com/clickThru**'
 *    ]);
 *  });
 * ```
 */
function rc(){this.SCE_CONTEXTS=bf;
// Resource URLs can also be trusted by policy.
var a=["self"],b=[];/**
   * @ngdoc method
   * @name $sceDelegateProvider#resourceUrlWhitelist
   * @kind function
   *
   * @param {Array=} whitelist When provided, replaces the resourceUrlWhitelist with the value
   *     provided.  This must be an array or null.  A snapshot of this array is used so further
   *     changes to the array are ignored.
   *
   *     Follow {@link ng.$sce#resourceUrlPatternItem this link} for a description of the items
   *     allowed in this array.
   *
   *     Note: **an empty whitelist array will block all URLs**!
   *
   * @return {Array} the currently set whitelist array.
   *
   * The **default value** when no whitelist has been explicitly set is `['self']` allowing only
   * same origin resource requests.
   *
   * @description
   * Sets/Gets the whitelist of trusted resource URLs.
   */
this.resourceUrlWhitelist=function(b){return arguments.length&&(a=qc(b)),a},/**
   * @ngdoc method
   * @name $sceDelegateProvider#resourceUrlBlacklist
   * @kind function
   *
   * @param {Array=} blacklist When provided, replaces the resourceUrlBlacklist with the value
   *     provided.  This must be an array or null.  A snapshot of this array is used so further
   *     changes to the array are ignored.
   *
   *     Follow {@link ng.$sce#resourceUrlPatternItem this link} for a description of the items
   *     allowed in this array.
   *
   *     The typical usage for the blacklist is to **block
   *     [open redirects](http://cwe.mitre.org/data/definitions/601.html)** served by your domain as
   *     these would otherwise be trusted but actually return content from the redirected domain.
   *
   *     Finally, **the blacklist overrides the whitelist** and has the final say.
   *
   * @return {Array} the currently set blacklist array.
   *
   * The **default value** when no whitelist has been explicitly set is the empty array (i.e. there
   * is no blacklist.)
   *
   * @description
   * Sets/Gets the blacklist of trusted resource URLs.
   */
this.resourceUrlBlacklist=function(a){return arguments.length&&(b=qc(a)),b},this.$get=["$injector",function(c){function d(a,b){return"self"===a?yc(b):!!a.exec(b.href)}function e(c){var e,f,g=xc(c.toString()),h=!1;
// Ensure that at least one item from the whitelist allows this url.
for(e=0,f=a.length;f>e;e++)if(d(a[e],g)){h=!0;break}if(h)
// Ensure that no item from the blacklist blocked this url.
for(e=0,f=b.length;f>e;e++)if(d(b[e],g)){h=!1;break}return h}function f(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};return a&&(b.prototype=new a),b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()},b}/**
     * @ngdoc method
     * @name $sceDelegate#trustAs
     *
     * @description
     * Returns an object that is trusted by angular for use in specified strict
     * contextual escaping contexts (such as ng-bind-html, ng-include, any src
     * attribute interpolation, any dom event binding attribute interpolation
     * such as for onclick,  etc.) that uses the provided value.
     * See {@link ng.$sce $sce} for enabling strict contextual escaping.
     *
     * @param {string} type The kind of context in which this value is safe for use.  e.g. url,
     *   resourceUrl, html, js and css.
     * @param {*} value The value that that should be considered trusted/safe.
     * @returns {*} A value that can be used to stand in for the provided `value` in places
     * where Angular expects a $sce.trustAs() return value.
     */
function g(a,b){var c=l.hasOwnProperty(a)?l[a]:null;if(!c)throw af("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",a,b);if(null===b||t(b)||""===b)return b;
// All the current contexts in SCE_CONTEXTS happen to be strings.  In order to avoid trusting
// mutable objects, we ensure here that the value passed in is actually a string.
if("string"!=typeof b)throw af("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",a);return new c(b)}/**
     * @ngdoc method
     * @name $sceDelegate#valueOf
     *
     * @description
     * If the passed parameter had been returned by a prior call to {@link ng.$sceDelegate#trustAs
     * `$sceDelegate.trustAs`}, returns the value that had been passed to {@link
     * ng.$sceDelegate#trustAs `$sceDelegate.trustAs`}.
     *
     * If the passed parameter is not a value that had been returned by {@link
     * ng.$sceDelegate#trustAs `$sceDelegate.trustAs`}, returns it as-is.
     *
     * @param {*} value The result of a prior {@link ng.$sceDelegate#trustAs `$sceDelegate.trustAs`}
     *      call or anything else.
     * @returns {*} The `value` that was originally provided to {@link ng.$sceDelegate#trustAs
     *     `$sceDelegate.trustAs`} if `value` is the result of such a call.  Otherwise, returns
     *     `value` unchanged.
     */
function h(a){return a instanceof k?a.$$unwrapTrustedValue():a}/**
     * @ngdoc method
     * @name $sceDelegate#getTrusted
     *
     * @description
     * Takes the result of a {@link ng.$sceDelegate#trustAs `$sceDelegate.trustAs`} call and
     * returns the originally supplied value if the queried context type is a supertype of the
     * created type.  If this condition isn't satisfied, throws an exception.
     *
     * @param {string} type The kind of context in which this value is to be used.
     * @param {*} maybeTrusted The result of a prior {@link ng.$sceDelegate#trustAs
     *     `$sceDelegate.trustAs`} call.
     * @returns {*} The value the was originally provided to {@link ng.$sceDelegate#trustAs
     *     `$sceDelegate.trustAs`} if valid in this context.  Otherwise, throws an exception.
     */
function i(a,b){if(null===b||t(b)||""===b)return b;var c=l.hasOwnProperty(a)?l[a]:null;if(c&&b instanceof c)return b.$$unwrapTrustedValue();
// If we get here, then we may only take one of two actions.
// 1. sanitize the value for the requested type, or
// 2. throw an exception.
if(a===bf.RESOURCE_URL){if(e(b))return b;throw af("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",b.toString())}if(a===bf.HTML)return j(b);throw af("unsafe","Attempting to use an unsafe value in a safe context.")}var j=function(a){throw af("unsafe","Attempting to use an unsafe value in a safe context.")};c.has("$sanitize")&&(j=c.get("$sanitize"));var k=f(),l={};return l[bf.HTML]=f(k),l[bf.CSS]=f(k),l[bf.URL]=f(k),l[bf.JS]=f(k),l[bf.RESOURCE_URL]=f(l[bf.URL]),{trustAs:g,getTrusted:i,valueOf:h}}]}/**
 * @ngdoc provider
 * @name $sceProvider
 * @description
 *
 * The $sceProvider provider allows developers to configure the {@link ng.$sce $sce} service.
 * -   enable/disable Strict Contextual Escaping (SCE) in a module
 * -   override the default implementation with a custom delegate
 *
 * Read more about {@link ng.$sce Strict Contextual Escaping (SCE)}.
 */
/* jshint maxlen: false*/
/**
 * @ngdoc service
 * @name $sce
 * @kind function
 *
 * @description
 *
 * `$sce` is a service that provides Strict Contextual Escaping services to AngularJS.
 *
 * # Strict Contextual Escaping
 *
 * Strict Contextual Escaping (SCE) is a mode in which AngularJS requires bindings in certain
 * contexts to result in a value that is marked as safe to use for that context.  One example of
 * such a context is binding arbitrary html controlled by the user via `ng-bind-html`.  We refer
 * to these contexts as privileged or SCE contexts.
 *
 * As of version 1.2, Angular ships with SCE enabled by default.
 *
 * Note:  When enabled (the default), IE<11 in quirks mode is not supported.  In this mode, IE<11 allow
 * one to execute arbitrary javascript by the use of the expression() syntax.  Refer
 * <http://blogs.msdn.com/b/ie/archive/2008/10/16/ending-expressions.aspx> to learn more about them.
 * You can ensure your document is in standards mode and not quirks mode by adding `<!doctype html>`
 * to the top of your HTML document.
 *
 * SCE assists in writing code in way that (a) is secure by default and (b) makes auditing for
 * security vulnerabilities such as XSS, clickjacking, etc. a lot easier.
 *
 * Here's an example of a binding in a privileged context:
 *
 * ```
 * <input ng-model="userHtml" aria-label="User input">
 * <div ng-bind-html="userHtml"></div>
 * ```
 *
 * Notice that `ng-bind-html` is bound to `userHtml` controlled by the user.  With SCE
 * disabled, this application allows the user to render arbitrary HTML into the DIV.
 * In a more realistic example, one may be rendering user comments, blog articles, etc. via
 * bindings.  (HTML is just one example of a context where rendering user controlled input creates
 * security vulnerabilities.)
 *
 * For the case of HTML, you might use a library, either on the client side, or on the server side,
 * to sanitize unsafe HTML before binding to the value and rendering it in the document.
 *
 * How would you ensure that every place that used these types of bindings was bound to a value that
 * was sanitized by your library (or returned as safe for rendering by your server?)  How can you
 * ensure that you didn't accidentally delete the line that sanitized the value, or renamed some
 * properties/fields and forgot to update the binding to the sanitized value?
 *
 * To be secure by default, you want to ensure that any such bindings are disallowed unless you can
 * determine that something explicitly says it's safe to use a value for binding in that
 * context.  You can then audit your code (a simple grep would do) to ensure that this is only done
 * for those values that you can easily tell are safe - because they were received from your server,
 * sanitized by your library, etc.  You can organize your codebase to help with this - perhaps
 * allowing only the files in a specific directory to do this.  Ensuring that the internal API
 * exposed by that code doesn't markup arbitrary values as safe then becomes a more manageable task.
 *
 * In the case of AngularJS' SCE service, one uses {@link ng.$sce#trustAs $sce.trustAs}
 * (and shorthand methods such as {@link ng.$sce#trustAsHtml $sce.trustAsHtml}, etc.) to
 * obtain values that will be accepted by SCE / privileged contexts.
 *
 *
 * ## How does it work?
 *
 * In privileged contexts, directives and code will bind to the result of {@link ng.$sce#getTrusted
 * $sce.getTrusted(context, value)} rather than to the value directly.  Directives use {@link
 * ng.$sce#parseAs $sce.parseAs} rather than `$parse` to watch attribute bindings, which performs the
 * {@link ng.$sce#getTrusted $sce.getTrusted} behind the scenes on non-constant literals.
 *
 * As an example, {@link ng.directive:ngBindHtml ngBindHtml} uses {@link
 * ng.$sce#parseAsHtml $sce.parseAsHtml(binding expression)}.  Here's the actual code (slightly
 * simplified):
 *
 * ```
 * var ngBindHtmlDirective = ['$sce', function($sce) {
 *   return function(scope, element, attr) {
 *     scope.$watch($sce.parseAsHtml(attr.ngBindHtml), function(value) {
 *       element.html(value || '');
 *     });
 *   };
 * }];
 * ```
 *
 * ## Impact on loading templates
 *
 * This applies both to the {@link ng.directive:ngInclude `ng-include`} directive as well as
 * `templateUrl`'s specified by {@link guide/directive directives}.
 *
 * By default, Angular only loads templates from the same domain and protocol as the application
 * document.  This is done by calling {@link ng.$sce#getTrustedResourceUrl
 * $sce.getTrustedResourceUrl} on the template URL.  To load templates from other domains and/or
 * protocols, you may either either {@link ng.$sceDelegateProvider#resourceUrlWhitelist whitelist
 * them} or {@link ng.$sce#trustAsResourceUrl wrap it} into a trusted value.
 *
 * *Please note*:
 * The browser's
 * [Same Origin Policy](https://code.google.com/p/browsersec/wiki/Part2#Same-origin_policy_for_XMLHttpRequest)
 * and [Cross-Origin Resource Sharing (CORS)](http://www.w3.org/TR/cors/)
 * policy apply in addition to this and may further restrict whether the template is successfully
 * loaded.  This means that without the right CORS policy, loading templates from a different domain
 * won't work on all browsers.  Also, loading templates from `file://` URL does not work on some
 * browsers.
 *
 * ## This feels like too much overhead
 *
 * It's important to remember that SCE only applies to interpolation expressions.
 *
 * If your expressions are constant literals, they're automatically trusted and you don't need to
 * call `$sce.trustAs` on them (remember to include the `ngSanitize` module) (e.g.
 * `<div ng-bind-html="'<b>implicitly trusted</b>'"></div>`) just works.
 *
 * Additionally, `a[href]` and `img[src]` automatically sanitize their URLs and do not pass them
 * through {@link ng.$sce#getTrusted $sce.getTrusted}.  SCE doesn't play a role here.
 *
 * The included {@link ng.$sceDelegate $sceDelegate} comes with sane defaults to allow you to load
 * templates in `ng-include` from your application's domain without having to even know about SCE.
 * It blocks loading templates from other domains or loading templates over http from an https
 * served document.  You can change these by setting your own custom {@link
 * ng.$sceDelegateProvider#resourceUrlWhitelist whitelists} and {@link
 * ng.$sceDelegateProvider#resourceUrlBlacklist blacklists} for matching such URLs.
 *
 * This significantly reduces the overhead.  It is far easier to pay the small overhead and have an
 * application that's secure and can be audited to verify that with much more ease than bolting
 * security onto an application later.
 *
 * <a name="contexts"></a>
 * ## What trusted context types are supported?
 *
 * | Context             | Notes          |
 * |---------------------|----------------|
 * | `$sce.HTML`         | For HTML that's safe to source into the application.  The {@link ng.directive:ngBindHtml ngBindHtml} directive uses this context for bindings. If an unsafe value is encountered and the {@link ngSanitize $sanitize} module is present this will sanitize the value instead of throwing an error. |
 * | `$sce.CSS`          | For CSS that's safe to source into the application.  Currently unused.  Feel free to use it in your own directives. |
 * | `$sce.URL`          | For URLs that are safe to follow as links.  Currently unused (`<a href=` and `<img src=` sanitize their urls and don't constitute an SCE context. |
 * | `$sce.RESOURCE_URL` | For URLs that are not only safe to follow as links, but whose contents are also safe to include in your application.  Examples include `ng-include`, `src` / `ngSrc` bindings for tags other than `IMG` (e.g. `IFRAME`, `OBJECT`, etc.)  <br><br>Note that `$sce.RESOURCE_URL` makes a stronger statement about the URL than `$sce.URL` does and therefore contexts requiring values trusted for `$sce.RESOURCE_URL` can be used anywhere that values trusted for `$sce.URL` are required. |
 * | `$sce.JS`           | For JavaScript that is safe to execute in your application's context.  Currently unused.  Feel free to use it in your own directives. |
 *
 * ## Format of items in {@link ng.$sceDelegateProvider#resourceUrlWhitelist resourceUrlWhitelist}/{@link ng.$sceDelegateProvider#resourceUrlBlacklist Blacklist} <a name="resourceUrlPatternItem"></a>
 *
 *  Each element in these arrays must be one of the following:
 *
 *  - **'self'**
 *    - The special **string**, `'self'`, can be used to match against all URLs of the **same
 *      domain** as the application document using the **same protocol**.
 *  - **String** (except the special value `'self'`)
 *    - The string is matched against the full *normalized / absolute URL* of the resource
 *      being tested (substring matches are not good enough.)
 *    - There are exactly **two wildcard sequences** - `*` and `**`.  All other characters
 *      match themselves.
 *    - `*`: matches zero or more occurrences of any character other than one of the following 6
 *      characters: '`:`', '`/`', '`.`', '`?`', '`&`' and '`;`'.  It's a useful wildcard for use
 *      in a whitelist.
 *    - `**`: matches zero or more occurrences of *any* character.  As such, it's not
 *      appropriate for use in a scheme, domain, etc. as it would match too much.  (e.g.
 *      http://**.example.com/ would match http://evil.com/?ignore=.example.com/ and that might
 *      not have been the intention.)  Its usage at the very end of the path is ok.  (e.g.
 *      http://foo.example.com/templates/**).
 *  - **RegExp** (*see caveat below*)
 *    - *Caveat*:  While regular expressions are powerful and offer great flexibility,  their syntax
 *      (and all the inevitable escaping) makes them *harder to maintain*.  It's easy to
 *      accidentally introduce a bug when one updates a complex expression (imho, all regexes should
 *      have good test coverage).  For instance, the use of `.` in the regex is correct only in a
 *      small number of cases.  A `.` character in the regex used when matching the scheme or a
 *      subdomain could be matched against a `:` or literal `.` that was likely not intended.   It
 *      is highly recommended to use the string patterns and only fall back to regular expressions
 *      as a last resort.
 *    - The regular expression must be an instance of RegExp (i.e. not a string.)  It is
 *      matched against the **entire** *normalized / absolute URL* of the resource being tested
 *      (even when the RegExp did not have the `^` and `$` codes.)  In addition, any flags
 *      present on the RegExp (such as multiline, global, ignoreCase) are ignored.
 *    - If you are generating your JavaScript from some other templating engine (not
 *      recommended, e.g. in issue [#4006](https://github.com/angular/angular.js/issues/4006)),
 *      remember to escape your regular expression (and be aware that you might need more than
 *      one level of escaping depending on your templating engine and the way you interpolated
 *      the value.)  Do make use of your platform's escaping mechanism as it might be good
 *      enough before coding your own.  E.g. Ruby has
 *      [Regexp.escape(str)](http://www.ruby-doc.org/core-2.0.0/Regexp.html#method-c-escape)
 *      and Python has [re.escape](http://docs.python.org/library/re.html#re.escape).
 *      Javascript lacks a similar built in function for escaping.  Take a look at Google
 *      Closure library's [goog.string.regExpEscape(s)](
 *      http://docs.closure-library.googlecode.com/git/closure_goog_string_string.js.source.html#line962).
 *
 * Refer {@link ng.$sceDelegateProvider $sceDelegateProvider} for an example.
 *
 * ## Show me an example using SCE.
 *
 * <example module="mySceApp" deps="angular-sanitize.js">
 * <file name="index.html">
 *   <div ng-controller="AppController as myCtrl">
 *     <i ng-bind-html="myCtrl.explicitlyTrustedHtml" id="explicitlyTrustedHtml"></i><br><br>
 *     <b>User comments</b><br>
 *     By default, HTML that isn't explicitly trusted (e.g. Alice's comment) is sanitized when
 *     $sanitize is available.  If $sanitize isn't available, this results in an error instead of an
 *     exploit.
 *     <div class="well">
 *       <div ng-repeat="userComment in myCtrl.userComments">
 *         <b>{{userComment.name}}</b>:
 *         <span ng-bind-html="userComment.htmlComment" class="htmlComment"></span>
 *         <br>
 *       </div>
 *     </div>
 *   </div>
 * </file>
 *
 * <file name="script.js">
 *   angular.module('mySceApp', ['ngSanitize'])
 *     .controller('AppController', ['$http', '$templateCache', '$sce',
 *       function($http, $templateCache, $sce) {
 *         var self = this;
 *         $http.get("test_data.json", {cache: $templateCache}).success(function(userComments) {
 *           self.userComments = userComments;
 *         });
 *         self.explicitlyTrustedHtml = $sce.trustAsHtml(
 *             '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
 *             'sanitization.&quot;">Hover over this text.</span>');
 *       }]);
 * </file>
 *
 * <file name="test_data.json">
 * [
 *   { "name": "Alice",
 *     "htmlComment":
 *         "<span onmouseover='this.textContent=\"PWN3D!\"'>Is <i>anyone</i> reading this?</span>"
 *   },
 *   { "name": "Bob",
 *     "htmlComment": "<i>Yes!</i>  Am I the only other one?"
 *   }
 * ]
 * </file>
 *
 * <file name="protractor.js" type="protractor">
 *   describe('SCE doc demo', function() {
 *     it('should sanitize untrusted values', function() {
 *       expect(element.all(by.css('.htmlComment')).first().getInnerHtml())
 *           .toBe('<span>Is <i>anyone</i> reading this?</span>');
 *     });
 *
 *     it('should NOT sanitize explicitly trusted values', function() {
 *       expect(element(by.id('explicitlyTrustedHtml')).getInnerHtml()).toBe(
 *           '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
 *           'sanitization.&quot;">Hover over this text.</span>');
 *     });
 *   });
 * </file>
 * </example>
 *
 *
 *
 * ## Can I disable SCE completely?
 *
 * Yes, you can.  However, this is strongly discouraged.  SCE gives you a lot of security benefits
 * for little coding overhead.  It will be much harder to take an SCE disabled application and
 * either secure it on your own or enable SCE at a later stage.  It might make sense to disable SCE
 * for cases where you have a lot of existing code that was written before SCE was introduced and
 * you're migrating them a module at a time.
 *
 * That said, here's how you can completely disable SCE:
 *
 * ```
 * angular.module('myAppWithSceDisabledmyApp', []).config(function($sceProvider) {
 *   // Completely disable SCE.  For demonstration purposes only!
 *   // Do not use in new projects.
 *   $sceProvider.enabled(false);
 * });
 * ```
 *
 */
/* jshint maxlen: 100 */
function sc(){var a=!0;/**
   * @ngdoc method
   * @name $sceProvider#enabled
   * @kind function
   *
   * @param {boolean=} value If provided, then enables/disables SCE.
   * @return {boolean} true if SCE is enabled, false otherwise.
   *
   * @description
   * Enables/disables SCE and returns the current value.
   */
this.enabled=function(b){return arguments.length&&(a=!!b),a},/* Design notes on the default implementation for SCE.
   *
   * The API contract for the SCE delegate
   * -------------------------------------
   * The SCE delegate object must provide the following 3 methods:
   *
   * - trustAs(contextEnum, value)
   *     This method is used to tell the SCE service that the provided value is OK to use in the
   *     contexts specified by contextEnum.  It must return an object that will be accepted by
   *     getTrusted() for a compatible contextEnum and return this value.
   *
   * - valueOf(value)
   *     For values that were not produced by trustAs(), return them as is.  For values that were
   *     produced by trustAs(), return the corresponding input value to trustAs.  Basically, if
   *     trustAs is wrapping the given values into some type, this operation unwraps it when given
   *     such a value.
   *
   * - getTrusted(contextEnum, value)
   *     This function should return the a value that is safe to use in the context specified by
   *     contextEnum or throw and exception otherwise.
   *
   * NOTE: This contract deliberately does NOT state that values returned by trustAs() must be
   * opaque or wrapped in some holder object.  That happens to be an implementation detail.  For
   * instance, an implementation could maintain a registry of all trusted objects by context.  In
   * such a case, trustAs() would return the same object that was passed in.  getTrusted() would
   * return the same object passed in if it was found in the registry under a compatible context or
   * throw an exception otherwise.  An implementation might only wrap values some of the time based
   * on some criteria.  getTrusted() might return a value and not throw an exception for special
   * constants or objects even if not wrapped.  All such implementations fulfill this contract.
   *
   *
   * A note on the inheritance model for SCE contexts
   * ------------------------------------------------
   * I've used inheritance and made RESOURCE_URL wrapped types a subtype of URL wrapped types.  This
   * is purely an implementation details.
   *
   * The contract is simply this:
   *
   *     getTrusted($sce.RESOURCE_URL, value) succeeding implies that getTrusted($sce.URL, value)
   *     will also succeed.
   *
   * Inheritance happens to capture this in a natural way.  In some future, we
   * may not use inheritance anymore.  That is OK because no code outside of
   * sce.js and sceSpecs.js would need to be aware of this detail.
   */
this.$get=["$parse","$sceDelegate",function(b,c){
// Prereq: Ensure that we're not running in IE<11 quirks mode.  In that mode, IE < 11 allow
// the "expression(javascript expression)" syntax which is insecure.
if(a&&8>wd)throw af("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.");var d=P(bf);/**
     * @ngdoc method
     * @name $sce#isEnabled
     * @kind function
     *
     * @return {Boolean} true if SCE is enabled, false otherwise.  If you want to set the value, you
     * have to do it at module config time on {@link ng.$sceProvider $sceProvider}.
     *
     * @description
     * Returns a boolean indicating if SCE is enabled.
     */
d.isEnabled=function(){return a},d.trustAs=c.trustAs,d.getTrusted=c.getTrusted,d.valueOf=c.valueOf,a||(d.trustAs=d.getTrusted=function(a,b){return b},d.valueOf=q),/**
     * @ngdoc method
     * @name $sce#parseAs
     *
     * @description
     * Converts Angular {@link guide/expression expression} into a function.  This is like {@link
     * ng.$parse $parse} and is identical when the expression is a literal constant.  Otherwise, it
     * wraps the expression in a call to {@link ng.$sce#getTrusted $sce.getTrusted(*type*,
     * *result*)}
     *
     * @param {string} type The kind of SCE context in which this result will be used.
     * @param {string} expression String expression to compile.
     * @returns {function(context, locals)} a function which represents the compiled expression:
     *
     *    * `context` – `{object}` – an object against which any expressions embedded in the strings
     *      are evaluated against (typically a scope object).
     *    * `locals` – `{object=}` – local variables context object, useful for overriding values in
     *      `context`.
     */
d.parseAs=function(a,c){var e=b(c);return e.literal&&e.constant?e:b(c,function(b){return d.getTrusted(a,b)})};/**
     * @ngdoc method
     * @name $sce#trustAs
     *
     * @description
     * Delegates to {@link ng.$sceDelegate#trustAs `$sceDelegate.trustAs`}.  As such,
     * returns an object that is trusted by angular for use in specified strict contextual
     * escaping contexts (such as ng-bind-html, ng-include, any src attribute
     * interpolation, any dom event binding attribute interpolation such as for onclick,  etc.)
     * that uses the provided value.  See * {@link ng.$sce $sce} for enabling strict contextual
     * escaping.
     *
     * @param {string} type The kind of context in which this value is safe for use.  e.g. url,
     *   resourceUrl, html, js and css.
     * @param {*} value The value that that should be considered trusted/safe.
     * @returns {*} A value that can be used to stand in for the provided `value` in places
     * where Angular expects a $sce.trustAs() return value.
     */
/**
     * @ngdoc method
     * @name $sce#trustAsHtml
     *
     * @description
     * Shorthand method.  `$sce.trustAsHtml(value)` →
     *     {@link ng.$sceDelegate#trustAs `$sceDelegate.trustAs($sce.HTML, value)`}
     *
     * @param {*} value The value to trustAs.
     * @returns {*} An object that can be passed to {@link ng.$sce#getTrustedHtml
     *     $sce.getTrustedHtml(value)} to obtain the original value.  (privileged directives
     *     only accept expressions that are either literal constants or are the
     *     return value of {@link ng.$sce#trustAs $sce.trustAs}.)
     */
/**
     * @ngdoc method
     * @name $sce#trustAsUrl
     *
     * @description
     * Shorthand method.  `$sce.trustAsUrl(value)` →
     *     {@link ng.$sceDelegate#trustAs `$sceDelegate.trustAs($sce.URL, value)`}
     *
     * @param {*} value The value to trustAs.
     * @returns {*} An object that can be passed to {@link ng.$sce#getTrustedUrl
     *     $sce.getTrustedUrl(value)} to obtain the original value.  (privileged directives
     *     only accept expressions that are either literal constants or are the
     *     return value of {@link ng.$sce#trustAs $sce.trustAs}.)
     */
/**
     * @ngdoc method
     * @name $sce#trustAsResourceUrl
     *
     * @description
     * Shorthand method.  `$sce.trustAsResourceUrl(value)` →
     *     {@link ng.$sceDelegate#trustAs `$sceDelegate.trustAs($sce.RESOURCE_URL, value)`}
     *
     * @param {*} value The value to trustAs.
     * @returns {*} An object that can be passed to {@link ng.$sce#getTrustedResourceUrl
     *     $sce.getTrustedResourceUrl(value)} to obtain the original value.  (privileged directives
     *     only accept expressions that are either literal constants or are the return
     *     value of {@link ng.$sce#trustAs $sce.trustAs}.)
     */
/**
     * @ngdoc method
     * @name $sce#trustAsJs
     *
     * @description
     * Shorthand method.  `$sce.trustAsJs(value)` →
     *     {@link ng.$sceDelegate#trustAs `$sceDelegate.trustAs($sce.JS, value)`}
     *
     * @param {*} value The value to trustAs.
     * @returns {*} An object that can be passed to {@link ng.$sce#getTrustedJs
     *     $sce.getTrustedJs(value)} to obtain the original value.  (privileged directives
     *     only accept expressions that are either literal constants or are the
     *     return value of {@link ng.$sce#trustAs $sce.trustAs}.)
     */
/**
     * @ngdoc method
     * @name $sce#getTrusted
     *
     * @description
     * Delegates to {@link ng.$sceDelegate#getTrusted `$sceDelegate.getTrusted`}.  As such,
     * takes the result of a {@link ng.$sce#trustAs `$sce.trustAs`}() call and returns the
     * originally supplied value if the queried context type is a supertype of the created type.
     * If this condition isn't satisfied, throws an exception.
     *
     * @param {string} type The kind of context in which this value is to be used.
     * @param {*} maybeTrusted The result of a prior {@link ng.$sce#trustAs `$sce.trustAs`}
     *                         call.
     * @returns {*} The value the was originally provided to
     *              {@link ng.$sce#trustAs `$sce.trustAs`} if valid in this context.
     *              Otherwise, throws an exception.
     */
/**
     * @ngdoc method
     * @name $sce#getTrustedHtml
     *
     * @description
     * Shorthand method.  `$sce.getTrustedHtml(value)` →
     *     {@link ng.$sceDelegate#getTrusted `$sceDelegate.getTrusted($sce.HTML, value)`}
     *
     * @param {*} value The value to pass to `$sce.getTrusted`.
     * @returns {*} The return value of `$sce.getTrusted($sce.HTML, value)`
     */
/**
     * @ngdoc method
     * @name $sce#getTrustedCss
     *
     * @description
     * Shorthand method.  `$sce.getTrustedCss(value)` →
     *     {@link ng.$sceDelegate#getTrusted `$sceDelegate.getTrusted($sce.CSS, value)`}
     *
     * @param {*} value The value to pass to `$sce.getTrusted`.
     * @returns {*} The return value of `$sce.getTrusted($sce.CSS, value)`
     */
/**
     * @ngdoc method
     * @name $sce#getTrustedUrl
     *
     * @description
     * Shorthand method.  `$sce.getTrustedUrl(value)` →
     *     {@link ng.$sceDelegate#getTrusted `$sceDelegate.getTrusted($sce.URL, value)`}
     *
     * @param {*} value The value to pass to `$sce.getTrusted`.
     * @returns {*} The return value of `$sce.getTrusted($sce.URL, value)`
     */
/**
     * @ngdoc method
     * @name $sce#getTrustedResourceUrl
     *
     * @description
     * Shorthand method.  `$sce.getTrustedResourceUrl(value)` →
     *     {@link ng.$sceDelegate#getTrusted `$sceDelegate.getTrusted($sce.RESOURCE_URL, value)`}
     *
     * @param {*} value The value to pass to `$sceDelegate.getTrusted`.
     * @returns {*} The return value of `$sce.getTrusted($sce.RESOURCE_URL, value)`
     */
/**
     * @ngdoc method
     * @name $sce#getTrustedJs
     *
     * @description
     * Shorthand method.  `$sce.getTrustedJs(value)` →
     *     {@link ng.$sceDelegate#getTrusted `$sceDelegate.getTrusted($sce.JS, value)`}
     *
     * @param {*} value The value to pass to `$sce.getTrusted`.
     * @returns {*} The return value of `$sce.getTrusted($sce.JS, value)`
     */
/**
     * @ngdoc method
     * @name $sce#parseAsHtml
     *
     * @description
     * Shorthand method.  `$sce.parseAsHtml(expression string)` →
     *     {@link ng.$sce#parseAs `$sce.parseAs($sce.HTML, value)`}
     *
     * @param {string} expression String expression to compile.
     * @returns {function(context, locals)} a function which represents the compiled expression:
     *
     *    * `context` – `{object}` – an object against which any expressions embedded in the strings
     *      are evaluated against (typically a scope object).
     *    * `locals` – `{object=}` – local variables context object, useful for overriding values in
     *      `context`.
     */
/**
     * @ngdoc method
     * @name $sce#parseAsCss
     *
     * @description
     * Shorthand method.  `$sce.parseAsCss(value)` →
     *     {@link ng.$sce#parseAs `$sce.parseAs($sce.CSS, value)`}
     *
     * @param {string} expression String expression to compile.
     * @returns {function(context, locals)} a function which represents the compiled expression:
     *
     *    * `context` – `{object}` – an object against which any expressions embedded in the strings
     *      are evaluated against (typically a scope object).
     *    * `locals` – `{object=}` – local variables context object, useful for overriding values in
     *      `context`.
     */
/**
     * @ngdoc method
     * @name $sce#parseAsUrl
     *
     * @description
     * Shorthand method.  `$sce.parseAsUrl(value)` →
     *     {@link ng.$sce#parseAs `$sce.parseAs($sce.URL, value)`}
     *
     * @param {string} expression String expression to compile.
     * @returns {function(context, locals)} a function which represents the compiled expression:
     *
     *    * `context` – `{object}` – an object against which any expressions embedded in the strings
     *      are evaluated against (typically a scope object).
     *    * `locals` – `{object=}` – local variables context object, useful for overriding values in
     *      `context`.
     */
/**
     * @ngdoc method
     * @name $sce#parseAsResourceUrl
     *
     * @description
     * Shorthand method.  `$sce.parseAsResourceUrl(value)` →
     *     {@link ng.$sce#parseAs `$sce.parseAs($sce.RESOURCE_URL, value)`}
     *
     * @param {string} expression String expression to compile.
     * @returns {function(context, locals)} a function which represents the compiled expression:
     *
     *    * `context` – `{object}` – an object against which any expressions embedded in the strings
     *      are evaluated against (typically a scope object).
     *    * `locals` – `{object=}` – local variables context object, useful for overriding values in
     *      `context`.
     */
/**
     * @ngdoc method
     * @name $sce#parseAsJs
     *
     * @description
     * Shorthand method.  `$sce.parseAsJs(value)` →
     *     {@link ng.$sce#parseAs `$sce.parseAs($sce.JS, value)`}
     *
     * @param {string} expression String expression to compile.
     * @returns {function(context, locals)} a function which represents the compiled expression:
     *
     *    * `context` – `{object}` – an object against which any expressions embedded in the strings
     *      are evaluated against (typically a scope object).
     *    * `locals` – `{object=}` – local variables context object, useful for overriding values in
     *      `context`.
     */
// Shorthand delegations.
var e=d.parseAs,g=d.getTrusted,h=d.trustAs;return f(bf,function(a,b){var c=rd(b);d[wa("parse_as_"+c)]=function(b){return e(a,b)},d[wa("get_trusted_"+c)]=function(b){return g(a,b)},d[wa("trust_as_"+c)]=function(b){return h(a,b)}}),d}]}/**
 * !!! This is an undocumented "private" service !!!
 *
 * @name $sniffer
 * @requires $window
 * @requires $document
 *
 * @property {boolean} history Does the browser support html5 history api ?
 * @property {boolean} transitions Does the browser support CSS transition events ?
 * @property {boolean} animations Does the browser support CSS animation events ?
 *
 * @description
 * This is very simple implementation of testing browser's features.
 */
function tc(){this.$get=["$window","$document",function(a,b){var c,d,e={},f=n((/android (\d+)/.exec(rd((a.navigator||{}).userAgent))||[])[1]),g=/Boxee/i.test((a.navigator||{}).userAgent),h=b[0]||{},i=/^(Moz|webkit|ms)(?=[A-Z])/,j=h.body&&h.body.style,k=!1,l=!1;if(j){for(var m in j)if(d=i.exec(m)){c=d[0],c=c.substr(0,1).toUpperCase()+c.substr(1);break}c||(c="WebkitOpacity"in j&&"webkit"),k=!!("transition"in j||c+"Transition"in j),l=!!("animation"in j||c+"Animation"in j),!f||k&&l||(k=x(j.webkitTransition),l=x(j.webkitAnimation))}return{
// Android has history.pushState, but it does not update location correctly
// so let's not use the history API at all.
// http://code.google.com/p/android/issues/detail?id=17471
// https://github.com/angular/angular.js/issues/904
// older webkit browser (533.9) on Boxee box has exactly the same problem as Android has
// so let's not use the history API also
// We are purposefully using `!(android < 4)` to cover the case when `android` is undefined
// jshint -W018
history:!(!a.history||!a.history.pushState||4>f||g),
// jshint +W018
hasEvent:function(a){
// IE9 implements 'input' event it's so fubared that we rather pretend that it doesn't have
// it. In particular the event is not fired when backspace or delete key are pressed or
// when cut operation is performed.
// IE10+ implements 'input' event but it erroneously fires under various situations,
// e.g. when placeholder changes, or a form is focused.
if("input"===a&&11>=wd)return!1;if(t(e[a])){var b=h.createElement("div");e[a]="on"+a in b}return e[a]},csp:Nd(),vendorPrefix:c,transitions:k,animations:l,android:f}}]}/**
 * @ngdoc service
 * @name $templateRequest
 *
 * @description
 * The `$templateRequest` service runs security checks then downloads the provided template using
 * `$http` and, upon success, stores the contents inside of `$templateCache`. If the HTTP request
 * fails or the response data of the HTTP request is empty, a `$compile` error will be thrown (the
 * exception can be thwarted by setting the 2nd parameter of the function to true). Note that the
 * contents of `$templateCache` are trusted, so the call to `$sce.getTrustedUrl(tpl)` is omitted
 * when `tpl` is of type string and `$templateCache` has the matching entry.
 *
 * @param {string|TrustedResourceUrl} tpl The HTTP request template URL
 * @param {boolean=} ignoreRequestError Whether or not to ignore the exception when the request fails or the template is empty
 *
 * @return {Promise} a promise for the HTTP response data of the given URL.
 *
 * @property {number} totalPendingRequests total amount of pending template requests being downloaded.
 */
function uc(){this.$get=["$templateCache","$http","$q","$sce",function(a,b,c,d){function e(f,g){function h(a){if(!g)throw Be("tpload","Failed to load template: {0} (HTTP status: {1} {2})",f,a.status,a.statusText);return c.reject(a)}e.totalPendingRequests++,
// We consider the template cache holds only trusted templates, so
// there's no need to go through whitelisting again for keys that already
// are included in there. This also makes Angular accept any script
// directive, no matter its name. However, we still need to unwrap trusted
// types.
x(f)&&a.get(f)||(f=d.getTrustedResourceUrl(f));var i=b.defaults&&b.defaults.transformResponse;Jd(i)?i=i.filter(function(a){return a!==tb}):i===tb&&(i=null);var j={cache:a,transformResponse:i};return b.get(f,j)["finally"](function(){e.totalPendingRequests--}).then(function(b){return a.put(f,b.data),b.data},h)}return e.totalPendingRequests=0,e}]}function vc(){this.$get=["$rootScope","$browser","$location",function(a,b,c){/**
     * @name $testability
     *
     * @description
     * The private $$testability service provides a collection of methods for use when debugging
     * or by automated test and debugging tools.
     */
var d={};/**
     * @name $$testability#findBindings
     *
     * @description
     * Returns an array of elements that are bound (via ng-bind or {{}})
     * to expressions matching the input.
     *
     * @param {Element} element The element root to search from.
     * @param {string} expression The binding expression to match.
     * @param {boolean} opt_exactMatch If true, only returns exact matches
     *     for the expression. Filters and whitespace are ignored.
     */
/**
     * @name $$testability#findModels
     *
     * @description
     * Returns an array of elements that are two-way found via ng-model to
     * expressions matching the input.
     *
     * @param {Element} element The element root to search from.
     * @param {string} expression The model expression to match.
     * @param {boolean} opt_exactMatch If true, only returns exact matches
     *     for the expression.
     */
/**
     * @name $$testability#getLocation
     *
     * @description
     * Shortcut for getting the location in a browser agnostic way. Returns
     *     the path, search, and hash. (e.g. /path?a=b#hash)
     */
/**
     * @name $$testability#setLocation
     *
     * @description
     * Shortcut for navigating to a location without doing a full page reload.
     *
     * @param {string} url The location url (path, search and hash,
     *     e.g. /path?a=b#hash) to go to.
     */
/**
     * @name $$testability#whenStable
     *
     * @description
     * Calls the callback when $timeout and $http requests are completed.
     *
     * @param {function} callback
     */
return d.findBindings=function(a,b,c){var d=a.getElementsByClassName("ng-binding"),e=[];return f(d,function(a){var d=Gd.element(a).data("$binding");d&&f(d,function(d){if(c){var f=new RegExp("(^|\\s)"+Md(b)+"(\\s|\\||$)");f.test(d)&&e.push(a)}else-1!=d.indexOf(b)&&e.push(a)})}),e},d.findModels=function(a,b,c){for(var d=["ng-","data-ng-","ng\\:"],e=0;e<d.length;++e){var f=c?"=":"*=",g="["+d[e]+"model"+f+'"'+b+'"]',h=a.querySelectorAll(g);if(h.length)return h}},d.getLocation=function(){return c.url()},d.setLocation=function(b){b!==c.url()&&(c.url(b),a.$digest())},d.whenStable=function(a){b.notifyWhenNoOutstandingRequests(a)},d}]}function wc(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,c,d,e){/**
      * @ngdoc service
      * @name $timeout
      *
      * @description
      * Angular's wrapper for `window.setTimeout`. The `fn` function is wrapped into a try/catch
      * block and delegates any exceptions to
      * {@link ng.$exceptionHandler $exceptionHandler} service.
      *
      * The return value of calling `$timeout` is a promise, which will be resolved when
      * the delay has passed and the timeout function, if provided, is executed.
      *
      * To cancel a timeout request, call `$timeout.cancel(promise)`.
      *
      * In tests you can use {@link ngMock.$timeout `$timeout.flush()`} to
      * synchronously flush the queue of deferred functions.
      *
      * If you only want a promise that will be resolved after some specified delay
      * then you can call `$timeout` without the `fn` function.
      *
      * @param {function()=} fn A function, whose execution should be delayed.
      * @param {number=} [delay=0] Delay in milliseconds.
      * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise
      *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.
      * @param {...*=} Pass additional parameters to the executed function.
      * @returns {Promise} Promise that will be resolved when the timeout is reached. The value this
      *   promise will be resolved with is the return value of the `fn` function.
      *
      */
function f(f,h,i){A(f)||(i=h,h=f,f=p);var j,k=S(arguments,3),l=u(i)&&!i,m=(l?d:c).defer(),n=m.promise;return j=b.defer(function(){try{m.resolve(f.apply(null,k))}catch(b){m.reject(b),e(b)}finally{delete g[n.$$timeoutId]}l||a.$apply()},h),n.$$timeoutId=j,g[j]=m,n}var g={};/**
      * @ngdoc method
      * @name $timeout#cancel
      *
      * @description
      * Cancels a task associated with the `promise`. As a result of this, the promise will be
      * resolved with a rejection.
      *
      * @param {Promise=} promise Promise returned by the `$timeout` function.
      * @returns {boolean} Returns `true` if the task hasn't executed yet and was successfully
      *   canceled.
      */
return f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):!1},f}]}/**
 *
 * Implementation Notes for non-IE browsers
 * ----------------------------------------
 * Assigning a URL to the href property of an anchor DOM node, even one attached to the DOM,
 * results both in the normalizing and parsing of the URL.  Normalizing means that a relative
 * URL will be resolved into an absolute URL in the context of the application document.
 * Parsing means that the anchor node's host, hostname, protocol, port, pathname and related
 * properties are all populated to reflect the normalized URL.  This approach has wide
 * compatibility - Safari 1+, Mozilla 1+, Opera 7+,e etc.  See
 * http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *
 * Implementation Notes for IE
 * ---------------------------
 * IE <= 10 normalizes the URL when assigned to the anchor node similar to the other
 * browsers.  However, the parsed components will not be set if the URL assigned did not specify
 * them.  (e.g. if you assign a.href = "foo", then a.protocol, a.host, etc. will be empty.)  We
 * work around that by performing the parsing in a 2nd step by taking a previously normalized
 * URL (e.g. by assigning to a.href) and assigning it a.href again.  This correctly populates the
 * properties such as protocol, hostname, port, etc.
 *
 * References:
 *   http://developer.mozilla.org/en-US/docs/Web/API/HTMLAnchorElement
 *   http://www.aptana.com/reference/html/api/HTMLAnchorElement.html
 *   http://url.spec.whatwg.org/#urlutils
 *   https://github.com/angular/angular.js/pull/2902
 *   http://james.padolsey.com/javascript/parsing-urls-with-the-dom/
 *
 * @kind function
 * @param {string} url The URL to be parsed.
 * @description Normalizes and parses a URL.
 * @returns {object} Returns the normalized URL as a dictionary.
 *
 *   | member name   | Description    |
 *   |---------------|----------------|
 *   | href          | A normalized version of the provided URL if it was not an absolute URL |
 *   | protocol      | The protocol including the trailing colon                              |
 *   | host          | The host and port (if the port is non-default) of the normalizedUrl    |
 *   | search        | The search params, minus the question mark                             |
 *   | hash          | The hash string, minus the hash symbol
 *   | hostname      | The hostname
 *   | port          | The port, without ":"
 *   | pathname      | The pathname, beginning with "/"
 *
 */
function xc(a){var b=a;
// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
// Normalize before parse.  Refer Implementation Notes on why this is
// done in two steps on IE.
return wd&&(cf.setAttribute("href",b),b=cf.href),cf.setAttribute("href",b),{href:cf.href,protocol:cf.protocol?cf.protocol.replace(/:$/,""):"",host:cf.host,search:cf.search?cf.search.replace(/^\?/,""):"",hash:cf.hash?cf.hash.replace(/^#/,""):"",hostname:cf.hostname,port:cf.port,pathname:"/"===cf.pathname.charAt(0)?cf.pathname:"/"+cf.pathname}}/**
 * Parse a request URL and determine whether this is a same-origin request as the application document.
 *
 * @param {string|object} requestUrl The url of the request as a string that will be resolved
 * or a parsed URL object.
 * @returns {boolean} Whether the request is for the same origin as the application document.
 */
function yc(a){var b=x(a)?xc(a):a;return b.protocol===df.protocol&&b.host===df.host}/**
 * @ngdoc service
 * @name $window
 *
 * @description
 * A reference to the browser's `window` object. While `window`
 * is globally available in JavaScript, it causes testability problems, because
 * it is a global variable. In angular we always refer to it through the
 * `$window` service, so it may be overridden, removed or mocked for testing.
 *
 * Expressions, like the one defined for the `ngClick` directive in the example
 * below, are evaluated with respect to the current scope.  Therefore, there is
 * no risk of inadvertently coding in a dependency on a global value in such an
 * expression.
 *
 * @example
   <example module="windowExample">
     <file name="index.html">
       <script>
         angular.module('windowExample', [])
           .controller('ExampleController', ['$scope', '$window', function($scope, $window) {
             $scope.greeting = 'Hello, World!';
             $scope.doGreeting = function(greeting) {
               $window.alert(greeting);
             };
           }]);
       </script>
       <div ng-controller="ExampleController">
         <input type="text" ng-model="greeting" aria-label="greeting" />
         <button ng-click="doGreeting(greeting)">ALERT</button>
       </div>
     </file>
     <file name="protractor.js" type="protractor">
      it('should display the greeting in the input box', function() {
       element(by.model('greeting')).sendKeys('Hello, E2E Tests');
       // If we click the button it will block the test runner
       // element(':button').click();
      });
     </file>
   </example>
 */
function zc(){this.$get=r(a)}/**
 * @name $$cookieReader
 * @requires $document
 *
 * @description
 * This is a private service for reading cookies used by $http and ngCookies
 *
 * @return {Object} a key/value map of the current cookies
 */
function Ac(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}var c=a[0]||{},d={},e="";return function(){var a,f,g,h,i,j=c.cookie||"";if(j!==e)for(e=j,a=e.split("; "),d={},g=0;g<a.length;g++)f=a[g],h=f.indexOf("="),h>0&&(//ignore nameless cookies
i=b(f.substring(0,h)),
// the first value that is seen for a cookie is the most
// specific one.  values for the same cookie name that
// follow are for less specific paths.
t(d[i])&&(d[i]=b(f.substring(h+1))));return d}}function Bc(){this.$get=Ac}function Cc(a){/**
   * @ngdoc method
   * @name $filterProvider#register
   * @param {string|Object} name Name of the filter function, or an object map of filters where
   *    the keys are the filter names and the values are the filter factories.
   *
   *    <div class="alert alert-warning">
   *    **Note:** Filter names must be valid angular {@link expression} identifiers, such as `uppercase` or `orderBy`.
   *    Names with special characters, such as hyphens and dots, are not allowed. If you wish to namespace
   *    your filters, then you can use capitalization (`myappSubsectionFilterx`) or underscores
   *    (`myapp_subsection_filterx`).
   *    </div>
    * @param {Function} factory If the first argument was a string, a factory function for the filter to be registered.
   * @returns {Object} Registered filter instance, or if a map of filters was provided then a map
   *    of the registered filter instances.
   */
function b(d,e){if(v(d)){var g={};return f(d,function(a,c){g[c]=b(c,a)}),g}return a.factory(d+c,e)}var c="Filter";this.register=b,this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}],
////////////////////////////////////////
/* global
    currencyFilter: false,
    dateFilter: false,
    filterFilter: false,
    jsonFilter: false,
    limitToFilter: false,
    lowercaseFilter: false,
    numberFilter: false,
    orderByFilter: false,
    uppercaseFilter: false,
  */
b("currency",Hc),b("date",Uc),b("filter",Dc),b("json",Vc),b("limitTo",Wc),b("lowercase",jf),b("number",Ic),b("orderBy",Xc),b("uppercase",kf)}/**
 * @ngdoc filter
 * @name filter
 * @kind function
 *
 * @description
 * Selects a subset of items from `array` and returns it as a new array.
 *
 * @param {Array} array The source array.
 * @param {string|Object|function()} expression The predicate to be used for selecting items from
 *   `array`.
 *
 *   Can be one of:
 *
 *   - `string`: The string is used for matching against the contents of the `array`. All strings or
 *     objects with string properties in `array` that match this string will be returned. This also
 *     applies to nested object properties.
 *     The predicate can be negated by prefixing the string with `!`.
 *
 *   - `Object`: A pattern object can be used to filter specific properties on objects contained
 *     by `array`. For example `{name:"M", phone:"1"}` predicate will return an array of items
 *     which have property `name` containing "M" and property `phone` containing "1". A special
 *     property name `$` can be used (as in `{$:"text"}`) to accept a match against any
 *     property of the object or its nested object properties. That's equivalent to the simple
 *     substring match with a `string` as described above. The predicate can be negated by prefixing
 *     the string with `!`.
 *     For example `{name: "!M"}` predicate will return an array of items which have property `name`
 *     not containing "M".
 *
 *     Note that a named property will match properties on the same level only, while the special
 *     `$` property will match properties on the same level or deeper. E.g. an array item like
 *     `{name: {first: 'John', last: 'Doe'}}` will **not** be matched by `{name: 'John'}`, but
 *     **will** be matched by `{$: 'John'}`.
 *
 *   - `function(value, index, array)`: A predicate function can be used to write arbitrary filters.
 *     The function is called for each element of the array, with the element, its index, and
 *     the entire array itself as arguments.
 *
 *     The final result is an array of those elements that the predicate returned true for.
 *
 * @param {function(actual, expected)|true|undefined} comparator Comparator which is used in
 *     determining if the expected value (from the filter expression) and actual value (from
 *     the object in the array) should be considered a match.
 *
 *   Can be one of:
 *
 *   - `function(actual, expected)`:
 *     The function will be given the object value and the predicate value to compare and
 *     should return true if both values should be considered equal.
 *
 *   - `true`: A shorthand for `function(actual, expected) { return angular.equals(actual, expected)}`.
 *     This is essentially strict comparison of expected and actual.
 *
 *   - `false|undefined`: A short hand for a function which will look for a substring match in case
 *     insensitive way.
 *
 *     Primitive values are converted to strings. Objects are not compared against primitives,
 *     unless they have a custom `toString` method (e.g. `Date` objects).
 *
 * @example
   <example>
     <file name="index.html">
       <div ng-init="friends = [{name:'John', phone:'555-1276'},
                                {name:'Mary', phone:'800-BIG-MARY'},
                                {name:'Mike', phone:'555-4321'},
                                {name:'Adam', phone:'555-5678'},
                                {name:'Julie', phone:'555-8765'},
                                {name:'Juliette', phone:'555-5678'}]"></div>

       <label>Search: <input ng-model="searchText"></label>
       <table id="searchTextResults">
         <tr><th>Name</th><th>Phone</th></tr>
         <tr ng-repeat="friend in friends | filter:searchText">
           <td>{{friend.name}}</td>
           <td>{{friend.phone}}</td>
         </tr>
       </table>
       <hr>
       <label>Any: <input ng-model="search.$"></label> <br>
       <label>Name only <input ng-model="search.name"></label><br>
       <label>Phone only <input ng-model="search.phone"></label><br>
       <label>Equality <input type="checkbox" ng-model="strict"></label><br>
       <table id="searchObjResults">
         <tr><th>Name</th><th>Phone</th></tr>
         <tr ng-repeat="friendObj in friends | filter:search:strict">
           <td>{{friendObj.name}}</td>
           <td>{{friendObj.phone}}</td>
         </tr>
       </table>
     </file>
     <file name="protractor.js" type="protractor">
       var expectFriendNames = function(expectedNames, key) {
         element.all(by.repeater(key + ' in friends').column(key + '.name')).then(function(arr) {
           arr.forEach(function(wd, i) {
             expect(wd.getText()).toMatch(expectedNames[i]);
           });
         });
       };

       it('should search across all fields when filtering with a string', function() {
         var searchText = element(by.model('searchText'));
         searchText.clear();
         searchText.sendKeys('m');
         expectFriendNames(['Mary', 'Mike', 'Adam'], 'friend');

         searchText.clear();
         searchText.sendKeys('76');
         expectFriendNames(['John', 'Julie'], 'friend');
       });

       it('should search in specific fields when filtering with a predicate object', function() {
         var searchAny = element(by.model('search.$'));
         searchAny.clear();
         searchAny.sendKeys('i');
         expectFriendNames(['Mary', 'Mike', 'Julie', 'Juliette'], 'friendObj');
       });
       it('should use a equal comparison when comparator is true', function() {
         var searchName = element(by.model('search.name'));
         var strict = element(by.model('strict'));
         searchName.clear();
         searchName.sendKeys('Julie');
         strict.click();
         expectFriendNames(['Julie'], 'friendObj');
       });
     </file>
   </example>
 */
function Dc(){return function(a,b,c){if(!e(a)){if(null==a)return a;throw d("filter")("notarray","Expected array but received: {0}",a)}var f,g,h=Gc(b);switch(h){case"function":f=b;break;case"boolean":case"null":case"number":case"string":g=!0;
//jshint -W086
case"object":
//jshint +W086
f=Ec(b,c,g);break;default:return a}return Array.prototype.filter.call(a,f)}}
// Helper functions for `filterFilter`
function Ec(a,b,c){var d,e=v(a)&&"$"in a;return b===!0?b=Q:A(b)||(b=function(a,b){return t(a)?!1:null===a||null===b?a===b:v(b)||v(a)&&!s(a)?!1:(a=rd(""+a),b=rd(""+b),-1!==a.indexOf(b))}),d=function(d){return e&&!v(d)?Fc(d,a.$,b,!1):Fc(d,a,b,c)}}function Fc(a,b,c,d,e){var f=Gc(a),g=Gc(b);if("string"===g&&"!"===b.charAt(0))return!Fc(a,b.substring(1),c,d);if(Jd(a))
// In case `actual` is an array, consider it a match
// if ANY of it's items matches `expected`
return a.some(function(a){return Fc(a,b,c,d)});switch(f){case"object":var h;if(d){for(h in a)if("$"!==h.charAt(0)&&Fc(a[h],b,c,!0))return!0;return e?!1:Fc(a,b,c,!1)}if("object"===g){for(h in b){var i=b[h];if(!A(i)&&!t(i)){var j="$"===h,k=j?a:a[h];if(!Fc(k,i,c,j,j))return!1}}return!0}return c(a,b);case"function":return!1;default:return c(a,b)}}
// Used for easily differentiating between `null` and actual `object`
function Gc(a){return null===a?"null":typeof a}function Hc(a){var b=a.NUMBER_FORMATS;return function(a,c,d){
// if null or undefined pass it through
return t(c)&&(c=b.CURRENCY_SYM),t(d)&&(d=b.PATTERNS[1].maxFrac),null==a?a:Jc(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,d).replace(/\u00A4/g,c)}}function Ic(a){var b=a.NUMBER_FORMATS;return function(a,c){
// if null or undefined pass it through
return null==a?a:Jc(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function Jc(a,b,c,d,e){if(v(a))return"";var f=0>a;a=Math.abs(a);var g=a===1/0;if(!g&&!isFinite(a))return"";var h=a+"",i="",j=!1,k=[];if(g&&(i="∞"),!g&&-1!==h.indexOf("e")){var l=h.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?a=0:(i=h,j=!0)}if(g||j)e>0&&1>a&&(i=a.toFixed(e),a=parseFloat(i));else{var m=(h.split(ef)[1]||"").length;
// determine fractionSize if it is not specified
t(e)&&(e=Math.min(Math.max(b.minFrac,m),b.maxFrac)),
// safely round numbers in JS without hitting imprecisions of floating-point arithmetics
// inspired by:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round
a=+(Math.round(+(a.toString()+"e"+e)).toString()+"e"+-e);var n=(""+a).split(ef),o=n[0];n=n[1]||"";var p,q=0,r=b.lgSize,s=b.gSize;if(o.length>=r+s)for(q=o.length-r,p=0;q>p;p++)(q-p)%s===0&&0!==p&&(i+=c),i+=o.charAt(p);for(p=q;p<o.length;p++)(o.length-p)%r===0&&0!==p&&(i+=c),i+=o.charAt(p);
// format fraction part.
for(;n.length<e;)n+="0";e&&"0"!==e&&(i+=d+n.substr(0,e))}return 0===a&&(f=!1),k.push(f?b.negPre:b.posPre,i,f?b.negSuf:b.posSuf),k.join("")}function Kc(a,b,c){var d="";for(0>a&&(d="-",a=-a),a=""+a;a.length<b;)a="0"+a;return c&&(a=a.substr(a.length-b)),d+a}function Lc(a,b,c,d){return c=c||0,function(e){var f=e["get"+a]();return(c>0||f>-c)&&(f+=c),0===f&&-12==c&&(f=12),Kc(f,b,d)}}function Mc(a,b){return function(c,d){var e=c["get"+a](),f=td(b?"SHORT"+a:a);return d[f][e]}}function Nc(a,b,c){var d=-1*c,e=d>=0?"+":"";return e+=Kc(Math[d>0?"floor":"ceil"](d/60),2)+Kc(Math.abs(d%60),2)}function Oc(a){
// 0 = index of January
var b=new Date(a,0,1).getDay();
// 4 = index of Thursday (+1 to account for 1st = 5)
// 11 = index of *next* Thursday (+1 account for 1st = 12)
return new Date(a,0,(4>=b?5:12)-b)}function Pc(a){
// 4 = index of Thursday
return new Date(a.getFullYear(),a.getMonth(),a.getDate()+(4-a.getDay()))}function Qc(a){return function(b){var c=Oc(b.getFullYear()),d=Pc(b),e=+d-+c,f=1+Math.round(e/6048e5);// 6.048e8 ms per week
return Kc(f,a)}}function Rc(a,b){return a.getHours()<12?b.AMPMS[0]:b.AMPMS[1]}function Sc(a,b){return a.getFullYear()<=0?b.ERAS[0]:b.ERAS[1]}function Tc(a,b){return a.getFullYear()<=0?b.ERANAMES[0]:b.ERANAMES[1]}function Uc(a){
// 1        2       3         4          5          6          7          8  9     10      11
function b(a){var b;if(b=a.match(c)){var d=new Date(0),e=0,f=0,g=b[8]?d.setUTCFullYear:d.setFullYear,h=b[8]?d.setUTCHours:d.setHours;b[9]&&(e=n(b[9]+b[10]),f=n(b[9]+b[11])),g.call(d,n(b[1]),n(b[2])-1,n(b[3]));var i=n(b[4]||0)-e,j=n(b[5]||0)-f,k=n(b[6]||0),l=Math.round(1e3*parseFloat("0."+(b[7]||0)));return h.call(d,i,j,k,l),d}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,d,e){var g,h,i="",j=[];if(d=d||"mediumDate",d=a.DATETIME_FORMATS[d]||d,x(c)&&(c=hf.test(c)?n(c):b(c)),y(c)&&(c=new Date(c)),!z(c)||!isFinite(c.getTime()))return c;for(;d;)h=gf.exec(d),h?(j=R(j,h,1),d=j.pop()):(j.push(d),d=null);var k=c.getTimezoneOffset();return e&&(k=X(e,c.getTimezoneOffset()),c=Z(c,e,!0)),f(j,function(b){g=ff[b],i+=g?g(c,a.DATETIME_FORMATS,k):b.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),i}}/**
 * @ngdoc filter
 * @name json
 * @kind function
 *
 * @description
 *   Allows you to convert a JavaScript object into JSON string.
 *
 *   This filter is mostly useful for debugging. When using the double curly {{value}} notation
 *   the binding is automatically converted to JSON.
 *
 * @param {*} object Any JavaScript object (including arrays and primitive types) to filter.
 * @param {number=} spacing The number of spaces to use per indentation, defaults to 2.
 * @returns {string} JSON string.
 *
 *
 * @example
   <example>
     <file name="index.html">
       <pre id="default-spacing">{{ {'name':'value'} | json }}</pre>
       <pre id="custom-spacing">{{ {'name':'value'} | json:4 }}</pre>
     </file>
     <file name="protractor.js" type="protractor">
       it('should jsonify filtered objects', function() {
         expect(element(by.id('default-spacing')).getText()).toMatch(/\{\n  "name": ?"value"\n}/);
         expect(element(by.id('custom-spacing')).getText()).toMatch(/\{\n    "name": ?"value"\n}/);
       });
     </file>
   </example>
 *
 */
function Vc(){return function(a,b){return t(b)&&(b=2),V(a,b)}}/**
 * @ngdoc filter
 * @name limitTo
 * @kind function
 *
 * @description
 * Creates a new array or string containing only a specified number of elements. The elements
 * are taken from either the beginning or the end of the source array, string or number, as specified by
 * the value and sign (positive or negative) of `limit`. If a number is used as input, it is
 * converted to a string.
 *
 * @param {Array|string|number} input Source array, string or number to be limited.
 * @param {string|number} limit The length of the returned array or string. If the `limit` number
 *     is positive, `limit` number of items from the beginning of the source array/string are copied.
 *     If the number is negative, `limit` number  of items from the end of the source array/string
 *     are copied. The `limit` will be trimmed if it exceeds `array.length`. If `limit` is undefined,
 *     the input will be returned unchanged.
 * @param {(string|number)=} begin Index at which to begin limitation. As a negative index, `begin`
 *     indicates an offset from the end of `input`. Defaults to `0`.
 * @returns {Array|string} A new sub-array or substring of length `limit` or less if input array
 *     had less than `limit` elements.
 *
 * @example
   <example module="limitToExample">
     <file name="index.html">
       <script>
         angular.module('limitToExample', [])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.numbers = [1,2,3,4,5,6,7,8,9];
             $scope.letters = "abcdefghi";
             $scope.longNumber = 2345432342;
             $scope.numLimit = 3;
             $scope.letterLimit = 3;
             $scope.longNumberLimit = 3;
           }]);
       </script>
       <div ng-controller="ExampleController">
         <label>
            Limit {{numbers}} to:
            <input type="number" step="1" ng-model="numLimit">
         </label>
         <p>Output numbers: {{ numbers | limitTo:numLimit }}</p>
         <label>
            Limit {{letters}} to:
            <input type="number" step="1" ng-model="letterLimit">
         </label>
         <p>Output letters: {{ letters | limitTo:letterLimit }}</p>
         <label>
            Limit {{longNumber}} to:
            <input type="number" step="1" ng-model="longNumberLimit">
         </label>
         <p>Output long number: {{ longNumber | limitTo:longNumberLimit }}</p>
       </div>
     </file>
     <file name="protractor.js" type="protractor">
       var numLimitInput = element(by.model('numLimit'));
       var letterLimitInput = element(by.model('letterLimit'));
       var longNumberLimitInput = element(by.model('longNumberLimit'));
       var limitedNumbers = element(by.binding('numbers | limitTo:numLimit'));
       var limitedLetters = element(by.binding('letters | limitTo:letterLimit'));
       var limitedLongNumber = element(by.binding('longNumber | limitTo:longNumberLimit'));

       it('should limit the number array to first three items', function() {
         expect(numLimitInput.getAttribute('value')).toBe('3');
         expect(letterLimitInput.getAttribute('value')).toBe('3');
         expect(longNumberLimitInput.getAttribute('value')).toBe('3');
         expect(limitedNumbers.getText()).toEqual('Output numbers: [1,2,3]');
         expect(limitedLetters.getText()).toEqual('Output letters: abc');
         expect(limitedLongNumber.getText()).toEqual('Output long number: 234');
       });

       // There is a bug in safari and protractor that doesn't like the minus key
       // it('should update the output when -3 is entered', function() {
       //   numLimitInput.clear();
       //   numLimitInput.sendKeys('-3');
       //   letterLimitInput.clear();
       //   letterLimitInput.sendKeys('-3');
       //   longNumberLimitInput.clear();
       //   longNumberLimitInput.sendKeys('-3');
       //   expect(limitedNumbers.getText()).toEqual('Output numbers: [7,8,9]');
       //   expect(limitedLetters.getText()).toEqual('Output letters: ghi');
       //   expect(limitedLongNumber.getText()).toEqual('Output long number: 342');
       // });

       it('should not exceed the maximum size of input array', function() {
         numLimitInput.clear();
         numLimitInput.sendKeys('100');
         letterLimitInput.clear();
         letterLimitInput.sendKeys('100');
         longNumberLimitInput.clear();
         longNumberLimitInput.sendKeys('100');
         expect(limitedNumbers.getText()).toEqual('Output numbers: [1,2,3,4,5,6,7,8,9]');
         expect(limitedLetters.getText()).toEqual('Output letters: abcdefghi');
         expect(limitedLongNumber.getText()).toEqual('Output long number: 2345432342');
       });
     </file>
   </example>
*/
function Wc(){return function(a,b,c){return b=Math.abs(Number(b))===1/0?Number(b):n(b),isNaN(b)?a:(y(a)&&(a=a.toString()),Jd(a)||x(a)?(c=!c||isNaN(c)?0:n(c),c=0>c&&c>=-a.length?a.length+c:c,b>=0?a.slice(c,c+b):0===c?a.slice(b,a.length):a.slice(Math.max(0,c+b),c)):a)}}function Xc(a){function b(b,c){return c=c?-1:1,b.map(function(b){var d=1,e=q;if(A(b))e=b;else if(x(b)&&(("+"==b.charAt(0)||"-"==b.charAt(0))&&(d="-"==b.charAt(0)?-1:1,b=b.substring(1)),""!==b&&(e=a(b),e.constant))){var f=e();e=function(a){return a[f]}}return{get:e,descending:d*c}})}function c(a){switch(typeof a){case"number":/* falls through */
case"boolean":/* falls through */
case"string":return!0;default:return!1}}function d(a,b){
// If `valueOf` is a valid function use that
// If `valueOf` is a valid function use that
// If `toString` is a valid function and not the one from `Object.prototype` use that
return"function"==typeof a.valueOf&&(a=a.valueOf(),c(a))?a:s(a)&&(a=a.toString(),c(a))?a:b}function f(a,b){var c=typeof a;return null===a?(c="string",a="null"):"string"===c?a=a.toLowerCase():"object"===c&&(a=d(a,b)),{value:a,type:c}}function g(a,b){var c=0;return a.type===b.type?a.value!==b.value&&(c=a.value<b.value?-1:1):c=a.type<b.type?-1:1,c}return function(a,c,d){function h(a,b){return{value:a,predicateValues:j.map(function(c){return f(c.get(a),b)})}}function i(a,b){for(var c=0,d=0,e=j.length;e>d&&!(c=g(a.predicateValues[d],b.predicateValues[d])*j[d].descending);++d);return c}if(!e(a))return a;Jd(c)||(c=[c]),0===c.length&&(c=["+"]);var j=b(c,d);
// Add a predicate at the end that evaluates to the element index. This makes the
// sort stable as it works as a tie-breaker when all the input predicates cannot
// distinguish between two elements.
j.push({get:function(){return{}},descending:d?-1:1});
// The next three lines are a version of a Swartzian Transform idiom from Perl
// (sometimes called the Decorate-Sort-Undecorate idiom)
// See https://en.wikipedia.org/wiki/Schwartzian_transform
var k=Array.prototype.map.call(a,h);return k.sort(i),a=k.map(function(a){return a.value})}}function Yc(a){return A(a)&&(a={link:a}),a.restrict=a.restrict||"AC",r(a)}function Zc(a,b){a.$name=b}function $c(a,b,d,e,g){var h=this,i=[];
// init state
h.$error={},h.$$success={},h.$pending=c,h.$name=g(b.name||b.ngForm||"")(d),h.$dirty=!1,h.$pristine=!0,h.$valid=!0,h.$invalid=!1,h.$submitted=!1,h.$$parentForm=nf,/**
   * @ngdoc method
   * @name form.FormController#$rollbackViewValue
   *
   * @description
   * Rollback all form controls pending updates to the `$modelValue`.
   *
   * Updates may be pending by a debounced event or because the input is waiting for a some future
   * event defined in `ng-model-options`. This method is typically needed by the reset button of
   * a form that uses `ng-model-options` to pend updates.
   */
h.$rollbackViewValue=function(){f(i,function(a){a.$rollbackViewValue()})},/**
   * @ngdoc method
   * @name form.FormController#$commitViewValue
   *
   * @description
   * Commit all form controls pending updates to the `$modelValue`.
   *
   * Updates may be pending by a debounced event or because the input is waiting for a some future
   * event defined in `ng-model-options`. This method is rarely needed as `NgModelController`
   * usually handles calling this in response to input events.
   */
h.$commitViewValue=function(){f(i,function(a){a.$commitViewValue()})},/**
   * @ngdoc method
   * @name form.FormController#$addControl
   * @param {object} control control object, either a {@link form.FormController} or an
   * {@link ngModel.NgModelController}
   *
   * @description
   * Register a control with the form. Input elements using ngModelController do this automatically
   * when they are linked.
   *
   * Note that the current state of the control will not be reflected on the new parent form. This
   * is not an issue with normal use, as freshly compiled and linked controls are in a `$pristine`
   * state.
   *
   * However, if the method is used programmatically, for example by adding dynamically created controls,
   * or controls that have been previously removed without destroying their corresponding DOM element,
   * it's the developers responsiblity to make sure the current state propagates to the parent form.
   *
   * For example, if an input control is added that is already `$dirty` and has `$error` properties,
   * calling `$setDirty()` and `$validate()` afterwards will propagate the state to the parent form.
   */
h.$addControl=function(a){
// Breaking change - before, inputs whose name was "hasOwnProperty" were quietly ignored
// and not added to the scope.  Now we throw an error.
na(a.$name,"input"),i.push(a),a.$name&&(h[a.$name]=a),a.$$parentForm=h},
// Private API: rename a form control
h.$$renameControl=function(a,b){var c=a.$name;h[c]===a&&delete h[c],h[b]=a,a.$name=b},/**
   * @ngdoc method
   * @name form.FormController#$removeControl
   * @param {object} control control object, either a {@link form.FormController} or an
   * {@link ngModel.NgModelController}
   *
   * @description
   * Deregister a control from the form.
   *
   * Input elements using ngModelController do this automatically when they are destroyed.
   *
   * Note that only the removed control's validation state (`$errors`etc.) will be removed from the
   * form. `$dirty`, `$submitted` states will not be changed, because the expected behavior can be
   * different from case to case. For example, removing the only `$dirty` control from a form may or
   * may not mean that the form is still `$dirty`.
   */
h.$removeControl=function(a){a.$name&&h[a.$name]===a&&delete h[a.$name],f(h.$pending,function(b,c){h.$setValidity(c,null,a)}),f(h.$error,function(b,c){h.$setValidity(c,null,a)}),f(h.$$success,function(b,c){h.$setValidity(c,null,a)}),N(i,a),a.$$parentForm=nf},/**
   * @ngdoc method
   * @name form.FormController#$setValidity
   *
   * @description
   * Sets the validity of a form control.
   *
   * This method will also propagate to parent forms.
   */
nd({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];if(d){var e=d.indexOf(c);-1===e&&d.push(c)}else a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&(N(d,c),0===d.length&&delete a[b])},$animate:e}),/**
   * @ngdoc method
   * @name form.FormController#$setDirty
   *
   * @description
   * Sets the form to a dirty state.
   *
   * This method can be called to add the 'ng-dirty' class and set the form to a dirty
   * state (ng-dirty class). This method will also propagate to parent forms.
   */
h.$setDirty=function(){e.removeClass(a,Xf),e.addClass(a,Yf),h.$dirty=!0,h.$pristine=!1,h.$$parentForm.$setDirty()},/**
   * @ngdoc method
   * @name form.FormController#$setPristine
   *
   * @description
   * Sets the form to its pristine state.
   *
   * This method can be called to remove the 'ng-dirty' class and set the form to its pristine
   * state (ng-pristine class). This method will also propagate to all the controls contained
   * in this form.
   *
   * Setting a form back to a pristine state is often useful when we want to 'reuse' a form after
   * saving or resetting it.
   */
h.$setPristine=function(){e.setClass(a,Xf,Yf+" "+of),h.$dirty=!1,h.$pristine=!0,h.$submitted=!1,f(i,function(a){a.$setPristine()})},/**
   * @ngdoc method
   * @name form.FormController#$setUntouched
   *
   * @description
   * Sets the form to its untouched state.
   *
   * This method can be called to remove the 'ng-touched' class and set the form controls to their
   * untouched state (ng-untouched class).
   *
   * Setting a form controls back to their untouched state is often useful when setting the form
   * back to its pristine state.
   */
h.$setUntouched=function(){f(i,function(a){a.$setUntouched()})},/**
   * @ngdoc method
   * @name form.FormController#$setSubmitted
   *
   * @description
   * Sets the form to its submitted state.
   */
h.$setSubmitted=function(){e.addClass(a,of),h.$submitted=!0,h.$$parentForm.$setSubmitted()}}function _c(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function ad(a,b,c,d,e,f){bd(a,b,c,d,e,f),_c(d)}function bd(a,b,c,d,e,f){var g=rd(b[0].type);
// In composition mode, users are still inputing intermediate text buffer,
// hold the listener until composition is done.
// More about composition events: https://developer.mozilla.org/en-US/docs/Web/API/CompositionEvent
if(!e.android){var h=!1;b.on("compositionstart",function(a){h=!0}),b.on("compositionend",function(){h=!1,i()})}var i=function(a){if(j&&(f.defer.cancel(j),j=null),!h){var e=b.val(),i=a&&a.type;
// By default we will trim the value
// If the attribute ng-trim exists we will avoid trimming
// If input type is 'password', the value is never trimmed
"password"===g||c.ngTrim&&"false"===c.ngTrim||(e=Ld(e)),
// If a control is suffering from bad input (due to native validators), browsers discard its
// value, so it may be necessary to revalidate (by calling $setViewValue again) even if the
// control's value is the same empty value twice in a row.
(d.$viewValue!==e||""===e&&d.$$hasNativeValidators)&&d.$setViewValue(e,i)}};
// if the browser does support "input" event, we are fine - except on IE9 which doesn't fire the
// input event on backspace, delete or cut
if(e.hasEvent("input"))b.on("input",i);else{var j,k=function(a,b,c){j||(j=f.defer(function(){j=null,b&&b.value===c||i(a)}))};b.on("keydown",function(a){var b=a.keyCode;
// ignore
//    command            modifiers                   arrows
91===b||b>15&&19>b||b>=37&&40>=b||k(a,this,this.value)}),
// if user modifies input value using context menu in IE, we need "paste" and "cut" events to catch it
e.hasEvent("paste")&&b.on("paste cut",k)}
// if user paste into input using mouse on older browser
// or form autocomplete on newer browser, we need "change" event to catch it
b.on("change",i),d.$render=function(){
// Workaround for Firefox validation #12102.
var a=d.$isEmpty(d.$viewValue)?"":d.$viewValue;b.val()!==a&&b.val(a)}}function cd(a,b){if(z(a))return a;if(x(a)){yf.lastIndex=0;var c=yf.exec(a);if(c){var d=+c[1],e=+c[2],f=0,g=0,h=0,i=0,j=Oc(d),k=7*(e-1);return b&&(f=b.getHours(),g=b.getMinutes(),h=b.getSeconds(),i=b.getMilliseconds()),new Date(d,0,j.getDate()+k,f,g,h,i)}}return NaN}function dd(a,b){return function(c,d){var e,g;if(z(c))return c;if(x(c)){if(
// When a date is JSON'ified to wraps itself inside of an extra
// set of double quotes. This makes the date parsing code unable
// to match the date string and parse it as a date.
'"'==c.charAt(0)&&'"'==c.charAt(c.length-1)&&(c=c.substring(1,c.length-1)),sf.test(c))return new Date(c);if(a.lastIndex=0,e=a.exec(c))return e.shift(),g=d?{yyyy:d.getFullYear(),MM:d.getMonth()+1,dd:d.getDate(),HH:d.getHours(),mm:d.getMinutes(),ss:d.getSeconds(),sss:d.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},f(e,function(a,c){c<b.length&&(g[b[c]]=+a)}),new Date(g.yyyy,g.MM-1,g.dd,g.HH,g.mm,g.ss||0,1e3*g.sss||0)}return NaN}}function ed(a,b,d,e){return function(f,g,h,i,j,k,l){function m(a){
// Invalid Date: getTime() returns NaN
return a&&!(a.getTime&&a.getTime()!==a.getTime())}function n(a){return u(a)&&!z(a)?d(a)||c:a}fd(f,g,h,i),bd(f,g,h,i,j,k);var o,p=i&&i.$options&&i.$options.timezone;if(i.$$parserName=a,i.$parsers.push(function(a){if(i.$isEmpty(a))return null;if(b.test(a)){
// Note: We cannot read ctrl.$modelValue, as there might be a different
// parser/formatter in the processing chain so that the model
// contains some different data format!
var e=d(a,o);return p&&(e=Z(e,p)),e}return c}),i.$formatters.push(function(a){if(a&&!z(a))throw ag("datefmt","Expected `{0}` to be a date",a);return m(a)?(o=a,o&&p&&(o=Z(o,p,!0)),l("date")(a,e,p)):(o=null,"")}),u(h.min)||h.ngMin){var q;i.$validators.min=function(a){return!m(a)||t(q)||d(a)>=q},h.$observe("min",function(a){q=n(a),i.$validate()})}if(u(h.max)||h.ngMax){var r;i.$validators.max=function(a){return!m(a)||t(r)||d(a)<=r},h.$observe("max",function(a){r=n(a),i.$validate()})}}}function fd(a,b,d,e){var f=b[0],g=e.$$hasNativeValidators=v(f.validity);g&&e.$parsers.push(function(a){var d=b.prop(qd)||{};
// Detect bug in FF35 for input[email] (https://bugzilla.mozilla.org/show_bug.cgi?id=1064430):
// - also sets validity.badInput (should only be validity.typeMismatch).
// - see http://www.whatwg.org/specs/web-apps/current-work/multipage/forms.html#e-mail-state-(type=email)
// - can ignore this case as we can still read out the erroneous email...
return d.badInput&&!d.typeMismatch?c:a})}function gd(a,b,d,e,f,g){if(fd(a,b,d,e),bd(a,b,d,e,f,g),e.$$parserName="number",e.$parsers.push(function(a){return e.$isEmpty(a)?null:vf.test(a)?parseFloat(a):c}),e.$formatters.push(function(a){if(!e.$isEmpty(a)){if(!y(a))throw ag("numfmt","Expected `{0}` to be a number",a);a=a.toString()}return a}),u(d.min)||d.ngMin){var h;e.$validators.min=function(a){return e.$isEmpty(a)||t(h)||a>=h},d.$observe("min",function(a){u(a)&&!y(a)&&(a=parseFloat(a,10)),h=y(a)&&!isNaN(a)?a:c,
// TODO(matsko): implement validateLater to reduce number of validations
e.$validate()})}if(u(d.max)||d.ngMax){var i;e.$validators.max=function(a){return e.$isEmpty(a)||t(i)||i>=a},d.$observe("max",function(a){u(a)&&!y(a)&&(a=parseFloat(a,10)),i=y(a)&&!isNaN(a)?a:c,
// TODO(matsko): implement validateLater to reduce number of validations
e.$validate()})}}function hd(a,b,c,d,e,f){
// Note: no badInputChecker here by purpose as `url` is only a validation
// in browsers, i.e. we can always read out input.value even if it is not valid!
bd(a,b,c,d,e,f),_c(d),d.$$parserName="url",d.$validators.url=function(a,b){var c=a||b;return d.$isEmpty(c)||tf.test(c)}}function id(a,b,c,d,e,f){
// Note: no badInputChecker here by purpose as `url` is only a validation
// in browsers, i.e. we can always read out input.value even if it is not valid!
bd(a,b,c,d,e,f),_c(d),d.$$parserName="email",d.$validators.email=function(a,b){var c=a||b;return d.$isEmpty(c)||uf.test(c)}}function jd(a,b,c,d){
// make the name unique, if not defined
t(c.name)&&b.attr("name",i());var e=function(a){b[0].checked&&d.$setViewValue(c.value,a&&a.type)};b.on("click",e),d.$render=function(){var a=c.value;b[0].checked=a==d.$viewValue},c.$observe("value",d.$render)}function kd(a,b,c,d,e){var f;if(u(d)){if(f=a(d),!f.constant)throw ag("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",c,d);return f(b)}return e}function ld(a,b,c,d,e,f,g,h){var i=kd(h,a,"ngTrueValue",c.ngTrueValue,!0),j=kd(h,a,"ngFalseValue",c.ngFalseValue,!1),k=function(a){d.$setViewValue(b[0].checked,a&&a.type)};b.on("click",k),d.$render=function(){b[0].checked=d.$viewValue},
// Override the standard `$isEmpty` because the $viewValue of an empty checkbox is always set to `false`
// This is because of the parser below, which compares the `$modelValue` with `trueValue` to convert
// it to a boolean.
d.$isEmpty=function(a){return a===!1},d.$formatters.push(function(a){return Q(a,i)}),d.$parsers.push(function(a){return a?i:j})}function md(a,b){return a="ngClass"+a,["$animate",function(c){function d(a,b){var c=[];a:for(var d=0;d<a.length;d++){for(var e=a[d],f=0;f<b.length;f++)if(e==b[f])continue a;c.push(e)}return c}function e(a){var b=[];return Jd(a)?(f(a,function(a){b=b.concat(e(a))}),b):x(a)?a.split(" "):v(a)?(f(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(g,h,i){function j(a){var b=l(a,1);i.$addClass(b)}function k(a){var b=l(a,-1);i.$removeClass(b)}function l(a,b){
// Use createMap() to prevent class assumptions involving property
// names in Object.prototype
var c=h.data("$classCounts")||qa(),d=[];return f(a,function(a){(b>0||c[a])&&(c[a]=(c[a]||0)+b,c[a]===+(b>0)&&d.push(a))}),h.data("$classCounts",c),d.join(" ")}function m(a,b){var e=d(b,a),f=d(a,b);e=l(e,1),f=l(f,-1),e&&e.length&&c.addClass(h,e),f&&f.length&&c.removeClass(h,f)}function n(a){if(b===!0||g.$index%2===b){var c=e(a||[]);if(o){if(!Q(a,o)){var d=e(o);m(d,c)}}else j(c)}o=P(a)}var o;g.$watch(i[a],n,!0),i.$observe("class",function(b){n(g.$eval(i[a]))}),"ngClass"!==a&&g.$watch("$index",function(c,d){
// jshint bitwise: false
var f=1&c;if(f!==(1&d)){var h=e(g.$eval(i[a]));f===b?j(h):k(h)}})}}}]}
// helper methods
function nd(a){function b(a,b,i){t(b)?d("$pending",a,i):e("$pending",a,i),H(b)?b?(l(h.$error,a,i),k(h.$$success,a,i)):(k(h.$error,a,i),l(h.$$success,a,i)):(l(h.$error,a,i),l(h.$$success,a,i)),h.$pending?(f(_f,!0),h.$valid=h.$invalid=c,g("",null)):(f(_f,!1),h.$valid=od(h.$error),h.$invalid=!h.$valid,g("",h.$valid));
// re-read the state as the set/unset methods could have
// combined state in ctrl.$error[validationError] (used for forms),
// where setting/unsetting only increments/decrements the value,
// and does not replace it.
var j;j=h.$pending&&h.$pending[a]?c:h.$error[a]?!1:h.$$success[a]?!0:null,g(a,j),h.$$parentForm.$setValidity(a,j,h)}function d(a,b,c){h[a]||(h[a]={}),k(h[a],b,c)}function e(a,b,d){h[a]&&l(h[a],b,d),od(h[a])&&(h[a]=c)}function f(a,b){b&&!j[a]?(m.addClass(i,a),j[a]=!0):!b&&j[a]&&(m.removeClass(i,a),j[a]=!1)}function g(a,b){a=a?"-"+ja(a,"-"):"",f(Vf+a,b===!0),f(Wf+a,b===!1)}var h=a.ctrl,i=a.$element,j={},k=a.set,l=a.unset,m=a.$animate;j[Wf]=!(j[Vf]=i.hasClass(Vf)),h.$setValidity=b}function od(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}/* We need to tell jshint what variables are being exported */
/* global angular: true,
  msie: true,
  jqLite: true,
  jQuery: true,
  slice: true,
  splice: true,
  push: true,
  toString: true,
  ngMinErr: true,
  angularModule: true,
  uid: true,
  REGEX_STRING_REGEXP: true,
  VALIDITY_STATE_PROPERTY: true,

  lowercase: true,
  uppercase: true,
  manualLowercase: true,
  manualUppercase: true,
  nodeName_: true,
  isArrayLike: true,
  forEach: true,
  forEachSorted: true,
  reverseParams: true,
  nextUid: true,
  setHashKey: true,
  extend: true,
  toInt: true,
  inherit: true,
  merge: true,
  noop: true,
  identity: true,
  valueFn: true,
  isUndefined: true,
  isDefined: true,
  isObject: true,
  isBlankObject: true,
  isString: true,
  isNumber: true,
  isDate: true,
  isArray: true,
  isFunction: true,
  isRegExp: true,
  isWindow: true,
  isScope: true,
  isFile: true,
  isFormData: true,
  isBlob: true,
  isBoolean: true,
  isPromiseLike: true,
  trim: true,
  escapeForRegexp: true,
  isElement: true,
  makeMap: true,
  includes: true,
  arrayRemove: true,
  copy: true,
  shallowCopy: true,
  equals: true,
  csp: true,
  jq: true,
  concat: true,
  sliceArgs: true,
  bind: true,
  toJsonReplacer: true,
  toJson: true,
  fromJson: true,
  convertTimezoneToLocal: true,
  timezoneToOffset: true,
  startingTag: true,
  tryDecodeURIComponent: true,
  parseKeyValue: true,
  toKeyValue: true,
  encodeUriSegment: true,
  encodeUriQuery: true,
  angularInit: true,
  bootstrap: true,
  getTestability: true,
  snake_case: true,
  bindJQuery: true,
  assertArg: true,
  assertArgFn: true,
  assertNotHasOwnProperty: true,
  getter: true,
  getBlockNodes: true,
  hasOwnProperty: true,
  createMap: true,

  NODE_TYPE_ELEMENT: true,
  NODE_TYPE_ATTRIBUTE: true,
  NODE_TYPE_TEXT: true,
  NODE_TYPE_COMMENT: true,
  NODE_TYPE_DOCUMENT: true,
  NODE_TYPE_DOCUMENT_FRAGMENT: true,
*/
////////////////////////////////////
/**
 * @ngdoc module
 * @name ng
 * @module ng
 * @description
 *
 * # ng (core module)
 * The ng module is loaded by default when an AngularJS application is started. The module itself
 * contains the essential components for an AngularJS application to function. The table below
 * lists a high level breakdown of each of the services/factories, filters, directives and testing
 * components available within this core module.
 *
 * <div doc-module-components="ng"></div>
 */
var pd=/^\/(.+)\/([a-z]*)$/,qd="validity",rd=function(a){return x(a)?a.toLowerCase():a},sd=Object.prototype.hasOwnProperty,td=function(a){return x(a)?a.toUpperCase():a},ud=function(a){/* jshint bitwise: false */
return x(a)?a.replace(/[A-Z]/g,function(a){return String.fromCharCode(32|a.charCodeAt(0))}):a},vd=function(a){/* jshint bitwise: false */
return x(a)?a.replace(/[a-z]/g,function(a){return String.fromCharCode(-33&a.charCodeAt(0))}):a};
// String#toLowerCase and String#toUpperCase don't produce correct results in browsers with Turkish
// locale, for this reason we need to detect this case and redefine lowercase/uppercase methods
// with correct but slower alternatives.
"i"!=="I".toLowerCase()&&(rd=ud,td=vd);var wd,// holds major version number for IE, or NaN if UA is not IE.
xd,// delay binding since jQuery could be loaded after us.
yd,zd,// delay binding
Ad=[].slice,Bd=[].splice,Cd=[].push,Dd=Object.prototype.toString,Ed=Object.getPrototypeOf,Fd=d("ng"),/** @name angular */
Gd=a.angular||(a.angular={}),Hd=0;/**
 * documentMode is an IE-only property
 * http://msdn.microsoft.com/en-us/library/ie/cc196988(v=vs.85).aspx
 */
wd=b.documentMode,p.$inject=[],q.$inject=[];/**
 * @ngdoc function
 * @name angular.isArray
 * @module ng
 * @kind function
 *
 * @description
 * Determines if a reference is an `Array`.
 *
 * @param {*} value Reference to check.
 * @returns {boolean} True if `value` is an `Array`.
 */
var Id,Jd=Array.isArray,Kd=/^\[object (Uint8(Clamped)?)|(Uint16)|(Uint32)|(Int8)|(Int16)|(Int32)|(Float(32)|(64))Array\]$/,Ld=function(a){return x(a)?a.trim():a},Md=function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Nd=function(){function a(){try{/* jshint +W031, +W054 */
/* jshint -W031, -W054 */
return new Function(""),!1}catch(a){return!0}}if(!u(Nd.rules)){var c=b.querySelector("[ng-csp]")||b.querySelector("[data-ng-csp]");if(c){var d=c.getAttribute("ng-csp")||c.getAttribute("data-ng-csp");Nd.rules={noUnsafeEval:!d||-1!==d.indexOf("no-unsafe-eval"),noInlineStyle:!d||-1!==d.indexOf("no-inline-style")}}else Nd.rules={noUnsafeEval:a(),noInlineStyle:!1}}return Nd.rules},Od=function(){if(u(Od.name_))return Od.name_;var a,c,d,e,f=Pd.length;for(c=0;f>c;++c)if(d=Pd[c],a=b.querySelector("["+d.replace(":","\\:")+"jq]")){e=a.getAttribute(d+"jq");break}return Od.name_=e},Pd=["ng-","data-ng-","ng:","x-ng-"],Qd=/[A-Z]/g,Rd=!1,Sd=1,Td=2,Ud=3,Vd=8,Wd=9,Xd=11,Yd={full:"1.5.0-beta.0",// all of these placeholder strings will be replaced by grunt's
major:1,// package task
minor:5,dot:0,codeName:"intialization-processation"};/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *     Any commits to this file should be reviewed with security in mind.  *
 *   Changes to this file can potentially create security vulnerabilities. *
 *          An approval from 2 Core members with history of modifying      *
 *                         this file is required.                          *
 *                                                                         *
 *  Does the change somehow allow for arbitrary javascript to be executed? *
 *    Or allows for someone to change the prototype of built-in objects?   *
 *     Or gives undesired access to variables likes document or window?    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
/* global JQLitePrototype: true,
  addEventListenerFn: true,
  removeEventListenerFn: true,
  BOOLEAN_ATTR: true,
  ALIASED_ATTR: true,
*/
//////////////////////////////////
//JQLite
//////////////////////////////////
/**
 * @ngdoc function
 * @name angular.element
 * @module ng
 * @kind function
 *
 * @description
 * Wraps a raw DOM element or HTML string as a [jQuery](http://jquery.com) element.
 *
 * If jQuery is available, `angular.element` is an alias for the
 * [jQuery](http://api.jquery.com/jQuery/) function. If jQuery is not available, `angular.element`
 * delegates to Angular's built-in subset of jQuery, called "jQuery lite" or "jqLite."
 *
 * <div class="alert alert-success">jqLite is a tiny, API-compatible subset of jQuery that allows
 * Angular to manipulate the DOM in a cross-browser compatible way. **jqLite** implements only the most
 * commonly needed functionality with the goal of having a very small footprint.</div>
 *
 * To use `jQuery`, simply ensure it is loaded before the `angular.js` file.
 *
 * <div class="alert">**Note:** all element references in Angular are always wrapped with jQuery or
 * jqLite; they are never raw DOM references.</div>
 *
 * ## Angular's jqLite
 * jqLite provides only the following jQuery methods:
 *
 * - [`addClass()`](http://api.jquery.com/addClass/)
 * - [`after()`](http://api.jquery.com/after/)
 * - [`append()`](http://api.jquery.com/append/)
 * - [`attr()`](http://api.jquery.com/attr/) - Does not support functions as parameters
 * - [`bind()`](http://api.jquery.com/bind/) - Does not support namespaces, selectors or eventData
 * - [`children()`](http://api.jquery.com/children/) - Does not support selectors
 * - [`clone()`](http://api.jquery.com/clone/)
 * - [`contents()`](http://api.jquery.com/contents/)
 * - [`css()`](http://api.jquery.com/css/) - Only retrieves inline-styles, does not call `getComputedStyle()`. As a setter, does not convert numbers to strings or append 'px'.
 * - [`data()`](http://api.jquery.com/data/)
 * - [`detach()`](http://api.jquery.com/detach/)
 * - [`empty()`](http://api.jquery.com/empty/)
 * - [`eq()`](http://api.jquery.com/eq/)
 * - [`find()`](http://api.jquery.com/find/) - Limited to lookups by tag name
 * - [`hasClass()`](http://api.jquery.com/hasClass/)
 * - [`html()`](http://api.jquery.com/html/)
 * - [`next()`](http://api.jquery.com/next/) - Does not support selectors
 * - [`on()`](http://api.jquery.com/on/) - Does not support namespaces, selectors or eventData
 * - [`off()`](http://api.jquery.com/off/) - Does not support namespaces, selectors or event object as parameter
 * - [`one()`](http://api.jquery.com/one/) - Does not support namespaces or selectors
 * - [`parent()`](http://api.jquery.com/parent/) - Does not support selectors
 * - [`prepend()`](http://api.jquery.com/prepend/)
 * - [`prop()`](http://api.jquery.com/prop/)
 * - [`ready()`](http://api.jquery.com/ready/)
 * - [`remove()`](http://api.jquery.com/remove/)
 * - [`removeAttr()`](http://api.jquery.com/removeAttr/)
 * - [`removeClass()`](http://api.jquery.com/removeClass/)
 * - [`removeData()`](http://api.jquery.com/removeData/)
 * - [`replaceWith()`](http://api.jquery.com/replaceWith/)
 * - [`text()`](http://api.jquery.com/text/)
 * - [`toggleClass()`](http://api.jquery.com/toggleClass/)
 * - [`triggerHandler()`](http://api.jquery.com/triggerHandler/) - Passes a dummy event object to handlers.
 * - [`unbind()`](http://api.jquery.com/unbind/) - Does not support namespaces or event object as parameter
 * - [`val()`](http://api.jquery.com/val/)
 * - [`wrap()`](http://api.jquery.com/wrap/)
 *
 * ## jQuery/jqLite Extras
 * Angular also provides the following additional methods and events to both jQuery and jqLite:
 *
 * ### Events
 * - `$destroy` - AngularJS intercepts all jqLite/jQuery's DOM destruction apis and fires this event
 *    on all DOM nodes being removed.  This can be used to clean up any 3rd party bindings to the DOM
 *    element before it is removed.
 *
 * ### Methods
 * - `controller(name)` - retrieves the controller of the current element or its parent. By default
 *   retrieves controller associated with the `ngController` directive. If `name` is provided as
 *   camelCase directive name, then the controller for this directive will be retrieved (e.g.
 *   `'ngModel'`).
 * - `injector()` - retrieves the injector of the current element or its parent.
 * - `scope()` - retrieves the {@link ng.$rootScope.Scope scope} of the current
 *   element or its parent. Requires {@link guide/production#disabling-debug-data Debug Data} to
 *   be enabled.
 * - `isolateScope()` - retrieves an isolate {@link ng.$rootScope.Scope scope} if one is attached directly to the
 *   current element. This getter should be used only on elements that contain a directive which starts a new isolate
 *   scope. Calling `scope()` on this element always returns the original non-isolate scope.
 *   Requires {@link guide/production#disabling-debug-data Debug Data} to be enabled.
 * - `inheritedData()` - same as `data()`, but walks up the DOM until a value is found or the top
 *   parent element is reached.
 *
 * @param {string|DOMElement} element HTML string or DOMElement to be wrapped into jQuery.
 * @returns {Object} jQuery object.
 */
Ca.expando="ng339";var Zd=Ca.cache={},$d=1,_d=function(a,b,c){a.addEventListener(b,c,!1)},ae=function(a,b,c){a.removeEventListener(b,c,!1)};/*
 * !!! This is an undocumented "private" function !!!
 */
Ca._data=function(a){
//jQuery always returns an object on cache miss
return this.cache[a[this.expando]]||{}};var be=/([\:\-\_]+(.))/g,ce=/^moz([A-Z])/,de={mouseleave:"mouseout",mouseenter:"mouseover"},ee=d("jqLite"),fe=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,ge=/<|&#?\w+;/,he=/<([\w:-]+)/,ie=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,je={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};je.optgroup=je.option,je.tbody=je.tfoot=je.colgroup=je.caption=je.thead,je.th=je.td;
//////////////////////////////////////////
// Functions which are declared directly.
//////////////////////////////////////////
var ke=Ca.prototype={ready:function(c){function d(){e||(e=!0,c())}var e=!1;
// check if document is already loaded
"complete"===b.readyState?setTimeout(d):(this.on("DOMContentLoaded",d),// works for modern browsers and IE9
// we can not use jqLite since we are not done loading and jQuery could be loaded later.
// jshint -W064
Ca(a).on("load",d))},toString:function(){var a=[];return f(this,function(b){a.push(""+b)}),"["+a.join(", ")+"]"},eq:function(a){return xd(a>=0?this[a]:this[this.length+a])},length:0,push:Cd,sort:[].sort,splice:[].splice},le={};f("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(a){le[rd(a)]=a});var me={};f("input,select,option,textarea,button,form,details".split(","),function(a){me[a]=!0});var ne={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};f({data:Ia,removeData:Ga,hasData:za},function(a,b){Ca[b]=a}),f({data:Ia,inheritedData:Oa,scope:function(a){
// Can't use jqLiteData here directly so we stay compatible with jQuery!
return xd.data(a,"$scope")||Oa(a.parentNode||a,["$isolateScope","$scope"])},isolateScope:function(a){
// Can't use jqLiteData here directly so we stay compatible with jQuery!
return xd.data(a,"$isolateScope")||xd.data(a,"$isolateScopeNoTemplate")},controller:Na,injector:function(a){return Oa(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:Ja,css:function(a,b,c){return b=wa(b),u(c)?void(a.style[b]=c):a.style[b]},attr:function(a,b,d){var e=a.nodeType;if(e!==Ud&&e!==Td&&e!==Vd){var f=rd(b);if(le[f]){if(!u(d))return a[b]||(a.attributes.getNamedItem(b)||p).specified?f:c;d?(a[b]=!0,a.setAttribute(b,f)):(a[b]=!1,a.removeAttribute(f))}else if(u(d))a.setAttribute(b,d);else if(a.getAttribute){
// the extra argument "2" is to get the right thing for a.href in IE, see jQuery code
// some elements (e.g. Document) don't have get attribute, so return undefined
var g=a.getAttribute(b,2);
// normalize non-existing attributes to undefined (as jQuery)
return null===g?c:g}}},prop:function(a,b,c){return u(c)?void(a[b]=c):a[b]},text:function(){function a(a,b){if(t(b)){var c=a.nodeType;return c===Sd||c===Ud?a.textContent:""}a.textContent=b}return a.$dv="",a}(),val:function(a,b){if(t(b)){if(a.multiple&&"select"===M(a)){var c=[];return f(a.options,function(a){a.selected&&c.push(a.value||a.text)}),0===c.length?null:c}return a.value}a.value=b},html:function(a,b){return t(b)?a.innerHTML:(Ea(a,!0),void(a.innerHTML=b))},empty:Pa},function(a,b){/**
   * Properties: writes return selection, reads return first value
   */
Ca.prototype[b]=function(b,c){var d,e,f=this.length;
// jqLiteHasClass has only two arguments, but is a getter-only fn, so we need to special-case it
// in a way that survives minification.
// jqLiteEmpty takes no arguments but is a setter.
if(a!==Pa&&t(2==a.length&&a!==Ja&&a!==Na?b:c)){if(v(b)){
// we are a write, but the object properties are the key/values
for(d=0;f>d;d++)if(a===Ia)
// data() takes the whole object in jQuery
a(this[d],b);else for(e in b)a(this[d],e,b[e]);
// return self for chaining
return this}for(var g=a.$dv,h=t(g)?Math.min(f,1):f,i=0;h>i;i++){var j=a(this[i],b,c);g=g?g+j:j}return g}
// we are a write, so apply to all children
for(d=0;f>d;d++)a(this[d],b,c);
// return self for chaining
return this}}),
//////////////////////////////////////////
// Functions iterating traversal.
// These functions chain results into a single
// selector.
//////////////////////////////////////////
f({removeData:Ga,on:function Eg(a,b,c,d){if(u(d))throw ee("onargs","jqLite#on() does not support the `selector` or `eventData` parameters");
// Do not add event handlers to non-elements because they will not be cleaned up.
if(ya(a)){var e=Ha(a,!0),f=e.events,g=e.handle;g||(g=e.handle=Ua(a,f));for(
// http://jsperf.com/string-indexof-vs-split
var h=b.indexOf(" ")>=0?b.split(" "):[b],i=h.length;i--;){b=h[i];var j=f[b];j||(f[b]=[],"mouseenter"===b||"mouseleave"===b?
// Refer to jQuery's implementation of mouseenter & mouseleave
// Read about mouseenter and mouseleave:
// http://www.quirksmode.org/js/events_mouse.html#link8
Eg(a,de[b],function(a){var c=this,d=a.relatedTarget;
// For mousenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
(!d||d!==c&&!c.contains(d))&&g(a,b)}):"$destroy"!==b&&_d(a,b,g),j=f[b]),j.push(c)}}},off:Fa,one:function(a,b,c){a=xd(a),
//add the listener twice so that when it is called
//you can remove the original function and still be
//able to call element.off(ev, fn) normally
a.on(b,function d(){a.off(b,c),a.off(b,d)}),a.on(b,c)},replaceWith:function(a,b){var c,d=a.parentNode;Ea(a),f(new Ca(b),function(b){c?d.insertBefore(b,c.nextSibling):d.replaceChild(b,a),c=b})},children:function(a){var b=[];return f(a.childNodes,function(a){a.nodeType===Sd&&b.push(a)}),b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var c=a.nodeType;if(c===Sd||c===Xd){b=new Ca(b);for(var d=0,e=b.length;e>d;d++){var f=b[d];a.appendChild(f)}}},prepend:function(a,b){if(a.nodeType===Sd){var c=a.firstChild;f(new Ca(b),function(b){a.insertBefore(b,c)})}},wrap:function(a,b){b=xd(b).eq(0).clone()[0];var c=a.parentNode;c&&c.replaceChild(b,a),b.appendChild(a)},remove:Qa,detach:function(a){Qa(a,!0)},after:function(a,b){var c=a,d=a.parentNode;b=new Ca(b);for(var e=0,f=b.length;f>e;e++){var g=b[e];d.insertBefore(g,c.nextSibling),c=g}},addClass:La,removeClass:Ka,toggleClass:function(a,b,c){b&&f(b.split(" "),function(b){var d=c;t(d)&&(d=!Ja(a,b)),(d?La:Ka)(a,b)})},parent:function(a){var b=a.parentNode;return b&&b.nodeType!==Xd?b:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Da,triggerHandler:function(a,b,c){var d,e,g,h=b.type||b,i=Ha(a),j=i&&i.events,k=j&&j[h];k&&(
// Create a dummy event to pass to the handlers
d={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:p,type:h,target:a},
// If a custom event was provided then extend our dummy event with it
b.type&&(d=l(d,b)),
// Copy event handlers in case event handlers array is modified during execution.
e=P(k),g=c?[d].concat(c):[d],f(e,function(b){d.isImmediatePropagationStopped()||b.apply(a,g)}))}},function(a,b){/**
   * chaining functions
   */
Ca.prototype[b]=function(b,c,d){for(var e,f=0,g=this.length;g>f;f++)t(e)?(e=a(this[f],b,c,d),u(e)&&(
// any function which returns a value needs to be wrapped
e=xd(e))):Ma(e,a(this[f],b,c,d));return u(e)?e:this},
// bind legacy bind/unbind to on/off
Ca.prototype.bind=Ca.prototype.on,Ca.prototype.unbind=Ca.prototype.off}),Xa.prototype={/**
   * Store key value pair
   * @param key key to store can be any type
   * @param value value to store can be any type
   */
put:function(a,b){this[Wa(a,this.nextUid)]=b},/**
   * @param key
   * @returns {Object} the value for the key
   */
get:function(a){return this[Wa(a,this.nextUid)]},/**
   * Remove the key/value pair
   * @param key
   */
remove:function(a){var b=this[a=Wa(a,this.nextUid)];return delete this[a],b}};var oe=[function(){this.$get=[function(){return Xa}]}],pe=/^[^\(]*\(\s*([^\)]*)\)/m,qe=/,/,re=/^\s*(_?)(\S+?)\1\s*$/,se=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,te=d("$injector");$a.$$annotate=Za;var ue=d("$animate"),ve=1,we="ng-animate",xe=function(){this.$get=["$q","$$rAF",function(a,b){function c(){}return c.all=p,c.chain=p,c.prototype={end:p,cancel:p,resume:p,pause:p,complete:p,then:function(c,d){return a(function(a){b(function(){a()})}).then(c,d)}},c}]},ye=function(){var a=new Xa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(c,d){function e(a,b,c){var d=!1;return b&&(b=x(b)?b.split(" "):Jd(b)?b:[],f(b,function(b){b&&(d=!0,a[b]=c)})),d}function g(){f(b,function(b){var c=a.get(b);if(c){var d=cb(b.attr("class")),e="",g="";f(c,function(a,b){var c=!!d[b];a!==c&&(a?e+=(e.length?" ":"")+b:g+=(g.length?" ":"")+b)}),f(b,function(a){e&&La(a,e),g&&Ka(a,g)}),a.remove(b)}}),b.length=0}function h(c,f,h){var i=a.get(c)||{},j=e(i,f,!0),k=e(i,h,!1);(j||k)&&(a.put(c,i),b.push(c),1===b.length&&d.$$postDigest(g))}return{enabled:p,on:p,off:p,pin:p,push:function(a,b,d,e){return e&&e(),d=d||{},d.from&&a.css(d.from),d.to&&a.css(d.to),(d.addClass||d.removeClass)&&h(a,d.addClass,d.removeClass),new c}}}]},ze=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null),/**
   * @ngdoc method
   * @name $animateProvider#register
   *
   * @description
   * Registers a new injectable animation factory function. The factory function produces the
   * animation object which contains callback functions for each event that is expected to be
   * animated.
   *
   *   * `eventFn`: `function(element, ... , doneFunction, options)`
   *   The element to animate, the `doneFunction` and the options fed into the animation. Depending
   *   on the type of animation additional arguments will be injected into the animation function. The
   *   list below explains the function signatures for the different animation methods:
   *
   *   - setClass: function(element, addedClasses, removedClasses, doneFunction, options)
   *   - addClass: function(element, addedClasses, doneFunction, options)
   *   - removeClass: function(element, removedClasses, doneFunction, options)
   *   - enter, leave, move: function(element, doneFunction, options)
   *   - animate: function(element, fromStyles, toStyles, doneFunction, options)
   *
   *   Make sure to trigger the `doneFunction` once the animation is fully complete.
   *
   * ```js
   *   return {
   *     //enter, leave, move signature
   *     eventFn : function(element, done, options) {
   *       //code to run the animation
   *       //once complete, then run done()
   *       return function endFunction(wasCancelled) {
   *         //code to cancel the animation
   *       }
   *     }
   *   }
   * ```
   *
   * @param {string} name The name of the animation (this is what the class-based CSS value will be compared to).
   * @param {Function} factory The factory function that will be executed to return the animation
   *                           object.
   */
this.register=function(c,d){if(c&&"."!==c.charAt(0))throw ue("notcsel","Expecting class selector starting with '.' got '{0}'.",c);var e=c+"-animation";b.$$registeredAnimations[c.substr(1)]=e,a.factory(e,d)},/**
   * @ngdoc method
   * @name $animateProvider#classNameFilter
   *
   * @description
   * Sets and/or returns the CSS class regular expression that is checked when performing
   * an animation. Upon bootstrap the classNameFilter value is not set at all and will
   * therefore enable $animate to attempt to perform an animation on any element that is triggered.
   * When setting the `classNameFilter` value, animations will only be performed on elements
   * that successfully match the filter expression. This in turn can boost performance
   * for low-powered devices as well as applications containing a lot of structural operations.
   * @param {RegExp=} expression The className expression which will be checked against all animations
   * @return {RegExp} The current CSS className expression value. If null then there is no expression value
   */
this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null,this.$$classNameFilter)){var b=new RegExp("(\\s+|\\/)"+we+"(\\s+|\\/)");if(b.test(this.$$classNameFilter.toString()))throw ue("nongcls",'$animateProvider.classNameFilter(regex) prohibits accepting a regex value which matches/contains the "{0}" CSS class.',we)}return this.$$classNameFilter},this.$get=["$$animateQueue",function(a){function b(a,b,c){
// if for some reason the previous element was removed
// from the dom sometime before this code runs then let's
// just stick to using the parent element as the anchor
if(c){var d=bb(c);!d||d.parentNode||d.previousElementSibling||(c=null)}c?c.after(a):b.prepend(a)}/**
     * @ngdoc service
     * @name $animate
     * @description The $animate service exposes a series of DOM utility methods that provide support
     * for animation hooks. The default behavior is the application of DOM operations, however,
     * when an animation is detected (and animations are enabled), $animate will do the heavy lifting
     * to ensure that animation runs with the triggered DOM operation.
     *
     * By default $animate doesn't trigger an animations. This is because the `ngAnimate` module isn't
     * included and only when it is active then the animation hooks that `$animate` triggers will be
     * functional. Once active then all structural `ng-` directives will trigger animations as they perform
     * their DOM-related operations (enter, leave and move). Other directives such as `ngClass`,
     * `ngShow`, `ngHide` and `ngMessages` also provide support for animations.
     *
     * It is recommended that the`$animate` service is always used when executing DOM-related procedures within directives.
     *
     * To learn more about enabling animation support, click here to visit the
     * {@link ngAnimate ngAnimate module page}.
     */
return{
// we don't call it directly since non-existant arguments may
// be interpreted as null within the sub enabled function
/**
       *
       * @ngdoc method
       * @name $animate#on
       * @kind function
       * @description Sets up an event listener to fire whenever the animation event (enter, leave, move, etc...)
       *    has fired on the given element or among any of its children. Once the listener is fired, the provided callback
       *    is fired with the following params:
       *
       * ```js
       * $animate.on('enter', container,
       *    function callback(element, phase) {
       *      // cool we detected an enter animation within the container
       *    }
       * );
       * ```
       *
       * @param {string} event the animation event that will be captured (e.g. enter, leave, move, addClass, removeClass, etc...)
       * @param {DOMElement} container the container element that will capture each of the animation events that are fired on itself
       *     as well as among its children
       * @param {Function} callback the callback function that will be fired when the listener is triggered
       *
       * The arguments present in the callback function are:
       * * `element` - The captured DOM element that the animation was fired on.
       * * `phase` - The phase of the animation. The two possible phases are **start** (when the animation starts) and **close** (when it ends).
       */
on:a.on,/**
       *
       * @ngdoc method
       * @name $animate#off
       * @kind function
       * @description Deregisters an event listener based on the event which has been associated with the provided element. This method
       * can be used in three different ways depending on the arguments:
       *
       * ```js
       * // remove all the animation event listeners listening for `enter`
       * $animate.off('enter');
       *
       * // remove all the animation event listeners listening for `enter` on the given element and its children
       * $animate.off('enter', container);
       *
       * // remove the event listener function provided by `listenerFn` that is set
       * // to listen for `enter` on the given `element` as well as its children
       * $animate.off('enter', container, callback);
       * ```
       *
       * @param {string} event the animation event (e.g. enter, leave, move, addClass, removeClass, etc...)
       * @param {DOMElement=} container the container element the event listener was placed on
       * @param {Function=} callback the callback function that was registered as the listener
       */
off:a.off,/**
       * @ngdoc method
       * @name $animate#pin
       * @kind function
       * @description Associates the provided element with a host parent element to allow the element to be animated even if it exists
       *    outside of the DOM structure of the Angular application. By doing so, any animation triggered via `$animate` can be issued on the
       *    element despite being outside the realm of the application or within another application. Say for example if the application
       *    was bootstrapped on an element that is somewhere inside of the `<body>` tag, but we wanted to allow for an element to be situated
       *    as a direct child of `document.body`, then this can be achieved by pinning the element via `$animate.pin(element)`. Keep in mind
       *    that calling `$animate.pin(element, parentElement)` will not actually insert into the DOM anywhere; it will just create the association.
       *
       *    Note that this feature is only active when the `ngAnimate` module is used.
       *
       * @param {DOMElement} element the external element that will be pinned
       * @param {DOMElement} parentElement the host parent element that will be associated with the external element
       */
pin:a.pin,/**
       *
       * @ngdoc method
       * @name $animate#enabled
       * @kind function
       * @description Used to get and set whether animations are enabled or not on the entire application or on an element and its children. This
       * function can be called in four ways:
       *
       * ```js
       * // returns true or false
       * $animate.enabled();
       *
       * // changes the enabled state for all animations
       * $animate.enabled(false);
       * $animate.enabled(true);
       *
       * // returns true or false if animations are enabled for an element
       * $animate.enabled(element);
       *
       * // changes the enabled state for an element and its children
       * $animate.enabled(element, true);
       * $animate.enabled(element, false);
       * ```
       *
       * @param {DOMElement=} element the element that will be considered for checking/setting the enabled state
       * @param {boolean=} enabled whether or not the animations will be enabled for the element
       *
       * @return {boolean} whether or not animations are enabled
       */
enabled:a.enabled,/**
       * @ngdoc method
       * @name $animate#cancel
       * @kind function
       * @description Cancels the provided animation.
       *
       * @param {Promise} animationPromise The animation promise that is returned when an animation is started.
       */
cancel:function(a){a.end&&a.end()},/**
       *
       * @ngdoc method
       * @name $animate#enter
       * @kind function
       * @description Inserts the element into the DOM either after the `after` element (if provided) or
       *   as the first child within the `parent` element and then triggers an animation.
       *   A promise is returned that will be resolved during the next digest once the animation
       *   has completed.
       *
       * @param {DOMElement} element the element which will be inserted into the DOM
       * @param {DOMElement} parent the parent element which will append the element as
       *   a child (so long as the after element is not present)
       * @param {DOMElement=} after the sibling element after which the element will be appended
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
       */
enter:function(c,d,e,f){return d=d&&xd(d),e=e&&xd(e),d=d||e.parent(),b(c,d,e),a.push(c,"enter",db(f))},/**
       *
       * @ngdoc method
       * @name $animate#move
       * @kind function
       * @description Inserts (moves) the element into its new position in the DOM either after
       *   the `after` element (if provided) or as the first child within the `parent` element
       *   and then triggers an animation. A promise is returned that will be resolved
       *   during the next digest once the animation has completed.
       *
       * @param {DOMElement} element the element which will be moved into the new DOM position
       * @param {DOMElement} parent the parent element which will append the element as
       *   a child (so long as the after element is not present)
       * @param {DOMElement=} after the sibling element after which the element will be appended
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
       */
move:function(c,d,e,f){return d=d&&xd(d),e=e&&xd(e),d=d||e.parent(),b(c,d,e),a.push(c,"move",db(f))},/**
       * @ngdoc method
       * @name $animate#leave
       * @kind function
       * @description Triggers an animation and then removes the element from the DOM.
       * When the function is called a promise is returned that will be resolved during the next
       * digest once the animation has completed.
       *
       * @param {DOMElement} element the element which will be removed from the DOM
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
       */
leave:function(b,c){return a.push(b,"leave",db(c),function(){b.remove()})},/**
       * @ngdoc method
       * @name $animate#addClass
       * @kind function
       *
       * @description Triggers an addClass animation surrounding the addition of the provided CSS class(es). Upon
       *   execution, the addClass operation will only be handled after the next digest and it will not trigger an
       *   animation if element already contains the CSS class or if the class is removed at a later step.
       *   Note that class-based animations are treated differently compared to structural animations
       *   (like enter, move and leave) since the CSS classes may be added/removed at different points
       *   depending if CSS or JavaScript animations are used.
       *
       * @param {DOMElement} element the element which the CSS classes will be applied to
       * @param {string} className the CSS class(es) that will be added (multiple classes are separated via spaces)
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
       */
addClass:function(b,c,d){return d=db(d),d.addClass=ab(d.addclass,c),a.push(b,"addClass",d)},/**
       * @ngdoc method
       * @name $animate#removeClass
       * @kind function
       *
       * @description Triggers a removeClass animation surrounding the removal of the provided CSS class(es). Upon
       *   execution, the removeClass operation will only be handled after the next digest and it will not trigger an
       *   animation if element does not contain the CSS class or if the class is added at a later step.
       *   Note that class-based animations are treated differently compared to structural animations
       *   (like enter, move and leave) since the CSS classes may be added/removed at different points
       *   depending if CSS or JavaScript animations are used.
       *
       * @param {DOMElement} element the element which the CSS classes will be applied to
       * @param {string} className the CSS class(es) that will be removed (multiple classes are separated via spaces)
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
       */
removeClass:function(b,c,d){return d=db(d),d.removeClass=ab(d.removeClass,c),a.push(b,"removeClass",d)},/**
       * @ngdoc method
       * @name $animate#setClass
       * @kind function
       *
       * @description Performs both the addition and removal of a CSS classes on an element and (during the process)
       *    triggers an animation surrounding the class addition/removal. Much like `$animate.addClass` and
       *    `$animate.removeClass`, `setClass` will only evaluate the classes being added/removed once a digest has
       *    passed. Note that class-based animations are treated differently compared to structural animations
       *    (like enter, move and leave) since the CSS classes may be added/removed at different points
       *    depending if CSS or JavaScript animations are used.
       *
       * @param {DOMElement} element the element which the CSS classes will be applied to
       * @param {string} add the CSS class(es) that will be added (multiple classes are separated via spaces)
       * @param {string} remove the CSS class(es) that will be removed (multiple classes are separated via spaces)
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
       */
setClass:function(b,c,d,e){return e=db(e),e.addClass=ab(e.addClass,c),e.removeClass=ab(e.removeClass,d),a.push(b,"setClass",e)},/**
       * @ngdoc method
       * @name $animate#animate
       * @kind function
       *
       * @description Performs an inline animation on the element which applies the provided to and from CSS styles to the element.
       * If any detected CSS transition, keyframe or JavaScript matches the provided className value then the animation will take
       * on the provided styles. For example, if a transition animation is set for the given className then the provided from and
       * to styles will be applied alongside the given transition. If a JavaScript animation is detected then the provided styles
       * will be given in as function paramters into the `animate` method (or as apart of the `options` parameter).
       *
       * @param {DOMElement} element the element which the CSS styles will be applied to
       * @param {object} from the from (starting) CSS styles that will be applied to the element and across the animation.
       * @param {object} to the to (destination) CSS styles that will be applied to the element and across the animation.
       * @param {string=} className an optional CSS class that will be applied to the element for the duration of the animation. If
       *    this value is left as empty then a CSS class of `ng-inline-animate` will be applied to the element.
       *    (Note that if no animation is detected then this value will not be appplied to the element.)
       * @param {object=} options an optional collection of options/styles that will be applied to the element
       *
       * @return {Promise} the animation callback promise
       */
animate:function(b,c,d,e,f){return f=db(f),f.from=f.from?l(f.from,c):c,f.to=f.to?l(f.to,d):d,e=e||"ng-inline-animate",f.tempClasses=ab(f.tempClasses,e),a.push(b,"animate",f)}}}]}],Ae=function(){this.$get=["$$rAF","$q",function(a,b){var c=function(){};return c.prototype={done:function(a){this.defer&&this.defer[a===!0?"reject":"resolve"]()},end:function(){this.done()},cancel:function(){this.done(!0)},getPromise:function(){return this.defer||(this.defer=b.defer()),this.defer.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)}},function(b,d){function e(){return a(function(){f(),g||h.done(),g=!0}),h}function f(){d.addClass&&(b.addClass(d.addClass),d.addClass=null),d.removeClass&&(b.removeClass(d.removeClass),d.removeClass=null),d.to&&(b.css(d.to),d.to=null)}d.from&&(b.css(d.from),d.from=null);var g,h=new c;return{start:e,end:e}}}]},Be=d("$compile");/**
 * @ngdoc provider
 * @name $compileProvider
 *
 * @description
 */
ib.$inject=["$provide","$$sanitizeUriProvider"];var Ce=/^((?:x|data)[\:\-_])/i,De=d("$controller"),Ee=/^(\S+)(\s+as\s+(\w+))?$/,Fe=function(){this.$get=["$document",function(a){return function(b){
//the line below will force the browser to perform a repaint so
//that all the animated elements within the animation frame will
//be properly updated and drawn on screen. This is required to
//ensure that the preparation animation is properly flushed so that
//the active state picks up from there. DO NOT REMOVE THIS LINE.
//DO NOT OPTIMIZE THIS LINE. THE MINIFIER WILL REMOVE IT OTHERWISE WHICH
//WILL RESULT IN AN UNPREDICTABLE BUG THAT IS VERY HARD TO TRACK DOWN AND
//WILL TAKE YEARS AWAY FROM YOUR LIFE.
return b?!b.nodeType&&b instanceof xd&&(b=b[0]):b=a[0].body,b.offsetWidth+1}}]},Ge="application/json",He={"Content-Type":Ge+";charset=utf-8"},Ie=/^\[|^\{(?!\{)/,Je={"[":/]$/,"{":/}$/},Ke=/^\)\]\}',?\n/,Le=d("$http"),Me=function(a){return function(){throw Le("legacy","The method `{0}` on the promise returned from `$http` has been disabled.",a)}},Ne=Gd.$interpolateMinErr=d("$interpolate");Ne.throwNoconcat=function(a){throw Ne("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",a)},Ne.interr=function(a,b){return Ne("interr","Can't interpolate: {0}\n{1}",a,b.toString())};/**
 * @ngdoc service
 * @name $locale
 *
 * @description
 * $locale service provides localization rules for various Angular components. As of right now the
 * only public api is:
 *
 * * `id` – `{string}` – locale id formatted as `languageId-countryId` (e.g. `en-us`)
 */
var Oe=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Pe={http:80,https:443,ftp:21},Qe=d("$location"),Re={/**
   * Are we in html5 mode?
   * @private
   */
$$html5:!1,/**
   * Has any change been replacing?
   * @private
   */
$$replace:!1,/**
   * @ngdoc method
   * @name $location#absUrl
   *
   * @description
   * This method is getter only.
   *
   * Return full url representation with all segments encoded according to rules specified in
   * [RFC 3986](http://www.ietf.org/rfc/rfc3986.txt).
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var absUrl = $location.absUrl();
   * // => "http://example.com/#/some/path?foo=bar&baz=xoxo"
   * ```
   *
   * @return {string} full url
   */
absUrl:Qb("$$absUrl"),/**
   * @ngdoc method
   * @name $location#url
   *
   * @description
   * This method is getter / setter.
   *
   * Return url (e.g. `/path?a=b#hash`) when called without any parameter.
   *
   * Change path, search and hash, when called with parameter and return `$location`.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var url = $location.url();
   * // => "/some/path?foo=bar&baz=xoxo"
   * ```
   *
   * @param {string=} url New url without base prefix (e.g. `/path?a=b#hash`)
   * @return {string} url
   */
url:function(a){if(t(a))return this.$$url;var b=Oe.exec(a);return(b[1]||""===a)&&this.path(decodeURIComponent(b[1])),(b[2]||b[1]||""===a)&&this.search(b[3]||""),this.hash(b[5]||""),this},/**
   * @ngdoc method
   * @name $location#protocol
   *
   * @description
   * This method is getter only.
   *
   * Return protocol of current url.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var protocol = $location.protocol();
   * // => "http"
   * ```
   *
   * @return {string} protocol of current url
   */
protocol:Qb("$$protocol"),/**
   * @ngdoc method
   * @name $location#host
   *
   * @description
   * This method is getter only.
   *
   * Return host of current url.
   *
   * Note: compared to the non-angular version `location.host` which returns `hostname:port`, this returns the `hostname` portion only.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var host = $location.host();
   * // => "example.com"
   *
   * // given url http://user:password@example.com:8080/#/some/path?foo=bar&baz=xoxo
   * host = $location.host();
   * // => "example.com"
   * host = location.host;
   * // => "example.com:8080"
   * ```
   *
   * @return {string} host of current url.
   */
host:Qb("$$host"),/**
   * @ngdoc method
   * @name $location#port
   *
   * @description
   * This method is getter only.
   *
   * Return port of current url.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var port = $location.port();
   * // => 80
   * ```
   *
   * @return {Number} port
   */
port:Qb("$$port"),/**
   * @ngdoc method
   * @name $location#path
   *
   * @description
   * This method is getter / setter.
   *
   * Return path of current url when called without any parameter.
   *
   * Change path when called with parameter and return `$location`.
   *
   * Note: Path should always begin with forward slash (/), this method will add the forward slash
   * if it is missing.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var path = $location.path();
   * // => "/some/path"
   * ```
   *
   * @param {(string|number)=} path New path
   * @return {string} path
   */
path:Rb("$$path",function(a){return a=null!==a?a.toString():"","/"==a.charAt(0)?a:"/"+a}),/**
   * @ngdoc method
   * @name $location#search
   *
   * @description
   * This method is getter / setter.
   *
   * Return search part (as object) of current url when called without any parameter.
   *
   * Change search part when called with parameter and return `$location`.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo
   * var searchObject = $location.search();
   * // => {foo: 'bar', baz: 'xoxo'}
   *
   * // set foo to 'yipee'
   * $location.search('foo', 'yipee');
   * // $location.search() => {foo: 'yipee', baz: 'xoxo'}
   * ```
   *
   * @param {string|Object.<string>|Object.<Array.<string>>} search New search params - string or
   * hash object.
   *
   * When called with a single argument the method acts as a setter, setting the `search` component
   * of `$location` to the specified value.
   *
   * If the argument is a hash object containing an array of values, these values will be encoded
   * as duplicate search parameters in the url.
   *
   * @param {(string|Number|Array<string>|boolean)=} paramValue If `search` is a string or number, then `paramValue`
   * will override only a single search property.
   *
   * If `paramValue` is an array, it will override the property of the `search` component of
   * `$location` specified via the first argument.
   *
   * If `paramValue` is `null`, the property specified via the first argument will be deleted.
   *
   * If `paramValue` is `true`, the property specified via the first argument will be added with no
   * value nor trailing equal sign.
   *
   * @return {Object} If called with no arguments returns the parsed `search` object. If called with
   * one or more arguments returns `$location` object itself.
   */
search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(x(a)||y(a))a=a.toString(),this.$$search=aa(a);else{if(!v(a))throw Qe("isrcharg","The first argument of the `$location#search()` call must be a string or an object.");a=O(a,{}),
// remove object undefined or null properties
f(a,function(b,c){null==b&&delete a[c]}),this.$$search=a}break;default:t(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}return this.$$compose(),this},/**
   * @ngdoc method
   * @name $location#hash
   *
   * @description
   * This method is getter / setter.
   *
   * Return hash fragment when called without any parameter.
   *
   * Change hash fragment when called with parameter and return `$location`.
   *
   *
   * ```js
   * // given url http://example.com/#/some/path?foo=bar&baz=xoxo#hashValue
   * var hash = $location.hash();
   * // => "hashValue"
   * ```
   *
   * @param {(string|number)=} hash New hash fragment
   * @return {string} hash
   */
hash:Rb("$$hash",function(a){return null!==a?a.toString():""}),/**
   * @ngdoc method
   * @name $location#replace
   *
   * @description
   * If called, all changes to $location during current `$digest` will be replacing current history
   * record, instead of adding new one.
   */
replace:function(){return this.$$replace=!0,this}};f([Pb,Ob,Nb],function(a){a.prototype=Object.create(Re),/**
   * @ngdoc method
   * @name $location#state
   *
   * @description
   * This method is getter / setter.
   *
   * Return the history state object when called without any parameter.
   *
   * Change the history state object when called with one parameter and return `$location`.
   * The state object is later passed to `pushState` or `replaceState`.
   *
   * NOTE: This method is supported only in HTML5 mode and only in browsers supporting
   * the HTML5 History API (i.e. methods `pushState` and `replaceState`). If you need to support
   * older browsers (like IE9 or Android < 4.0), don't use this method.
   *
   * @param {object=} state State object for pushState or replaceState
   * @return {object} state
   */
a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==Nb||!this.$$html5)throw Qe("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API");
// The user might modify `stateObject` after invoking `$location.state(stateObject)`
// but we're changing the $$state reference to $browser.state() during the $digest
// so the modification window is narrow.
return this.$$state=t(b)?null:b,this}});/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 *     Any commits to this file should be reviewed with security in mind.  *
 *   Changes to this file can potentially create security vulnerabilities. *
 *          An approval from 2 Core members with history of modifying      *
 *                         this file is required.                          *
 *                                                                         *
 *  Does the change somehow allow for arbitrary javascript to be executed? *
 *    Or allows for someone to change the prototype of built-in objects?   *
 *     Or gives undesired access to variables likes document or window?    *
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var Se=d("$parse"),Te=Function.prototype.call,Ue=Function.prototype.apply,Ve=Function.prototype.bind,We=qa();f("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){We[a]=!0});var Xe={n:"\n",f:"\f",r:"\r",t:"	",v:"","'":"'",'"':'"'},Ye=function(a){this.options=a};Ye.prototype={constructor:Ye,lex:function(a){for(this.text=a,this.index=0,this.tokens=[];this.index<this.text.length;){var b=this.text.charAt(this.index);if('"'===b||"'"===b)this.readString(b);else if(this.isNumber(b)||"."===b&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(b))this.readIdent();else if(this.is(b,"(){}[].,;:?"))this.tokens.push({index:this.index,text:b}),this.index++;else if(this.isWhitespace(b))this.index++;else{var c=b+this.peek(),d=c+this.peek(2),e=We[b],f=We[c],g=We[d];if(e||f||g){var h=g?d:f?c:b;this.tokens.push({index:this.index,text:h,operator:!0}),this.index+=h.length}else this.throwError("Unexpected next character ",this.index,this.index+1)}}return this.tokens},is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){var b=a||1;return this.index+b<this.text.length?this.text.charAt(this.index+b):!1},isNumber:function(a){return a>="0"&&"9">=a&&"string"==typeof a},isWhitespace:function(a){
// IE treats non-breaking space as \u00A0
return" "===a||"\r"===a||"	"===a||"\n"===a||""===a||" "===a},isIdent:function(a){return a>="a"&&"z">=a||a>="A"&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,c){c=c||this.index;var d=u(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,c)+"]":" "+c;throw Se("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",a,d,this.text)},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var c=rd(this.text.charAt(this.index));if("."==c||this.isNumber(c))a+=c;else{var d=this.peek();if("e"==c&&this.isExpOperator(d))a+=c;else if(this.isExpOperator(c)&&d&&this.isNumber(d)&&"e"==a.charAt(a.length-1))a+=c;else{if(!this.isExpOperator(c)||d&&this.isNumber(d)||"e"!=a.charAt(a.length-1))break;this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){for(var a=this.index;this.index<this.text.length;){var b=this.text.charAt(this.index);if(!this.isIdent(b)&&!this.isNumber(b))break;this.index++}this.tokens.push({index:a,text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var c="",d=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index);if(d+=f,e){if("u"===f){var g=this.text.substring(this.index+1,this.index+5);g.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+g+"]"),this.index+=4,c+=String.fromCharCode(parseInt(g,16))}else{var h=Xe[f];c+=h||f}e=!1}else if("\\"===f)e=!0;else{if(f===a)return this.index++,void this.tokens.push({index:b,text:d,constant:!0,value:c});c+=f}this.index++}this.throwError("Unterminated quote",b)}};var Ze=function(a,b){this.lexer=a,this.options=b};Ze.Program="Program",Ze.ExpressionStatement="ExpressionStatement",Ze.AssignmentExpression="AssignmentExpression",Ze.ConditionalExpression="ConditionalExpression",Ze.LogicalExpression="LogicalExpression",Ze.BinaryExpression="BinaryExpression",Ze.UnaryExpression="UnaryExpression",Ze.CallExpression="CallExpression",Ze.MemberExpression="MemberExpression",Ze.Identifier="Identifier",Ze.Literal="Literal",Ze.ArrayExpression="ArrayExpression",Ze.Property="Property",Ze.ObjectExpression="ObjectExpression",Ze.ThisExpression="ThisExpression",
// Internal use only
Ze.NGValueParameter="NGValueParameter",Ze.prototype={ast:function(a){this.text=a,this.tokens=this.lexer.lex(a);var b=this.program();return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),b},program:function(){for(var a=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),!this.expect(";"))return{type:Ze.Program,body:a}},expressionStatement:function(){return{type:Ze.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a,b=this.expression();a=this.expect("|");)b=this.filter(b);return b},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();return this.expect("=")&&(a={type:Ze.AssignmentExpression,left:a,right:this.assignment(),operator:"="}),a},ternary:function(){var a,b,c=this.logicalOR();return this.expect("?")&&(a=this.expression(),this.consume(":"))?(b=this.expression(),{type:Ze.ConditionalExpression,test:c,alternate:a,consequent:b}):c},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:Ze.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:Ze.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a,b=this.relational();a=this.expect("==","!=","===","!==");)b={type:Ze.BinaryExpression,operator:a.text,left:b,right:this.relational()};return b},relational:function(){for(var a,b=this.additive();a=this.expect("<",">","<=",">=");)b={type:Ze.BinaryExpression,operator:a.text,left:b,right:this.additive()};return b},additive:function(){for(var a,b=this.multiplicative();a=this.expect("+","-");)b={type:Ze.BinaryExpression,operator:a.text,left:b,right:this.multiplicative()};return b},multiplicative:function(){for(var a,b=this.unary();a=this.expect("*","/","%");)b={type:Ze.BinaryExpression,operator:a.text,left:b,right:this.unary()};return b},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:Ze.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.constants.hasOwnProperty(this.peek().text)?a=O(this.constants[this.consume().text]):this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:Ze.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:Ze.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:Ze.MemberExpression,object:a,property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){for(var b=[a],c={type:Ze.CallExpression,callee:this.identifier(),arguments:b,filter:!0};this.expect(":");)b.push(this.expression());return c},parseArguments:function(){var a=[];if(")"!==this.peekToken().text)do a.push(this.expression());while(this.expect(","));return a},identifier:function(){var a=this.consume();return a.identifier||this.throwError("is not a valid identifier",a),{type:Ze.Identifier,name:a.text}},constant:function(){
// TODO check that it is a constant
return{type:Ze.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text)do{if(this.peek("]"))
// Support trailing commas per ES5.1.
break;a.push(this.expression())}while(this.expect(","));return this.consume("]"),{type:Ze.ArrayExpression,elements:a}},object:function(){var a,b=[];if("}"!==this.peekToken().text)do{if(this.peek("}"))
// Support trailing commas per ES5.1.
break;a={type:Ze.Property,kind:"init"},this.peek().constant?a.key=this.constant():this.peek().identifier?a.key=this.identifier():this.throwError("invalid key",this.peek()),this.consume(":"),a.value=this.expression(),b.push(a)}while(this.expect(","));return this.consume("}"),{type:Ze.ObjectExpression,properties:b}},throwError:function(a,b){throw Se("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",b.text,a,b.index+1,this.text,this.text.substring(b.index))},consume:function(a){if(0===this.tokens.length)throw Se("ueoe","Unexpected end of expression: {0}",this.text);var b=this.expect(a);return b||this.throwError("is unexpected, expecting ["+a+"]",this.peek()),b},peekToken:function(){if(0===this.tokens.length)throw Se("ueoe","Unexpected end of expression: {0}",this.text);return this.tokens[0]},peek:function(a,b,c,d){return this.peekAhead(0,a,b,c,d)},peekAhead:function(a,b,c,d,e){if(this.tokens.length>a){var f=this.tokens[a],g=f.text;if(g===b||g===c||g===d||g===e||!b&&!c&&!d&&!e)return f}return!1},expect:function(a,b,c,d){var e=this.peek(a,b,c,d);return e?(this.tokens.shift(),e):!1},/* `undefined` is not a constant, it is an identifier,
   * but using it as an identifier is not supported
   */
constants:{"true":{type:Ze.Literal,value:!0},"false":{type:Ze.Literal,value:!1},"null":{type:Ze.Literal,value:null},undefined:{type:Ze.Literal,value:c},"this":{type:Ze.ThisExpression}}},ec.prototype={compile:function(a,b){var d=this,e=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]},$b(e,d.$filter);var g,h="";if(this.stage="assign",g=bc(e)){this.state.computing="assign";var i=this.nextId();this.recurse(g,i),this.return_(i),h="fn.assign="+this.generateFunction("assign","s,v,l")}var j=_b(e.body);d.stage="inputs",f(j,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}},d.state.computing=c;var e=d.nextId();d.recurse(a,e),d.return_(e),d.state.inputs.push(c),a.watchId=b}),this.state.computing="fn",this.stage="main",this.recurse(e);var k=
// The build and minification steps remove the string "use strict" from the code, but this is done using a regex.
// This is a workaround for this until we do a better job at only removing the prefix only when we should.
'"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+h+this.watchFns()+"return fn;",l=new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","ifDefined","plus","text",k)(this.$filter,Ub,Vb,Wb,Xb,Yb,a);/* jshint +W054 */
return this.state=this.stage=c,l.literal=cc(e),l.constant=dc(e),l},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,c=this;return f(b,function(b){a.push("var "+b+"="+c.generateFunction(b,"s"))}),b.length&&a.push("fn.inputs=["+b.join(",")+"];"),a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=[],b=this;return f(this.state.filters,function(c,d){a.push(c+"=$filter("+b.escape(d)+")")}),a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,e,g,h){var i,j,k,l,m=this;if(e=e||p,!h&&u(a.watchId))return b=b||this.nextId(),void this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,e,g,!0));switch(a.type){case Ze.Program:f(a.body,function(b,d){m.recurse(b.expression,c,c,function(a){j=a}),d!==a.body.length-1?m.current().body.push(j,";"):m.return_(j)});break;case Ze.Literal:l=this.escape(a.value),this.assign(b,l),e(l);break;case Ze.UnaryExpression:this.recurse(a.argument,c,c,function(a){j=a}),l=a.operator+"("+this.ifDefined(j,0)+")",this.assign(b,l),e(l);break;case Ze.BinaryExpression:this.recurse(a.left,c,c,function(a){i=a}),this.recurse(a.right,c,c,function(a){j=a}),l="+"===a.operator?this.plus(i,j):"-"===a.operator?this.ifDefined(i,0)+a.operator+this.ifDefined(j,0):"("+i+")"+a.operator+"("+j+")",this.assign(b,l),e(l);break;case Ze.LogicalExpression:b=b||this.nextId(),m.recurse(a.left,b),m.if_("&&"===a.operator?b:m.not(b),m.lazyRecurse(a.right,b)),e(b);break;case Ze.ConditionalExpression:b=b||this.nextId(),m.recurse(a.test,b),m.if_(b,m.lazyRecurse(a.alternate,b),m.lazyRecurse(a.consequent,b)),e(b);break;case Ze.Identifier:b=b||this.nextId(),d&&(d.context="inputs"===m.stage?"s":this.assign(this.nextId(),this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name),Ub(a.name),m.if_("inputs"===m.stage||m.not(m.getHasOwnProperty("l",a.name)),function(){m.if_("inputs"===m.stage||"s",function(){g&&1!==g&&m.if_(m.not(m.nonComputedMember("s",a.name)),m.lazyAssign(m.nonComputedMember("s",a.name),"{}")),m.assign(b,m.nonComputedMember("s",a.name))})},b&&m.lazyAssign(b,m.nonComputedMember("l",a.name))),(m.state.expensiveChecks||gc(a.name))&&m.addEnsureSafeObject(b),e(b);break;case Ze.MemberExpression:i=d&&(d.context=this.nextId())||this.nextId(),b=b||this.nextId(),m.recurse(a.object,i,c,function(){m.if_(m.notNull(i),function(){a.computed?(j=m.nextId(),m.recurse(a.property,j),m.addEnsureSafeMemberName(j),g&&1!==g&&m.if_(m.not(m.computedMember(i,j)),m.lazyAssign(m.computedMember(i,j),"{}")),l=m.ensureSafeObject(m.computedMember(i,j)),m.assign(b,l),d&&(d.computed=!0,d.name=j)):(Ub(a.property.name),g&&1!==g&&m.if_(m.not(m.nonComputedMember(i,a.property.name)),m.lazyAssign(m.nonComputedMember(i,a.property.name),"{}")),l=m.nonComputedMember(i,a.property.name),(m.state.expensiveChecks||gc(a.property.name))&&(l=m.ensureSafeObject(l)),m.assign(b,l),d&&(d.computed=!1,d.name=a.property.name))},function(){m.assign(b,"undefined")}),e(b)},!!g);break;case Ze.CallExpression:b=b||this.nextId(),a.filter?(j=m.filter(a.callee.name),k=[],f(a.arguments,function(a){var b=m.nextId();m.recurse(a,b),k.push(b)}),l=j+"("+k.join(",")+")",m.assign(b,l),e(b)):(j=m.nextId(),i={},k=[],m.recurse(a.callee,j,i,function(){m.if_(m.notNull(j),function(){m.addEnsureSafeFunction(j),f(a.arguments,function(a){m.recurse(a,m.nextId(),c,function(a){k.push(m.ensureSafeObject(a))})}),i.name?(m.state.expensiveChecks||m.addEnsureSafeObject(i.context),l=m.member(i.context,i.name,i.computed)+"("+k.join(",")+")"):l=j+"("+k.join(",")+")",l=m.ensureSafeObject(l),m.assign(b,l)},function(){m.assign(b,"undefined")}),e(b)}));break;case Ze.AssignmentExpression:if(j=this.nextId(),i={},!ac(a.left))throw Se("lval","Trying to assing a value to a non l-value");this.recurse(a.left,c,i,function(){m.if_(m.notNull(i.context),function(){m.recurse(a.right,j),m.addEnsureSafeObject(m.member(i.context,i.name,i.computed)),l=m.member(i.context,i.name,i.computed)+a.operator+j,m.assign(b,l),e(b||l)})},1);break;case Ze.ArrayExpression:k=[],f(a.elements,function(a){m.recurse(a,m.nextId(),c,function(a){k.push(a)})}),l="["+k.join(",")+"]",this.assign(b,l),e(l);break;case Ze.ObjectExpression:k=[],f(a.properties,function(a){m.recurse(a.value,m.nextId(),c,function(b){k.push(m.escape(a.key.type===Ze.Identifier?a.key.name:""+a.key.value)+":"+b)})}),l="{"+k.join(",")+"}",this.assign(b,l),e(l);break;case Ze.ThisExpression:this.assign(b,"s"),e("s");break;case Ze.NGValueParameter:this.assign(b,"v"),e("v")}},getHasOwnProperty:function(a,b){var c=a+"."+b,d=this.current().own;return d.hasOwnProperty(c)||(d[c]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")")),d[c]},assign:function(a,b){return a?(this.current().body.push(a,"=",b,";"),a):void 0},filter:function(a){return this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0)),this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,c){if(a===!0)b();else{var d=this.current().body;d.push("if(",a,"){"),b(),d.push("}"),c&&(d.push("else{"),c(),d.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){return a+"."+b},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,c){return c?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},lazyRecurse:function(a,b,c,d,e,f){var g=this;return function(){g.recurse(a,b,c,d,e,f)}},lazyAssign:function(a,b){var c=this;return function(){c.assign(a,b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(x(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(y(a))return a.toString();if(a===!0)return"true";if(a===!1)return"false";if(null===a)return"null";if("undefined"==typeof a)return"undefined";throw Se("esc","IMPOSSIBLE")},nextId:function(a,b){var c="v"+this.state.nextId++;return a||this.current().vars.push(c+(b?"="+b:"")),c},current:function(){return this.state[this.state.computing]}},fc.prototype={compile:function(a,b){var c=this,d=this.astBuilder.ast(a);this.expression=a,this.expensiveChecks=b,$b(d,c.$filter);var e,g;(e=bc(d))&&(g=this.recurse(e));var h,i=_b(d.body);i&&(h=[],f(i,function(a,b){var d=c.recurse(a);a.input=d,h.push(d),a.watchId=b}));var j=[];f(d.body,function(a){j.push(c.recurse(a.expression))});var k=0===d.body.length?function(){}:1===d.body.length?j[0]:function(a,b){var c;return f(j,function(d){c=d(a,b)}),c};return g&&(k.assign=function(a,b,c){return g(a,c,b)}),h&&(k.inputs=h),k.literal=cc(d),k.constant=dc(d),k},recurse:function(a,b,d){var e,g,h,i=this;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case Ze.Literal:return this.value(a.value,b);case Ze.UnaryExpression:return g=this.recurse(a.argument),this["unary"+a.operator](g,b);case Ze.BinaryExpression:return e=this.recurse(a.left),g=this.recurse(a.right),this["binary"+a.operator](e,g,b);case Ze.LogicalExpression:return e=this.recurse(a.left),g=this.recurse(a.right),this["binary"+a.operator](e,g,b);case Ze.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),this.recurse(a.alternate),this.recurse(a.consequent),b);case Ze.Identifier:return Ub(a.name,i.expression),i.identifier(a.name,i.expensiveChecks||gc(a.name),b,d,i.expression);case Ze.MemberExpression:return e=this.recurse(a.object,!1,!!d),a.computed||(Ub(a.property.name,i.expression),g=a.property.name),a.computed&&(g=this.recurse(a.property)),a.computed?this.computedMember(e,g,b,d,i.expression):this.nonComputedMember(e,g,i.expensiveChecks,b,d,i.expression);case Ze.CallExpression:return h=[],f(a.arguments,function(a){h.push(i.recurse(a))}),a.filter&&(g=this.$filter(a.callee.name)),a.filter||(g=this.recurse(a.callee,!0)),a.filter?function(a,d,e,f){for(var i=[],j=0;j<h.length;++j)i.push(h[j](a,d,e,f));var k=g.apply(c,i,f);return b?{context:c,name:c,value:k}:k}:function(a,c,d,e){var f,j=g(a,c,d,e);if(null!=j.value){Vb(j.context,i.expression),Wb(j.value,i.expression);for(var k=[],l=0;l<h.length;++l)k.push(Vb(h[l](a,c,d,e),i.expression));f=Vb(j.value.apply(j.context,k),i.expression)}return b?{value:f}:f};case Ze.AssignmentExpression:return e=this.recurse(a.left,!0,1),g=this.recurse(a.right),function(a,c,d,f){var h=e(a,c,d,f),j=g(a,c,d,f);return Vb(h.value,i.expression),h.context[h.name]=j,b?{value:j}:j};case Ze.ArrayExpression:return h=[],f(a.elements,function(a){h.push(i.recurse(a))}),function(a,c,d,e){for(var f=[],g=0;g<h.length;++g)f.push(h[g](a,c,d,e));return b?{value:f}:f};case Ze.ObjectExpression:return h=[],f(a.properties,function(a){h.push({key:a.key.type===Ze.Identifier?a.key.name:""+a.key.value,value:i.recurse(a.value)})}),function(a,c,d,e){for(var f={},g=0;g<h.length;++g)f[h[g].key]=h[g].value(a,c,d,e);return b?{value:f}:f};case Ze.ThisExpression:return function(a){return b?{value:a}:a};case Ze.NGValueParameter:return function(a,c,d,e){return b?{value:d}:d}}},"unary+":function(a,b){return function(c,d,e,f){var g=a(c,d,e,f);return g=u(g)?+g:0,b?{value:g}:g}},"unary-":function(a,b){return function(c,d,e,f){var g=a(c,d,e,f);return g=u(g)?-g:0,b?{value:g}:g}},"unary!":function(a,b){return function(c,d,e,f){var g=!a(c,d,e,f);return b?{value:g}:g}},"binary+":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g),i=b(d,e,f,g),j=Yb(h,i);return c?{value:j}:j}},"binary-":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g),i=b(d,e,f,g),j=(u(h)?h:0)-(u(i)?i:0);return c?{value:j}:j}},"binary*":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)*b(d,e,f,g);return c?{value:h}:h}},"binary/":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)/b(d,e,f,g);return c?{value:h}:h}},"binary%":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)%b(d,e,f,g);return c?{value:h}:h}},"binary===":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)===b(d,e,f,g);return c?{value:h}:h}},"binary!==":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)!==b(d,e,f,g);return c?{value:h}:h}},"binary==":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)==b(d,e,f,g);return c?{value:h}:h}},"binary!=":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)!=b(d,e,f,g);return c?{value:h}:h}},"binary<":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)<b(d,e,f,g);return c?{value:h}:h}},"binary>":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)>b(d,e,f,g);return c?{value:h}:h}},"binary<=":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)<=b(d,e,f,g);return c?{value:h}:h}},"binary>=":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)>=b(d,e,f,g);return c?{value:h}:h}},"binary&&":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)&&b(d,e,f,g);return c?{value:h}:h}},"binary||":function(a,b,c){return function(d,e,f,g){var h=a(d,e,f,g)||b(d,e,f,g);return c?{value:h}:h}},"ternary?:":function(a,b,c,d){return function(e,f,g,h){var i=a(e,f,g,h)?b(e,f,g,h):c(e,f,g,h);return d?{value:i}:i}},value:function(a,b){return function(){return b?{context:c,name:c,value:a}:a}},identifier:function(a,b,d,e,f){return function(g,h,i,j){var k=h&&a in h?h:g;e&&1!==e&&k&&!k[a]&&(k[a]={});var l=k?k[a]:c;return b&&Vb(l,f),d?{context:k,name:a,value:l}:l}},computedMember:function(a,b,c,d,e){return function(f,g,h,i){var j,k,l=a(f,g,h,i);return null!=l&&(j=b(f,g,h,i),Ub(j,e),d&&1!==d&&l&&!l[j]&&(l[j]={}),k=l[j],Vb(k,e)),c?{context:l,name:j,value:k}:k}},nonComputedMember:function(a,b,d,e,f,g){return function(h,i,j,k){var l=a(h,i,j,k);f&&1!==f&&l&&!l[b]&&(l[b]={});var m=null!=l?l[b]:c;return(d||gc(b))&&Vb(m,g),e?{context:l,name:b,value:m}:m}},inputs:function(a,b){return function(c,d,e,f){return f?f[b]:a(c,d,e)}}};/**
 * @constructor
 */
var $e=function(a,b,c){this.lexer=a,this.$filter=b,this.options=c,this.ast=new Ze(this.lexer),this.astCompiler=c.csp?new fc(this.ast,b):new ec(this.ast,b)};$e.prototype={constructor:$e,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var _e=(qa(),qa(),Object.prototype.valueOf),af=d("$sce"),bf={HTML:"html",CSS:"css",URL:"url",
// RESOURCE_URL is a subtype of URL used in contexts where a privileged resource is sourced from a
// url.  (e.g. ng-include, script src, templateUrl)
RESOURCE_URL:"resourceUrl",JS:"js"},Be=d("$compile"),cf=b.createElement("a"),df=xc(a.location.href);Ac.$inject=["$document"],/* global currencyFilter: true,
 dateFilter: true,
 filterFilter: true,
 jsonFilter: true,
 limitToFilter: true,
 lowercaseFilter: true,
 numberFilter: true,
 orderByFilter: true,
 uppercaseFilter: true,
 */
/**
 * @ngdoc provider
 * @name $filterProvider
 * @description
 *
 * Filters are just functions which transform input to an output. However filters need to be
 * Dependency Injected. To achieve this a filter definition consists of a factory function which is
 * annotated with dependencies and is responsible for creating a filter function.
 *
 * <div class="alert alert-warning">
 * **Note:** Filter names must be valid angular {@link expression} identifiers, such as `uppercase` or `orderBy`.
 * Names with special characters, such as hyphens and dots, are not allowed. If you wish to namespace
 * your filters, then you can use capitalization (`myappSubsectionFilterx`) or underscores
 * (`myapp_subsection_filterx`).
 * </div>
 *
 * ```js
 *   // Filter registration
 *   function MyModule($provide, $filterProvider) {
 *     // create a service to demonstrate injection (not always needed)
 *     $provide.value('greet', function(name){
 *       return 'Hello ' + name + '!';
 *     });
 *
 *     // register a filter factory which uses the
 *     // greet service to demonstrate DI.
 *     $filterProvider.register('greet', function(greet){
 *       // return the filter function which uses the greet service
 *       // to generate salutation
 *       return function(text) {
 *         // filters need to be forgiving so check input validity
 *         return text && greet(text) || text;
 *       };
 *     });
 *   }
 * ```
 *
 * The filter function is registered with the `$injector` under the filter name suffix with
 * `Filter`.
 *
 * ```js
 *   it('should be the same instance', inject(
 *     function($filterProvider) {
 *       $filterProvider.register('reverse', function(){
 *         return ...;
 *       });
 *     },
 *     function($filter, reverseFilter) {
 *       expect($filter('reverse')).toBe(reverseFilter);
 *     });
 * ```
 *
 *
 * For more information about how angular filters work, and how to create your own filters, see
 * {@link guide/filter Filters} in the Angular Developer Guide.
 */
/**
 * @ngdoc service
 * @name $filter
 * @kind function
 * @description
 * Filters are used for formatting data displayed to the user.
 *
 * The general syntax in templates is as follows:
 *
 *         {{ expression [| filter_name[:parameter_value] ... ] }}
 *
 * @param {String} name Name of the filter function to retrieve
 * @return {Function} the filter function
 * @example
   <example name="$filter" module="filterExample">
     <file name="index.html">
       <div ng-controller="MainCtrl">
        <h3>{{ originalText }}</h3>
        <h3>{{ filteredText }}</h3>
       </div>
     </file>

     <file name="script.js">
      angular.module('filterExample', [])
      .controller('MainCtrl', function($scope, $filter) {
        $scope.originalText = 'hello';
        $scope.filteredText = $filter('uppercase')($scope.originalText);
      });
     </file>
   </example>
  */
Cc.$inject=["$provide"],/**
 * @ngdoc filter
 * @name currency
 * @kind function
 *
 * @description
 * Formats a number as a currency (ie $1,234.56). When no currency symbol is provided, default
 * symbol for current locale is used.
 *
 * @param {number} amount Input to filter.
 * @param {string=} symbol Currency symbol or identifier to be displayed.
 * @param {number=} fractionSize Number of decimal places to round the amount to, defaults to default max fraction size for current locale
 * @returns {string} Formatted number.
 *
 *
 * @example
   <example module="currencyExample">
     <file name="index.html">
       <script>
         angular.module('currencyExample', [])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.amount = 1234.56;
           }]);
       </script>
       <div ng-controller="ExampleController">
         <input type="number" ng-model="amount" aria-label="amount"> <br>
         default currency symbol ($): <span id="currency-default">{{amount | currency}}</span><br>
         custom currency identifier (USD$): <span id="currency-custom">{{amount | currency:"USD$"}}</span>
         no fractions (0): <span id="currency-no-fractions">{{amount | currency:"USD$":0}}</span>
       </div>
     </file>
     <file name="protractor.js" type="protractor">
       it('should init with 1234.56', function() {
         expect(element(by.id('currency-default')).getText()).toBe('$1,234.56');
         expect(element(by.id('currency-custom')).getText()).toBe('USD$1,234.56');
         expect(element(by.id('currency-no-fractions')).getText()).toBe('USD$1,235');
       });
       it('should update', function() {
         if (browser.params.browser == 'safari') {
           // Safari does not understand the minus key. See
           // https://github.com/angular/protractor/issues/481
           return;
         }
         element(by.model('amount')).clear();
         element(by.model('amount')).sendKeys('-1234');
         expect(element(by.id('currency-default')).getText()).toBe('-$1,234.00');
         expect(element(by.id('currency-custom')).getText()).toBe('-USD$1,234.00');
         expect(element(by.id('currency-no-fractions')).getText()).toBe('-USD$1,234');
       });
     </file>
   </example>
 */
Hc.$inject=["$locale"],/**
 * @ngdoc filter
 * @name number
 * @kind function
 *
 * @description
 * Formats a number as text.
 *
 * If the input is null or undefined, it will just be returned.
 * If the input is infinite (Infinity/-Infinity) the Infinity symbol '∞' is returned.
 * If the input is not a number an empty string is returned.
 *
 *
 * @param {number|string} number Number to format.
 * @param {(number|string)=} fractionSize Number of decimal places to round the number to.
 * If this is not provided then the fraction size is computed from the current locale's number
 * formatting pattern. In the case of the default locale, it will be 3.
 * @returns {string} Number rounded to decimalPlaces and places a “,” after each third digit.
 *
 * @example
   <example module="numberFilterExample">
     <file name="index.html">
       <script>
         angular.module('numberFilterExample', [])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.val = 1234.56789;
           }]);
       </script>
       <div ng-controller="ExampleController">
         <label>Enter number: <input ng-model='val'></label><br>
         Default formatting: <span id='number-default'>{{val | number}}</span><br>
         No fractions: <span>{{val | number:0}}</span><br>
         Negative number: <span>{{-val | number:4}}</span>
       </div>
     </file>
     <file name="protractor.js" type="protractor">
       it('should format numbers', function() {
         expect(element(by.id('number-default')).getText()).toBe('1,234.568');
         expect(element(by.binding('val | number:0')).getText()).toBe('1,235');
         expect(element(by.binding('-val | number:4')).getText()).toBe('-1,234.5679');
       });

       it('should update', function() {
         element(by.model('val')).clear();
         element(by.model('val')).sendKeys('3374.333');
         expect(element(by.id('number-default')).getText()).toBe('3,374.333');
         expect(element(by.binding('val | number:0')).getText()).toBe('3,374');
         expect(element(by.binding('-val | number:4')).getText()).toBe('-3,374.3330');
      });
     </file>
   </example>
 */
Ic.$inject=["$locale"];var ef=".",ff={yyyy:Lc("FullYear",4),yy:Lc("FullYear",2,0,!0),y:Lc("FullYear",1),MMMM:Mc("Month"),MMM:Mc("Month",!0),MM:Lc("Month",2,1),M:Lc("Month",1,1),dd:Lc("Date",2),d:Lc("Date",1),HH:Lc("Hours",2),H:Lc("Hours",1),hh:Lc("Hours",2,-12),h:Lc("Hours",1,-12),mm:Lc("Minutes",2),m:Lc("Minutes",1),ss:Lc("Seconds",2),s:Lc("Seconds",1),
// while ISO 8601 requires fractions to be prefixed with `.` or `,`
// we can be just safely rely on using `sss` since we currently don't support single or two digit fractions
sss:Lc("Milliseconds",3),EEEE:Mc("Day"),EEE:Mc("Day",!0),a:Rc,Z:Nc,ww:Qc(2),w:Qc(1),G:Sc,GG:Sc,GGG:Sc,GGGG:Tc},gf=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,hf=/^\-?\d+$/;/**
 * @ngdoc filter
 * @name date
 * @kind function
 *
 * @description
 *   Formats `date` to a string based on the requested `format`.
 *
 *   `format` string can be composed of the following elements:
 *
 *   * `'yyyy'`: 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
 *   * `'yy'`: 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
 *   * `'y'`: 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
 *   * `'MMMM'`: Month in year (January-December)
 *   * `'MMM'`: Month in year (Jan-Dec)
 *   * `'MM'`: Month in year, padded (01-12)
 *   * `'M'`: Month in year (1-12)
 *   * `'dd'`: Day in month, padded (01-31)
 *   * `'d'`: Day in month (1-31)
 *   * `'EEEE'`: Day in Week,(Sunday-Saturday)
 *   * `'EEE'`: Day in Week, (Sun-Sat)
 *   * `'HH'`: Hour in day, padded (00-23)
 *   * `'H'`: Hour in day (0-23)
 *   * `'hh'`: Hour in AM/PM, padded (01-12)
 *   * `'h'`: Hour in AM/PM, (1-12)
 *   * `'mm'`: Minute in hour, padded (00-59)
 *   * `'m'`: Minute in hour (0-59)
 *   * `'ss'`: Second in minute, padded (00-59)
 *   * `'s'`: Second in minute (0-59)
 *   * `'sss'`: Millisecond in second, padded (000-999)
 *   * `'a'`: AM/PM marker
 *   * `'Z'`: 4 digit (+sign) representation of the timezone offset (-1200-+1200)
 *   * `'ww'`: Week of year, padded (00-53). Week 01 is the week with the first Thursday of the year
 *   * `'w'`: Week of year (0-53). Week 1 is the week with the first Thursday of the year
 *   * `'G'`, `'GG'`, `'GGG'`: The abbreviated form of the era string (e.g. 'AD')
 *   * `'GGGG'`: The long form of the era string (e.g. 'Anno Domini')
 *
 *   `format` string can also be one of the following predefined
 *   {@link guide/i18n localizable formats}:
 *
 *   * `'medium'`: equivalent to `'MMM d, y h:mm:ss a'` for en_US locale
 *     (e.g. Sep 3, 2010 12:05:08 PM)
 *   * `'short'`: equivalent to `'M/d/yy h:mm a'` for en_US  locale (e.g. 9/3/10 12:05 PM)
 *   * `'fullDate'`: equivalent to `'EEEE, MMMM d, y'` for en_US  locale
 *     (e.g. Friday, September 3, 2010)
 *   * `'longDate'`: equivalent to `'MMMM d, y'` for en_US  locale (e.g. September 3, 2010)
 *   * `'mediumDate'`: equivalent to `'MMM d, y'` for en_US  locale (e.g. Sep 3, 2010)
 *   * `'shortDate'`: equivalent to `'M/d/yy'` for en_US locale (e.g. 9/3/10)
 *   * `'mediumTime'`: equivalent to `'h:mm:ss a'` for en_US locale (e.g. 12:05:08 PM)
 *   * `'shortTime'`: equivalent to `'h:mm a'` for en_US locale (e.g. 12:05 PM)
 *
 *   `format` string can contain literal values. These need to be escaped by surrounding with single quotes (e.g.
 *   `"h 'in the morning'"`). In order to output a single quote, escape it - i.e., two single quotes in a sequence
 *   (e.g. `"h 'o''clock'"`).
 *
 * @param {(Date|number|string)} date Date to format either as Date object, milliseconds (string or
 *    number) or various ISO 8601 datetime string formats (e.g. yyyy-MM-ddTHH:mm:ss.sssZ and its
 *    shorter versions like yyyy-MM-ddTHH:mmZ, yyyy-MM-dd or yyyyMMddTHHmmssZ). If no timezone is
 *    specified in the string input, the time is considered to be in the local timezone.
 * @param {string=} format Formatting rules (see Description). If not specified,
 *    `mediumDate` is used.
 * @param {string=} timezone Timezone to be used for formatting. It understands UTC/GMT and the
 *    continental US time zone abbreviations, but for general use, use a time zone offset, for
 *    example, `'+0430'` (4 hours, 30 minutes east of the Greenwich meridian)
 *    If not specified, the timezone of the browser will be used.
 * @returns {string} Formatted string or the input if input is not recognized as date/millis.
 *
 * @example
   <example>
     <file name="index.html">
       <span ng-non-bindable>{{1288323623006 | date:'medium'}}</span>:
           <span>{{1288323623006 | date:'medium'}}</span><br>
       <span ng-non-bindable>{{1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'}}</span>:
          <span>{{1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'}}</span><br>
       <span ng-non-bindable>{{1288323623006 | date:'MM/dd/yyyy @ h:mma'}}</span>:
          <span>{{'1288323623006' | date:'MM/dd/yyyy @ h:mma'}}</span><br>
       <span ng-non-bindable>{{1288323623006 | date:"MM/dd/yyyy 'at' h:mma"}}</span>:
          <span>{{'1288323623006' | date:"MM/dd/yyyy 'at' h:mma"}}</span><br>
     </file>
     <file name="protractor.js" type="protractor">
       it('should format date', function() {
         expect(element(by.binding("1288323623006 | date:'medium'")).getText()).
            toMatch(/Oct 2\d, 2010 \d{1,2}:\d{2}:\d{2} (AM|PM)/);
         expect(element(by.binding("1288323623006 | date:'yyyy-MM-dd HH:mm:ss Z'")).getText()).
            toMatch(/2010\-10\-2\d \d{2}:\d{2}:\d{2} (\-|\+)?\d{4}/);
         expect(element(by.binding("'1288323623006' | date:'MM/dd/yyyy @ h:mma'")).getText()).
            toMatch(/10\/2\d\/2010 @ \d{1,2}:\d{2}(AM|PM)/);
         expect(element(by.binding("'1288323623006' | date:\"MM/dd/yyyy 'at' h:mma\"")).getText()).
            toMatch(/10\/2\d\/2010 at \d{1,2}:\d{2}(AM|PM)/);
       });
     </file>
   </example>
 */
Uc.$inject=["$locale"];/**
 * @ngdoc filter
 * @name lowercase
 * @kind function
 * @description
 * Converts string to lowercase.
 * @see angular.lowercase
 */
var jf=r(rd),kf=r(td);/**
 * @ngdoc filter
 * @name orderBy
 * @kind function
 *
 * @description
 * Orders a specified `array` by the `expression` predicate. It is ordered alphabetically
 * for strings and numerically for numbers. Note: if you notice numbers are not being sorted
 * as expected, make sure they are actually being saved as numbers and not strings.
 *
 * @param {Array} array The array to sort.
 * @param {function(*)|string|Array.<(function(*)|string)>=} expression A predicate to be
 *    used by the comparator to determine the order of elements.
 *
 *    Can be one of:
 *
 *    - `function`: Getter function. The result of this function will be sorted using the
 *      `<`, `===`, `>` operator.
 *    - `string`: An Angular expression. The result of this expression is used to compare elements
 *      (for example `name` to sort by a property called `name` or `name.substr(0, 3)` to sort by
 *      3 first characters of a property called `name`). The result of a constant expression
 *      is interpreted as a property name to be used in comparisons (for example `"special name"`
 *      to sort object by the value of their `special name` property). An expression can be
 *      optionally prefixed with `+` or `-` to control ascending or descending sort order
 *      (for example, `+name` or `-name`). If no property is provided, (e.g. `'+'`) then the array
 *      element itself is used to compare where sorting.
 *    - `Array`: An array of function or string predicates. The first predicate in the array
 *      is used for sorting, but when two items are equivalent, the next predicate is used.
 *
 *    If the predicate is missing or empty then it defaults to `'+'`.
 *
 * @param {boolean=} reverse Reverse the order of the array.
 * @returns {Array} Sorted copy of the source array.
 *
 *
 * @example
 * The example below demonstrates a simple ngRepeat, where the data is sorted
 * by age in descending order (predicate is set to `'-age'`).
 * `reverse` is not set, which means it defaults to `false`.
   <example module="orderByExample">
     <file name="index.html">
       <script>
         angular.module('orderByExample', [])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.friends =
                 [{name:'John', phone:'555-1212', age:10},
                  {name:'Mary', phone:'555-9876', age:19},
                  {name:'Mike', phone:'555-4321', age:21},
                  {name:'Adam', phone:'555-5678', age:35},
                  {name:'Julie', phone:'555-8765', age:29}];
           }]);
       </script>
       <div ng-controller="ExampleController">
         <table class="friend">
           <tr>
             <th>Name</th>
             <th>Phone Number</th>
             <th>Age</th>
           </tr>
           <tr ng-repeat="friend in friends | orderBy:'-age'">
             <td>{{friend.name}}</td>
             <td>{{friend.phone}}</td>
             <td>{{friend.age}}</td>
           </tr>
         </table>
       </div>
     </file>
   </example>
 *
 * The predicate and reverse parameters can be controlled dynamically through scope properties,
 * as shown in the next example.
 * @example
   <example module="orderByExample">
     <file name="index.html">
       <script>
         angular.module('orderByExample', [])
           .controller('ExampleController', ['$scope', function($scope) {
             $scope.friends =
                 [{name:'John', phone:'555-1212', age:10},
                  {name:'Mary', phone:'555-9876', age:19},
                  {name:'Mike', phone:'555-4321', age:21},
                  {name:'Adam', phone:'555-5678', age:35},
                  {name:'Julie', phone:'555-8765', age:29}];
             $scope.predicate = 'age';
             $scope.reverse = true;
             $scope.order = function(predicate) {
               $scope.reverse = ($scope.predicate === predicate) ? !$scope.reverse : false;
               $scope.predicate = predicate;
             };
           }]);
       </script>
       <style type="text/css">
         .sortorder:after {
           content: '\25b2';
         }
         .sortorder.reverse:after {
           content: '\25bc';
         }
       </style>
       <div ng-controller="ExampleController">
         <pre>Sorting predicate = {{predicate}}; reverse = {{reverse}}</pre>
         <hr/>
         [ <a href="" ng-click="predicate=''">unsorted</a> ]
         <table class="friend">
           <tr>
             <th>
               <a href="" ng-click="order('name')">Name</a>
               <span class="sortorder" ng-show="predicate === 'name'" ng-class="{reverse:reverse}"></span>
             </th>
             <th>
               <a href="" ng-click="order('phone')">Phone Number</a>
               <span class="sortorder" ng-show="predicate === 'phone'" ng-class="{reverse:reverse}"></span>
             </th>
             <th>
               <a href="" ng-click="order('age')">Age</a>
               <span class="sortorder" ng-show="predicate === 'age'" ng-class="{reverse:reverse}"></span>
             </th>
           </tr>
           <tr ng-repeat="friend in friends | orderBy:predicate:reverse">
             <td>{{friend.name}}</td>
             <td>{{friend.phone}}</td>
             <td>{{friend.age}}</td>
           </tr>
         </table>
       </div>
     </file>
   </example>
 *
 * It's also possible to call the orderBy filter manually, by injecting `$filter`, retrieving the
 * filter routine with `$filter('orderBy')`, and calling the returned filter routine with the
 * desired parameters.
 *
 * Example:
 *
 * @example
  <example module="orderByExample">
    <file name="index.html">
      <div ng-controller="ExampleController">
        <table class="friend">
          <tr>
            <th><a href="" ng-click="reverse=false;order('name', false)">Name</a>
              (<a href="" ng-click="order('-name',false)">^</a>)</th>
            <th><a href="" ng-click="reverse=!reverse;order('phone', reverse)">Phone Number</a></th>
            <th><a href="" ng-click="reverse=!reverse;order('age',reverse)">Age</a></th>
          </tr>
          <tr ng-repeat="friend in friends">
            <td>{{friend.name}}</td>
            <td>{{friend.phone}}</td>
            <td>{{friend.age}}</td>
          </tr>
        </table>
      </div>
    </file>

    <file name="script.js">
      angular.module('orderByExample', [])
        .controller('ExampleController', ['$scope', '$filter', function($scope, $filter) {
          var orderBy = $filter('orderBy');
          $scope.friends = [
            { name: 'John',    phone: '555-1212',    age: 10 },
            { name: 'Mary',    phone: '555-9876',    age: 19 },
            { name: 'Mike',    phone: '555-4321',    age: 21 },
            { name: 'Adam',    phone: '555-5678',    age: 35 },
            { name: 'Julie',   phone: '555-8765',    age: 29 }
          ];
          $scope.order = function(predicate, reverse) {
            $scope.friends = orderBy($scope.friends, predicate, reverse);
          };
          $scope.order('-age',false);
        }]);
    </file>
</example>
 */
Xc.$inject=["$parse"];/**
 * @ngdoc directive
 * @name a
 * @restrict E
 *
 * @description
 * Modifies the default behavior of the html A tag so that the default action is prevented when
 * the href attribute is empty.
 *
 * This change permits the easy creation of action links with the `ngClick` directive
 * without changing the location or causing page reloads, e.g.:
 * `<a href="" ng-click="list.addItem()">Add Item</a>`
 */
var lf=r({restrict:"E",compile:function(a,b){return b.href||b.xlinkHref?void 0:function(a,b){
// If the linked element is not an anchor tag anymore, do nothing
if("a"===b[0].nodeName.toLowerCase()){
// SVGAElement does not use the href attribute, but rather the 'xlinkHref' attribute.
var c="[object SVGAnimatedString]"===Dd.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){
// if we have no href url, then don't navigate anywhere.
b.attr(c)||a.preventDefault()})}}}}),mf={};
// boolean attrs are evaluated
f(le,function(a,b){function c(a,c,e){a.$watch(e[d],function(a){e.$set(b,!!a)})}
// binding to multiple is not supported
if("multiple"!=a){var d=jb("ng-"+b),e=c;"checked"===a&&(e=function(a,b,e){
// ensuring ngChecked doesn't interfere with ngModel when both are set on the same input
e.ngModel!==e[d]&&c(a,b,e)}),mf[d]=function(){return{restrict:"A",priority:100,link:e}}}}),
// aliased input attrs are evaluated
f(ne,function(a,b){mf[b]=function(){return{priority:100,link:function(a,c,d){
//special case ngPattern when a literal regular expression value
//is used as the expression (this way we don't have to watch anything).
if("ngPattern"===b&&"/"==d.ngPattern.charAt(0)){var e=d.ngPattern.match(pd);if(e)return void d.$set("ngPattern",new RegExp(e[1],e[2]))}a.$watch(d[b],function(a){d.$set(b,a)})}}}}),
// ng-src, ng-srcset, ng-href are interpolated
f(["src","srcset","href"],function(a){var b=jb("ng-"+a);mf[b]=function(){return{priority:99,// it needs to run after the attributes are interpolated
link:function(c,d,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===Dd.call(d.prop("href"))&&(g="xlinkHref",e.$attr[g]="xlink:href",f=null),e.$observe(b,function(b){
// on IE, if "ng:src" directive declaration is used and "src" attribute doesn't exist
// then calling element.setAttribute('src', 'foo') doesn't do anything, so we need
// to set the property as well to achieve the desired effect.
// we use attr[attrName] value since $set can sanitize the url.
return b?(e.$set(g,b),void(wd&&f&&d.prop(f,e[g]))):void("href"===a&&e.$set(g,null))})}}}});/* global -nullFormCtrl, -SUBMITTED_CLASS, addSetValidityMethod: true
 */
var nf={$addControl:p,$$renameControl:Zc,$removeControl:p,$setValidity:p,$setDirty:p,$setPristine:p,$setSubmitted:p},of="ng-submitted";/**
 * @ngdoc type
 * @name form.FormController
 *
 * @property {boolean} $pristine True if user has not interacted with the form yet.
 * @property {boolean} $dirty True if user has already interacted with the form.
 * @property {boolean} $valid True if all of the containing forms and controls are valid.
 * @property {boolean} $invalid True if at least one containing control or form is invalid.
 * @property {boolean} $pending True if at least one containing control or form is pending.
 * @property {boolean} $submitted True if user has submitted the form even if its invalid.
 *
 * @property {Object} $error Is an object hash, containing references to controls or
 *  forms with failing validators, where:
 *
 *  - keys are validation tokens (error names),
 *  - values are arrays of controls or forms that have a failing validator for given error name.
 *
 *  Built-in validation tokens:
 *
 *  - `email`
 *  - `max`
 *  - `maxlength`
 *  - `min`
 *  - `minlength`
 *  - `number`
 *  - `pattern`
 *  - `required`
 *  - `url`
 *  - `date`
 *  - `datetimelocal`
 *  - `time`
 *  - `week`
 *  - `month`
 *
 * @description
 * `FormController` keeps track of all its controls and nested forms as well as the state of them,
 * such as being valid/invalid or dirty/pristine.
 *
 * Each {@link ng.directive:form form} directive creates an instance
 * of `FormController`.
 *
 */
//asks for $scope to fool the BC controller module
$c.$inject=["$element","$attrs","$scope","$animate","$interpolate"];/**
 * @ngdoc directive
 * @name ngForm
 * @restrict EAC
 *
 * @description
 * Nestable alias of {@link ng.directive:form `form`} directive. HTML
 * does not allow nesting of form elements. It is useful to nest forms, for example if the validity of a
 * sub-group of controls needs to be determined.
 *
 * Note: the purpose of `ngForm` is to group controls,
 * but not to be a replacement for the `<form>` tag with all of its capabilities
 * (e.g. posting to the server, ...).
 *
 * @param {string=} ngForm|name Name of the form. If specified, the form controller will be published into
 *                       related scope, under this name.
 *
 */
/**
 * @ngdoc directive
 * @name form
 * @restrict E
 *
 * @description
 * Directive that instantiates
 * {@link form.FormController FormController}.
 *
 * If the `name` attribute is specified, the form controller is published onto the current scope under
 * this name.
 *
 * # Alias: {@link ng.directive:ngForm `ngForm`}
 *
 * In Angular, forms can be nested. This means that the outer form is valid when all of the child
 * forms are valid as well. However, browsers do not allow nesting of `<form>` elements, so
 * Angular provides the {@link ng.directive:ngForm `ngForm`} directive which behaves identically to
 * `<form>` but can be nested.  This allows you to have nested forms, which is very useful when
 * using Angular validation directives in forms that are dynamically generated using the
 * {@link ng.directive:ngRepeat `ngRepeat`} directive. Since you cannot dynamically generate the `name`
 * attribute of input elements using interpolation, you have to wrap each set of repeated inputs in an
 * `ngForm` directive and nest these in an outer `form` element.
 *
 *
 * # CSS classes
 *  - `ng-valid` is set if the form is valid.
 *  - `ng-invalid` is set if the form is invalid.
 *  - `ng-pending` is set if the form is pending.
 *  - `ng-pristine` is set if the form is pristine.
 *  - `ng-dirty` is set if the form is dirty.
 *  - `ng-submitted` is set if the form was submitted.
 *
 * Keep in mind that ngAnimate can detect each of these classes when added and removed.
 *
 *
 * # Submitting a form and preventing the default action
 *
 * Since the role of forms in client-side Angular applications is different than in classical
 * roundtrip apps, it is desirable for the browser not to translate the form submission into a full
 * page reload that sends the data to the server. Instead some javascript logic should be triggered
 * to handle the form submission in an application-specific way.
 *
 * For this reason, Angular prevents the default action (form submission to the server) unless the
 * `<form>` element has an `action` attribute specified.
 *
 * You can use one of the following two ways to specify what javascript method should be called when
 * a form is submitted:
 *
 * - {@link ng.directive:ngSubmit ngSubmit} directive on the form element
 * - {@link ng.directive:ngClick ngClick} directive on the first
  *  button or input field of type submit (input[type=submit])
 *
 * To prevent double execution of the handler, use only one of the {@link ng.directive:ngSubmit ngSubmit}
 * or {@link ng.directive:ngClick ngClick} directives.
 * This is because of the following form submission rules in the HTML specification:
 *
 * - If a form has only one input field then hitting enter in this field triggers form submit
 * (`ngSubmit`)
 * - if a form has 2+ input fields and no buttons or input[type=submit] then hitting enter
 * doesn't trigger submit
 * - if a form has one or more input fields and one or more buttons or input[type=submit] then
 * hitting enter in any of the input fields will trigger the click handler on the *first* button or
 * input[type=submit] (`ngClick`) *and* a submit handler on the enclosing form (`ngSubmit`)
 *
 * Any pending `ngModelOptions` changes will take place immediately when an enclosing form is
 * submitted. Note that `ngClick` events will occur before the model is updated. Use `ngSubmit`
 * to have access to the updated model.
 *
 * ## Animation Hooks
 *
 * Animations in ngForm are triggered when any of the associated CSS classes are added and removed.
 * These classes are: `.ng-pristine`, `.ng-dirty`, `.ng-invalid` and `.ng-valid` as well as any
 * other validations that are performed within the form. Animations in ngForm are similar to how
 * they work in ngClass and animations can be hooked into using CSS transitions, keyframes as well
 * as JS animations.
 *
 * The following example shows a simple way to utilize CSS transitions to style a form element
 * that has been rendered as invalid after it has been validated:
 *
 * <pre>
 * //be sure to include ngAnimate as a module to hook into more
 * //advanced animations
 * .my-form {
 *   transition:0.5s linear all;
 *   background: white;
 * }
 * .my-form.ng-invalid {
 *   background: red;
 *   color:white;
 * }
 * </pre>
 *
 * @example
    <example deps="angular-animate.js" animations="true" fixBase="true" module="formExample">
      <file name="index.html">
       <script>
         angular.module('formExample', [])
           .controller('FormController', ['$scope', function($scope) {
             $scope.userType = 'guest';
           }]);
       </script>
       <style>
        .my-form {
          transition:all linear 0.5s;
          background: transparent;
        }
        .my-form.ng-invalid {
          background: red;
        }
       </style>
       <form name="myForm" ng-controller="FormController" class="my-form">
         userType: <input name="input" ng-model="userType" required>
         <span class="error" ng-show="myForm.input.$error.required">Required!</span><br>
         <code>userType = {{userType}}</code><br>
         <code>myForm.input.$valid = {{myForm.input.$valid}}</code><br>
         <code>myForm.input.$error = {{myForm.input.$error}}</code><br>
         <code>myForm.$valid = {{myForm.$valid}}</code><br>
         <code>myForm.$error.required = {{!!myForm.$error.required}}</code><br>
        </form>
      </file>
      <file name="protractor.js" type="protractor">
        it('should initialize to model', function() {
          var userType = element(by.binding('userType'));
          var valid = element(by.binding('myForm.input.$valid'));

          expect(userType.getText()).toContain('guest');
          expect(valid.getText()).toContain('true');
        });

        it('should be invalid if empty', function() {
          var userType = element(by.binding('userType'));
          var valid = element(by.binding('myForm.input.$valid'));
          var userInput = element(by.model('userType'));

          userInput.clear();
          userInput.sendKeys('');

          expect(userType.getText()).toEqual('userType =');
          expect(valid.getText()).toContain('false');
        });
      </file>
    </example>
 *
 * @param {string=} name Name of the form. If specified, the form controller will be published into
 *                       related scope, under this name.
 */
var pf=function(a){return["$timeout","$parse",function(b,d){function e(a){return""===a?d('this[""]').assign:d(a).assign||p}var f={name:"form",restrict:a?"EAC":"E",require:["form","^^?form"],//first is the form's own ctrl, second is an optional parent form
controller:$c,compile:function(d,f){
// Setup initial state of the control
d.addClass(Xf).addClass(Vf);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,f,h){var i=h[0];
// if `action` attr is not present on the form, prevent the default action (submission)
if(!("action"in f)){
// we can't use jq events because if a form is destroyed during submission the default
// action is not prevented. see #1238
//
// IE 9 is not affected because it doesn't fire a submit event and try to do a full
// page reload if the form was destroyed by submission of the form via a click handler
// on a button in the form. Looks like an IE9 specific bug.
var j=function(b){a.$apply(function(){i.$commitViewValue(),i.$setSubmitted()}),b.preventDefault()};_d(d[0],"submit",j),
// unregister the preventDefault listener so that we don't not leak memory but in a
// way that will achieve the prevention of the default action.
d.on("$destroy",function(){b(function(){ae(d[0],"submit",j)},0,!1)})}var k=h[1]||i.$$parentForm;k.$addControl(i);var m=g?e(i.$name):p;g&&(m(a,i),f.$observe(g,function(b){i.$name!==b&&(m(a,c),i.$$parentForm.$$renameControl(i,b),(m=e(i.$name))(a,i))})),d.on("$destroy",function(){i.$$parentForm.$removeControl(i),m(a,c),l(i,nf)})}}}};return f}]},qf=pf(),rf=pf(!0),sf=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,tf=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,uf=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,vf=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,wf=/^(\d{4})-(\d{2})-(\d{2})$/,xf=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,yf=/^(\d{4})-W(\d\d)$/,zf=/^(\d{4})-(\d\d)$/,Af=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Bf={/**
   * @ngdoc input
   * @name input[text]
   *
   * @description
   * Standard HTML text input with angular data binding, inherited by most of the `input` elements.
   *
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} required Adds `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
   *    minlength.
   * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
   *    maxlength. Setting the attribute to a negative or non-numeric value, allows view values of
   *    any length.
   * @param {string=} pattern Similar to `ngPattern` except that the attribute value is the actual string
   *    that contains the regular expression body that will be converted to a regular expression
   *    as in the ngPattern directive.
   * @param {string=} ngPattern Sets `pattern` validation error key if the ngModel value does not match
   *    a RegExp found by evaluating the Angular expression given in the attribute value.
   *    If the expression evaluates to a RegExp object, then this is used directly.
   *    If the expression evaluates to a string, then it will be converted to a RegExp
   *    after wrapping it in `^` and `$` characters. For instance, `"abc"` will be converted to
   *    `new RegExp('^abc$')`.<br />
   *    **Note:** Avoid using the `g` flag on the RegExp, as it will cause each successive search to
   *    start at the index of the last search's match, thus not taking the whole input value into
   *    account.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   * @param {boolean=} [ngTrim=true] If set to false Angular will not automatically trim the input.
   *    This parameter is ignored for input[type=password] controls, which will never trim the
   *    input.
   *
   * @example
      <example name="text-input-directive" module="textInputExample">
        <file name="index.html">
         <script>
           angular.module('textInputExample', [])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.example = {
                 text: 'guest',
                 word: /^\s*\w*\s*$/
               };
             }]);
         </script>
         <form name="myForm" ng-controller="ExampleController">
           <label>Single word:
             <input type="text" name="input" ng-model="example.text"
                    ng-pattern="example.word" required ng-trim="false">
           </label>
           <div role="alert">
             <span class="error" ng-show="myForm.input.$error.required">
               Required!</span>
             <span class="error" ng-show="myForm.input.$error.pattern">
               Single word only!</span>
           </div>
           <tt>text = {{example.text}}</tt><br/>
           <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
           <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
           <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
           <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
          </form>
        </file>
        <file name="protractor.js" type="protractor">
          var text = element(by.binding('example.text'));
          var valid = element(by.binding('myForm.input.$valid'));
          var input = element(by.model('example.text'));

          it('should initialize to model', function() {
            expect(text.getText()).toContain('guest');
            expect(valid.getText()).toContain('true');
          });

          it('should be invalid if empty', function() {
            input.clear();
            input.sendKeys('');

            expect(text.getText()).toEqual('text =');
            expect(valid.getText()).toContain('false');
          });

          it('should be invalid if multi word', function() {
            input.clear();
            input.sendKeys('hello world');

            expect(valid.getText()).toContain('false');
          });
        </file>
      </example>
   */
text:ad,/**
     * @ngdoc input
     * @name input[date]
     *
     * @description
     * Input with date validation and transformation. In browsers that do not yet support
     * the HTML5 date input, a text element will be used. In that case, text must be entered in a valid ISO-8601
     * date format (yyyy-MM-dd), for example: `2009-01-06`. Since many
     * modern browsers do not yet support this input type, it is important to provide cues to users on the
     * expected input format via a placeholder or label.
     *
     * The model must always be a Date object, otherwise Angular will throw an error.
     * Invalid `Date` objects (dates whose `getTime()` is `NaN`) will be rendered as an empty string.
     *
     * The timezone to be used to read/write the `Date` instance in the model can be defined using
     * {@link ng.directive:ngModelOptions ngModelOptions}. By default, this is the timezone of the browser.
     *
     * @param {string} ngModel Assignable angular expression to data-bind to.
     * @param {string=} name Property name of the form under which the control is published.
     * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`. This must be a
     *   valid ISO date string (yyyy-MM-dd). You can also use interpolation inside this attribute
     *   (e.g. `min="{{minDate | date:'yyyy-MM-dd'}}"`). Note that `min` will also add native HTML5
     *   constraint validation.
     * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`. This must be
     *   a valid ISO date string (yyyy-MM-dd). You can also use interpolation inside this attribute
     *   (e.g. `max="{{maxDate | date:'yyyy-MM-dd'}}"`). Note that `max` will also add native HTML5
     *   constraint validation.
     * @param {(date|string)=} ngMin Sets the `min` validation constraint to the Date / ISO date string
     *   the `ngMin` expression evaluates to. Note that it does not set the `min` attribute.
     * @param {(date|string)=} ngMax Sets the `max` validation constraint to the Date / ISO date string
     *   the `ngMax` expression evaluates to. Note that it does not set the `max` attribute.
     * @param {string=} required Sets `required` validation error key if the value is not entered.
     * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
     *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
     *    `required` when you want to data-bind to the `required` attribute.
     * @param {string=} ngChange Angular expression to be executed when input changes due to user
     *    interaction with the input element.
     *
     * @example
     <example name="date-input-directive" module="dateInputExample">
     <file name="index.html">
       <script>
          angular.module('dateInputExample', [])
            .controller('DateController', ['$scope', function($scope) {
              $scope.example = {
                value: new Date(2013, 9, 22)
              };
            }]);
       </script>
       <form name="myForm" ng-controller="DateController as dateCtrl">
          <label for="exampleInput">Pick a date in 2013:</label>
          <input type="date" id="exampleInput" name="input" ng-model="example.value"
              placeholder="yyyy-MM-dd" min="2013-01-01" max="2013-12-31" required />
          <div role="alert">
            <span class="error" ng-show="myForm.input.$error.required">
                Required!</span>
            <span class="error" ng-show="myForm.input.$error.date">
                Not a valid date!</span>
           </div>
           <tt>value = {{example.value | date: "yyyy-MM-dd"}}</tt><br/>
           <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
           <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
           <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
           <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
       </form>
     </file>
     <file name="protractor.js" type="protractor">
        var value = element(by.binding('example.value | date: "yyyy-MM-dd"'));
        var valid = element(by.binding('myForm.input.$valid'));
        var input = element(by.model('example.value'));

        // currently protractor/webdriver does not support
        // sending keys to all known HTML5 input controls
        // for various browsers (see https://github.com/angular/protractor/issues/562).
        function setInput(val) {
          // set the value of the element and force validation.
          var scr = "var ipt = document.getElementById('exampleInput'); " +
          "ipt.value = '" + val + "';" +
          "angular.element(ipt).scope().$apply(function(s) { s.myForm[ipt.name].$setViewValue('" + val + "'); });";
          browser.executeScript(scr);
        }

        it('should initialize to model', function() {
          expect(value.getText()).toContain('2013-10-22');
          expect(valid.getText()).toContain('myForm.input.$valid = true');
        });

        it('should be invalid if empty', function() {
          setInput('');
          expect(value.getText()).toEqual('value =');
          expect(valid.getText()).toContain('myForm.input.$valid = false');
        });

        it('should be invalid if over max', function() {
          setInput('2015-01-01');
          expect(value.getText()).toContain('');
          expect(valid.getText()).toContain('myForm.input.$valid = false');
        });
     </file>
     </example>
     */
date:ed("date",wf,dd(wf,["yyyy","MM","dd"]),"yyyy-MM-dd"),/**
    * @ngdoc input
    * @name input[datetime-local]
    *
    * @description
    * Input with datetime validation and transformation. In browsers that do not yet support
    * the HTML5 date input, a text element will be used. In that case, the text must be entered in a valid ISO-8601
    * local datetime format (yyyy-MM-ddTHH:mm:ss), for example: `2010-12-28T14:57:00`.
    *
    * The model must always be a Date object, otherwise Angular will throw an error.
    * Invalid `Date` objects (dates whose `getTime()` is `NaN`) will be rendered as an empty string.
    *
    * The timezone to be used to read/write the `Date` instance in the model can be defined using
    * {@link ng.directive:ngModelOptions ngModelOptions}. By default, this is the timezone of the browser.
    *
    * @param {string} ngModel Assignable angular expression to data-bind to.
    * @param {string=} name Property name of the form under which the control is published.
    * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`.
    *   This must be a valid ISO datetime format (yyyy-MM-ddTHH:mm:ss). You can also use interpolation
    *   inside this attribute (e.g. `min="{{minDatetimeLocal | date:'yyyy-MM-ddTHH:mm:ss'}}"`).
    *   Note that `min` will also add native HTML5 constraint validation.
    * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`.
    *   This must be a valid ISO datetime format (yyyy-MM-ddTHH:mm:ss). You can also use interpolation
    *   inside this attribute (e.g. `max="{{maxDatetimeLocal | date:'yyyy-MM-ddTHH:mm:ss'}}"`).
    *   Note that `max` will also add native HTML5 constraint validation.
    * @param {(date|string)=} ngMin Sets the `min` validation error key to the Date / ISO datetime string
    *   the `ngMin` expression evaluates to. Note that it does not set the `min` attribute.
    * @param {(date|string)=} ngMax Sets the `max` validation error key to the Date / ISO datetime string
    *   the `ngMax` expression evaluates to. Note that it does not set the `max` attribute.
    * @param {string=} required Sets `required` validation error key if the value is not entered.
    * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
    *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
    *    `required` when you want to data-bind to the `required` attribute.
    * @param {string=} ngChange Angular expression to be executed when input changes due to user
    *    interaction with the input element.
    *
    * @example
    <example name="datetimelocal-input-directive" module="dateExample">
    <file name="index.html">
      <script>
        angular.module('dateExample', [])
          .controller('DateController', ['$scope', function($scope) {
            $scope.example = {
              value: new Date(2010, 11, 28, 14, 57)
            };
          }]);
      </script>
      <form name="myForm" ng-controller="DateController as dateCtrl">
        <label for="exampleInput">Pick a date between in 2013:</label>
        <input type="datetime-local" id="exampleInput" name="input" ng-model="example.value"
            placeholder="yyyy-MM-ddTHH:mm:ss" min="2001-01-01T00:00:00" max="2013-12-31T00:00:00" required />
        <div role="alert">
          <span class="error" ng-show="myForm.input.$error.required">
              Required!</span>
          <span class="error" ng-show="myForm.input.$error.datetimelocal">
              Not a valid date!</span>
        </div>
        <tt>value = {{example.value | date: "yyyy-MM-ddTHH:mm:ss"}}</tt><br/>
        <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
        <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
        <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
        <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
      </form>
    </file>
    <file name="protractor.js" type="protractor">
      var value = element(by.binding('example.value | date: "yyyy-MM-ddTHH:mm:ss"'));
      var valid = element(by.binding('myForm.input.$valid'));
      var input = element(by.model('example.value'));

      // currently protractor/webdriver does not support
      // sending keys to all known HTML5 input controls
      // for various browsers (https://github.com/angular/protractor/issues/562).
      function setInput(val) {
        // set the value of the element and force validation.
        var scr = "var ipt = document.getElementById('exampleInput'); " +
        "ipt.value = '" + val + "';" +
        "angular.element(ipt).scope().$apply(function(s) { s.myForm[ipt.name].$setViewValue('" + val + "'); });";
        browser.executeScript(scr);
      }

      it('should initialize to model', function() {
        expect(value.getText()).toContain('2010-12-28T14:57:00');
        expect(valid.getText()).toContain('myForm.input.$valid = true');
      });

      it('should be invalid if empty', function() {
        setInput('');
        expect(value.getText()).toEqual('value =');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });

      it('should be invalid if over max', function() {
        setInput('2015-01-01T23:59:00');
        expect(value.getText()).toContain('');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });
    </file>
    </example>
    */
"datetime-local":ed("datetimelocal",xf,dd(xf,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),/**
   * @ngdoc input
   * @name input[time]
   *
   * @description
   * Input with time validation and transformation. In browsers that do not yet support
   * the HTML5 date input, a text element will be used. In that case, the text must be entered in a valid ISO-8601
   * local time format (HH:mm:ss), for example: `14:57:00`. Model must be a Date object. This binding will always output a
   * Date object to the model of January 1, 1970, or local date `new Date(1970, 0, 1, HH, mm, ss)`.
   *
   * The model must always be a Date object, otherwise Angular will throw an error.
   * Invalid `Date` objects (dates whose `getTime()` is `NaN`) will be rendered as an empty string.
   *
   * The timezone to be used to read/write the `Date` instance in the model can be defined using
   * {@link ng.directive:ngModelOptions ngModelOptions}. By default, this is the timezone of the browser.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`.
   *   This must be a valid ISO time format (HH:mm:ss). You can also use interpolation inside this
   *   attribute (e.g. `min="{{minTime | date:'HH:mm:ss'}}"`). Note that `min` will also add
   *   native HTML5 constraint validation.
   * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`.
   *   This must be a valid ISO time format (HH:mm:ss). You can also use interpolation inside this
   *   attribute (e.g. `max="{{maxTime | date:'HH:mm:ss'}}"`). Note that `max` will also add
   *   native HTML5 constraint validation.
   * @param {(date|string)=} ngMin Sets the `min` validation constraint to the Date / ISO time string the
   *   `ngMin` expression evaluates to. Note that it does not set the `min` attribute.
   * @param {(date|string)=} ngMax Sets the `max` validation constraint to the Date / ISO time string the
   *   `ngMax` expression evaluates to. Note that it does not set the `max` attribute.
   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
   <example name="time-input-directive" module="timeExample">
   <file name="index.html">
     <script>
      angular.module('timeExample', [])
        .controller('DateController', ['$scope', function($scope) {
          $scope.example = {
            value: new Date(1970, 0, 1, 14, 57, 0)
          };
        }]);
     </script>
     <form name="myForm" ng-controller="DateController as dateCtrl">
        <label for="exampleInput">Pick a between 8am and 5pm:</label>
        <input type="time" id="exampleInput" name="input" ng-model="example.value"
            placeholder="HH:mm:ss" min="08:00:00" max="17:00:00" required />
        <div role="alert">
          <span class="error" ng-show="myForm.input.$error.required">
              Required!</span>
          <span class="error" ng-show="myForm.input.$error.time">
              Not a valid date!</span>
        </div>
        <tt>value = {{example.value | date: "HH:mm:ss"}}</tt><br/>
        <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
        <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
        <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
        <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
     </form>
   </file>
   <file name="protractor.js" type="protractor">
      var value = element(by.binding('example.value | date: "HH:mm:ss"'));
      var valid = element(by.binding('myForm.input.$valid'));
      var input = element(by.model('example.value'));

      // currently protractor/webdriver does not support
      // sending keys to all known HTML5 input controls
      // for various browsers (https://github.com/angular/protractor/issues/562).
      function setInput(val) {
        // set the value of the element and force validation.
        var scr = "var ipt = document.getElementById('exampleInput'); " +
        "ipt.value = '" + val + "';" +
        "angular.element(ipt).scope().$apply(function(s) { s.myForm[ipt.name].$setViewValue('" + val + "'); });";
        browser.executeScript(scr);
      }

      it('should initialize to model', function() {
        expect(value.getText()).toContain('14:57:00');
        expect(valid.getText()).toContain('myForm.input.$valid = true');
      });

      it('should be invalid if empty', function() {
        setInput('');
        expect(value.getText()).toEqual('value =');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });

      it('should be invalid if over max', function() {
        setInput('23:59:00');
        expect(value.getText()).toContain('');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });
   </file>
   </example>
   */
time:ed("time",Af,dd(Af,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),/**
    * @ngdoc input
    * @name input[week]
    *
    * @description
    * Input with week-of-the-year validation and transformation to Date. In browsers that do not yet support
    * the HTML5 week input, a text element will be used. In that case, the text must be entered in a valid ISO-8601
    * week format (yyyy-W##), for example: `2013-W02`.
    *
    * The model must always be a Date object, otherwise Angular will throw an error.
    * Invalid `Date` objects (dates whose `getTime()` is `NaN`) will be rendered as an empty string.
    *
    * The timezone to be used to read/write the `Date` instance in the model can be defined using
    * {@link ng.directive:ngModelOptions ngModelOptions}. By default, this is the timezone of the browser.
    *
    * @param {string} ngModel Assignable angular expression to data-bind to.
    * @param {string=} name Property name of the form under which the control is published.
    * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`.
    *   This must be a valid ISO week format (yyyy-W##). You can also use interpolation inside this
    *   attribute (e.g. `min="{{minWeek | date:'yyyy-Www'}}"`). Note that `min` will also add
    *   native HTML5 constraint validation.
    * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`.
    *   This must be a valid ISO week format (yyyy-W##). You can also use interpolation inside this
    *   attribute (e.g. `max="{{maxWeek | date:'yyyy-Www'}}"`). Note that `max` will also add
    *   native HTML5 constraint validation.
    * @param {(date|string)=} ngMin Sets the `min` validation constraint to the Date / ISO week string
    *   the `ngMin` expression evaluates to. Note that it does not set the `min` attribute.
    * @param {(date|string)=} ngMax Sets the `max` validation constraint to the Date / ISO week string
    *   the `ngMax` expression evaluates to. Note that it does not set the `max` attribute.
    * @param {string=} required Sets `required` validation error key if the value is not entered.
    * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
    *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
    *    `required` when you want to data-bind to the `required` attribute.
    * @param {string=} ngChange Angular expression to be executed when input changes due to user
    *    interaction with the input element.
    *
    * @example
    <example name="week-input-directive" module="weekExample">
    <file name="index.html">
      <script>
      angular.module('weekExample', [])
        .controller('DateController', ['$scope', function($scope) {
          $scope.example = {
            value: new Date(2013, 0, 3)
          };
        }]);
      </script>
      <form name="myForm" ng-controller="DateController as dateCtrl">
        <label>Pick a date between in 2013:
          <input id="exampleInput" type="week" name="input" ng-model="example.value"
                 placeholder="YYYY-W##" min="2012-W32"
                 max="2013-W52" required />
        </label>
        <div role="alert">
          <span class="error" ng-show="myForm.input.$error.required">
              Required!</span>
          <span class="error" ng-show="myForm.input.$error.week">
              Not a valid date!</span>
        </div>
        <tt>value = {{example.value | date: "yyyy-Www"}}</tt><br/>
        <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
        <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
        <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
        <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
      </form>
    </file>
    <file name="protractor.js" type="protractor">
      var value = element(by.binding('example.value | date: "yyyy-Www"'));
      var valid = element(by.binding('myForm.input.$valid'));
      var input = element(by.model('example.value'));

      // currently protractor/webdriver does not support
      // sending keys to all known HTML5 input controls
      // for various browsers (https://github.com/angular/protractor/issues/562).
      function setInput(val) {
        // set the value of the element and force validation.
        var scr = "var ipt = document.getElementById('exampleInput'); " +
        "ipt.value = '" + val + "';" +
        "angular.element(ipt).scope().$apply(function(s) { s.myForm[ipt.name].$setViewValue('" + val + "'); });";
        browser.executeScript(scr);
      }

      it('should initialize to model', function() {
        expect(value.getText()).toContain('2013-W01');
        expect(valid.getText()).toContain('myForm.input.$valid = true');
      });

      it('should be invalid if empty', function() {
        setInput('');
        expect(value.getText()).toEqual('value =');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });

      it('should be invalid if over max', function() {
        setInput('2015-W01');
        expect(value.getText()).toContain('');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });
    </file>
    </example>
    */
week:ed("week",yf,cd,"yyyy-Www"),/**
   * @ngdoc input
   * @name input[month]
   *
   * @description
   * Input with month validation and transformation. In browsers that do not yet support
   * the HTML5 month input, a text element will be used. In that case, the text must be entered in a valid ISO-8601
   * month format (yyyy-MM), for example: `2009-01`.
   *
   * The model must always be a Date object, otherwise Angular will throw an error.
   * Invalid `Date` objects (dates whose `getTime()` is `NaN`) will be rendered as an empty string.
   * If the model is not set to the first of the month, the next view to model update will set it
   * to the first of the month.
   *
   * The timezone to be used to read/write the `Date` instance in the model can be defined using
   * {@link ng.directive:ngModelOptions ngModelOptions}. By default, this is the timezone of the browser.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`.
   *   This must be a valid ISO month format (yyyy-MM). You can also use interpolation inside this
   *   attribute (e.g. `min="{{minMonth | date:'yyyy-MM'}}"`). Note that `min` will also add
   *   native HTML5 constraint validation.
   * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`.
   *   This must be a valid ISO month format (yyyy-MM). You can also use interpolation inside this
   *   attribute (e.g. `max="{{maxMonth | date:'yyyy-MM'}}"`). Note that `max` will also add
   *   native HTML5 constraint validation.
   * @param {(date|string)=} ngMin Sets the `min` validation constraint to the Date / ISO week string
   *   the `ngMin` expression evaluates to. Note that it does not set the `min` attribute.
   * @param {(date|string)=} ngMax Sets the `max` validation constraint to the Date / ISO week string
   *   the `ngMax` expression evaluates to. Note that it does not set the `max` attribute.

   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
   <example name="month-input-directive" module="monthExample">
   <file name="index.html">
     <script>
      angular.module('monthExample', [])
        .controller('DateController', ['$scope', function($scope) {
          $scope.example = {
            value: new Date(2013, 9, 1)
          };
        }]);
     </script>
     <form name="myForm" ng-controller="DateController as dateCtrl">
       <label for="exampleInput">Pick a month in 2013:</label>
       <input id="exampleInput" type="month" name="input" ng-model="example.value"
          placeholder="yyyy-MM" min="2013-01" max="2013-12" required />
       <div role="alert">
         <span class="error" ng-show="myForm.input.$error.required">
            Required!</span>
         <span class="error" ng-show="myForm.input.$error.month">
            Not a valid month!</span>
       </div>
       <tt>value = {{example.value | date: "yyyy-MM"}}</tt><br/>
       <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
       <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
       <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
       <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
     </form>
   </file>
   <file name="protractor.js" type="protractor">
      var value = element(by.binding('example.value | date: "yyyy-MM"'));
      var valid = element(by.binding('myForm.input.$valid'));
      var input = element(by.model('example.value'));

      // currently protractor/webdriver does not support
      // sending keys to all known HTML5 input controls
      // for various browsers (https://github.com/angular/protractor/issues/562).
      function setInput(val) {
        // set the value of the element and force validation.
        var scr = "var ipt = document.getElementById('exampleInput'); " +
        "ipt.value = '" + val + "';" +
        "angular.element(ipt).scope().$apply(function(s) { s.myForm[ipt.name].$setViewValue('" + val + "'); });";
        browser.executeScript(scr);
      }

      it('should initialize to model', function() {
        expect(value.getText()).toContain('2013-10');
        expect(valid.getText()).toContain('myForm.input.$valid = true');
      });

      it('should be invalid if empty', function() {
        setInput('');
        expect(value.getText()).toEqual('value =');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });

      it('should be invalid if over max', function() {
        setInput('2015-01');
        expect(value.getText()).toContain('');
        expect(valid.getText()).toContain('myForm.input.$valid = false');
      });
   </file>
   </example>
   */
month:ed("month",zf,dd(zf,["yyyy","MM"]),"yyyy-MM"),/**
   * @ngdoc input
   * @name input[number]
   *
   * @description
   * Text input with number validation and transformation. Sets the `number` validation
   * error if not a valid number.
   *
   * <div class="alert alert-warning">
   * The model must always be of type `number` otherwise Angular will throw an error.
   * Be aware that a string containing a number is not enough. See the {@link ngModel:numfmt}
   * error docs for more information and an example of how to convert your model if necessary.
   * </div>
   *
   * ## Issues with HTML5 constraint validation
   *
   * In browsers that follow the
   * [HTML5 specification](https://html.spec.whatwg.org/multipage/forms.html#number-state-%28type=number%29),
   * `input[number]` does not work as expected with {@link ngModelOptions `ngModelOptions.allowInvalid`}.
   * If a non-number is entered in the input, the browser will report the value as an empty string,
   * which means the view / model values in `ngModel` and subsequently the scope value
   * will also be an empty string.
   *
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} min Sets the `min` validation error key if the value entered is less than `min`.
   * @param {string=} max Sets the `max` validation error key if the value entered is greater than `max`.
   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
   *    minlength.
   * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
   *    maxlength. Setting the attribute to a negative or non-numeric value, allows view values of
   *    any length.
   * @param {string=} pattern Similar to `ngPattern` except that the attribute value is the actual string
   *    that contains the regular expression body that will be converted to a regular expression
   *    as in the ngPattern directive.
   * @param {string=} ngPattern Sets `pattern` validation error key if the ngModel value does not match
   *    a RegExp found by evaluating the Angular expression given in the attribute value.
   *    If the expression evaluates to a RegExp object, then this is used directly.
   *    If the expression evaluates to a string, then it will be converted to a RegExp
   *    after wrapping it in `^` and `$` characters. For instance, `"abc"` will be converted to
   *    `new RegExp('^abc$')`.<br />
   *    **Note:** Avoid using the `g` flag on the RegExp, as it will cause each successive search to
   *    start at the index of the last search's match, thus not taking the whole input value into
   *    account.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
      <example name="number-input-directive" module="numberExample">
        <file name="index.html">
         <script>
           angular.module('numberExample', [])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.example = {
                 value: 12
               };
             }]);
         </script>
         <form name="myForm" ng-controller="ExampleController">
           <label>Number:
             <input type="number" name="input" ng-model="example.value"
                    min="0" max="99" required>
          </label>
           <div role="alert">
             <span class="error" ng-show="myForm.input.$error.required">
               Required!</span>
             <span class="error" ng-show="myForm.input.$error.number">
               Not valid number!</span>
           </div>
           <tt>value = {{example.value}}</tt><br/>
           <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
           <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
           <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
           <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
          </form>
        </file>
        <file name="protractor.js" type="protractor">
          var value = element(by.binding('example.value'));
          var valid = element(by.binding('myForm.input.$valid'));
          var input = element(by.model('example.value'));

          it('should initialize to model', function() {
            expect(value.getText()).toContain('12');
            expect(valid.getText()).toContain('true');
          });

          it('should be invalid if empty', function() {
            input.clear();
            input.sendKeys('');
            expect(value.getText()).toEqual('value =');
            expect(valid.getText()).toContain('false');
          });

          it('should be invalid if over max', function() {
            input.clear();
            input.sendKeys('123');
            expect(value.getText()).toEqual('value =');
            expect(valid.getText()).toContain('false');
          });
        </file>
      </example>
   */
number:gd,/**
   * @ngdoc input
   * @name input[url]
   *
   * @description
   * Text input with URL validation. Sets the `url` validation error key if the content is not a
   * valid URL.
   *
   * <div class="alert alert-warning">
   * **Note:** `input[url]` uses a regex to validate urls that is derived from the regex
   * used in Chromium. If you need stricter validation, you can use `ng-pattern` or modify
   * the built-in validators (see the {@link guide/forms Forms guide})
   * </div>
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
   *    minlength.
   * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
   *    maxlength. Setting the attribute to a negative or non-numeric value, allows view values of
   *    any length.
   * @param {string=} pattern Similar to `ngPattern` except that the attribute value is the actual string
   *    that contains the regular expression body that will be converted to a regular expression
   *    as in the ngPattern directive.
   * @param {string=} ngPattern Sets `pattern` validation error key if the ngModel value does not match
   *    a RegExp found by evaluating the Angular expression given in the attribute value.
   *    If the expression evaluates to a RegExp object, then this is used directly.
   *    If the expression evaluates to a string, then it will be converted to a RegExp
   *    after wrapping it in `^` and `$` characters. For instance, `"abc"` will be converted to
   *    `new RegExp('^abc$')`.<br />
   *    **Note:** Avoid using the `g` flag on the RegExp, as it will cause each successive search to
   *    start at the index of the last search's match, thus not taking the whole input value into
   *    account.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
      <example name="url-input-directive" module="urlExample">
        <file name="index.html">
         <script>
           angular.module('urlExample', [])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.url = {
                 text: 'http://google.com'
               };
             }]);
         </script>
         <form name="myForm" ng-controller="ExampleController">
           <label>URL:
             <input type="url" name="input" ng-model="url.text" required>
           <label>
           <div role="alert">
             <span class="error" ng-show="myForm.input.$error.required">
               Required!</span>
             <span class="error" ng-show="myForm.input.$error.url">
               Not valid url!</span>
           </div>
           <tt>text = {{url.text}}</tt><br/>
           <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
           <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
           <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
           <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
           <tt>myForm.$error.url = {{!!myForm.$error.url}}</tt><br/>
          </form>
        </file>
        <file name="protractor.js" type="protractor">
          var text = element(by.binding('url.text'));
          var valid = element(by.binding('myForm.input.$valid'));
          var input = element(by.model('url.text'));

          it('should initialize to model', function() {
            expect(text.getText()).toContain('http://google.com');
            expect(valid.getText()).toContain('true');
          });

          it('should be invalid if empty', function() {
            input.clear();
            input.sendKeys('');

            expect(text.getText()).toEqual('text =');
            expect(valid.getText()).toContain('false');
          });

          it('should be invalid if not url', function() {
            input.clear();
            input.sendKeys('box');

            expect(valid.getText()).toContain('false');
          });
        </file>
      </example>
   */
url:hd,/**
   * @ngdoc input
   * @name input[email]
   *
   * @description
   * Text input with email validation. Sets the `email` validation error key if not a valid email
   * address.
   *
   * <div class="alert alert-warning">
   * **Note:** `input[email]` uses a regex to validate email addresses that is derived from the regex
   * used in Chromium. If you need stricter validation (e.g. requiring a top-level domain), you can
   * use `ng-pattern` or modify the built-in validators (see the {@link guide/forms Forms guide})
   * </div>
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} required Sets `required` validation error key if the value is not entered.
   * @param {string=} ngRequired Adds `required` attribute and `required` validation constraint to
   *    the element when the ngRequired expression evaluates to true. Use `ngRequired` instead of
   *    `required` when you want to data-bind to the `required` attribute.
   * @param {number=} ngMinlength Sets `minlength` validation error key if the value is shorter than
   *    minlength.
   * @param {number=} ngMaxlength Sets `maxlength` validation error key if the value is longer than
   *    maxlength. Setting the attribute to a negative or non-numeric value, allows view values of
   *    any length.
   * @param {string=} pattern Similar to `ngPattern` except that the attribute value is the actual string
   *    that contains the regular expression body that will be converted to a regular expression
   *    as in the ngPattern directive.
   * @param {string=} ngPattern Sets `pattern` validation error key if the ngModel value does not match
   *    a RegExp found by evaluating the Angular expression given in the attribute value.
   *    If the expression evaluates to a RegExp object, then this is used directly.
   *    If the expression evaluates to a string, then it will be converted to a RegExp
   *    after wrapping it in `^` and `$` characters. For instance, `"abc"` will be converted to
   *    `new RegExp('^abc$')`.<br />
   *    **Note:** Avoid using the `g` flag on the RegExp, as it will cause each successive search to
   *    start at the index of the last search's match, thus not taking the whole input value into
   *    account.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
      <example name="email-input-directive" module="emailExample">
        <file name="index.html">
         <script>
           angular.module('emailExample', [])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.email = {
                 text: 'me@example.com'
               };
             }]);
         </script>
           <form name="myForm" ng-controller="ExampleController">
             <label>Email:
               <input type="email" name="input" ng-model="email.text" required>
             </label>
             <div role="alert">
               <span class="error" ng-show="myForm.input.$error.required">
                 Required!</span>
               <span class="error" ng-show="myForm.input.$error.email">
                 Not valid email!</span>
             </div>
             <tt>text = {{email.text}}</tt><br/>
             <tt>myForm.input.$valid = {{myForm.input.$valid}}</tt><br/>
             <tt>myForm.input.$error = {{myForm.input.$error}}</tt><br/>
             <tt>myForm.$valid = {{myForm.$valid}}</tt><br/>
             <tt>myForm.$error.required = {{!!myForm.$error.required}}</tt><br/>
             <tt>myForm.$error.email = {{!!myForm.$error.email}}</tt><br/>
           </form>
         </file>
        <file name="protractor.js" type="protractor">
          var text = element(by.binding('email.text'));
          var valid = element(by.binding('myForm.input.$valid'));
          var input = element(by.model('email.text'));

          it('should initialize to model', function() {
            expect(text.getText()).toContain('me@example.com');
            expect(valid.getText()).toContain('true');
          });

          it('should be invalid if empty', function() {
            input.clear();
            input.sendKeys('');
            expect(text.getText()).toEqual('text =');
            expect(valid.getText()).toContain('false');
          });

          it('should be invalid if not email', function() {
            input.clear();
            input.sendKeys('xxx');

            expect(valid.getText()).toContain('false');
          });
        </file>
      </example>
   */
email:id,/**
   * @ngdoc input
   * @name input[radio]
   *
   * @description
   * HTML radio button.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string} value The value to which the `ngModel` expression should be set when selected.
   *    Note that `value` only supports `string` values, i.e. the scope model needs to be a string,
   *    too. Use `ngValue` if you need complex models (`number`, `object`, ...).
   * @param {string=} name Property name of the form under which the control is published.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   * @param {string} ngValue Angular expression to which `ngModel` will be be set when the radio
   *    is selected. Should be used instead of the `value` attribute if you need
   *    a non-string `ngModel` (`boolean`, `array`, ...).
   *
   * @example
      <example name="radio-input-directive" module="radioExample">
        <file name="index.html">
         <script>
           angular.module('radioExample', [])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.color = {
                 name: 'blue'
               };
               $scope.specialValue = {
                 "id": "12345",
                 "value": "green"
               };
             }]);
         </script>
         <form name="myForm" ng-controller="ExampleController">
           <label>
             <input type="radio" ng-model="color.name" value="red">
             Red
           </label><br/>
           <label>
             <input type="radio" ng-model="color.name" ng-value="specialValue">
             Green
           </label><br/>
           <label>
             <input type="radio" ng-model="color.name" value="blue">
             Blue
           </label><br/>
           <tt>color = {{color.name | json}}</tt><br/>
          </form>
          Note that `ng-value="specialValue"` sets radio item's value to be the value of `$scope.specialValue`.
        </file>
        <file name="protractor.js" type="protractor">
          it('should change state', function() {
            var color = element(by.binding('color.name'));

            expect(color.getText()).toContain('blue');

            element.all(by.model('color.name')).get(0).click();

            expect(color.getText()).toContain('red');
          });
        </file>
      </example>
   */
radio:jd,/**
   * @ngdoc input
   * @name input[checkbox]
   *
   * @description
   * HTML checkbox.
   *
   * @param {string} ngModel Assignable angular expression to data-bind to.
   * @param {string=} name Property name of the form under which the control is published.
   * @param {expression=} ngTrueValue The value to which the expression should be set when selected.
   * @param {expression=} ngFalseValue The value to which the expression should be set when not selected.
   * @param {string=} ngChange Angular expression to be executed when input changes due to user
   *    interaction with the input element.
   *
   * @example
      <example name="checkbox-input-directive" module="checkboxExample">
        <file name="index.html">
         <script>
           angular.module('checkboxExample', [])
             .controller('ExampleController', ['$scope', function($scope) {
               $scope.checkboxModel = {
                value1 : true,
                value2 : 'YES'
              };
             }]);
         </script>
         <form name="myForm" ng-controller="ExampleController">
           <label>Value1:
             <input type="checkbox" ng-model="checkboxModel.value1">
           </label><br/>
           <label>Value2:
             <input type="checkbox" ng-model="checkboxModel.value2"
                    ng-true-value="'YES'" ng-false-value="'NO'">
            </label><br/>
           <tt>value1 = {{checkboxModel.value1}}</tt><br/>
           <tt>value2 = {{checkboxModel.value2}}</tt><br/>
          </form>
        </file>
        <file name="protractor.js" type="protractor">
          it('should change state', function() {
            var value1 = element(by.binding('checkboxModel.value1'));
            var value2 = element(by.binding('checkboxModel.value2'));

            expect(value1.getText()).toContain('true');
            expect(value2.getText()).toContain('YES');

            element(by.model('checkboxModel.value1')).click();
            element(by.model('checkboxModel.value2')).click();

            expect(value1.getText()).toContain('false');
            expect(value2.getText()).toContain('NO');
          });
        </file>
      </example>
   */
checkbox:ld,hidden:p,button:p,submit:p,reset:p,file:p},Cf=["$browser","$sniffer","$filter","$parse",function(a,b,c,d){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Bf[rd(g.type)]||Bf.text)(e,f,g,h[0],b,a,c,d)}}}}],Df=/^(true|false|\d+)$/,Ef=function(){return{restrict:"A",priority:100,compile:function(a,b){return Df.test(b.ngValue)?function(a,b,c){c.$set("value",a.$eval(c.ngValue))}:function(a,b,c){a.$watch(c.ngValue,function(a){c.$set("value",a)})}}}},Ff=["$compile",function(a){return{restrict:"AC",compile:function(b){return a.$$addBindingClass(b),function(b,c,d){a.$$addBindingInfo(c,d.ngBind),c=c[0],b.$watch(d.ngBind,function(a){c.textContent=t(a)?"":a})}}}}],Gf=["$interpolate","$compile",function(a,b){return{compile:function(c){return b.$$addBindingClass(c),function(c,d,e){var f=a(d.attr(e.$attr.ngBindTemplate));b.$$addBindingInfo(d,f.expressions),d=d[0],e.$observe("ngBindTemplate",function(a){d.textContent=t(a)?"":a})}}}}],Hf=["$sce","$parse","$compile",function(a,b,c){return{restrict:"A",compile:function(d,e){var f=b(e.ngBindHtml),g=b(e.ngBindHtml,function(a){return(a||"").toString()});return c.$$addBindingClass(d),function(b,d,e){c.$$addBindingInfo(d,e.ngBindHtml),b.$watch(g,function(){
// we re-evaluate the expr because we want a TrustedValueHolderType
// for $sce, not a string
d.html(a.getTrustedHtml(f(b))||"")})}}}}],If=r({restrict:"A",require:"ngModel",link:function(a,b,c,d){d.$viewChangeListeners.push(function(){a.$eval(c.ngChange)})}}),Jf=md("",!0),Kf=md("Odd",0),Lf=md("Even",1),Mf=Yc({compile:function(a,b){b.$set("ngCloak",c),a.removeClass("ng-cloak")}}),Nf=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Of={},Pf={blur:!0,focus:!0};f("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=jb("ng-"+a);Of[b]=["$parse","$rootScope",function(c,d){return{restrict:"A",compile:function(e,f){
// We expose the powerful $event object on the scope that provides access to the Window,
// etc. that isn't protected by the fast paths in $parse.  We explicitly request better
// checks at the cost of speed since event handler expressions are not executed as
// frequently as regular change detection.
var g=c(f[b],/* interceptorFn */null,/* expensiveChecks */!0);return function(b,c){c.on(a,function(c){var e=function(){g(b,{$event:c})};Pf[a]&&d.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});/**
 * @ngdoc directive
 * @name ngDblclick
 *
 * @description
 * The `ngDblclick` directive allows you to specify custom behavior on a dblclick event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngDblclick {@link guide/expression Expression} to evaluate upon
 * a dblclick. (The Event object is available as `$event`)
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-dblclick="count = count + 1" ng-init="count=0">
        Increment (on double click)
      </button>
      count: {{count}}
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngMousedown
 *
 * @description
 * The ngMousedown directive allows you to specify custom behavior on mousedown event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngMousedown {@link guide/expression Expression} to evaluate upon
 * mousedown. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-mousedown="count = count + 1" ng-init="count=0">
        Increment (on mouse down)
      </button>
      count: {{count}}
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngMouseup
 *
 * @description
 * Specify custom behavior on mouseup event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngMouseup {@link guide/expression Expression} to evaluate upon
 * mouseup. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-mouseup="count = count + 1" ng-init="count=0">
        Increment (on mouse up)
      </button>
      count: {{count}}
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngMouseover
 *
 * @description
 * Specify custom behavior on mouseover event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngMouseover {@link guide/expression Expression} to evaluate upon
 * mouseover. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-mouseover="count = count + 1" ng-init="count=0">
        Increment (when mouse is over)
      </button>
      count: {{count}}
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngMouseenter
 *
 * @description
 * Specify custom behavior on mouseenter event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngMouseenter {@link guide/expression Expression} to evaluate upon
 * mouseenter. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-mouseenter="count = count + 1" ng-init="count=0">
        Increment (when mouse enters)
      </button>
      count: {{count}}
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngMouseleave
 *
 * @description
 * Specify custom behavior on mouseleave event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngMouseleave {@link guide/expression Expression} to evaluate upon
 * mouseleave. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-mouseleave="count = count + 1" ng-init="count=0">
        Increment (when mouse leaves)
      </button>
      count: {{count}}
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngMousemove
 *
 * @description
 * Specify custom behavior on mousemove event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngMousemove {@link guide/expression Expression} to evaluate upon
 * mousemove. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <button ng-mousemove="count = count + 1" ng-init="count=0">
        Increment (when mouse moves)
      </button>
      count: {{count}}
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngKeydown
 *
 * @description
 * Specify custom behavior on keydown event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngKeydown {@link guide/expression Expression} to evaluate upon
 * keydown. (Event object is available as `$event` and can be interrogated for keyCode, altKey, etc.)
 *
 * @example
   <example>
     <file name="index.html">
      <input ng-keydown="count = count + 1" ng-init="count=0">
      key down count: {{count}}
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngKeyup
 *
 * @description
 * Specify custom behavior on keyup event.
 *
 * @element ANY
 * @priority 0
 * @param {expression} ngKeyup {@link guide/expression Expression} to evaluate upon
 * keyup. (Event object is available as `$event` and can be interrogated for keyCode, altKey, etc.)
 *
 * @example
   <example>
     <file name="index.html">
       <p>Typing in the input box below updates the key count</p>
       <input ng-keyup="count = count + 1" ng-init="count=0"> key up count: {{count}}

       <p>Typing in the input box below updates the keycode</p>
       <input ng-keyup="event=$event">
       <p>event keyCode: {{ event.keyCode }}</p>
       <p>event altKey: {{ event.altKey }}</p>
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngKeypress
 *
 * @description
 * Specify custom behavior on keypress event.
 *
 * @element ANY
 * @param {expression} ngKeypress {@link guide/expression Expression} to evaluate upon
 * keypress. ({@link guide/expression#-event- Event object is available as `$event`}
 * and can be interrogated for keyCode, altKey, etc.)
 *
 * @example
   <example>
     <file name="index.html">
      <input ng-keypress="count = count + 1" ng-init="count=0">
      key press count: {{count}}
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngSubmit
 *
 * @description
 * Enables binding angular expressions to onsubmit events.
 *
 * Additionally it prevents the default action (which for form means sending the request to the
 * server and reloading the current page), but only if the form does not contain `action`,
 * `data-action`, or `x-action` attributes.
 *
 * <div class="alert alert-warning">
 * **Warning:** Be careful not to cause "double-submission" by using both the `ngClick` and
 * `ngSubmit` handlers together. See the
 * {@link form#submitting-a-form-and-preventing-the-default-action `form` directive documentation}
 * for a detailed discussion of when `ngSubmit` may be triggered.
 * </div>
 *
 * @element form
 * @priority 0
 * @param {expression} ngSubmit {@link guide/expression Expression} to eval.
 * ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example module="submitExample">
     <file name="index.html">
      <script>
        angular.module('submitExample', [])
          .controller('ExampleController', ['$scope', function($scope) {
            $scope.list = [];
            $scope.text = 'hello';
            $scope.submit = function() {
              if ($scope.text) {
                $scope.list.push(this.text);
                $scope.text = '';
              }
            };
          }]);
      </script>
      <form ng-submit="submit()" ng-controller="ExampleController">
        Enter text and hit enter:
        <input type="text" ng-model="text" name="text" />
        <input type="submit" id="submit" value="Submit" />
        <pre>list={{list}}</pre>
      </form>
     </file>
     <file name="protractor.js" type="protractor">
       it('should check ng-submit', function() {
         expect(element(by.binding('list')).getText()).toBe('list=[]');
         element(by.css('#submit')).click();
         expect(element(by.binding('list')).getText()).toContain('hello');
         expect(element(by.model('text')).getAttribute('value')).toBe('');
       });
       it('should ignore empty strings', function() {
         expect(element(by.binding('list')).getText()).toBe('list=[]');
         element(by.css('#submit')).click();
         element(by.css('#submit')).click();
         expect(element(by.binding('list')).getText()).toContain('hello');
        });
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngFocus
 *
 * @description
 * Specify custom behavior on focus event.
 *
 * Note: As the `focus` event is executed synchronously when calling `input.focus()`
 * AngularJS executes the expression using `scope.$evalAsync` if the event is fired
 * during an `$apply` to ensure a consistent state.
 *
 * @element window, input, select, textarea, a
 * @priority 0
 * @param {expression} ngFocus {@link guide/expression Expression} to evaluate upon
 * focus. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */
/**
 * @ngdoc directive
 * @name ngBlur
 *
 * @description
 * Specify custom behavior on blur event.
 *
 * A [blur event](https://developer.mozilla.org/en-US/docs/Web/Events/blur) fires when
 * an element has lost focus.
 *
 * Note: As the `blur` event is executed synchronously also during DOM manipulations
 * (e.g. removing a focussed input),
 * AngularJS executes the expression using `scope.$evalAsync` if the event is fired
 * during an `$apply` to ensure a consistent state.
 *
 * @element window, input, select, textarea, a
 * @priority 0
 * @param {expression} ngBlur {@link guide/expression Expression} to evaluate upon
 * blur. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
 * See {@link ng.directive:ngClick ngClick}
 */
/**
 * @ngdoc directive
 * @name ngCopy
 *
 * @description
 * Specify custom behavior on copy event.
 *
 * @element window, input, select, textarea, a
 * @priority 0
 * @param {expression} ngCopy {@link guide/expression Expression} to evaluate upon
 * copy. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <input ng-copy="copied=true" ng-init="copied=false; value='copy me'" ng-model="value">
      copied: {{copied}}
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngCut
 *
 * @description
 * Specify custom behavior on cut event.
 *
 * @element window, input, select, textarea, a
 * @priority 0
 * @param {expression} ngCut {@link guide/expression Expression} to evaluate upon
 * cut. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <input ng-cut="cut=true" ng-init="cut=false; value='cut me'" ng-model="value">
      cut: {{cut}}
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngPaste
 *
 * @description
 * Specify custom behavior on paste event.
 *
 * @element window, input, select, textarea, a
 * @priority 0
 * @param {expression} ngPaste {@link guide/expression Expression} to evaluate upon
 * paste. ({@link guide/expression#-event- Event object is available as `$event`})
 *
 * @example
   <example>
     <file name="index.html">
      <input ng-paste="paste=true" ng-init="paste=false" placeholder='paste here'>
      pasted: {{paste}}
     </file>
   </example>
 */
/**
 * @ngdoc directive
 * @name ngIf
 * @restrict A
 * @multiElement
 *
 * @description
 * The `ngIf` directive removes or recreates a portion of the DOM tree based on an
 * {expression}. If the expression assigned to `ngIf` evaluates to a false
 * value then the element is removed from the DOM, otherwise a clone of the
 * element is reinserted into the DOM.
 *
 * `ngIf` differs from `ngShow` and `ngHide` in that `ngIf` completely removes and recreates the
 * element in the DOM rather than changing its visibility via the `display` css property.  A common
 * case when this difference is significant is when using css selectors that rely on an element's
 * position within the DOM, such as the `:first-child` or `:last-child` pseudo-classes.
 *
 * Note that when an element is removed using `ngIf` its scope is destroyed and a new scope
 * is created when the element is restored.  The scope created within `ngIf` inherits from
 * its parent scope using
 * [prototypal inheritance](https://github.com/angular/angular.js/wiki/Understanding-Scopes#javascript-prototypal-inheritance).
 * An important implication of this is if `ngModel` is used within `ngIf` to bind to
 * a javascript primitive defined in the parent scope. In this case any modifications made to the
 * variable within the child scope will override (hide) the value in the parent scope.
 *
 * Also, `ngIf` recreates elements using their compiled state. An example of this behavior
 * is if an element's class attribute is directly modified after it's compiled, using something like
 * jQuery's `.addClass()` method, and the element is later removed. When `ngIf` recreates the element
 * the added class will be lost because the original compiled state is used to regenerate the element.
 *
 * Additionally, you can provide animations via the `ngAnimate` module to animate the `enter`
 * and `leave` effects.
 *
 * @animations
 * enter - happens just after the `ngIf` contents change and a new DOM element is created and injected into the `ngIf` container
 * leave - happens just before the `ngIf` contents are removed from the DOM
 *
 * @element ANY
 * @scope
 * @priority 600
 * @param {expression} ngIf If the {@link guide/expression expression} is falsy then
 *     the element is removed from the DOM tree. If it is truthy a copy of the compiled
 *     element is added to the DOM tree.
 *
 * @example
  <example module="ngAnimate" deps="angular-animate.js" animations="true">
    <file name="index.html">
      <label>Click me: <input type="checkbox" ng-model="checked" ng-init="checked=true" /></label><br/>
      Show when checked:
      <span ng-if="checked" class="animate-if">
        This is removed when the checkbox is unchecked.
      </span>
    </file>
    <file name="animations.css">
      .animate-if {
        background:white;
        border:1px solid black;
        padding:10px;
      }

      .animate-if.ng-enter, .animate-if.ng-leave {
        transition:all cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s;
      }

      .animate-if.ng-enter,
      .animate-if.ng-leave.ng-leave-active {
        opacity:0;
      }

      .animate-if.ng-leave,
      .animate-if.ng-enter.ng-enter-active {
        opacity:1;
      }
    </file>
  </example>
 */
var Qf=["$animate",function(a){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,f,g){var h,i,j;c.$watch(e.ngIf,function(c){c?i||g(function(c,f){i=f,c[c.length++]=b.createComment(" end ngIf: "+e.ngIf+" "),
// Note: We only need the first/last node of the cloned nodes.
// However, we need to keep the reference to the jqlite wrapper as it might be changed later
// by a directive with templateUrl when its template arrives.
h={clone:c},a.enter(c,d.parent(),d)}):(j&&(j.remove(),j=null),i&&(i.$destroy(),i=null),h&&(j=pa(h.clone),a.leave(j).then(function(){j=null}),h=null))})}}}],Rf=["$templateRequest","$anchorScroll","$animate",function(a,b,c){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Gd.noop,compile:function(d,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(d,e,i,j,k){var l,m,n,o=0,p=function(){m&&(m.remove(),m=null),l&&(l.$destroy(),l=null),n&&(c.leave(n).then(function(){m=null}),m=n,n=null)};d.$watch(f,function(f){var i=function(){!u(h)||h&&!d.$eval(h)||b()},m=++o;f?(
//set the 2nd param to true to ignore the template request error so that the inner
//contents and scope can be cleaned up.
a(f,!0).then(function(a){if(m===o){var b=d.$new();j.template=a;
// Note: This will also link all children of ng-include that were contained in the original
// html. If that content contains controllers, ... they could pollute/change the scope.
// However, using ng-include on an element with additional content does not make sense...
// Note: We can't remove them in the cloneAttchFn of $transclude as that
// function is called before linking the content, which would apply child
// directives to non existing elements.
var h=k(b,function(a){p(),c.enter(a,null,e).then(i)});l=b,n=h,l.$emit("$includeContentLoaded",f),d.$eval(g)}},function(){m===o&&(p(),d.$emit("$includeContentError",f))}),d.$emit("$includeContentRequested",f)):(p(),j.template=null)})}}}}],Sf=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,f){
// WebKit: https://bugs.webkit.org/show_bug.cgi?id=135698 --- SVG elements do not
// support innerHTML, so detect this here and try to generate the contents
// specially.
return/SVG/.test(d[0].toString())?(d.empty(),void a(Aa(f.template,b).childNodes)(c,function(a){d.append(a)},{futureParentElement:d})):(d.html(f.template),void a(d.contents())(c))}}}],Tf=Yc({priority:450,compile:function(){return{pre:function(a,b,c){a.$eval(c.ngInit)}}}}),Uf=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,e){
// We want to control whitespace trimming so we use this convoluted approach
// to access the ngList attribute, which doesn't pre-trim the attribute
var g=b.attr(d.$attr.ngList)||", ",h="false"!==d.ngTrim,i=h?Ld(g):g,j=function(a){
// If the viewValue is invalid (say required but empty) it will be `undefined`
if(!t(a)){var b=[];return a&&f(a.split(i),function(a){a&&b.push(h?Ld(a):a)}),b}};e.$parsers.push(j),e.$formatters.push(function(a){return Jd(a)?a.join(g):c}),
// Override the standard $isEmpty because an empty array means the input is empty.
e.$isEmpty=function(a){return!a||!a.length}}}},Vf="ng-valid",Wf="ng-invalid",Xf="ng-pristine",Yf="ng-dirty",Zf="ng-untouched",$f="ng-touched",_f="ng-pending",ag=d("ngModel"),bg=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,e,g,h,i,j,k,l){this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=c,// stores the parsed modelValue / model set from scope regardless of validity.
this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},// keep invalid keys here
this.$$success={},// keep valid keys here
this.$pending=c,// keep pending keys here
this.$name=l(d.name||"",!1)(a),this.$$parentForm=nf;var m,n=g(d.ngModel),o=n.assign,q=n,r=o,s=null,v=this;this.$$setOptions=function(a){if(v.$options=a,a&&a.getterSetter){var b=g(d.ngModel+"()"),c=g(d.ngModel+"($$$p)");q=function(a){var c=n(a);return A(c)&&(c=b(a)),c},r=function(a,b){A(n(a))?c(a,{$$$p:v.$modelValue}):o(a,v.$modelValue)}}else if(!n.assign)throw ag("nonassign","Expression '{0}' is non-assignable. Element: {1}",d.ngModel,$(e))},/**
   * @ngdoc method
   * @name ngModel.NgModelController#$render
   *
   * @description
   * Called when the view needs to be updated. It is expected that the user of the ng-model
   * directive will implement this method.
   *
   * The `$render()` method is invoked in the following situations:
   *
   * * `$rollbackViewValue()` is called.  If we are rolling back the view value to the last
   *   committed value then `$render()` is called to update the input control.
   * * The value referenced by `ng-model` is changed programmatically and both the `$modelValue` and
   *   the `$viewValue` are different from last time.
   *
   * Since `ng-model` does not do a deep watch, `$render()` is only invoked if the values of
   * `$modelValue` and `$viewValue` are actually different from their previous value. If `$modelValue`
   * or `$viewValue` are objects (rather than a string or number) then `$render()` will not be
   * invoked if you only change a property on the objects.
   */
this.$render=p,/**
   * @ngdoc method
   * @name ngModel.NgModelController#$isEmpty
   *
   * @description
   * This is called when we need to determine if the value of an input is empty.
   *
   * For instance, the required directive does this to work out if the input has data or not.
   *
   * The default `$isEmpty` function checks whether the value is `undefined`, `''`, `null` or `NaN`.
   *
   * You can override this for input directives whose concept of being empty is different from the
   * default. The `checkboxInputType` directive does this because in its case a value of `false`
   * implies empty.
   *
   * @param {*} value The value of the input to check for emptiness.
   * @returns {boolean} True if `value` is "empty".
   */
this.$isEmpty=function(a){return t(a)||""===a||null===a||a!==a};var w=0;/**
   * @ngdoc method
   * @name ngModel.NgModelController#$setValidity
   *
   * @description
   * Change the validity state, and notify the form.
   *
   * This method can be called within $parsers/$formatters or a custom validation implementation.
   * However, in most cases it should be sufficient to use the `ngModel.$validators` and
   * `ngModel.$asyncValidators` collections which will call `$setValidity` automatically.
   *
   * @param {string} validationErrorKey Name of the validator. The `validationErrorKey` will be assigned
   *        to either `$error[validationErrorKey]` or `$pending[validationErrorKey]`
   *        (for unfulfilled `$asyncValidators`), so that it is available for data-binding.
   *        The `validationErrorKey` should be in camelCase and will get converted into dash-case
   *        for class name. Example: `myError` will result in `ng-valid-my-error` and `ng-invalid-my-error`
   *        class and can be bound to as  `{{someForm.someControl.$error.myError}}` .
   * @param {boolean} isValid Whether the current state is valid (true), invalid (false), pending (undefined),
   *                          or skipped (null). Pending is used for unfulfilled `$asyncValidators`.
   *                          Skipped is used by Angular when validators do not run because of parse errors and
   *                          when `$asyncValidators` do not run because any of the `$validators` failed.
   */
nd({ctrl:this,$element:e,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:h}),/**
   * @ngdoc method
   * @name ngModel.NgModelController#$setPristine
   *
   * @description
   * Sets the control to its pristine state.
   *
   * This method can be called to remove the `ng-dirty` class and set the control to its pristine
   * state (`ng-pristine` class). A model is considered to be pristine when the control
   * has not been changed from when first compiled.
   */
this.$setPristine=function(){v.$dirty=!1,v.$pristine=!0,h.removeClass(e,Yf),h.addClass(e,Xf)},/**
   * @ngdoc method
   * @name ngModel.NgModelController#$setDirty
   *
   * @description
   * Sets the control to its dirty state.
   *
   * This method can be called to remove the `ng-pristine` class and set the control to its dirty
   * state (`ng-dirty` class). A model is considered to be dirty when the control has been changed
   * from when first compiled.
   */
this.$setDirty=function(){v.$dirty=!0,v.$pristine=!1,h.removeClass(e,Xf),h.addClass(e,Yf),v.$$parentForm.$setDirty()},/**
   * @ngdoc method
   * @name ngModel.NgModelController#$setUntouched
   *
   * @description
   * Sets the control to its untouched state.
   *
   * This method can be called to remove the `ng-touched` class and set the control to its
   * untouched state (`ng-untouched` class). Upon compilation, a model is set as untouched
   * by default, however this function can be used to restore that state if the model has
   * already been touched by the user.
   */
this.$setUntouched=function(){v.$touched=!1,v.$untouched=!0,h.setClass(e,Zf,$f)},/**
   * @ngdoc method
   * @name ngModel.NgModelController#$setTouched
   *
   * @description
   * Sets the control to its touched state.
   *
   * This method can be called to remove the `ng-untouched` class and set the control to its
   * touched state (`ng-touched` class). A model is considered to be touched when the user has
   * first focused the control element and then shifted focus away from the control (blur event).
   */
this.$setTouched=function(){v.$touched=!0,v.$untouched=!1,h.setClass(e,$f,Zf)},/**
   * @ngdoc method
   * @name ngModel.NgModelController#$rollbackViewValue
   *
   * @description
   * Cancel an update and reset the input element's value to prevent an update to the `$modelValue`,
   * which may be caused by a pending debounced event or because the input is waiting for a some
   * future event.
   *
   * If you have an input that uses `ng-model-options` to set up debounced events or events such
   * as blur you can have a situation where there is a period when the `$viewValue`
   * is out of synch with the ngModel's `$modelValue`.
   *
   * In this case, you can run into difficulties if you try to update the ngModel's `$modelValue`
   * programmatically before these debounced/future events have resolved/occurred, because Angular's
   * dirty checking mechanism is not able to tell whether the model has actually changed or not.
   *
   * The `$rollbackViewValue()` method should be called before programmatically changing the model of an
   * input which may have such events pending. This is important in order to make sure that the
   * input field will be updated with the new model value and any pending operations are cancelled.
   *
   * <example name="ng-model-cancel-update" module="cancel-update-example">
   *   <file name="app.js">
   *     angular.module('cancel-update-example', [])
   *
   *     .controller('CancelUpdateController', ['$scope', function($scope) {
   *       $scope.resetWithCancel = function(e) {
   *         if (e.keyCode == 27) {
   *           $scope.myForm.myInput1.$rollbackViewValue();
   *           $scope.myValue = '';
   *         }
   *       };
   *       $scope.resetWithoutCancel = function(e) {
   *         if (e.keyCode == 27) {
   *           $scope.myValue = '';
   *         }
   *       };
   *     }]);
   *   </file>
   *   <file name="index.html">
   *     <div ng-controller="CancelUpdateController">
   *       <p>Try typing something in each input.  See that the model only updates when you
   *          blur off the input.
   *        </p>
   *        <p>Now see what happens if you start typing then press the Escape key</p>
   *
   *       <form name="myForm" ng-model-options="{ updateOn: 'blur' }">
   *         <p id="inputDescription1">With $rollbackViewValue()</p>
   *         <input name="myInput1" aria-describedby="inputDescription1" ng-model="myValue"
   *                ng-keydown="resetWithCancel($event)"><br/>
   *         myValue: "{{ myValue }}"
   *
   *         <p id="inputDescription2">Without $rollbackViewValue()</p>
   *         <input name="myInput2" aria-describedby="inputDescription2" ng-model="myValue"
   *                ng-keydown="resetWithoutCancel($event)"><br/>
   *         myValue: "{{ myValue }}"
   *       </form>
   *     </div>
   *   </file>
   * </example>
   */
this.$rollbackViewValue=function(){i.cancel(s),v.$viewValue=v.$$lastCommittedViewValue,v.$render()},/**
   * @ngdoc method
   * @name ngModel.NgModelController#$validate
   *
   * @description
   * Runs each of the registered validators (first synchronous validators and then
   * asynchronous validators).
   * If the validity changes to invalid, the model will be set to `undefined`,
   * unless {@link ngModelOptions `ngModelOptions.allowInvalid`} is `true`.
   * If the validity changes to valid, it will set the model to the last available valid
   * `$modelValue`, i.e. either the last parsed value or the last value set from the scope.
   */
this.$validate=function(){
// ignore $validate before model is initialized
if(!y(v.$modelValue)||!isNaN(v.$modelValue)){var a=v.$$lastCommittedViewValue,b=v.$$rawModelValue,d=v.$valid,e=v.$modelValue,f=v.$options&&v.$options.allowInvalid;v.$$runValidators(b,a,function(a){
// If there was no change in validity, don't update the model
// This prevents changing an invalid modelValue to undefined
f||d===a||(
// Note: Don't check ctrl.$valid here, as we could have
// external validators (e.g. calculated on the server),
// that just call $setValidity and need the model value
// to calculate their validity.
v.$modelValue=a?b:c,v.$modelValue!==e&&v.$$writeModelToScope())})}},this.$$runValidators=function(a,b,d){function e(){var a=v.$$parserName||"parse";
// Set the parse error last, to prevent unsetting it, should a $validators key == parserName
return t(m)?(i(a,null),!0):(m||(f(v.$validators,function(a,b){i(b,null)}),f(v.$asyncValidators,function(a,b){i(b,null)})),i(a,m),m)}function g(){var c=!0;return f(v.$validators,function(d,e){var f=d(a,b);c=c&&f,i(e,f)}),c?!0:(f(v.$asyncValidators,function(a,b){i(b,null)}),!1)}function h(){var d=[],e=!0;f(v.$asyncValidators,function(f,g){var h=f(a,b);if(!I(h))throw ag("$asyncValidators","Expected asynchronous validator to return a promise but got '{0}' instead.",h);i(g,c),d.push(h.then(function(){i(g,!0)},function(a){e=!1,i(g,!1)}))}),d.length?k.all(d).then(function(){j(e)},p):j(!0)}function i(a,b){l===w&&v.$setValidity(a,b)}function j(a){l===w&&d(a)}w++;var l=w;
// check parser error
// check parser error
return e()&&g()?void h():void j(!1)},/**
   * @ngdoc method
   * @name ngModel.NgModelController#$commitViewValue
   *
   * @description
   * Commit a pending update to the `$modelValue`.
   *
   * Updates may be pending by a debounced event or because the input is waiting for a some future
   * event defined in `ng-model-options`. this method is rarely needed as `NgModelController`
   * usually handles calling this in response to input events.
   */
this.$commitViewValue=function(){var a=v.$viewValue;i.cancel(s),
// If the view value has not changed then we should just exit, except in the case where there is
// a native validator on the element. In this case the validation state may have changed even though
// the viewValue has stayed empty.
(v.$$lastCommittedViewValue!==a||""===a&&v.$$hasNativeValidators)&&(v.$$lastCommittedViewValue=a,
// change to dirty
v.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){function b(){v.$modelValue!==g&&v.$$writeModelToScope()}var d=v.$$lastCommittedViewValue,e=d;if(m=t(e)?c:!0)for(var f=0;f<v.$parsers.length;f++)if(e=v.$parsers[f](e),t(e)){m=!1;break}y(v.$modelValue)&&isNaN(v.$modelValue)&&(
// ctrl.$modelValue has not been touched yet...
v.$modelValue=q(a));var g=v.$modelValue,h=v.$options&&v.$options.allowInvalid;v.$$rawModelValue=e,h&&(v.$modelValue=e,b()),
// Pass the $$lastCommittedViewValue here, because the cached viewValue might be out of date.
// This can happen if e.g. $setViewValue is called from inside a parser
v.$$runValidators(e,v.$$lastCommittedViewValue,function(a){h||(
// Note: Don't check ctrl.$valid here, as we could have
// external validators (e.g. calculated on the server),
// that just call $setValidity and need the model value
// to calculate their validity.
v.$modelValue=a?e:c,b())})},this.$$writeModelToScope=function(){r(a,v.$modelValue),f(v.$viewChangeListeners,function(a){try{a()}catch(c){b(c)}})},/**
   * @ngdoc method
   * @name ngModel.NgModelController#$setViewValue
   *
   * @description
   * Update the view value.
   *
   * This method should be called when a control wants to change the view value; typically,
   * this is done from within a DOM event handler. For example, the {@link ng.directive:input input}
   * directive calls it when the value of the input changes and {@link ng.directive:select select}
   * calls it when an option is selected.
   *
   * When `$setViewValue` is called, the new `value` will be staged for committing through the `$parsers`
   * and `$validators` pipelines. If there are no special {@link ngModelOptions} specified then the staged
   * value sent directly for processing, finally to be applied to `$modelValue` and then the
   * **expression** specified in the `ng-model` attribute. Lastly, all the registered change listeners,
   * in the `$viewChangeListeners` list, are called.
   *
   * In case the {@link ng.directive:ngModelOptions ngModelOptions} directive is used with `updateOn`
   * and the `default` trigger is not listed, all those actions will remain pending until one of the
   * `updateOn` events is triggered on the DOM element.
   * All these actions will be debounced if the {@link ng.directive:ngModelOptions ngModelOptions}
   * directive is used with a custom debounce for this particular event.
   * Note that a `$digest` is only triggered once the `updateOn` events are fired, or if `debounce`
   * is specified, once the timer runs out.
   *
   * When used with standard inputs, the view value will always be a string (which is in some cases
   * parsed into another type, such as a `Date` object for `input[date]`.)
   * However, custom controls might also pass objects to this method. In this case, we should make
   * a copy of the object before passing it to `$setViewValue`. This is because `ngModel` does not
   * perform a deep watch of objects, it only looks for a change of identity. If you only change
   * the property of the object then ngModel will not realise that the object has changed and
   * will not invoke the `$parsers` and `$validators` pipelines. For this reason, you should
   * not change properties of the copy once it has been passed to `$setViewValue`.
   * Otherwise you may cause the model value on the scope to change incorrectly.
   *
   * <div class="alert alert-info">
   * In any case, the value passed to the method should always reflect the current value
   * of the control. For example, if you are calling `$setViewValue` for an input element,
   * you should pass the input DOM value. Otherwise, the control and the scope model become
   * out of sync. It's also important to note that `$setViewValue` does not call `$render` or change
   * the control's DOM value in any way. If we want to change the control's DOM value
   * programmatically, we should update the `ngModel` scope expression. Its new value will be
   * picked up by the model controller, which will run it through the `$formatters`, `$render` it
   * to update the DOM, and finally call `$validate` on it.
   * </div>
   *
   * @param {*} value value from the view.
   * @param {string} trigger Event that triggered the update.
   */
this.$setViewValue=function(a,b){v.$viewValue=a,(!v.$options||v.$options.updateOnDefault)&&v.$$debounceViewValueCommit(b)},this.$$debounceViewValueCommit=function(b){var c,d=0,e=v.$options;e&&u(e.debounce)&&(c=e.debounce,y(c)?d=c:y(c[b])?d=c[b]:y(c["default"])&&(d=c["default"])),i.cancel(s),d?s=i(function(){v.$commitViewValue()},d):j.$$phase?v.$commitViewValue():a.$apply(function(){v.$commitViewValue()})},
// model -> value
// Note: we cannot use a normal scope.$watch as we want to detect the following:
// 1. scope value is 'a'
// 2. user enters 'b'
// 3. ng-change kicks in and reverts scope value to 'a'
//    -> scope value did not change since the last digest as
//       ng-change executes in apply phase
// 4. view should be changed back to 'a'
a.$watch(function(){var b=q(a);
// if scope model value and ngModel value are out of sync
// TODO(perf): why not move this to the action fn?
if(b!==v.$modelValue&&(
// checks for NaN is needed to allow setting the model to NaN when there's an asyncValidator
v.$modelValue===v.$modelValue||b===b)){v.$modelValue=v.$$rawModelValue=b,m=c;for(var d=v.$formatters,e=d.length,f=b;e--;)f=d[e](f);v.$viewValue!==f&&(v.$viewValue=v.$$lastCommittedViewValue=f,v.$render(),v.$$runValidators(b,f,p))}return b})}],cg=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:bg,
// Prelink needs to run before any input directive
// so that we can set the NgModelOptions in NgModelController
// before anyone else uses it.
priority:1,compile:function(b){
// Setup initial state of the control
return b.addClass(Xf).addClass(Zf).addClass(Vf),{pre:function(a,b,c,d){var e=d[0],f=d[1]||e.$$parentForm;e.$$setOptions(d[2]&&d[2].$options),
// notify others, especially parent forms
f.$addControl(e),c.$observe("name",function(a){e.$name!==a&&e.$$parentForm.$$renameControl(e,a)}),a.$on("$destroy",function(){e.$$parentForm.$removeControl(e)})},post:function(b,c,d,e){var f=e[0];f.$options&&f.$options.updateOn&&c.on(f.$options.updateOn,function(a){f.$$debounceViewValueCommit(a&&a.type)}),c.on("blur",function(c){f.$touched||(a.$$phase?b.$evalAsync(f.$setTouched):b.$apply(f.$setTouched))})}}}}}],dg=/(\s+|^)default(\s+|$)/,eg=function(){return{restrict:"A",controller:["$scope","$attrs",function(a,b){var c=this;this.$options=O(a.$eval(b.ngModelOptions)),
// Allow adding/overriding bound events
u(this.$options.updateOn)?(this.$options.updateOnDefault=!1,
// extract "default" pseudo-event from list of events that can trigger a model update
this.$options.updateOn=Ld(this.$options.updateOn.replace(dg,function(){return c.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},fg=Yc({terminal:!0,priority:1e3}),gg=d("ngOptions"),hg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,ig=["$compile","$parse",function(a,c){function d(a,b,d){function f(a,b,c,d,e){this.selectValue=a,this.viewValue=b,this.label=c,this.group=d,this.disabled=e}function g(a){var b;if(!j&&e(a))b=a;else{
// if object, extract keys, in enumeration order, unsorted
b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var h=a.match(hg);if(!h)throw gg("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",a,$(b));
// Extract the parts from the ngOptions expression
// The variable name for the value of the item in the collection
var i=h[5]||h[7],j=h[6],k=/ as /.test(h[0])&&h[1],l=h[9],m=c(h[2]?h[1]:i),n=k&&c(k),o=n||m,p=l&&c(l),q=l?function(a,b){return p(d,b)}:function(a){return Wa(a)},r=function(a,b){return q(a,x(a,b))},s=c(h[2]||h[1]),t=c(h[3]||""),u=c(h[4]||""),v=c(h[8]),w={},x=j?function(a,b){return w[j]=b,w[i]=a,w}:function(a){return w[i]=a,w};return{trackBy:l,getTrackByValue:r,getWatchables:c(v,function(a){
// Create a collection of things that we would like to watch (watchedArray)
// so that they can all be watched using a single $watchCollection
// that only runs the handler once if anything changes
var b=[];a=a||[];for(var c=g(a),e=c.length,f=0;e>f;f++){var i=a===c?f:c[f],j=(a[i],x(a[i],i)),k=q(a[i],j);
// Only need to watch the displayFn if there is a specific label expression
if(b.push(k),h[2]||h[1]){var l=s(d,j);b.push(l)}
// Only need to watch the disableWhenFn if there is a specific disable expression
if(h[4]){var m=u(d,j);b.push(m)}}return b}),getOptions:function(){for(var a=[],b={},c=v(d)||[],e=g(c),h=e.length,i=0;h>i;i++){var j=c===e?i:e[i],k=c[j],m=x(k,j),n=o(d,m),p=q(n,m),w=s(d,m),y=t(d,m),z=u(d,m),A=new f(p,n,w,y,z);a.push(A),b[p]=A}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[r(a)]},getViewValueFromOption:function(a){
// If the viewValue could be an object that may be mutated by the application,
// we need to make a copy and not return the reference to the value on the option.
return l?Gd.copy(a.viewValue):a.viewValue}}}}}
// we can't just jqLite('<option>') since jqLite is not smart enough
// to create it in <select> and IE barfs otherwise.
var g=b.createElement("option"),h=b.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","?ngModel"],link:function(b,c,e,i){
// ------------------------------------------------------------------ //
function j(a,b){a.element=b,b.disabled=a.disabled,a.value!==b.value&&(b.value=a.selectValue),a.label!==b.label&&(b.label=a.label,b.textContent=a.label)}function k(a,b,c,d){var e;
// Check whether we can reuse the next element
// The next element is the right type so reuse it
// The next element is not the right type so create a new one
// The next element is not a group so insert the new one
// There are no more elements so just append it to the select
return b&&rd(b.nodeName)===c?e=b:(e=d.cloneNode(!1),b?a.insertBefore(e,b):a.appendChild(e)),e}function l(a){for(var b;a;)b=a.nextSibling,Qa(a),a=b}function m(a){var b=p&&p[0],c=w&&w[0];if(b||c)for(;a&&(a===b||a===c);)a=a.nextSibling;return a}function n(){var a=x&&q.readValue();x=y.getOptions();var b={},d=c[0].firstChild;
// Check to see if the value has changed due to the update to the options
if(
// Ensure that the empty option is always there if it was explicitly provided
v&&c.prepend(p),d=m(d),x.items.forEach(function(a){var e,f,i;a.group?(
// This option is to live in a group
// See if we have already created this group
e=b[a.group],e||(
// We have not already created this group
f=k(c[0],d,"optgroup",h),
// Move to the next element
d=f.nextSibling,
// Update the label on the group element
f.label=a.group,
// Store it for use later
e=b[a.group]={groupElement:f,currentOptionElement:f.firstChild}),
// So now we have a group for this option we add the option to the group
i=k(e.groupElement,e.currentOptionElement,"option",g),j(a,i),
// Move to the next element
e.currentOptionElement=i.nextSibling):(
// This option is not in a group
i=k(c[0],d,"option",g),j(a,i),
// Move to the next element
d=i.nextSibling)}),
// Now remove all excess options and group
Object.keys(b).forEach(function(a){l(b[a].currentOptionElement)}),l(d),o.$render(),!o.$isEmpty(a)){var e=q.readValue();(y.trackBy?Q(a,e):a===e)||(o.$setViewValue(e),o.$render())}}
// if ngModel is not defined, we don't need to do anything
var o=i[1];if(o){for(var p,q=i[0],r=e.multiple,s=0,t=c.children(),u=t.length;u>s;s++)if(""===t[s].value){p=t.eq(s);break}var v=!!p,w=xd(g.cloneNode(!1));w.val("?");var x,y=d(e.ngOptions,c,b),z=function(){v||c.prepend(p),c.val(""),p.prop("selected",!0),// needed for IE
p.attr("selected",!0)},A=function(){v||p.remove()},B=function(){c.prepend(w),c.val("?"),w.prop("selected",!0),// needed for IE
w.attr("selected",!0)},C=function(){w.remove()};
// Update the controller methods for multiple selectable options
r?(o.$isEmpty=function(a){return!a||0===a.length},q.writeValue=function(a){x.items.forEach(function(a){a.element.selected=!1}),a&&a.forEach(function(a){var b=x.getOptionFromViewValue(a);b&&!b.disabled&&(b.element.selected=!0)})},q.readValue=function(){var a=c.val()||[],b=[];return f(a,function(a){var c=x.selectValueMap[a];c&&!c.disabled&&b.push(x.getViewValueFromOption(c))}),b},
// If we are using `track by` then we must watch these tracked values on the model
// since ngModel only watches for object identity change
y.trackBy&&b.$watchCollection(function(){return Jd(o.$viewValue)?o.$viewValue.map(function(a){return y.getTrackByValue(a)}):void 0},function(){o.$render()})):(q.writeValue=function(a){var b=x.getOptionFromViewValue(a);b&&!b.disabled?c[0].value!==b.selectValue&&(C(),A(),c[0].value=b.selectValue,b.element.selected=!0,b.element.setAttribute("selected","selected")):null===a||v?(C(),z()):(A(),B())},q.readValue=function(){var a=x.selectValueMap[c.val()];return a&&!a.disabled?(A(),C(),x.getViewValueFromOption(a)):null},
// If we are using `track by` then we must watch the tracked value on the model
// since ngModel only watches for object identity change
y.trackBy&&b.$watch(function(){return y.getTrackByValue(o.$viewValue)},function(){o.$render()})),v?(
// we need to remove it before calling selectElement.empty() because otherwise IE will
// remove the label from the element. wtf?
p.remove(),
// compile the element since there might be bindings in it
a(p)(b),
// remove the class, which is added automatically because we recompile the element and it
// becomes the compilation root
p.removeClass("ng-scope")):p=xd(g.cloneNode(!1)),
// We need to do this here to ensure that the options object is defined
// when we first hit it in writeNgOptionsValue
n(),
// We will re-render the option elements if the option values or labels change
b.$watchCollection(y.getWatchables,n)}}}}],jg=["$locale","$interpolate","$log",function(a,b,c){var d=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(g,h,i){function j(a){h.text(a||"")}var k,l=i.count,m=i.$attr.when&&h.attr(i.$attr.when),// we have {{}} in attrs
n=i.offset||0,o=g.$eval(m)||{},q={},r=b.startSymbol(),s=b.endSymbol(),u=r+l+"-"+n+s,v=Gd.noop;f(i,function(a,b){var c=e.exec(b);if(c){var d=(c[1]?"-":"")+rd(c[2]);o[d]=h.attr(i.$attr[b])}}),f(o,function(a,c){q[c]=b(a.replace(d,u))}),g.$watch(l,function(b){var d=parseFloat(b),e=isNaN(d);
// If both `count` and `lastCount` are NaN, we don't need to re-register a watch.
// In JS `NaN !== NaN`, so we have to exlicitly check.
if(e||d in o||(
// If an explicit number rule such as 1, 2, 3... is defined, just use it.
// Otherwise, check it against pluralization rules in $locale service.
d=a.pluralCat(d-n)),d!==k&&!(e&&y(k)&&isNaN(k))){v();var f=q[d];t(f)?(null!=b&&c.debug("ngPluralize: no rule defined for '"+d+"' in "+m),v=p,j()):v=g.$watch(f,j),k=d}})}}}],kg=["$parse","$animate",function(a,g){var h="$$NG_REMOVED",i=d("ngRepeat"),j=function(a,b,c,d,e,f,g){
// TODO(perf): generate setters to shave off ~40ms or 1-1.5%
a[c]=d,e&&(a[e]=f),a.$index=b,a.$first=0===b,a.$last=b===g-1,a.$middle=!(a.$first||a.$last),
// jshint bitwise: false
a.$odd=!(a.$even=0===(1&b))},k=function(a){return a.clone[0]},l=function(a){return a.clone[a.clone.length-1]};return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(d,m){var n=m.ngRepeat,o=b.createComment(" end ngRepeat: "+n+" "),p=n.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!p)throw i("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",n);var q=p[1],r=p[2],s=p[3],t=p[4];if(p=q.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/),!p)throw i("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",q);var u=p[3]||p[1],v=p[2];if(s&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(s)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(s)))throw i("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",s);var w,x,y,z,A={$id:Wa};return t?w=a(t):(y=function(a,b){return Wa(b)},z=function(a){return a}),function(a,b,d,m,p){w&&(x=function(b,c,d){
// assign key, value, and $index to the locals so that they can be used in hash functions
return v&&(A[v]=b),A[u]=c,A.$index=d,w(a,A)});
// Store a list of elements from previous run. This is a hash where key is the item from the
// iterator, and the value is objects with following properties.
//   - scope: bound scope
//   - element: previous element.
//   - index: position
//
// We are using no-proto object so that we don't need to guard against inherited props via
// hasOwnProperty.
var q=qa();
//watch props
a.$watchCollection(r,function(d){var m,r,// node that cloned nodes should be inserted after
// initialized to the comment node anchor
t,w,A,B,// key/value of iteration
C,D,E,F,// last object information {scope, element, id}
G,H,I=b[0],
// Same as lastBlockMap but it has the current state. It will become the
// lastBlockMap on the next iteration.
J=qa();if(s&&(a[s]=d),e(d))E=d,D=x||y;else{D=x||z,
// if object, extract keys, in enumeration order, unsorted
E=[];for(var K in d)sd.call(d,K)&&"$"!==K.charAt(0)&&E.push(K)}
// locate existing items
for(w=E.length,G=new Array(w),m=0;w>m;m++)if(A=d===E?m:E[m],B=d[A],C=D(A,B,m),q[C])
// found previously seen block
F=q[C],delete q[C],J[C]=F,G[m]=F;else{if(J[C])
// if collision detected. restore lastBlockMap and throw an error
throw f(G,function(a){a&&a.scope&&(q[a.id]=a)}),i("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",n,C,B);
// new never before seen block
G[m]={id:C,scope:c,clone:c},J[C]=!0}
// remove leftover items
for(var L in q){if(F=q[L],H=pa(F.clone),g.leave(H),H[0].parentNode)
// if the element was not removed yet because of pending animation, mark it as deleted
// so that we can ignore it later
for(m=0,r=H.length;r>m;m++)H[m][h]=!0;F.scope.$destroy()}
// we are not using forEach for perf reasons (trying to avoid #call)
for(m=0;w>m;m++)if(A=d===E?m:E[m],B=d[A],F=G[m],F.scope){
// if we have already seen this object, then we need to reuse the
// associated scope/element
t=I;
// skip nodes that are already pending removal via leave animation
do t=t.nextSibling;while(t&&t[h]);k(F)!=t&&
// existing item which got moved
g.move(pa(F.clone),null,xd(I)),I=l(F),j(F.scope,m,u,B,v,A,w)}else
// new item which we don't know about
p(function(a,b){F.scope=b;
// http://jsperf.com/clone-vs-createcomment
var c=o.cloneNode(!1);a[a.length++]=c,
// TODO(perf): support naked previousNode in `enter` to avoid creation of jqLite wrapper?
g.enter(a,null,xd(I)),I=c,
// Note: We only need the first/last node of the cloned nodes.
// However, we need to keep the reference to the jqlite wrapper as it might be changed later
// by a directive with templateUrl when its template arrives.
F.clone=a,J[F.id]=F,j(F.scope,m,u,B,v,A,w)});q=J})}}}}],lg="ng-hide",mg="ng-hide-animate",ng=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,c,d){b.$watch(d.ngShow,function(b){
// we're adding a temporary, animation-specific class for ng-hide since this way
// we can control when the element is actually displayed on screen without having
// to have a global/greedy CSS selector that breaks when other animations are run.
// Read: https://github.com/angular/angular.js/issues/9103#issuecomment-58335845
a[b?"removeClass":"addClass"](c,lg,{tempClasses:mg})})}}}],og=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,c,d){b.$watch(d.ngHide,function(b){
// The comment inside of the ngShowDirective explains why we add and
// remove a temporary class for the show/hide animation
a[b?"addClass":"removeClass"](c,lg,{tempClasses:mg})})}}}],pg=Yc(function(a,b,c){a.$watch(c.ngStyle,function(a,c){c&&a!==c&&f(c,function(a,c){b.css(c,"")}),a&&b.css(a)},!0)}),qg=["$animate",function(a){return{require:"ngSwitch",
// asks for $scope to fool the BC controller module
controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var h=e.ngSwitch||e.on,i=[],j=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};c.$watch(h,function(c){var d,e;for(d=0,e=k.length;e>d;++d)a.cancel(k[d]);for(k.length=0,d=0,e=l.length;e>d;++d){var h=pa(j[d].clone);l[d].$destroy();var n=k[d]=a.leave(h);n.then(m(k,d))}j.length=0,l.length=0,(i=g.cases["!"+c]||g.cases["?"])&&f(i,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.createComment(" end ngSwitchWhen: ");var g={clone:d};j.push(g),a.enter(d,f.parent(),f)})})})}}}],rg=Yc({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,c,d,e){d.cases["!"+c.ngSwitchWhen]=d.cases["!"+c.ngSwitchWhen]||[],d.cases["!"+c.ngSwitchWhen].push({transclude:e,element:b})}}),sg=Yc({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,c,d,e){d.cases["?"]=d.cases["?"]||[],d.cases["?"].push({transclude:e,element:b})}}),tg=Yc({restrict:"EAC",link:function(a,b,c,e,f){if(!f)throw d("ngTransclude")("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",$(b));f(function(a){b.empty(),b.append(a)})}}),ug=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,c){if("text/ng-template"==c.type){var d=c.id,e=b[0].text;a.put(d,e)}}}}],vg={$setViewValue:p,$render:p},wg=["$element","$scope","$attrs",function(a,d,e){var f=this,g=new Xa;
// If the ngModel doesn't get provided then provide a dummy noop version to prevent errors
f.ngModelCtrl=vg,
// The "unknown" option is one that is prepended to the list if the viewValue
// does not match any of the options. When it is rendered the value of the unknown
// option is '? XXX ?' where XXX is the hashKey of the value that is not known.
//
// We can't just jqLite('<option>') since jqLite is not smart enough
// to create it in <select> and IE barfs otherwise.
f.unknownOption=xd(b.createElement("option")),f.renderUnknownOption=function(b){var c="? "+Wa(b)+" ?";f.unknownOption.val(c),a.prepend(f.unknownOption),a.val(c)},d.$on("$destroy",function(){
// disable unknown option so that we don't do work when the whole select is being destroyed
f.renderUnknownOption=p}),f.removeUnknownOption=function(){f.unknownOption.parent()&&f.unknownOption.remove()},
// Read the value of the select control, the implementation of this changes depending
// upon whether the select can have multiple values and whether ngOptions is at work.
f.readValue=function(){return f.removeUnknownOption(),a.val()},
// Write the value to the select control, the implementation of this changes depending
// upon whether the select can have multiple values and whether ngOptions is at work.
f.writeValue=function(b){f.hasOption(b)?(f.removeUnknownOption(),a.val(b),""===b&&f.emptyOption.prop("selected",!0)):null==b&&f.emptyOption?(f.removeUnknownOption(),a.val("")):f.renderUnknownOption(b)},
// Tell the select control that an option, with the given value, has been added
f.addOption=function(a,b){na(a,'"option value"'),""===a&&(f.emptyOption=b);var c=g.get(a)||0;g.put(a,c+1)},
// Tell the select control that an option, with the given value, has been removed
f.removeOption=function(a){var b=g.get(a);b&&(1===b?(g.remove(a),""===a&&(f.emptyOption=c)):g.put(a,b-1))},
// Check whether the select control has an option matching the given value
f.hasOption=function(a){return!!g.get(a)}}],xg=function(){return{restrict:"E",require:["select","?ngModel"],controller:wg,link:function(a,b,c,d){
// if ngModel is not defined, we don't need to do anything
var e=d[1];if(e){var g=d[0];
// If the select allows multiple values then we need to modify how we read and write
// values from and to the control; also what it means for the value to be empty and
// we have to add an extra watch since ngModel doesn't work well with arrays - it
// doesn't trigger rendering if only an item in the array changes.
if(g.ngModelCtrl=e,
// We delegate rendering to the `writeValue` method, which can be changed
// if the select can have multiple selected values or if the options are being
// generated by `ngOptions`
e.$render=function(){g.writeValue(e.$viewValue)},
// When the selected item(s) changes we delegate getting the value of the select control
// to the `readValue` method, which can be changed if the select can have multiple
// selected values or if the options are being generated by `ngOptions`
b.on("change",function(){a.$apply(function(){e.$setViewValue(g.readValue())})}),c.multiple){
// Read value now needs to check each option to see if it is selected
g.readValue=function(){var a=[];return f(b.find("option"),function(b){b.selected&&a.push(b.value)}),a},
// Write value now needs to set the selected property of each matching option
g.writeValue=function(a){var c=new Xa(a);f(b.find("option"),function(a){a.selected=u(c.get(a.value))})};
// we have to do it on each watch since ngModel watches reference, but
// we need to work of an array, so we need to see if anything was inserted/removed
var h,i=NaN;a.$watch(function(){i!==e.$viewValue||Q(h,e.$viewValue)||(h=P(e.$viewValue),e.$render()),i=e.$viewValue}),
// If we are a multiple select then value is now a collection
// so the meaning of $isEmpty changes
e.$isEmpty=function(a){return!a||0===a.length}}}}}},yg=["$interpolate",function(a){function b(a){
// Workaround for https://code.google.com/p/chromium/issues/detail?id=381459
// Adding an <option selected="selected"> element to a <select required="required"> should
// automatically select the new element
a[0].hasAttribute("selected")&&(a[0].selected=!0)}return{restrict:"E",priority:100,compile:function(c,d){if(u(d.value))
// If the value attribute is defined, check if it contains an interpolation
var e=a(d.value,!0);else{
// If the value attribute is not defined then we fall back to the
// text content of the option element, which may be interpolated
var f=a(c.text(),!0);f||d.$set("value",c.text())}return function(a,c,d){// in case we are in optgroup
function g(a){j.addOption(a,c),j.ngModelCtrl.$render(),b(c)}
// This is an optimization over using ^^ since we don't want to have to search
// all the way to the root of the DOM for every single option element
var h="$selectController",i=c.parent(),j=i.data(h)||i.parent().data(h);
// Only update trigger option updates if this is an option within a `select`
// that also has `ngModel` attached
if(j&&j.ngModelCtrl){if(e){
// The value attribute is interpolated
var k;d.$observe("value",function(a){u(k)&&j.removeOption(k),k=a,g(a)})}else f?
// The text content is interpolated
a.$watch(f,function(a,b){d.$set("value",a),b!==a&&j.removeOption(b),g(a)}):
// The value attribute is static
g(d.value);c.on("$destroy",function(){j.removeOption(d.value),j.ngModelCtrl.$render()})}}}}}],zg=r({restrict:"E",terminal:!1}),Ag=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,c,d){d&&(c.required=!0,// force truthy in case we are on non input element
d.$validators.required=function(a,b){return!c.required||!d.$isEmpty(b)},c.$observe("required",function(){d.$validate()}))}}},Bg=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,e,f){if(f){var g,h=e.ngPattern||e.pattern;e.$observe("pattern",function(a){if(x(a)&&a.length>0&&(a=new RegExp("^"+a+"$")),a&&!a.test)throw d("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",h,a,$(b));g=a||c,f.$validate()}),f.$validators.pattern=function(a,b){
// HTML5 pattern constraint validates the input value, so we validate the viewValue
return f.$isEmpty(b)||t(g)||g.test(b)}}}}},Cg=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,c,d){if(d){var e=-1;c.$observe("maxlength",function(a){var b=n(a);e=isNaN(b)?-1:b,d.$validate()}),d.$validators.maxlength=function(a,b){return 0>e||d.$isEmpty(b)||b.length<=e}}}}},Dg=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,c,d){if(d){var e=0;c.$observe("minlength",function(a){e=n(a)||0,d.$validate()}),d.$validators.minlength=function(a,b){return d.$isEmpty(b)||b.length>=e}}}}};
//AngularJS is already loaded, so we can return here...
//try to bind to jquery now so that one can write jqLite(document).ready()
//but we will rebind on bootstrap again.
return a.angular.bootstrap?void console.log("WARNING: Tried to load angular more than once."):(ka(),ua(Gd),Gd.module("ngLocale",[],["$provide",function(a){function b(a){a+="";var b=a.indexOf(".");return-1==b?0:a.length-b-1}function d(a,d){var e=d;c===e&&(e=Math.min(b(a),3));var f=Math.pow(10,e),g=(a*f|0)%f;return{v:e,f:g}}var e={ZERO:"zero",ONE:"one",TWO:"two",FEW:"few",MANY:"many",OTHER:"other"};a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:["January","February","March","April","May","June","July","August","September","October","November","December"],SHORTDAY:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],SHORTMONTH:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-¤",negSuf:"",posPre:"¤",posSuf:""}]},id:"en-us",pluralCat:function(a,b){var c=0|a,f=d(a,b);return 1==c&&0==f.v?e.ONE:e.OTHER}})}]),void xd(b).ready(function(){fa(b,ga)}))}(window,document),!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>'),function(a){var b={config:{},container:{},controls:{},errors:{},items:{},utils:{}};b.utils.F=function(){},b.utils.extend=function(a,c){a.prototype=b.utils.createObject(c.prototype),a.prototype.contructor=a},b.utils.createObject=function(a){return"function"==typeof Object.create?Object.create(a):(b.utils.F.prototype=a,new b.utils.F)},b.utils.objectKeys=function(a){var b,c;if("function"==typeof Object.keys)return Object.keys(a);b=[];for(c in a)b.push(c);return b},b.utils.getQueryStringParam=function(a){if(!window.location.search)return null;var b,c,d=window.location.search.substr(1).split("&"),e={};for(c=0;c<d.length;c++)b=d[c].split("="),e[b[0]]=b[1];return e[a]||null},b.utils.copy=function(a,b){for(var c in b)a[c]=b[c];return a},/**
 * This is based on Paul Irish's shim, but looks quite odd in comparison. Why?
 * Because 
 * a) it shouldn't affect the global requestAnimationFrame function
 * b) it shouldn't pass on the time that has passed
 *
 * @param   {Function} fn
 *
 * @returns {void}
 */
b.utils.animFrame=function(a){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)})(function(){a()})},b.utils.indexOf=function(a,b){if(!(b instanceof Array))throw new Error("Haystack is not an Array");if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(b[c]===a)return c;return-1},b.utils.fnBind=function(a,b,c){if(void 0!==Function.prototype.bind)return Function.prototype.bind.apply(a,[b].concat(c||[]));var d=function(){
// Join the already applied arguments to the now called ones (after converting to an array again).
var e=(c||[]).concat(Array.prototype.slice.call(arguments,0));
// If not being called as a constructor
// If not being called as a constructor
// If being called as a constructor, apply the function bound to self.
return this instanceof d?void a.apply(this,e):a.apply(b,e)};
// Attach the prototype of the function to our newly created function.
return d.prototype=a.prototype,d},b.utils.removeFromArray=function(a,c){var d=b.utils.indexOf(a,c);if(-1===d)throw new Error("Can't remove item from array. Item is not in the array");c.splice(d,1)},b.utils.now=function(){return"function"==typeof Date.now?Date.now():(new Date).getTime()},b.utils.getUniqueId=function(){return(1e15*Math.random()).toString(36).replace(".","")},/**
 * A basic XSS filter. It is ultimately up to the
 * implementing developer to make sure their particular 
 * applications and usecases are save from cross site scripting attacks
 *
 * @param   {String} input
 * @param 	{Boolean} keepTags
 *
 * @returns {String} filtered input
 */
b.utils.filterXss=function(a,b){var c=a.replace(/javascript/gi,"j&#97;vascript").replace(/expression/gi,"expr&#101;ssion").replace(/onload/gi,"onlo&#97;d").replace(/script/gi,"&#115;cript").replace(/onerror/gi,"on&#101;rror");return b===!0?c:c.replace(/>/g,"&gt;").replace(/</g,"&lt;")},/**
 * Removes html tags from a string
 *
 * @param   {String} input
 *
 * @returns {String} input without tags
 */
b.utils.stripTags=function(b){return a.trim(b.replace(/(<([^>]+)>)/gi,""))},/**
 * A generic and very fast EventEmitter
 * implementation. On top of emitting the
 * actual event it emits an
 *
 * lm.utils.EventEmitter.ALL_EVENT
 *
 * event for every event triggered. This allows
 * to hook into it and proxy events forwards
 *
 * @constructor
 */
b.utils.EventEmitter=function(){this._mSubscriptions={},this._mSubscriptions[b.utils.EventEmitter.ALL_EVENT]=[],/**
	 * Listen for events
	 *
	 * @param   {String} sEvent    The name of the event to listen to
	 * @param   {Function} fCallback The callback to execute when the event occurs
	 * @param   {[Object]} oContext The value of the this pointer within the callback function
	 *
	 * @returns {void}
	 */
this.on=function(a,b,c){this._mSubscriptions[a]||(this._mSubscriptions[a]=[]),this._mSubscriptions[a].push({fn:b,ctx:c})},/**
	 * Emit an event and notify listeners
	 *
	 * @param   {String} sEvent The name of the event
	 * @param 	{Mixed}  various additional arguments that will be passed to the listener
	 *
	 * @returns {void}
	 */
this.emit=function(a){var c,d,e;if(e=Array.prototype.slice.call(arguments,1),this._mSubscriptions[a])for(c=0;c<this._mSubscriptions[a].length;c++)d=this._mSubscriptions[a][c].ctx||{},this._mSubscriptions[a][c].fn.apply(d,e);for(e.unshift(a),c=0;c<this._mSubscriptions[b.utils.EventEmitter.ALL_EVENT].length;c++)d=this._mSubscriptions[b.utils.EventEmitter.ALL_EVENT][c].ctx||{},this._mSubscriptions[b.utils.EventEmitter.ALL_EVENT][c].fn.apply(d,e)},/**
	 * Removes a listener for an event
	 *
	 * @param   {String} sEvent    The name of the event
	 * @param   {Function} fCallback The previously registered callback method
	 * @param   {Object} oContext  The previously registered context
	 *
	 * @returns {void}
	 */
this.unbind=function(a,b,c){if(!this._mSubscriptions[a])throw new Error("No subscribtions to unsubscribe for event "+a);var d,e=!1;for(d=0;d<this._mSubscriptions[a].length;d++)this._mSubscriptions[a][d].fn!==b||c&&c!==this._mSubscriptions[a][d].ctx||(this._mSubscriptions[a].splice(d,1),e=!0);if(e===!1)throw new Error("Nothing to unbind for "+a)},/**
	 * Alias for unbind
	 */
this.off=this.unbind,/**
	 * Alias for emit
	 */
this.trigger=this.emit},/**
 * The name of the event that's triggered for every other event
 *
 * usage
 *
 * myEmitter.on( lm.utils.EventEmitter.ALL_EVENT, function( eventName, argsArray ){
 * 	//do stuff
 * });
 *
 * @type {String}
 */
b.utils.EventEmitter.ALL_EVENT="__all",b.utils.DragListener=function(c,d){b.utils.EventEmitter.call(this),this._eElement=a(c),this._oDocument=a(document),this._eBody=a(document.body),this._nButtonCode=d||0,/**
	* The delay after which to start the drag in milliseconds
	*/
this._nDelay=200,/**
	* The distance the mouse needs to be moved to qualify as a drag
	*/
this._nDistance=10,//TODO - works better with delay only
this._nX=0,this._nY=0,this._nOriginalX=0,this._nOriginalY=0,this._bDragging=!1,this._fMove=b.utils.fnBind(this.onMouseMove,this),this._fUp=b.utils.fnBind(this.onMouseUp,this),this._fDown=b.utils.fnBind(this.onMouseDown,this),this._eElement.on("mousedown touchstart",this._fDown)},b.utils.DragListener.timeout=null,b.utils.copy(b.utils.DragListener.prototype,{destroy:function(){this._eElement.unbind("mousedown touchstart",this._fDown)},onMouseDown:function(a){a.preventDefault();var c=this._getCoordinates(a);this._nOriginalX=c.x,this._nOriginalY=c.y,this._oDocument.on("mousemove touchmove",this._fMove),this._oDocument.one("mouseup touchend",this._fUp),this._timeout=setTimeout(b.utils.fnBind(this._startDrag,this),this._nDelay)},onMouseMove:function(a){a.preventDefault();var b=this._getCoordinates(a);this._nX=b.x-this._nOriginalX,this._nY=b.y-this._nOriginalY,this._bDragging===!1&&(Math.abs(this._nX)>this._nDistance||Math.abs(this._nY)>this._nDistance)&&(clearTimeout(this._timeout),this._startDrag()),this._bDragging&&this.emit("drag",this._nX,this._nY,a)},onMouseUp:function(a){clearTimeout(this._timeout),this._eBody.removeClass("lm_dragging"),this._oDocument.unbind("mousemove touchmove",this._fMove),this._bDragging===!0&&(this._bDragging=!1,this.emit("dragStop",a,this._nOriginalX+this._nX))},_startDrag:function(){this._bDragging=!0,this._eBody.addClass("lm_dragging"),this.emit("dragStart",this._nOriginalX,this._nOriginalY)},_getCoordinates:function(a){var b={};return"touch"===a.type.substr(0,5)?(b.x=a.originalEvent.targetTouches[0].pageX,b.y=a.originalEvent.targetTouches[0].pageY):(b.x=a.pageX,b.y=a.pageY),b}}),/**
 * The main class that will be exposed as GoldenLayout.
 *
 * @public
 * @constructor
 * @param {GoldenLayout config} config
 * @param {[DOM element container]} container Can be a jQuery selector string or a Dom element. Defaults to body
 *
 * @returns {VOID}
 */
b.LayoutManager=function(c,d){if(!a||"function"!=typeof a.noConflict){var e="jQuery is missing as dependency for GoldenLayout. ";throw e+='Please either expose $ on GoldenLayout\'s scope (e.g. window) or add "jquery" to ',e+="your paths when using RequireJS/AMD",new Error(e)}b.utils.EventEmitter.call(this),this.isInitialised=!1,this._isFullPage=!1,this._resizeTimeoutId=null,this._components={},this._itemAreas=[],this._resizeFunction=b.utils.fnBind(this._onResize,this),this._maximisedItem=null,this._maximisePlaceholder=a('<div class="lm_maximise_place"></div>'),this._creationTimeoutPassed=!1,this._subWindowsCreated=!1,this.width=null,this.height=null,this.root=null,this.openPopouts=[],this.selectedItem=null,this.isSubWindow=!1,this.eventHub=new b.utils.EventHub(this),this.config=this._createConfig(c),this.container=d,this.dropTargetIndicator=null,this.transitionIndicator=null,this.tabDropPlaceholder=a('<div class="lm_drop_tab_placeholder"></div>'),this.isSubWindow===!0&&a("body").css("visibility","hidden"),a(window).on("unload beforeunload",b.utils.fnBind(this._onUnload,this)),this._typeToItem={column:b.utils.fnBind(b.items.RowOrColumn,this,[!0]),row:b.utils.fnBind(b.items.RowOrColumn,this,[!1]),stack:b.items.Stack,component:b.items.Component}},/**
 * Hook that allows to access private classes
 */
b.LayoutManager.__lm=b,/**
 * Takes a GoldenLayout configuration object and
 * replaces its keys and values recoursively with
 * one letter codes
 *
 * @static
 * @public
 * @param   {Object} config A GoldenLayout config object
 *
 * @returns {Object} minified config
 */
b.LayoutManager.minifyConfig=function(a){return(new b.utils.ConfigMinifier).minifyConfig(a)},/**
 * Takes a configuration Object that was previously minified
 * using minifyConfig and returns its original version
 *
 * @static
 * @public
 * @param   {Object} minifiedConfig
 *
 * @returns {Object} the original configuration
 */
b.LayoutManager.unminifyConfig=function(a){return(new b.utils.ConfigMinifier).unminifyConfig(a)},b.utils.copy(b.LayoutManager.prototype,{/**
	 * Register a component with the layout manager. If a configuration node
	 * of type component is reached it will look up componentName and create the
	 * associated component
	 *
	 *  {
	 *		type: "component",
	 *		componentName: "EquityNewsFeed",
	 *		componentState: { "feedTopic": "us-bluechips" }
	 *  }
	 *
	 * @public
	 * @param   {String} name
	 * @param   {Function} constructor
	 *
	 * @returns {void}
	 */
registerComponent:function(a,b){if("function"!=typeof b)throw new Error("Please register a constructor function");if(void 0!==this._components[a])throw new Error("Component "+a+" is already registered");this._components[a]=b},/**
	 * Creates a layout configuration object based on the the current state
	 *
	 * @public
	 * @returns {Object} GoldenLayout configuration
	 */
toConfig:function(a){var c,d,e;if(this.isInitialised===!1)throw new Error("Can't create config, layout not yet initialised");if(a&&!(a instanceof b.items.AbstractContentItem))throw new Error("Root must be a ContentItem");for(/*
		 * settings & labels
		 */
c={settings:b.utils.copy({},this.config.settings),dimensions:b.utils.copy({},this.config.dimensions),labels:b.utils.copy({},this.config.labels)},/*
		 * Content
		 */
c.content=[],d=function(a,b){var c,e;for(c in b.config)"content"!==c&&(a[c]=b.config[c]);if(b.contentItems.length)for(a.content=[],e=0;e<b.contentItems.length;e++)a.content[e]={},d(a.content[e],b.contentItems[e])},a?d(c,{contentItems:[a]}):d(c,this.root),/*
		 * Retrieve config for subwindows
		 */
this._$reconcilePopoutWindows(),c.openPopouts=[],e=0;e<this.openPopouts.length;e++)c.openPopouts.push(this.openPopouts[e].toConfig());/*
		 * Add maximised item
		 */
return c.maximisedItemId=this._maximisedItem?"__glMaximised":null,c},/**
	 * Returns a previously registered component
	 *
	 * @public
	 * @param   {String} name The name used
	 *
	 * @returns {Function}
	 */
getComponent:function(a){if(void 0===this._components[a])throw new b.errors.ConfigurationError('Unknown component "'+a+'"');return this._components[a]},/**
	 * Creates the actual layout. Must be called after all initial components
	 * are registered. Recourses through the configuration and sets up
	 * the item tree.
	 *
	 * If called before the document is ready it adds itself as a listener
	 * to the document.ready event
	 *
	 * @public
	 * 
	 * @returns {void}
	 */
init:function(){/**
		 * If the document isn't ready yet, wait for it.
		 */
/**
		 * Create the popout windows straight away. If popouts are blocked
		 * an error is thrown on the same 'thread' rather than a timeout and can
		 * be caught. This also prevents any further initilisation from taking place.
		 */
/**
		 * If the document isn't ready yet, wait for it.
		 */
/**
		 * If this is a subwindow, wait a few milliseconds for the original
		 * page's js calls to be executed, then replace the bodies content
		 * with GoldenLayout
		 */
return this._subWindowsCreated===!1&&(this._createSubWindows(),this._subWindowsCreated=!0),"loading"===document.readyState||null===document.body?void a(document).ready(b.utils.fnBind(this.init,this)):this.isSubWindow===!0&&this._creationTimeoutPassed===!1?(setTimeout(b.utils.fnBind(this.init,this),7),void(this._creationTimeoutPassed=!0)):(this.isSubWindow===!0&&this._adjustToWindowMode(),this._setContainer(),this.dropTargetIndicator=new b.controls.DropTargetIndicator(this.container),this.transitionIndicator=new b.controls.TransitionIndicator,this.updateSize(),this._create(this.config),this._bindEvents(),this.isInitialised=!0,void this.emit("initialised"))},/**
	 * Updates the layout managers size
	 *
	 * @public
	 * @param   {[int]} width  height in pixels
	 * @param   {[int]} height width in pixels
	 *
	 * @returns {void}
	 */
updateSize:function(a,b){2===arguments.length?(this.width=a,this.height=b):(this.width=this.container.width(),this.height=this.container.height()),this.isInitialised===!0&&(this.root.callDownwards("setSize"),this._maximisedItem&&(this._maximisedItem.element.width(this.container.width()),this._maximisedItem.element.height(this.container.height()),this._maximisedItem.callDownwards("setSize")))},/**
	 * Destroys the LayoutManager instance itself as well as every ContentItem
	 * within it. After this is called nothing should be left of the LayoutManager.
	 *
	 * @public
	 * @returns {void}
	 */
destroy:function(){this.isInitialised!==!1&&(this._onUnload(),a(window).off("resize",this._resizeFunction),this.root.callDownwards("_$destroy",[],!0),this.root.contentItems=[],this.tabDropPlaceholder.remove(),this.dropTargetIndicator.destroy(),this.transitionIndicator.destroy())},/**
	 * Recoursively creates new item tree structures based on a provided
	 * ItemConfiguration object 
	 *
	 * @public
	 * @param   {Object} config ItemConfig
	 * @param   {[ContentItem]} parent The item the newly created item should be a child of
	 *
	 * @returns {lm.items.ContentItem}
	 */
createContentItem:function(a,c){var d,e;if("string"!=typeof a.type)throw new b.errors.ConfigurationError("Missing parameter 'type'",a);if(!this._typeToItem[a.type])throw d="Unknown type '"+a.type+"'. Valid types are "+b.utils.objectKeys(this._typeToItem).join(","),new b.errors.ConfigurationError(d);/**
		 * We add an additional stack around every component that's not within a stack anyways
		 */
// If this is a component
return"component"!==a.type||c instanceof b.items.Stack||!c||this.isSubWindow===!0&&c instanceof b.items.Root||(a={type:"stack",isClosable:a.isClosable,width:a.width,height:a.height,content:[a]}),e=new this._typeToItem[a.type](this,a,c)},/**
	 * Creates a popout window with the specified content and dimensions
	 *
	 * @param   {Object|lm.itemsAbstractContentItem} configOrContentItem
	 * @param   {[Object]} dimensions A map with width, height, left and top
	 * @param 	{[String]} parentId the id of the element this item will be appended to 
	 *                             when popIn is called
	 * @param 	{[Number]} indexInParent The position of this item within its parent element
	 
	 * @returns {lm.controls.BrowserPopout}
	 */
createPopout:function(a,c,d,e){var f,g,h,i,j,k,l=a,m=a instanceof b.items.AbstractContentItem,n=this;if(d=d||null,m){for(l=this.toConfig(a).content,d=b.utils.getUniqueId(),/**
			 * If the item is the only component within a stack or for some
			 * other reason the only child of its parent the parent will be destroyed
			 * when the child is removed.
			 *
			 * In order to support this we move up the tree until we find something
			 * that will remain after the item is being popped out
			 */
i=a.parent,j=a;1===i.contentItems.length&&!i.isRoot;)i=i.parent,j=j.parent;i.addId(d),isNaN(e)&&(e=b.utils.indexOf(j,i.contentItems))}else l instanceof Array||(l=[l]);return!c&&m&&(f=window.screenX||window.screenLeft,g=window.screenY||window.screenTop,h=a.element.offset(),c={left:f+h.left,top:g+h.top,width:a.element.width(),height:a.element.height()}),c||m||(c={left:window.screenX||window.screenLeft+20,top:window.screenY||window.screenTop+20,width:500,height:309}),m&&a.remove(),k=new b.controls.BrowserPopout(l,c,d,e,this),k.on("initialised",function(){n.emit("windowOpened",k)}),k.on("closed",function(){n._$reconcilePopoutWindows()}),this.openPopouts.push(k),k},/**
	 * Attaches DragListener to any given DOM element
	 * and turns it into a way of creating new ContentItems
	 * by 'dragging' the DOM element into the layout
	 *
	 * @param   {jQuery DOM element} element
	 * @param   {Object} itemConfig for the new item to be created
	 *
	 * @returns {void}
	 */
createDragSource:function(c,d){this.config.settings.constrainDragToContainer=!1,new b.controls.DragSource(a(c),d,this)},/**
	 * Programmatically selects an item. This deselects
	 * the currently selected item, selects the specified item
	 * and emits a selectionChanged event
	 *
	 * @param   {lm.item.AbstractContentItem} item#
	 * @param   {[Boolean]} _$silent Wheather to notify the item of its selection
	 * @event 	selectionChanged
	 *
	 * @returns {VOID}
	 */
selectItem:function(a,b){if(this.config.settings.selectionEnabled!==!0)throw new Error("Please set selectionEnabled to true to use this feature");a!==this.selectedItem&&(null!==this.selectedItem&&this.selectedItem.deselect(),a&&b!==!0&&a.select(),this.selectedItem=a,this.emit("selectionChanged",a))},/*************************
	* PACKAGE PRIVATE
	*************************/
_$maximiseItem:function(a){null!==this._maximisedItem&&this._$minimiseItem(this._maximisedItem),this._maximisedItem=a,this._maximisedItem.addId("__glMaximised"),a.element.addClass("lm_maximised"),a.element.after(this._maximisePlaceholder),this.root.element.prepend(a.element),a.element.width(this.container.width()),a.element.height(this.container.height()),a.callDownwards("setSize"),this._maximisedItem.emit("maximised"),this.emit("stateChanged")},_$minimiseItem:function(a){a.element.removeClass("lm_maximised"),a.removeId("__glMaximised"),this._maximisePlaceholder.after(a.element),this._maximisePlaceholder.remove(),a.parent.callDownwards("setSize"),this._maximisedItem=null,a.emit("minimised"),this.emit("stateChanged")},/**
	 * This method is used to get around sandboxed iframe restrictions.
	 * If 'allow-top-navigation' is not specified in the iframe's 'sandbox' attribute
	 * (as is the case with codepens) the parent window is forbidden from calling certain
	 * methods on the child, such as window.close() or setting document.location.href.
	 *
	 * This prevented GoldenLayout popouts from popping in in codepens. The fix is to call
	 * _$closeWindow on the child window's gl instance which (after a timeout to disconnect
	 * the invoking method from the close call) closes itself.
	 *
	 * @packagePrivate
	 *
	 * @returns {void}
	 */
_$closeWindow:function(){window.setTimeout(function(){window.close()},1)},_$getArea:function(a,b){var c,d,e=1/0,f=null;for(c=0;c<this._itemAreas.length;c++)d=this._itemAreas[c],a>d.x1&&a<d.x2&&b>d.y1&&b<d.y2&&e>d.surface&&(e=d.surface,f=d);return f},_$calculateItemAreas:function(){var a,b,c=this._getAllContentItems();/**
		 * If the last item is dragged out, highlight the entire container size to
		 * allow to re-drop it. allContentItems[ 0 ] === this.root at this point
		 *
		 * Don't include root into the possible drop areas though otherwise since it
		 * will used for every gap in the layout, e.g. splitters
		 */
if(this._itemAreas=[],1===c.length)return void this._itemAreas.push(this.root._$getArea());for(a=0;a<c.length;a++)c[a].isStack&&(b=c[a]._$getArea(),null!==b&&(b instanceof Array?this._itemAreas=this._itemAreas.concat(b):this._itemAreas.push(b)))},/**
	 * Takes a contentItem or a configuration and optionally a parent
	 * item and returns an initialised instance of the contentItem
	 *
	 * @packagePrivate
	 * 
	 * @param   {lm.items.AbtractContentItem|Object} contentItemOrConfig
	 * @param   {lm.items.AbtractContentItem} parent Only necessary when passing in config
	 *
	 * @returns {lm.items.AbtractContentItem}
	 */
_$normalizeContentItem:function(c,d){if(!c)throw new Error("No content item defined");if(c instanceof b.items.AbstractContentItem)return c;if(a.isPlainObject(c)&&c.type){var e=this.createContentItem(c,d);return e.callDownwards("_$init"),e}throw new Error("Invalid contentItem")},/**
	 * Iterates through the array of open popout windows and removes the ones
	 * that are effectively closed. This is necessary due to the lack of reliably
	 * listening for window.close / unload events in a cross browser compatible fashion.
	 *
	 * @packagePrivate
	 * 
	 * @returns {void}
	 */
_$reconcilePopoutWindows:function(){var a,b=[];for(a=0;a<this.openPopouts.length;a++)this.openPopouts[a].getWindow().closed===!1?b.push(this.openPopouts[a]):this.emit("windowClosed",this.openPopouts[a]);this.openPopouts.length!==b.length&&(this.emit("stateChanged"),this.openPopouts=b)},/***************************
	* PRIVATE
	***************************/
/**
	 * Returns a flattened array of all content items,
	 * regardles of level or type
	 *
	 * @private
	 *
	 * @returns {void}
	 */
_getAllContentItems:function(){var a=[],b=function(c){if(a.push(c),c.contentItems instanceof Array)for(var d=0;d<c.contentItems.length;d++)b(c.contentItems[d])};return b(this.root),a},/**
	 * Binds to DOM/BOM events on init
	 *
	 * @private
	 *
	 * @returns {void}
	 */
_bindEvents:function(){this._isFullPage&&a(window).resize(this._resizeFunction)},/**
	 * Debounces resize events
	 *
	 * @private
	 * 
	 * @returns {void}
	 */
_onResize:function(){clearTimeout(this._resizeTimeoutId),this._resizeTimeoutId=setTimeout(b.utils.fnBind(this.updateSize,this),100)},/**
	 * Extends the default config with the user specific settings and applies
	 * derivations. Please note that there's a seperate method (AbstractContentItem._extendItemNode)
	 * that deals with the extension of item configs
	 *
	 * @param   {Object} config
	 * @static
	 * @returns {Object} config
	 */
_createConfig:function(c){var d=b.utils.getQueryStringParam("gl-window");return d&&(this.isSubWindow=!0,c=localStorage.getItem(d),c=JSON.parse(c),c=(new b.utils.ConfigMinifier).unminifyConfig(c),localStorage.removeItem(d)),c=a.extend(!0,{},b.config.defaultConfig,c),c.settings.hasHeaders===!1&&(c.dimensions.headerHeight=0),c},/**
	 * This is executed when GoldenLayout detects that it is run
	 * within a previously opened popout window.
	 *
	 * @private
	 *
	 * @returns {void}
	 */
_adjustToWindowMode:function(){var c=a('<div class="lm_popin" title="'+this.config.labels.popin+'"><div class="lm_icon"></div><div class="lm_bg"></div></div>');c.click(b.utils.fnBind(function(){this.emit("popIn")},this)),document.title=b.utils.stripTags(this.config.content[0].title),a("head").append(a("body link, body style, template, .gl_keep")),this.container=a("body").html("").css("visibility","visible").append(c);/*
		 * This seems a bit pointless, but actually causes a reflow/re-evaluation getting around
		 * slickgrid's "Cannot find stylesheet." bug in chrome
		 */
document.body.offsetHeight;// jshint ignore:line
/*
		 * Expose this instance on the window object
		 * to allow the opening window to interact with
		 * it
		 */
window.__glInstance=this},/**
	 * Creates Subwindows (if there are any). Throws an error
	 * if popouts are blocked.
	 *
	 * @returns {void}
	 */
_createSubWindows:function(){var a,b;for(a=0;a<this.config.openPopouts.length;a++)b=this.config.openPopouts[a],this.createPopout(b.content,b.dimensions,b.parentId,b.indexInParent)},/**
	 * Determines what element the layout will be created in
	 *
	 * @private
	 *
	 * @returns {void}
	 */
_setContainer:function(){var b=a(this.container||"body");if(0===b.length)throw new Error("GoldenLayout container not found");if(b.length>1)throw new Error("GoldenLayout more than one container element specified");b[0]===document.body&&(this._isFullPage=!0,a("html, body").css({height:"100%",margin:0,padding:0,overflow:"hidden"})),this.container=b},/**
	 * Kicks of the initial, recoursive creation chain
	 *
	 * @param   {Object} config GoldenLayout Config
	 *
	 * @returns {void}
	 */
_create:function(a){var c;if(!(a.content instanceof Array))throw c=void 0===a.content?"Missing setting 'content' on top level of configuration":"Configuration parameter 'content' must be an array",new b.errors.ConfigurationError(c,a);if(a.content.length>1)throw c="Top level content can't contain more then one element.",new b.errors.ConfigurationError(c,a);this.root=new b.items.Root(this,{content:a.content},this.container),this.root.callDownwards("_$init"),"__glMaximised"===a.maximisedItemId&&this.root.getItemsById(a.maximisedItemId)[0].toggleMaximise()},/**
	 * Called when the window is closed or the user navigates away
	 * from the page
	 *
	 * @returns {void}
	 */
_onUnload:function(){if(this.config.settings.closePopoutsOnUnload===!0)for(var a=0;a<this.openPopouts.length;a++)this.openPopouts[a].close()}}),/**
 * Expose the Layoutmanager as the single entrypoint using UMD
 */
function(){/* global define */
"function"==typeof define&&define.amd?define(["jquery"],function(c){return a=c,b.LayoutManager}):"object"==typeof exports?module.exports=b.LayoutManager:window.GoldenLayout=b.LayoutManager}(),b.config.itemDefaultConfig={isClosable:!0,reorderEnabled:!0,title:""},b.config.defaultConfig={openPopouts:[],settings:{hasHeaders:!0,constrainDragToContainer:!0,reorderEnabled:!0,selectionEnabled:!1,popoutWholeStack:!1,blockedPopoutsThrowError:!0,closePopoutsOnUnload:!0,showPopoutIcon:!0,showMaximiseIcon:!0,showCloseIcon:!0},dimensions:{borderWidth:5,minItemHeight:10,minItemWidth:10,headerHeight:20,dragProxyWidth:300,dragProxyHeight:200},labels:{close:"close",maximise:"maximise",minimise:"minimise",popout:"open in new window",popin:"pop in"}},b.container.ItemContainer=function(c,d,e){b.utils.EventEmitter.call(this),this.width=null,this.height=null,this.title=c.componentName,this.parent=d,this.layoutManager=e,this.isHidden=!1,this._config=c,this._element=a(['<div class="lm_item_container">','<div class="lm_content"></div>',"</div>"].join("")),this._contentElement=this._element.find(".lm_content")},b.utils.copy(b.container.ItemContainer.prototype,{/**
	 * Get the inner DOM element the container's content
	 * is intended to live in
	 *
	 * @returns {DOM element}
	 */
getElement:function(){return this._contentElement},/**
	 * Hide the container. Notifies the containers content first
	 * and then hides the DOM node. If the container is already hidden
	 * this should have no effect
	 *
	 * @returns {void}
	 */
hide:function(){this.emit("hide"),this.isHidden=!0,this._element.hide()},/**
	 * Shows a previously hidden container. Notifies the
	 * containers content first and then shows the DOM element.
	 * If the container is already visible this has no effect.
	 *
	 * @returns {void}
	 */
show:function(){this.emit("show"),this.isHidden=!1,this._element.show()},/**
	 * Set the size from within the container. Traverses up
	 * the item tree until it finds a row or column element
	 * and resizes its items accordingly.
	 *
	 * If this container isn't a descendant of a row or column
	 * it returns false
	 * @todo  Rework!!!
	 * @param {Number} width  The new width in pixel
	 * @param {Number} height The new height in pixel
	 * 
	 * @returns {Boolean} resizeSuccesful
	 */
setSize:function(a,b){for(var c,d,e,f,g,h,i=this.parent,j=this;!i.isColumn&&!i.isRow;)/**
			 * No row or column has been found
			 */
if(j=i,i=i.parent,i.isRoot)return!1;for(e=i.isColumn?"height":"width",f="height"===e?b:a,c=this[e]*(1/(j.config[e]/100)),d=f/c*100,g=(j.config[e]-d)/i.contentItems.length,h=0;h<i.contentItems.length;h++)i.contentItems[h]===j?i.contentItems[h].config[e]=d:i.contentItems[h].config[e]+=g;return i.callDownwards("setSize"),!0},/**
	 * Closes the container if it is closable. Can be called by
	 * both the component within at as well as the contentItem containing
	 * it. Emits a close event before the container itself is closed.
	 *
	 * @returns {void}
	 */
close:function(){this._config.isClosable&&(this.emit("close"),this.parent.close())},/**
	 * Returns the current state object
	 *
	 * @returns {Object} state
	 */
getState:function(){return this._config.componentState},/**
	 * Merges the provided state into the current one
	 *
	 * @param   {Object} state
	 *
	 * @returns {void}
	 */
extendState:function(b){this.setState(a.extend(!0,this.getState(),b))},/**
	 * Notifies the layout manager of a stateupdate
	 *
	 * @param {serialisable} state
	 */
setState:function(a){this._config.componentState=a,this.parent.emitBubblingEvent("stateChanged")},/**
	 * Set's the components title
	 *
	 * @param {String} title
	 */
setTitle:function(a){this.parent.setTitle(a)},/**
	 * Set's the containers size. Called by the container's component.
	 * To set the size programmatically from within the container please
	 * use the public setSize method
	 *
	 * @param {[Int]} width  in px
	 * @param {[Int]} height in px
	 * 
	 * @returns {void}
	 */
_$setSize:function(a,b){(a!==this.width||b!==this.height)&&(this.width=a,this.height=b,this._contentElement.width(this.width).height(this.height),this.emit("resize"))}}),/**
 * Pops a content item out into a new browser window.
 * This is achieved by
 *
 * 	- Creating a new configuration with the content item as root element
 * 	- Serializing and minifying the configuration
 * 	- Opening the current window's URL with the configuration as a GET parameter
 * 	- GoldenLayout when opened in the new window will look for the GET parameter
 * 	  and use it instead of the provided configuration
 *
 * @param {Object} config GoldenLayout item config
 * @param {Object} dimensions A map with width, height, top and left
 * @param {String} parentId The id of the element the item will be appended to on popIn
 * @param {Number} indexInParent The position of this element within its parent
 * @param {lm.LayoutManager} layoutManager
 */
b.controls.BrowserPopout=function(a,c,d,e,f){b.utils.EventEmitter.call(this),this.isInitialised=!1,this._config=a,this._dimensions=c,this._parentId=d,this._indexInParent=e,this._layoutManager=f,this._popoutWindow=null,this._id=null,this._createWindow()},b.utils.copy(b.controls.BrowserPopout.prototype,{toConfig:function(){return{dimensions:{width:this.getGlInstance().width,height:this.getGlInstance().height,left:this._popoutWindow.screenX||this._popoutWindow.screenLeft,top:this._popoutWindow.screenY||this._popoutWindow.screenTop},content:this.getGlInstance().toConfig().content,parentId:this._parentId,indexInParent:this._indexInParent}},getGlInstance:function(){return this._popoutWindow.__glInstance},getWindow:function(){return this._popoutWindow},close:function(){if(this.getGlInstance())this.getGlInstance()._$closeWindow();else try{this.getWindow().close()}catch(a){}},/**
	 * Returns the popped out item to its original position. If the original 
	 * parent isn't available anymore it falls back to the layout's topmost element
	 */
popIn:function(){var b,c,d=this._indexInParent;this._parentId&&(/*
			 * The $.extend call seems a bit pointless, but it's crucial to
			 * copy the config returned by this.getGlInstance().toConfig()
			 * onto a new object. Internet Explorer keeps the references
			 * to objects on the child window, resulting in the following error
			 * once the child window is closed:
			 *
			 * The callee (server [not server application]) is not available and disappeared
			 */
b=a.extend(!0,{},this.getGlInstance().toConfig()).content[0],c=this._layoutManager.root.getItemsById(this._parentId)[0],/*
			 * Fallback if parentItem is not available. Either add it to the topmost
			 * item or make it the topmost item if the layout is empty
			 */
c||(c=this._layoutManager.root.contentItems.length>0?this._layoutManager.root.contentItems[0]:this._layoutManager.root,d=0)),c.addChild(b,this._indexInParent),this.close()},/**
	 * Creates the URL and window parameter
	 * and opens a new window
	 *
	 * @private
	 *
	 * @returns {void}
	 */
_createWindow:function(){var c,d=this._createUrl(),/**
			 * Bogus title to prevent re-usage of existing window with the
			 * same title. The actual title will be set by the new window's
			 * GoldenLayout instance if it detects that it is in subWindowMode
			 */
e=Math.floor(1e6*Math.random()).toString(36),/**
			 * The options as used in the window.open string
			 */
f=this._serializeWindowOptions({width:this._dimensions.width,height:this._dimensions.height,innerWidth:this._dimensions.width,innerHeight:this._dimensions.height,menubar:"no",toolbar:"no",location:"no",personalbar:"no",resizable:"yes",scrollbars:"no",status:"no"});if(this._popoutWindow=window.open(d,e,f),this._popoutWindow)a(this._popoutWindow).on("load",b.utils.fnBind(this._positionWindow,this)).on("unload beforeunload",b.utils.fnBind(this._onClose,this)),/**
		 * Polling the childwindow to find out if GoldenLayout has been initialised
		 * doesn't seem optimal, but the alternatives - adding a callback to the parent
		 * window or raising an event on the window object - both would introduce knowledge
		 * about the parent to the child window which we'd rather avoid
		 */
c=setInterval(b.utils.fnBind(function(){this._popoutWindow.__glInstance&&this._popoutWindow.__glInstance.isInitialised&&(this._onInitialised(),clearInterval(c))},this),10);else if(this._layoutManager.config.settings.blockedPopoutsThrowError===!0){var g=new Error("Popout blocked");throw g.type="popoutBlocked",g}},/**
	 * Serialises a map of key:values to a window options string
	 *
	 * @param   {Object} windowOptions
	 *
	 * @returns {String} serialised window options
	 */
_serializeWindowOptions:function(a){var b,c=[];for(b in a)c.push(b+"="+a[b]);return c.join(",")},/**
	 * Creates the URL for the new window, including the
	 * config GET parameter
	 *
	 * @returns {String} URL
	 */
_createUrl:function(){var a,c={content:this._config},d="gl-window-config-"+b.utils.getUniqueId();c=(new b.utils.ConfigMinifier).minifyConfig(c);try{localStorage.setItem(d,JSON.stringify(c))}catch(e){throw new Error("Error while writing to localStorage "+e.toString())}
// URL doesn't contain GET-parameters
// URL doesn't contain GET-parameters
return a=document.location.href.split("?"),1===a.length?a[0]+"?gl-window="+d:document.location.href+"&gl-window="+d},/**
	 * Move the newly created window roughly to
	 * where the component used to be. 
	 *
	 * @private
	 * 
	 * @returns {void}
	 */
_positionWindow:function(){this._popoutWindow.moveTo(this._dimensions.left,this._dimensions.top),this._popoutWindow.focus()},/**
	 * Callback when the new window is opened and the GoldenLayout instance
	 * within it is initialised
	 *
	 * @returns {void}
	 */
_onInitialised:function(){this.isInitialised=!0,this.getGlInstance().on("popIn",this.popIn,this),this.emit("initialised")},/**
	 * Invoked 50ms after the window unload event
	 *
	 * @private
	 * 
	 * @returns {void}
	 */
_onClose:function(){setTimeout(b.utils.fnBind(this.emit,this,["closed"]),50)}}),/**
 * This class creates a temporary container
 * for the component whilst it is being dragged
 * and handles drag events
 *
 * @constructor
 * @private
 *
 * @param {Number} x              The initial x position
 * @param {Number} y              The initial y position
 * @param {lm.utils.DragListener} dragListener   
 * @param {lm.LayoutManager} layoutManager
 * @param {lm.item.AbstractContentItem} contentItem
 * @param {lm.item.AbstractContentItem} originalParent
 */
b.controls.DragProxy=function(c,d,e,f,g,h){b.utils.EventEmitter.call(this),this._dragListener=e,this._layoutManager=f,this._contentItem=g,this._originalParent=h,this._area=null,this._lastValidArea=null,this._dragListener.on("drag",this._onDrag,this),this._dragListener.on("dragStop",this._onDrop,this),this.element=a(b.controls.DragProxy._template),this.element.css({left:c,top:d}),this.element.find(".lm_title").html(this._contentItem.config.title),this.childElementContainer=this.element.find(".lm_content"),this.childElementContainer.append(g.element),this._updateTree(),this._layoutManager._$calculateItemAreas(),this._setDimensions(),a(document.body).append(this.element);var i=this._layoutManager.container.offset();this._minX=i.left,this._minY=i.top,this._maxX=this._layoutManager.container.width()+this._minX,this._maxY=this._layoutManager.container.height()+this._minY,this._width=this.element.width(),this._height=this.element.height()},b.controls.DragProxy._template='<div class="lm_dragProxy"><div class="lm_header"><ul class="lm_tabs"><li class="lm_tab lm_active"><i class="lm_left"></i><span class="lm_title"></span><i class="lm_right"></i></li></ul></div><div class="lm_content"></div></div>',b.utils.copy(b.controls.DragProxy.prototype,{/**
	 * Callback on every mouseMove event during a drag. Determines if the drag is
	 * still within the valid drag area and calls the layoutManager to highlight the
	 * current drop area
	 *
	 * @param   {Number} offsetX The difference from the original x position in px
	 * @param   {Number} offsetY The difference from the original y position in px
	 * @param   {jQuery DOM event} event
	 *
	 * @private
	 *
	 * @returns {void}
	 */
_onDrag:function(a,b,c){var d=c.pageX,e=c.pageY,f=d>this._minX&&d<this._maxX&&e>this._minY&&e<this._maxY;(f||this._layoutManager.config.settings.constrainDragToContainer!==!0)&&(this.element.css({left:d,top:e}),this._area=this._layoutManager._$getArea(d,e),null!==this._area&&(this._lastValidArea=this._area,this._area.contentItem._$highlightDropZone(d,e,this._area)))},/**
	 * Callback when the drag has finished. Determines the drop area
	 * and adds the child to it
	 *
	 * @private
	 *
	 * @returns {void}
	 */
_onDrop:function(){this._layoutManager.dropTargetIndicator.hide(),/*
		 * Valid drop area found
		 */
null!==this._area?this._area.contentItem._$onDrop(this._contentItem):null!==this._lastValidArea?this._lastValidArea.contentItem._$onDrop(this._contentItem):this._originalParent&&this._originalParent.addChild(this._contentItem),this.element.remove()},/**
	 * Removes the item from it's original position within the tree
	 *
	 * @private
	 *
	 * @returns {void}
	 */
_updateTree:function(){/**
		 * parent is null if the drag had been initiated by a external drag source
		 */
this._contentItem.parent&&this._contentItem.parent.removeChild(this._contentItem,!0),this._contentItem._$setParent(this)},/**
	 * Updates the Drag Proxie's dimensions
	 *
	 * @private
	 *
	 * @returns {void}
	 */
_setDimensions:function(){var a=this._layoutManager.config.dimensions,b=a.dragProxyWidth,c=a.dragProxyHeight-a.headerHeight;this.childElementContainer.width(b),this.childElementContainer.height(c),this._contentItem.element.width(b),this._contentItem.element.height(c),this._contentItem.callDownwards("_$show"),this._contentItem.callDownwards("setSize")}}),/**
 * Allows for any DOM item to create a component on drag
 * start tobe dragged into the Layout
 *
 * @param {jQuery element} element
 * @param {Object} itemConfig the configuration for the contentItem that will be created
 * @param {LayoutManager} layoutManager
 *
 * @constructor
 */
b.controls.DragSource=function(a,b,c){this._element=a,this._itemConfig=b,this._layoutManager=c,this._dragListener=null,this._createDragListener()},b.utils.copy(b.controls.DragSource.prototype,{/**
	 * Called initially and after every drag
	 *
	 * @returns {void}
	 */
_createDragListener:function(){null!==this._dragListener&&this._dragListener.destroy(),this._dragListener=new b.utils.DragListener(this._element),this._dragListener.on("dragStart",this._onDragStart,this),this._dragListener.on("dragStop",this._createDragListener,this)},/**
	 * Callback for the DragListener's dragStart event
	 *
	 * @param   {int} x the x position of the mouse on dragStart
	 * @param   {int} y the x position of the mouse on dragStart
	 *
	 * @returns {void}
	 */
_onDragStart:function(a,c){var d=this._layoutManager._$normalizeContentItem(this._itemConfig),e=new b.controls.DragProxy(a,c,this._dragListener,this._layoutManager,d,null);this._layoutManager.transitionIndicator.transitionElements(this._element,e.element)}}),b.controls.DropTargetIndicator=function(){this.element=a(b.controls.DropTargetIndicator._template),a(document.body).append(this.element)},b.controls.DropTargetIndicator._template='<div class="lm_dropTargetIndicator"><div class="lm_inner"></div></div>',b.utils.copy(b.controls.DropTargetIndicator.prototype,{destroy:function(){this.element.remove()},highlight:function(a,b,c,d){this.highlightArea({x1:a,y1:b,x2:c,y2:d})},highlightArea:function(a){this.element.css({left:a.x1,top:a.y1,width:a.x2-a.x1,height:a.y2-a.y1}).show()},hide:function(){this.element.hide()}}),/**
 * This class represents a header above a Stack ContentItem.
 *
 * @param {lm.LayoutManager} layoutManager
 * @param {lm.item.AbstractContentItem} parent
 */
b.controls.Header=function(c,d){b.utils.EventEmitter.call(this),this.layoutManager=c,this.element=a(b.controls.Header._template),this.layoutManager.config.settings.selectionEnabled===!0&&(this.element.addClass("lm_selectable"),this.element.click(b.utils.fnBind(this._onHeaderClick,this))),this.element.height(c.config.dimensions.headerHeight),this.tabsContainer=this.element.find(".lm_tabs"),this.controlsContainer=this.element.find(".lm_controls"),this.parent=d,this.parent.on("resize",this._updateTabSizes,this),this.tabs=[],this.activeContentItem=null,this._createControls()},b.controls.Header._template=['<div class="lm_header">','<ul class="lm_tabs"></ul>','<ul class="lm_controls"></ul>',"</div>"].join(""),b.utils.copy(b.controls.Header.prototype,{/**
	 * Creates a new tab and associates it with a contentItem
	 *
	 * @param   {lm.item.AbstractContentItem} contentItem
	 * @param   {Integer} index The position of the tab
	 *
	 * @returns {void}
	 */
createTab:function(a,c){var d,e;
//If there's already a tab relating to the
//content item, don't do anything
for(e=0;e<this.tabs.length;e++)if(this.tabs[e].contentItem===a)return;return d=new b.controls.Tab(this,a),0===this.tabs.length?(this.tabs.push(d),void this.tabsContainer.append(d.element)):(void 0===c&&(c=this.tabs.length),c>0?this.tabs[c-1].element.after(d.element):this.tabs[0].element.before(d.element),this.tabs.splice(c,0,d),void this._updateTabSizes())},/**
	 * Finds a tab based on the contentItem its associated with and removes it.
	 *
	 * @param   {lm.item.AbstractContentItem} contentItem
	 *
	 * @returns {void}
	 */
removeTab:function(a){for(var b=0;b<this.tabs.length;b++)if(this.tabs[b].contentItem===a)return this.tabs[b]._$destroy(),void this.tabs.splice(b,1);throw new Error("contentItem is not controlled by this header")},/**
	 * The programmatical equivalent of clicking a Tab.
	 *
	 * @param {lm.item.AbstractContentItem} contentItem
	 */
setActiveContentItem:function(a){var b,c;for(b=0;b<this.tabs.length;b++)c=this.tabs[b].contentItem===a,this.tabs[b].setActive(c),c===!0&&(this.activeContentItem=a,this.parent.config.activeItemIndex=b);this._updateTabSizes(),this.parent.emitBubblingEvent("stateChanged")},/**
	 * Destroys the entire header
	 *
	 * @package private
	 * 
	 * @returns {void}
	 */
_$destroy:function(){this.emit("destroy");for(var a=0;a<this.tabs.length;a++)this.tabs[a]._$destroy();this.element.remove()},/**
	 * Creates the popout, maximise and close buttons in the header's top right corner
	 *
	 * @returns {void}
	 */
_createControls:function(){var a,c,d,e,f,g,h;/**
		 * Popout control to launch component in new window.
		 */
this.layoutManager.config.settings.showPopoutIcon&&(c=b.utils.fnBind(this._onPopoutClick,this),d=this.layoutManager.config.labels.popout,new b.controls.HeaderButton(this,d,"lm_popout",c)),/**
		 * Maximise control - set the component to the full size of the layout
		 */
this.layoutManager.config.settings.showMaximiseIcon&&(g=b.utils.fnBind(this.parent.toggleMaximise,this.parent),e=this.layoutManager.config.labels.maximise,f=this.layoutManager.config.labels.minimise,h=new b.controls.HeaderButton(this,e,"lm_maximise",g),this.parent.on("maximised",function(){h.element.attr("title",f)}),this.parent.on("minimised",function(){h.element.attr("title",e)})),/**
		 * Close button
		 */
this.parent.config.isClosable&&this.layoutManager.config.settings.showCloseIcon&&(a=b.utils.fnBind(this.parent.remove,this.parent),d=this.layoutManager.config.labels.close,new b.controls.HeaderButton(this,d,"lm_close",a))},_onPopoutClick:function(){this.layoutManager.config.settings.popoutWholeStack===!0?this.parent.popout():this.activeContentItem.popout()},/**
	 * Invoked when the header's background is clicked (not it's tabs or controls)
	 *
	 * @param   {jQuery DOM event} event
	 *
	 * @returns {void}
	 */
_onHeaderClick:function(a){a.target===this.element[0]&&this.parent.select()},/**
	 * Shrinks the tabs if the available space is not sufficient
	 *
	 * @returns {void}
	 */
_updateTabSizes:function(){if(0!==this.tabs.length){var a,b,c,d,e=this.element.outerWidth()-this.controlsContainer.outerWidth(),f=0;for(b=0;b<this.tabs.length;b++)a=this.tabs[b].element,/*
			 * In order to show every tab's close icon, decrement the z-index from left to right
			 */
a.css("z-index",this.tabs.length-b),f+=a.outerWidth()+parseInt(a.css("margin-right"),10);for(d=(f-e)/(this.tabs.length-1),b=0;b<this.tabs.length;b++)/*
			 * The active tab keeps it's original width
			 */
c=!this.tabs[b].isActive&&d>0?"-"+Math.floor(d)+"px":"",this.tabs[b].element.css("margin-left",c);f>e?this.element.css("overflow","hidden"):this.element.css("overflow","visible")}}}),b.controls.HeaderButton=function(b,c,d,e){this._header=b,this.element=a('<li class="'+d+'" title="'+c+'"></li>'),this._header.on("destroy",this._$destroy,this),this._action=e,this.element.click(this._action),this._header.controlsContainer.append(this.element)},b.utils.copy(b.controls.HeaderButton.prototype,{_$destroy:function(){this.element.off(this._action),this.element.remove()}}),b.controls.Splitter=function(a,c){this._isVertical=a,this._size=c,this.element=this._createElement(),this._dragListener=new b.utils.DragListener(this.element)},b.utils.copy(b.controls.Splitter.prototype,{on:function(a,b,c){this._dragListener.on(a,b,c)},_$destroy:function(){this.element.remove()},_createElement:function(){var b=a('<div class="lm_splitter"><div class="lm_drag_handle"></div></div>');return b.addClass("lm_"+(this._isVertical?"vertical":"horizontal")),b[this._isVertical?"height":"width"](this._size),b}}),/**
 * Represents an individual tab within a Stack's header
 *
 * @param {lm.controls.Header} header
 * @param {lm.items.AbstractContentItem} contentItem
 *
 * @constructor
 */
b.controls.Tab=function(c,d){this.header=c,this.contentItem=d,this.element=a(b.controls.Tab._template),this.titleElement=this.element.find(".lm_title"),this.closeElement=this.element.find(".lm_close_tab"),this.closeElement[d.config.isClosable?"show":"hide"](),this.isActive=!1,this.setTitle(d.config.title),this.contentItem.on("titleChanged",this.setTitle,this),this._layoutManager=this.contentItem.layoutManager,this._layoutManager.config.settings.reorderEnabled===!0&&d.config.reorderEnabled===!0&&(this._dragListener=new b.utils.DragListener(this.element),this._dragListener.on("dragStart",this._onDragStart,this)),this._onTabClickFn=b.utils.fnBind(this._onTabClick,this),this._onCloseClickFn=b.utils.fnBind(this._onCloseClick,this),this.element.click(this._onTabClickFn),this._layoutManager.config.settings.showCloseIcon===!0?this.closeElement.click(this._onCloseClickFn):this.closeElement.remove(),this.contentItem.tab=this,this.contentItem.emit("tab",this),this.contentItem.layoutManager.emit("tabCreated",this),this.contentItem.isComponent&&(this.contentItem.container.tab=this,this.contentItem.container.emit("tab",this))},/**
 * The tab's html template
 *
 * @type {String}
 */
b.controls.Tab._template='<li class="lm_tab"><i class="lm_left"></i><span class="lm_title"></span><div class="lm_close_tab"></div><i class="lm_right"></i></li>',b.utils.copy(b.controls.Tab.prototype,{/**
	 * Sets the tab's title to the provided string and sets
	 * its title attribute to a pure text representation (without 
	 * html tags) of the same string.
	 *
	 * @public
	 * @param {String} title can contain html
	 */
setTitle:function(a){this.element.attr("title",b.utils.stripTags(a)),this.titleElement.html(a)},/**
	 * Sets this tab's active state. To programmatically 
	 * switch tabs, use header.setActiveContentItem( item ) instead.
	 *
	 * @public
	 * @param {Boolean} isActive
	 */
setActive:function(a){a!==this.isActive&&(this.isActive=a,a?this.element.addClass("lm_active"):this.element.removeClass("lm_active"))},/**
	 * Destroys the tab
	 *
	 * @private
	 * @returns {void}
	 */
_$destroy:function(){this.element.off("click",this._onTabClickFn),this.closeElement.off("click",this._onCloseClickFn),this.element.remove()},/**
	 * Callback for the DragListener
	 *
	 * @param   {Number} x The tabs absolute x position
	 * @param   {Number} y The tabs absolute y position
	 *
	 * @private
	 * @returns {void}
	 */
_onDragStart:function(a,c){this.contentItem.parent.isMaximised===!0&&this.contentItem.parent.toggleMaximise(),new b.controls.DragProxy(a,c,this._dragListener,this._layoutManager,this.contentItem,this.header.parent)},/**
	 * Callback when the tab is clicked
	 *
	 * @param {jQuery DOM event} event
	 * 
	 * @private
	 * @returns {void}
	 */
_onTabClick:function(a){
// left mouse button
0===a.button?this.header.parent.setActiveContentItem(this.contentItem):1===a.button&&this.contentItem.config.isClosable&&this._onCloseClick(a)},/**
	 * Callback when the tab's close button is
	 * clicked
	 *
	 * @param   {jQuery DOM event} event
	 *
	 * @private
	 * @returns {void}
	 */
_onCloseClick:function(a){a.stopPropagation(),this.header.parent.removeChild(this.contentItem)}}),b.controls.TransitionIndicator=function(){this._element=a('<div class="lm_transition_indicator"></div>'),a(document.body).append(this._element),this._toElement=null,this._fromDimensions=null,this._totalAnimationDuration=200,this._animationStartTime=null},b.utils.copy(b.controls.TransitionIndicator.prototype,{destroy:function(){this._element.remove()},transitionElements:function(a,b){},_nextAnimationFrame:function(){var a,c=this._measure(this._toElement),d=(b.utils.now()-this._animationStartTime)/this._totalAnimationDuration,e={};if(d>=1)return void this._element.hide();c.opacity=0;for(a in this._fromDimensions)e[a]=this._fromDimensions[a]+(c[a]-this._fromDimensions[a])*d;this._element.css(e),b.utils.animFrame(b.utils.fnBind(this._nextAnimationFrame,this))},_measure:function(a){var b=a.offset();return{left:b.left,top:b.top,width:a.outerWidth(),height:a.outerHeight()}}}),b.errors.ConfigurationError=function(a,b){Error.call(this),this.name="Configuration Error",this.message=a,this.node=b},b.errors.ConfigurationError.prototype=new Error,/**
 * This is the baseclass that all content items inherit from.
 * Most methods provide a subset of what the sub-classes do.
 *
 * It also provides a number of functions for tree traversal
 *
 * @param {lm.LayoutManager} layoutManager
 * @param {item node configuration} config
 * @param {lm.item} parent
 *
 * @event stateChanged
 * @event itemDestroyed
 * @event itemCreated
 * @event componentCreated
 * @event rowCreated
 * @event columnCreated
 * @event stackCreated
 *
 * @constructor
 */
b.items.AbstractContentItem=function(a,c,d){b.utils.EventEmitter.call(this),this.config=this._extendItemNode(c),this.type=c.type,this.contentItems=[],this.parent=d,this.isInitialised=!1,this.isMaximised=!1,this.isRoot=!1,this.isRow=!1,this.isColumn=!1,this.isStack=!1,this.isComponent=!1,this.layoutManager=a,this._pendingEventPropagations={},this._throttledEvents=["stateChanged"],this.on(b.utils.EventEmitter.ALL_EVENT,this._propagateEvent,this),c.content&&this._createContentItems(c)},b.utils.copy(b.items.AbstractContentItem.prototype,{/**
	 * Set the size of the component and its children, called recoursively
	 *
	 * @abstract
	 * @returns void
	 */
setSize:function(){throw new Error("Abstract Method")},/**
	 * Calls a method recoursively downwards on the tree
	 *
	 * @param   {String} functionName      the name of the function to be called
	 * @param   {[Array]}functionArguments optional arguments that are passed to every function
	 * @param   {[bool]} bottomUp          Call methods from bottom to top, defaults to false
	 * @param   {[bool]} skipSelf          Don't invoke the method on the class that calls it, defaults to false
	 *
	 * @returns {void}
	 */
callDownwards:function(a,b,c,d){var e;for(c!==!0&&d!==!0&&this[a].apply(this,b||[]),e=0;e<this.contentItems.length;e++)this.contentItems[e].callDownwards(a,b,c);c===!0&&d!==!0&&this[a].apply(this,b||[])},/**
	 * Removes a child node (and its children) from the tree
	 *
	 * @param   {lm.items.ContentItem} contentItem
	 *
	 * @returns {void}
	 */
removeChild:function(a,c){/*
		 * Get the position of the item that's to be removed within all content items this node contains
		 */
var d=b.utils.indexOf(a,this.contentItems);/*
		 * Make sure the content item to be removed is actually a child of this item
		 */
if(-1===d)throw new Error("Can't remove child item. Unknown content item");/**
		 * Call ._$destroy on the content item. This also calls ._$destroy on all its children
		 */
c!==!0&&this.contentItems[d]._$destroy(),/**
		 * Remove the content item from this nodes array of children
		 */
this.contentItems.splice(d,1),/**
		 * Remove the item from the configuration
		 */
this.config.content.splice(d,1),/**
		 * If this node still contains other content items, adjust their size
		 */
this.contentItems.length>0?this.callDownwards("setSize"):this instanceof b.items.Root||this.config.isClosable!==!0||this.parent.removeChild(this)},/**
	 * Sets up the tree structure for the newly added child
	 * The responsibility for the actual DOM manipulations lies
	 * with the concrete item
	 *
	 * @param {lm.items.AbstractContentItem} contentItem
	 * @param {[Int]} index If omitted item will be appended
	 */
addChild:function(a,b){void 0===b&&(b=this.contentItems.length),this.contentItems.splice(b,0,a),void 0===this.config.content&&(this.config.content=[]),this.config.content.splice(b,0,a.config),a.parent=this,a.parent.isInitialised===!0&&a.isInitialised===!1&&a._$init()},/**
	 * Replaces oldChild with newChild. This used to use jQuery.replaceWith... which for
	 * some reason removes all event listeners, so isn't really an option.
	 *
	 * @param   {lm.item.AbstractContentItem} oldChild
	 * @param   {lm.item.AbstractContentItem} newChild
	 *
	 * @returns {void}
	 */
replaceChild:function(a,c,d){c=this.layoutManager._$normalizeContentItem(c);var e=b.utils.indexOf(a,this.contentItems),f=a.element[0].parentNode;if(-1===e)throw new Error("Can't replace child. oldChild is not child of this");f.replaceChild(c.element[0],a.element[0]),/*
		 * Optionally destroy the old content item
		 */
d===!0&&(a.parent=null,a._$destroy()),/*
		 * Wire the new contentItem into the tree
		 */
this.contentItems[e]=c,c.parent=this,
//TODO This doesn't update the config... refactor to leave item nodes untouched after creation
c.parent.isInitialised===!0&&c.isInitialised===!1&&c._$init(),this.callDownwards("setSize")},/**
	 * Convenience method. 
	 * Shorthand for this.parent.removeChild( this )
	 *
	 * @returns {void}
	 */
remove:function(){this.parent.removeChild(this)},/**
	 * Removes the component from the layout and creates a new 
	 * browser window with the component and its children inside
	 *
	 * @returns {lm.controls.BrowserPopout}
	 */
popout:function(){var a=this.layoutManager.createPopout(this);return this.emitBubblingEvent("stateChanged"),a},/**
	 * Maximises the Item or minimises it if it is already maximised
	 *
	 * @returns {void}
	 */
toggleMaximise:function(){this.isMaximised===!0?this.layoutManager._$minimiseItem(this):this.layoutManager._$maximiseItem(this),this.isMaximised=!this.isMaximised,this.emitBubblingEvent("stateChanged")},/**
	 * Selects the item if it is not already selected
	 *
	 * @returns {void}
	 */
select:function(){this.layoutManager.selectedItem!==this&&(this.layoutManager.selectItem(this,!0),this.element.addClass("lm_selected"))},/**
	 * De-selects the item if it is selected
	 *
	 * @returns {void}
	 */
deselect:function(){this.layoutManager.selectedItem===this&&(this.layoutManager.selectedItem=null,this.element.removeClass("lm_selected"))},/**
	 * Set this component's title
	 * 
	 * @public
	 * @param {String} title
	 *
	 * @returns {void}
	 */
setTitle:function(a){this.config.title=a,this.emit("titleChanged",a),this.emit("stateChanged")},/**
	 * Checks whether a provided id is present
	 *
	 * @public
	 * @param   {String}  id
	 *
	 * @returns {Boolean} isPresent
	 */
hasId:function(a){return this.config.id?"string"==typeof this.config.id?this.config.id===a:this.config.id instanceof Array?-1!==b.utils.indexOf(a,this.config.id):void 0:!1},/**
	 * Adds an id. Adds it as a string if the component doesn't
	 * have an id yet or creates/uses an array
	 *
	 * @public
	 * @param {String} id
	 *
	 * @returns {void}
	 */
addId:function(a){this.hasId(a)||(this.config.id?"string"==typeof this.config.id?this.config.id=[this.config.id,a]:this.config.id instanceof Array&&this.config.id.push(a):this.config.id=a)},/**
	 * Removes an existing id. Throws an error
	 * if the id is not present
	 *
	 * @public
	 * @param   {String} id
	 *
	 * @returns {void}
	 */
removeId:function(a){if(!this.hasId(a))throw new Error("Id not found");if("string"==typeof this.config.id)delete this.config.id;else if(this.config.id instanceof Array){var c=b.utils.indexOf(a,this.config.id);this.config.id.splice(c,1)}},/****************************************
	* SELECTOR
	****************************************/
getItemsByFilter:function(a){var b=[],c=function(d){for(var e=0;e<d.contentItems.length;e++)a(d.contentItems[e])===!0&&b.push(d.contentItems[e]),c(d.contentItems[e])};return c(this),b},getItemsById:function(a){return this.getItemsByFilter(function(c){return c.config.id instanceof Array?-1!==b.utils.indexOf(a,c.config.id):c.config.id===a})},getItemsByType:function(a){return this._$getItemsByProperty("type",a)},getComponentsByName:function(a){var b,c=this._$getItemsByProperty("componentName",a),d=[];for(b=0;b<c.length;b++)d.push(c[b].instance);return d},/****************************************
	* PACKAGE PRIVATE
	****************************************/
_$getItemsByProperty:function(a,b){return this.getItemsByFilter(function(c){return c[a]===b})},_$setParent:function(a){this.parent=a},_$highlightDropZone:function(a,b,c){this.layoutManager.dropTargetIndicator.highlightArea(c)},_$onDrop:function(a){this.addChild(a)},_$hide:function(){this._callOnActiveComponents("hide"),this.element.hide(),this.layoutManager.updateSize()},_$show:function(){this._callOnActiveComponents("show"),this.element.show(),this.layoutManager.updateSize()},_callOnActiveComponents:function(a){var b,c,d=this.getItemsByType("stack");for(c=0;c<d.length;c++)b=d[c].getActiveContentItem(),b&&b.isComponent&&b.container[a]()},/**
	 * Destroys this item ands its children
	 *
	 * @returns {void}
	 */
_$destroy:function(){this.callDownwards("_$destroy",[],!0,!0),this.element.remove(),this.emitBubblingEvent("itemDestroyed")},/**
	 * Returns the area the component currently occupies in the format
	 *
	 * {
	 *		x1: int
	 *		xy: int
	 *		y1: int
	 *		y2: int
	 *		contentItem: contentItem
	 * }
	 */
_$getArea:function(a){a=a||this.element;var b=a.offset(),c=a.width(),d=a.height();return{x1:b.left,y1:b.top,x2:b.left+c,y2:b.top+d,surface:c*d,contentItem:this}},/**
	 * The tree of content items is created in two steps: First all content items are instantiated,
	 * then init is called recoursively from top to bottem. This is the basic init function,
	 * it can be used, extended or overwritten by the content items
	 * 
	 * Its behaviour depends on the content item
	 *
	 * @package private
	 * 
	 * @returns {void}
	 */
_$init:function(){var a;for(this.setSize(),a=0;a<this.contentItems.length;a++)this.childElementContainer.append(this.contentItems[a].element);this.isInitialised=!0,this.emitBubblingEvent("itemCreated"),this.emitBubblingEvent(this.type+"Created")},/**
	 * Emit an event that bubbles up the item tree.
	 *
	 * @param   {String} name The name of the event
	 *
	 * @returns {void}
	 */
emitBubblingEvent:function(a){var c=new b.utils.BubblingEvent(a,this);this.emit(a,c)},/**
	 * Private method, creates all content items for this node at initialisation time
	 * PLEASE NOTE, please see addChild for adding contentItems add runtime
	 * @private
	 * @param   {configuration item node} config
	 *
	 * @returns {void}
	 */
_createContentItems:function(a){var c,d;if(!(a.content instanceof Array))throw new b.errors.ConfigurationError("content must be an Array",a);for(d=0;d<a.content.length;d++)c=this.layoutManager.createContentItem(a.content[d],this),this.contentItems.push(c)},/**
	 * Extends an item configuration node with default settings
	 * @private
	 * @param   {configuration item node} config
	 *
	 * @returns {configuration item node} extended config
	 */
_extendItemNode:function(a){for(var c in b.config.itemDefaultConfig)void 0===a[c]&&(a[c]=b.config.itemDefaultConfig[c]);return a},/**
	 * Called for every event on the item tree. Decides whether the event is a bubbling
	 * event and propagates it to its parent
	 *
	 * @param	{String} name the name of the event
	 * @param   {lm.utils.BubblingEvent} event 
	 *
	 * @returns {void}
	 */
_propagateEvent:function(a,c){c instanceof b.utils.BubblingEvent&&c.isPropagationStopped===!1&&this.isInitialised===!0&&(/**
			 * In some cases (e.g. if an element is created from a DragSource) it
			 * doesn't have a parent and is not below root. If that's the case
			 * propagate the bubbling event from the top level of the substree directly
			 * to the layoutManager
			 */
this.isRoot===!1&&this.parent?this.parent.emit.apply(this.parent,Array.prototype.slice.call(arguments,0)):this._scheduleEventPropagationToLayoutManager(a,c))},/**
	 * All raw events bubble up to the root element. Some events that
	 * are propagated to - and emitted by - the layoutManager however are
	 * only string-based, batched and sanitized to make them more usable
	 *
	 * @param {String} name the name of the event
	 *
	 * @private
	 * @returns {void}
	 */
_scheduleEventPropagationToLayoutManager:function(a,c){-1===b.utils.indexOf(a,this._throttledEvents)?this.layoutManager.emit(a,c.origin):this._pendingEventPropagations[a]!==!0&&(this._pendingEventPropagations[a]=!0,b.utils.animFrame(b.utils.fnBind(this._propagateEventToLayoutManager,this,[a,c])))},/**
	 * Callback for events scheduled by _scheduleEventPropagationToLayoutManager
	 *
	 * @param {String} name the name of the event
	 *
	 * @private
	 * @returns {void}
	 */
_propagateEventToLayoutManager:function(a,b){this._pendingEventPropagations[a]=!1,this.layoutManager.emit(a,b)}}),/**
 * @param {[type]} layoutManager [description]
 * @param {[type]} config      [description]
 * @param {[type]} parent        [description]
 */
b.items.Component=function(c,d,e){b.items.AbstractContentItem.call(this,c,d,e);var f=c.getComponent(this.config.componentName),g=a.extend(!0,{},this.config.componentState||{});g.componentName=this.config.componentName,this.componentName=this.config.componentName,""===this.config.title&&(this.config.title=this.config.componentName),this.isComponent=!0,this.container=new b.container.ItemContainer(this.config,this,c),this.instance=new f(this.container,g),this.element=this.container._element},b.utils.extend(b.items.Component,b.items.AbstractContentItem),b.utils.copy(b.items.Component.prototype,{close:function(){this.parent.removeChild(this)},setSize:function(){this.container._$setSize(this.element.width(),this.element.height())},_$init:function(){b.items.AbstractContentItem.prototype._$init.call(this),this.container.emit("open")},_$hide:function(){this.container.hide(),b.items.AbstractContentItem.prototype._$hide.call(this)},_$show:function(){this.container.show(),b.items.AbstractContentItem.prototype._$show.call(this)},_$destroy:function(){this.container.emit("destroy"),b.items.AbstractContentItem.prototype._$destroy.call(this)},/**
	 * Dragging onto a component directly is not an option
	 *
	 * @returns null
	 */
_$getArea:function(){return null}}),b.items.Root=function(c,d,e){b.items.AbstractContentItem.call(this,c,d,null),this.isRoot=!0,this.type="root",this.element=a('<div class="lm_goldenlayout lm_item lm_root"></div>'),this.childElementContainer=this.element,this._containerElement=e,this._containerElement.append(this.element)},b.utils.extend(b.items.Root,b.items.AbstractContentItem),b.utils.copy(b.items.Root.prototype,{addChild:function(a){if(this.contentItems.length>0)throw new Error("Root node can only have a single child");a=this.layoutManager._$normalizeContentItem(a,this),this.childElementContainer.append(a.element),b.items.AbstractContentItem.prototype.addChild.call(this,a),this.callDownwards("setSize"),this.emitBubblingEvent("stateChanged")},setSize:function(){var a=this._containerElement.width(),b=this._containerElement.height();this.element.width(a),this.element.height(b),/*
		 * Root can be empty
		 */
this.contentItems[0]&&(this.contentItems[0].element.width(a),this.contentItems[0].element.height(b))},_$onDrop:function(a){var b;a.isComponent===!0?(b=this.layoutManager.createContentItem({type:"stack"},this),b.addChild(a),this.addChild(b)):this.addChild(a)}}),b.items.RowOrColumn=function(c,d,e,f){b.items.AbstractContentItem.call(this,d,e,f),this.isRow=!c,this.isColumn=c,this.element=a('<div class="lm_item lm_'+(c?"column":"row")+'"></div>'),this.childElementContainer=this.element,this._splitterSize=d.config.dimensions.borderWidth,this._isColumn=c,this._dimension=c?"height":"width",this._splitter=[],this._splitterPosition=null,this._splitterMinPosition=null,this._splitterMaxPosition=null},b.utils.extend(b.items.RowOrColumn,b.items.AbstractContentItem),b.utils.copy(b.items.RowOrColumn.prototype,{/**
	 * Add a new contentItem to the Row or Column
	 *
	 * @param {lm.item.AbstractContentItem} contentItem
	 * @param {[int]} index The position of the new item within the Row or Column.
	 *                      If no index is provided the item will be added to the end
	 * @param {[bool]} _$suspendResize If true the items won't be resized. This will leave the item in
	 *                                 an inconsistent state and is only intended to be used if multiple
	 *                                 children need to be added in one go and resize is called afterwards
	 *
	 * @returns {void}
	 */
addChild:function(a,c,d){var e,f,g,h;if(a=this.layoutManager._$normalizeContentItem(a,this),void 0===c&&(c=this.contentItems.length),this.contentItems.length>0?(h=this._createSplitter(Math.max(0,c-1)).element,c>0?(this.contentItems[c-1].element.after(h),h.after(a.element)):(this.contentItems[0].element.before(h),h.before(a.element))):this.childElementContainer.append(a.element),b.items.AbstractContentItem.prototype.addChild.call(this,a,c),e=1/this.contentItems.length*100,d===!0)return void this.emitBubblingEvent("stateChanged");for(g=0;g<this.contentItems.length;g++)this.contentItems[g]===a?a.config[this._dimension]=e:(f=this.contentItems[g].config[this._dimension]*=(100-e)/100,this.contentItems[g].config[this._dimension]=f);this.callDownwards("setSize"),this.emitBubblingEvent("stateChanged")},/**
	 * Removes a child of this element
	 *
	 * @param   {lm.items.AbstractContentItem} contentItem
	 * @param   {boolean} keepChild   If true the child will be removed, but not destroyed
	 *
	 * @returns {void}
	 */
removeChild:function(a,c){var d,e,f=a.config[this._dimension],g=b.utils.indexOf(a,this.contentItems),h=Math.max(g-1,0);if(-1===g)throw new Error("Can't remove child. ContentItem is not child of this Row or Column");/**
		 * Allocate the space that the removed item occupied to the remaining items
		 */
for(/**
		 * Remove the splitter before the item or after if the item happens
		 * to be the first in the row/column
		 */
this._splitter[h]&&(this._splitter[h]._$destroy(),this._splitter.splice(h,1)),d=0;d<this.contentItems.length;d++)this.contentItems[d]!==a&&(this.contentItems[d].config[this._dimension]+=f/(this.contentItems.length-1));b.items.AbstractContentItem.prototype.removeChild.call(this,a,c),1===this.contentItems.length&&this.config.isClosable===!0?(e=this.contentItems[0],this.contentItems=[],this.parent.replaceChild(this,e,!0)):(this.callDownwards("setSize"),this.emitBubblingEvent("stateChanged"))},/**
	 * Replaces a child of this Row or Column with another contentItem
	 *
	 * @param   {lm.items.AbstractContentItem} oldChild
	 * @param   {lm.items.AbstractContentItem} newChild
	 *
	 * @returns {void}
	 */
replaceChild:function(a,c){var d=a.config[this._dimension];b.items.AbstractContentItem.prototype.replaceChild.call(this,a,c),c.config[this._dimension]=d,this.callDownwards("setSize"),this.emitBubblingEvent("stateChanged")},/**
	 * Called whenever the dimensions of this item or one of its parents change
	 *
	 * @returns {void}
	 */
setSize:function(){this.contentItems.length>0&&(this._calculateRelativeSizes(),this._setAbsoluteSizes()),this.emitBubblingEvent("stateChanged"),this.emit("resize")},/**
	 * Invoked recoursively by the layout manager. AbstractContentItem.init appends
	 * the contentItem's DOM elements to the container, RowOrColumn init adds splitters
	 * in between them
	 *
	 * @package private
	 * @override AbstractContentItem._$init
	 * @returns {void}
	 */
_$init:function(){if(this.isInitialised!==!0){var a;for(b.items.AbstractContentItem.prototype._$init.call(this),a=0;a<this.contentItems.length-1;a++)this.contentItems[a].element.after(this._createSplitter(a).element)}},/**
	 * Turns the relative sizes calculated by _calculateRelativeSizes into
	 * absolute pixel values and applies them to the children's DOM elements
	 *
	 * Assigns additional pixels to counteract Math.floor
	 * 
	 * @private
	 * @returns {void}
	 */
_setAbsoluteSizes:function(){var a,b,c,d=(this.contentItems.length-1)*this._splitterSize,e=this.element.width(),f=this.element.height(),g=0,h=[];for(this._isColumn?f-=d:e-=d,a=0;a<this.contentItems.length;a++)c=this._isColumn?Math.floor(f*(this.contentItems[a].config.height/100)):Math.floor(e*(this.contentItems[a].config.width/100)),g+=c,h.push(c);for(b=(this._isColumn?f:e)-g,a=0;a<this.contentItems.length;a++)b-a>0&&h[a]++,this._isColumn?(this.contentItems[a].element.width(e),this.contentItems[a].element.height(h[a])):(this.contentItems[a].element.width(h[a]),this.contentItems[a].element.height(f))},/**
	 * Calculates the relative sizes of all children of this Item. The logic
	 * is as follows:
	 * 
	 * - Add up the total size of all items that have a configured size
	 *
	 * - If the total == 100 (check for floating point errors)
	 *		Excellent, job done
	 * 
	 * - If the total is > 100, 
	 *		set the size of items without set dimensions to 1/3 and add this to the total
	 *		set the size off all items so that the total is hundred relative to their original size 
	 *
	 * - If the total is < 100
	 *		If there are items without set dimensions, distribute the remainder to 100 evenly between them
	 *		If there are no items without set dimensions, increase all items sizes relative to
	 *		their original size so that they add up to 100
	 *
	 * @private
	 * @returns {void}
	 */
_calculateRelativeSizes:function(){var a,b=0,c=[],d=this._isColumn?"height":"width";for(a=0;a<this.contentItems.length;a++)void 0!==this.contentItems[a].config[d]?b+=this.contentItems[a].config[d]:c.push(this.contentItems[a]);/**
		 * Everything adds up to hundred, all good :-)
		 */
if(100!==Math.round(b))/**
		 * Allocate the remaining size to the items without a set dimension
		 */
if(Math.round(b)<100&&c.length>0)for(a=0;a<c.length;a++)c[a].config[d]=(100-b)/c.length;else{/**
		 * If the total is > 100, but there are also items without a set dimension left, assing 50
		 * as their dimension and add it to the total
		 *
		 * This will be reset in the next step
		 */
if(Math.round(b)>100)for(a=0;a<c.length;a++)c[a].config[d]=50,b+=50;/**
		 * Set every items size relative to 100 relative to its size to total
		 */
for(a=0;a<this.contentItems.length;a++)this.contentItems[a].config[d]=this.contentItems[a].config[d]/b*100}},/**
	 * Instantiates a new lm.controls.Splitter, binds events to it and adds
	 * it to the array of splitters at the position specified as the index argument
	 *
	 * What it doesn't do though is append the splitter to the DOM
	 *
	 * @param   {Int} index The position of the splitter
	 *
	 * @returns {lm.controls.Splitter}
	 */
_createSplitter:function(a){var c;return c=new b.controls.Splitter(this._isColumn,this._splitterSize),c.on("drag",b.utils.fnBind(this._onSplitterDrag,this,[c]),this),c.on("dragStop",b.utils.fnBind(this._onSplitterDragStop,this,[c]),this),c.on("dragStart",b.utils.fnBind(this._onSplitterDragStart,this,[c]),this),this._splitter.splice(a,0,c),c},/**
	 * Locates the instance of lm.controls.Splitter in the array of
	 * registered splitters and returns a map containing the contentItem
	 * before and after the splitters, both of which are affected if the
	 * splitter is moved
	 *
	 * @param   {lm.controls.Splitter} splitter
	 *
	 * @returns {Object} A map of contentItems that the splitter affects
	 */
_getItemsForSplitter:function(a){var c=b.utils.indexOf(a,this._splitter);return{before:this.contentItems[c],after:this.contentItems[c+1]}},/**
	 * Invoked when a splitter's dragListener fires dragStart. Calculates the splitters
	 * movement area once (so that it doesn't need calculating on every mousemove event)
	 *
	 * @param   {lm.controls.Splitter} splitter
	 *
	 * @returns {void}
	 */
_onSplitterDragStart:function(a){var b=this._getItemsForSplitter(a),c=this.layoutManager.config.dimensions[this._isColumn?"minItemHeight":"minItemWidth"];this._splitterPosition=0,this._splitterMinPosition=-1*(b.before.element[this._dimension]()-c),this._splitterMaxPosition=b.after.element[this._dimension]()-c},/**
	 * Invoked when a splitter's DragListener fires drag. Updates the splitters DOM position,
	 * but not the sizes of the elements the splitter controls in order to minimize resize events
	 *
	 * @param   {lm.controls.Splitter} splitter
	 * @param   {Int} offsetX  Relative pixel values to the splitters original position. Can be negative
	 * @param   {Int} offsetY  Relative pixel values to the splitters original position. Can be negative
	 *
	 * @returns {void}
	 */
_onSplitterDrag:function(a,b,c){var d=this._isColumn?c:b;d>this._splitterMinPosition&&d<this._splitterMaxPosition&&(this._splitterPosition=d,a.element.css(this._isColumn?"top":"left",d))},/**
	 * Invoked when a splitter's DragListener fires dragStop. Resets the splitters DOM position,
	 * and applies the new sizes to the elements before and after the splitter and their children
	 * on the next animation frame
	 *
	 * @param   {lm.controls.Splitter} splitter
	 *
	 * @returns {void}
	 */
_onSplitterDragStop:function(a){var c=this._getItemsForSplitter(a),d=c.before.element[this._dimension](),e=c.after.element[this._dimension](),f=(this._splitterPosition+d)/(d+e),g=c.before.config[this._dimension]+c.after.config[this._dimension];c.before.config[this._dimension]=f*g,c.after.config[this._dimension]=(1-f)*g,a.element.css({top:0,left:0}),b.utils.animFrame(b.utils.fnBind(this.callDownwards,this,["setSize"]))}}),b.items.Stack=function(c,d,e){b.items.AbstractContentItem.call(this,c,d,e),this.element=a('<div class="lm_item lm_stack"></div>'),this._activeContentItem=null,this._dropZones={},this._dropSegment=null,this._contentAreaDimensions=null,this._dropIndex=null,this.isStack=!0,this.childElementContainer=a('<div class="lm_items"></div>'),this.header=new b.controls.Header(c,this),c.config.settings.hasHeaders===!0&&this.element.append(this.header.element),this.element.append(this.childElementContainer)},b.utils.extend(b.items.Stack,b.items.AbstractContentItem),b.utils.copy(b.items.Stack.prototype,{setSize:function(){var a,b=this.element.width(),c=this.element.height()-this.layoutManager.config.dimensions.headerHeight;for(this.childElementContainer.width(b),this.childElementContainer.height(c),a=0;a<this.contentItems.length;a++)this.contentItems[a].element.width(b).height(c);this.emit("resize"),this.emitBubblingEvent("stateChanged")},_$init:function(){var a,c;if(this.isInitialised!==!0){for(b.items.AbstractContentItem.prototype._$init.call(this),a=0;a<this.contentItems.length;a++)this.header.createTab(this.contentItems[a]),this.contentItems[a]._$hide();if(this.contentItems.length>0){if(c=this.contentItems[this.config.activeItemIndex||0],!c)throw new Error("Configured activeItemIndex out of bounds");this.setActiveContentItem(c)}}},setActiveContentItem:function(a){if(-1===b.utils.indexOf(a,this.contentItems))throw new Error("contentItem is not a child of this stack");null!==this._activeContentItem&&this._activeContentItem._$hide(),this._activeContentItem=a,this.header.setActiveContentItem(a),a._$show(),this.emit("activeContentItemChanged",a),this.emitBubblingEvent("stateChanged")},getActiveContentItem:function(){return this.header.activeContentItem},addChild:function(a,c){a=this.layoutManager._$normalizeContentItem(a,this),b.items.AbstractContentItem.prototype.addChild.call(this,a,c),this.childElementContainer.append(a.element),this.header.createTab(a,c),this.setActiveContentItem(a),this.callDownwards("setSize"),this.emitBubblingEvent("stateChanged")},removeChild:function(a,c){var d=b.utils.indexOf(a,this.contentItems);b.items.AbstractContentItem.prototype.removeChild.call(this,a,c),this.header.removeTab(a),this.contentItems.length>0?this.setActiveContentItem(this.contentItems[Math.max(d-1,0)]):this._activeContentItem=null,this.emitBubblingEvent("stateChanged")},_$destroy:function(){b.items.AbstractContentItem.prototype._$destroy.call(this),this.header._$destroy()},/**
	 * Ok, this one is going to be the tricky one: The user has dropped {contentItem} onto this stack.
	 *
	 * It was dropped on either the stacks header or the top, right, bottom or left bit of the content area
	 * (which one of those is stored in this._dropSegment). Now, if the user has dropped on the header the case
	 * is relatively clear: We add the item to the existing stack... job done (might be good to have 
	 * tab reordering at some point, but lets not sweat it right now)
	 *
	 * If the item was dropped on the content part things are a bit more complicated. If it was dropped on either the
	 * top or bottom region we need to create a new column and place the items accordingly. 
	 * Unless, of course if the stack is already within a column... in which case we want 
	 * to add the newly created item to the existing column... 
	 * either prepend or append it, depending on wether its top or bottom.
	 *
	 * Same thing for rows and left / right drop segments... so in total there are 9 things that can potentially happen
	 * (left, top, right, bottom) * is child of the right parent (row, column) + header drop
	 * 
	 * @param   {lm.item} contentItem
	 *
	 * @returns {void}
	 */
_$onDrop:function(a){/*
		 * The item was dropped on the header area. Just add it as a child of this stack and
		 * get the hell out of this logic
		 */
if("header"===this._dropSegment)return this._resetHeaderDropZone(),void this.addChild(a,this._dropIndex);/*
		 * The stack is empty. Let's just add the element.
		 */
if("body"===this._dropSegment)return void this.addChild(a);/*
		 * The item was dropped on the top-, left-, bottom- or right- part of the content. Let's
		 * aggregate some conditions to make the if statements later on more readable
		 */
var c,d,e,f="top"===this._dropSegment||"bottom"===this._dropSegment,g="left"===this._dropSegment||"right"===this._dropSegment,h="top"===this._dropSegment||"left"===this._dropSegment,i=f&&this.parent.isColumn||g&&this.parent.isRow,j=f?"column":"row",k=f?"height":"width";/*
		 * The content item can be either a component or a stack. If it is a component, wrap it into a stack
		 */
a.isComponent&&(d=this.layoutManager.createContentItem({type:"stack"},this),d._$init(),d.addChild(a),a=d),/*
		 * If the item is dropped on top or bottom of a column or left and right of a row, it's already
		 * layd out in the correct way. Just add it as a child
		 */
i?(c=b.utils.indexOf(this,this.parent.contentItems),this.parent.addChild(a,h?c:c+1,!0),this.config[k]*=.5,a.config[k]=this.config[k],this.parent.callDownwards("setSize")):(j=f?"column":"row",e=this.layoutManager.createContentItem({type:j},this),this.parent.replaceChild(this,e),e.addChild(a,h?0:void 0,!0),e.addChild(this,h?void 0:0,!0),this.config[k]=50,a.config[k]=50,e.callDownwards("setSize"))},/**
	 * If the user hovers above the header part of the stack, indicate drop positions for tabs.
	 * otherwise indicate which segment of the body the dragged item would be dropped on
	 *
	 * @param   {Int} x Absolute Screen X
	 * @param   {Int} y Absolute Screen Y
	 *
	 * @returns {void}
	 */
_$highlightDropZone:function(a,b){var c,d;for(c in this._contentAreaDimensions)if(d=this._contentAreaDimensions[c].hoverArea,d.x1<a&&d.x2>a&&d.y1<b&&d.y2>b)return void("header"===c?(this._dropSegment="header",this._highlightHeaderDropZone(a)):(this._resetHeaderDropZone(),this._highlightBodyDropZone(c)))},_$getArea:function(){if(this.element.is(":visible")===!1)return null;var a=b.items.AbstractContentItem.prototype._$getArea,c=a.call(this,this.header.element),d=a.call(this,this.childElementContainer),e=d.x2-d.x1,f=d.y2-d.y1;/**
		 * If this Stack is a parent to rows, columns or other stacks only its
		 * header is a valid dropzone.
		 */
/**
		 * If this Stack is a parent to rows, columns or other stacks only its
		 * header is a valid dropzone.
		 */
/**
		 * Highlight the entire body if the stack is empty
		 */
return this._contentAreaDimensions={header:{hoverArea:{x1:c.x1,y1:c.y1,x2:c.x2,y2:c.y2},highlightArea:{x1:c.x1,y1:c.y1,x2:c.x2,y2:c.y2}}},this._activeContentItem&&this._activeContentItem.isComponent===!1?c:0===this.contentItems.length?(this._contentAreaDimensions.body={hoverArea:{x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y2},highlightArea:{x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y2}},a.call(this,this.element)):(this._contentAreaDimensions.left={hoverArea:{x1:d.x1,y1:d.y1,x2:d.x1+.25*e,y2:d.y2},highlightArea:{x1:d.x1,y1:d.y1,x2:d.x1+.5*e,y2:d.y2}},this._contentAreaDimensions.top={hoverArea:{x1:d.x1+.25*e,y1:d.y1,x2:d.x1+.75*e,y2:d.y1+.5*f},highlightArea:{x1:d.x1,y1:d.y1,x2:d.x2,y2:d.y1+.5*f}},this._contentAreaDimensions.right={hoverArea:{x1:d.x1+.75*e,y1:d.y1,x2:d.x2,y2:d.y2},highlightArea:{x1:d.x1+.5*e,y1:d.y1,x2:d.x2,y2:d.y2}},this._contentAreaDimensions.bottom={hoverArea:{x1:d.x1+.25*e,y1:d.y1+.5*f,x2:d.x1+.75*e,y2:d.y2},highlightArea:{x1:d.x1,y1:d.y1+.5*f,x2:d.x2,y2:d.y2}},a.call(this,this.element))},_highlightHeaderDropZone:function(a){var b,c,d,e,f,g,h,i,j,k=this.header.tabs.length,l=!1;
// Empty stack
if(0===k)return h=this.header.element.offset(),void this.layoutManager.dropTargetIndicator.highlightArea({x1:h.left,x2:h.left+100,y1:h.top+this.header.element.height()-20,y2:h.top+this.header.element.height()});for(b=0;k>b;b++)if(c=this.header.tabs[b].element,f=c.offset(),e=f.left,d=f.top,i=c.width(),a>e&&e+i>a){l=!0;break}l===!1&&e>a||(j=e+i/2,j>a?(this._dropIndex=b,c.before(this.layoutManager.tabDropPlaceholder)):(this._dropIndex=Math.min(b+1,k),c.after(this.layoutManager.tabDropPlaceholder)),g=this.layoutManager.tabDropPlaceholder.offset().left,this.layoutManager.dropTargetIndicator.highlightArea({x1:g,x2:g+this.layoutManager.tabDropPlaceholder.width(),y1:d,y2:d+c.innerHeight()}))},_resetHeaderDropZone:function(){this.layoutManager.tabDropPlaceholder.remove()},_highlightBodyDropZone:function(a){var b=this._contentAreaDimensions[a].highlightArea;this.layoutManager.dropTargetIndicator.highlightArea(b),this._dropSegment=a}}),b.utils.BubblingEvent=function(a,b){this.name=a,this.origin=b,this.isPropagationStopped=!1},b.utils.BubblingEvent.prototype.stopPropagation=function(){this.isPropagationStopped=!0},/**
 * Minifies and unminifies configs by replacing frequent keys
 * and values with one letter substitutes
 *
 * @constructor
 */
b.utils.ConfigMinifier=function(){this._keys=["settings","hasHeaders","constrainDragToContainer","selectionEnabled","dimensions","borderWidth","minItemHeight","minItemWidth","headerHeight","dragProxyWidth","dragProxyHeight","labels","close","maximise","minimise","popout","content","componentName","componentState","id","width","type","height","isClosable","title","popoutWholeStack","openPopouts","parentId","activeItemIndex","reorderEnabled"],this._values=[!0,!1,"row","column","stack","component","close","maximise","minimise","open in new window"]},b.utils.copy(b.utils.ConfigMinifier.prototype,{/**
	 * Takes a GoldenLayout configuration object and
	 * replaces its keys and values recoursively with
	 * one letter counterparts
	 *
	 * @param   {Object} config A GoldenLayout config object
	 *
	 * @returns {Object} minified config
	 */
minifyConfig:function(a){var b={};return this._nextLevel(a,b,"_min"),b},/**
	 * Takes a configuration Object that was previously minified
	 * using minifyConfig and returns its original version
	 *
	 * @param   {Object} minifiedConfig
	 *
	 * @returns {Object} the original configuration
	 */
unminifyConfig:function(a){var b={};return this._nextLevel(a,b,"_max"),b},/**
	 * Recoursive function, called for every level of the config structure
	 *
	 * @param   {Array|Object} orig
	 * @param   {Array|Object} min
	 * @param 	{String} translationFn
	 *
	 * @returns {void}
	 */
_nextLevel:function(a,b,c){var d,e;for(d in a)/**
			 * For in returns array indices as keys, so let's cast them to numbers
			 */
a instanceof Array&&(d=parseInt(d,10)),/**
			 * In case something has extended Object prototypes
			 */
a.hasOwnProperty(d)&&(/**
			 * Translate the key to a one letter substitute
			 */
e=this[c](d,this._keys),/**
			 * For Arrays and Objects, create a new Array/Object
			 * on the minified object and recourse into it
			 */
"object"==typeof a[d]?(b[e]=a[d]instanceof Array?[]:{},this._nextLevel(a[d],b[e],c)):b[e]=this[c](a[d],this._values))},/**
	 * Minifies value based on a dictionary
	 *
	 * @param   {String|Boolean} value
	 * @param   {Array<String|Boolean>} dictionary
	 *
	 * @returns {String} The minified version
	 */
_min:function(a,c){/**
		 * If a value actually is a single character, prefix it
		 * with ___ to avoid mistaking it for a minification code
		 */
if("string"==typeof a&&1===a.length)return"___"+a;var d=b.utils.indexOf(a,c);/**
		 * value not found in the dictionary, return it unmodified
		 */
/**
		 * value not found in the dictionary, return it unmodified
		 */
return-1===d?a:d.toString(36)},_max:function(a,b){/**
		 * value is a single character. Assume that it's a translation
		 * and return the original value from the dictionary
		 */
/**
		 * value is a single character. Assume that it's a translation
		 * and return the original value from the dictionary
		 */
/**
		 * value originally was a single character and was prefixed with ___
		 * to avoid mistaking it for a translation. Remove the prefix
		 * and return the original character
		 */
return"string"==typeof a&&1===a.length?b[parseInt(a,36)]:"string"==typeof a&&"___"===a.substr(0,3)?a[3]:a}}),/**
 * An EventEmitter singleton that propagates events
 * across multiple windows. This is a little bit trickier since
 * windows are allowed to open childWindows in their own right
 *
 * This means that we deal with a tree of windows. Hence the rules for event propagation are:
 *
 * - Propagate events from this layout to both parents and children
 * - Propagate events from parent to this and children
 * - Propagate events from children to the other children (but not the emitting one) and the parent
 *
 * @constructor
 * 
 * @param {lm.LayoutManager} layoutManager
 */
b.utils.EventHub=function(c){b.utils.EventEmitter.call(this),this._layoutManager=c,this._dontPropagateToParent=null,this._childEventSource=null,this.on(b.utils.EventEmitter.ALL_EVENT,b.utils.fnBind(this._onEventFromThis,this)),a(window).on("gl_child_event",b.utils.fnBind(this._onEventFromChild,this))},/**
 * Called on every event emitted on this eventHub, regardles of origin.
 *
 * @private
 *
 * @param {Mixed}
 * 
 * @returns {void}
 */
b.utils.EventHub.prototype._onEventFromThis=function(){var a=Array.prototype.slice.call(arguments);this._layoutManager.isSubWindow&&a[0]!==this._dontPropagateToParent&&this._propagateToParent(a),this._propagateToChildren(a),
//Reset
this._dontPropagateToParent=null,this._childEventSource=null},/**
 * Called by the parent layout.
 *
 * @param   {Array} args Event name + arguments
 *
 * @returns {void}
 */
b.utils.EventHub.prototype._$onEventFromParent=function(a){this._dontPropagateToParent=a[0],this.emit.apply(this,a)},/**
 * Callback for child events raised on the window
 *
 * @param   {DOMEvent} event
 * @private
 *
 * @returns {void}
 */
b.utils.EventHub.prototype._onEventFromChild=function(a){this._childEventSource=a.originalEvent.__gl,this.emit.apply(this,a.originalEvent.__glArgs)},/**
 * Propagates the event to the parent by emitting
 * it on the parent's DOM window
 *
 * @param   {Array} args Event name + arguments
 * @private
 *
 * @returns {void}
 */
b.utils.EventHub.prototype._propagateToParent=function(a){var b,c="gl_child_event";document.createEvent?(b=window.opener.document.createEvent("HTMLEvents"),b.initEvent(c,!0,!0)):(b=window.opener.document.createEventObject(),b.eventType=c),b.eventName=c,b.__glArgs=a,b.__gl=this._layoutManager,document.createEvent?window.opener.dispatchEvent(b):window.opener.fireEvent("on"+b.eventType,b)},/**
 * Propagate events to children
 *
 * @param   {Array} args Event name + arguments
 * @private
 *
 * @returns {void}
 */
b.utils.EventHub.prototype._propagateToChildren=function(a){var b,c;for(c=0;c<this._layoutManager.openPopouts.length;c++)b=this._layoutManager.openPopouts[c].getGlInstance(),b!==this._childEventSource&&b.eventHub._$onEventFromParent(a)}}(window.$),function(a,b){"use strict";/* global define, module, require */
"function"==typeof define&&define.amd?// AMD
define(["./random"],b):"object"==typeof exports?// Node, browserify and alike
module.exports=b(require("./random")):(// Browser globals (root is window)
a.rpgTools=a.rpgTools||{},a.rpgTools.Dice=b(a.rpgTools.random))}(this,function(a){"use strict";function b(a){this.specials={},this.parse(a)}return b.prototype={constructor:b,
// general tokenizing regexp
notationRe:/(\d+)*d(\d+)*((\+\d+)|(\-\d+)|(-L)|(-H))*/,
// regexp for recognizing +x and -x patterns at the end of notation
additionRe:/(\+|\-)(\d+)/,
// defaults
defaultSides:6,defaultRolls:1,/**
         * Parses a notation
         * @param {String} notation e.g. "3d6+6"
         * @returns {Dice} this instance (for chaining)
         */
parse:function(a){var b=this.notationRe.exec(a);this.rolls=void 0===b[1]?this.defaultRolls:parseInt(b[1]),// default if omitted
this.sides=void 0===b[2]?this.defaultSides:parseInt(b[2]);// default if omitted
var c,d=b[3];// we have third part of notation
return d&&("-L"===d?this.specials.chooseLowest=!0:"-H"===d?this.specials.chooseHighest=!0:(c=this.additionRe.exec(d),this.specials.add=parseInt(c[2]),"-"===c[1]&&(this.specials.add*=-1))),this},/**
         * Perform rolls
         */
roll:function(){
// collect roll results
for(var b,c=[],d=this.rolls;d;d--)c.push(a["int"](this.sides));// choose lowest roll…
// …or highest
// or sum it up
// add constant if any
return this.specials.chooseLowest?b=Math.min.apply(Math,c):this.specials.chooseHighest?b=Math.max.apply(Math,c):(b=c.reduce(function(a,b){// this effectively sums up all elements in array
return a+b},0),this.specials.add&&(b+=this.specials.add)),b}},b}),function(a,b){"use strict";/* global define, module, require */
"function"==typeof define&&define.amd?// AMD
define(["./utils"],b):"object"==typeof exports?// Node, browserify and alike
module.exports=b(require("./utils")):(// Browser globals (root is window)
a.rpgTools=a.rpgTools||{},a.rpgTools.ProtoTree=b(a.rpgTools.utils))}(this,function(a){"use strict";function b(a){this._tree=a,this._processed=Object.create(null)}return b.prototype={constructor:b,derive:function(a){var b=this._processed[a.proto];if(b)return this.deepDefaults(a,b);if(b=this._tree[a.proto],!b)throw new TypeError("Invalid proto specified for "+a.name);return a.proto=b.proto,this.deepDefaults(a,b)},get:function(a){var b=this._processed[a];if(b)return b;if(b=this._tree[a],!b)throw new RangeError("No such object in given tree as "+a);for(;"proto"in b&&b.proto;)b=this.derive(b);
// should be undefined or otherwise falsy, so we don't need it anyway
return delete b.proto,this._processed[a]=b,b},deepDefaults:function(b,c){return Object.keys(c).forEach(function(d){a.isObject(c[d])?(void 0===b[d]&&(b[d]={}),b[d]=this.deepDefaults(b[d],c[d])):Array.isArray(c[d])?(void 0===b[d]&&(b[d]=[]),b[d]=this.deepDefaults(b[d],c[d])):void 0===b[d]&&(b[d]=c[d])},this),b}},b}),function(a,b){"use strict";/* global define, module, require */
"function"==typeof define&&define.amd?// AMD
define(["./requirements"],b):"object"==typeof exports?// Node, browserify and alike
module.exports=b(require("./requirements")):(// Browser globals (root is window)
a.rpgTools=a.rpgTools||{},a.rpgTools.inventory=b(a.rpgTools.requirements))}(this,function(a){"use strict";/**
     * @typedef {Object} Item
     * @property {String} slot
     * @property {String} name
     * @property {Object} requirements
     */
/**
     * @typedef {Object} Attributes
     * @property {Array.<Item>} inventory
     * @property {Object} equipped
     */
function b(a){Error.call(this),this.message="No such slot: "+a}function c(a){Error.call(this),this.message="Invalid inventory index: "+a}function d(a){Error.call(this),this.message='Item "'+a+'" can not be equipped'}function e(a,b){Error.call(this),this.message="Item intended for "+a+" and can not be equipped to "+b}function f(){Error.call(this),this.message="Item requirements not met"}/**
     * Unequips item from given slotName
     * @param {Attributes} attributes which object should be operated. In Mongoose it this, in Backbone it's this.attributes
     * @param {String} slotName
     */
function g(a,c){if(!(c in a.equipped))throw new b(c);return a.equipped[c]&&a.inventory.push(a.equipped[c]),a.equipped[c]=null,a}/**
     * Equips item which is located in inventory by given index
     * @param {Attributes} attributes which object should be operated.
     * @param {number} index inventory slot number
     * @param {String} slotName where to equip
     */
function h(h,i,j){if(i>=h.inventory.length)throw new c(i);var k=h.inventory[i];if(j||(j=k.slot),!j)throw new d(k.name);if(!(j in h.equipped))throw new b(j);if(k.slot!==j)throw new e(k.slot,j);if(!a.met(h,k.requirements))throw new f;return h.equipped[j]&&g(h,j),h.inventory.splice(i,1),h.equipped[j]=k,h}/**
     * Given index of item, returns list of possible slots
     * @param {Attributes} attributes
     * @param {number} index
     * @return {String}
     */
function i(b,e){if(e>=b.inventory.length)throw new c(e);var g=b.inventory[e];if(!a.met(b,g.requirements))throw new f;var h=g.slot;if(!h)throw new d(g.name);return h}b.prototype=Object.create(Error.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),c.prototype=Object.create(Error.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),d.prototype=Object.create(Error.prototype,{constructor:{value:d,writable:!0,configurable:!0}}),e.prototype=Object.create(Error.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),f.prototype=Object.create(Error.prototype,{constructor:{value:f,writable:!0,configurable:!0}});var j={unEquip:g,equipFromInventory:h,isWearable:i};return j}),function(a,b){"use strict";/* global define, module, require */
"function"==typeof define&&define.amd?// AMD
define(["./utils"],b):"object"==typeof exports?// Node, browserify and alike
module.exports=b(require("./utils")):(// Browser globals (root is window)
a.rpgTools=a.rpgTools||{},a.rpgTools.modifiers=b(a.rpgTools.utils))}(this,function(a){"use strict";/**
     * Parses and applies modifiers to given value
     * @param {Number} num basic value
     * @param {String|Number} modifier e.g. '+15%' or -4
     * @returns {Number}
     */
function b(b,c){if(!c)// if modifier is non-existent
return b;if(a.isString(c)){var d=c.match(e),f=Number(d[1]+d[2])/100;// Number('-' + '15')
b+=b*f}else a.isNumber(c)&&(b+=c);return b}/**
     * Applies modifiers, described in object, to `src`
     * @param {Object} src object which receives modificators
     * @param {Object} modifier object containing modifiers
     * @param {boolean} [overWrite=false] create new object or modify `src`
     */
function c(c,d,e){var f=e?c:a.clone(c),g=Object.keys(d);if(!g.length)return f;for(var h,i,j,k,l=g.length-1;l>=0;l--)h=g[l],j=a.keyPath(c,h),a.isNumber(j)&&(i=d[h],k=b(j,i),a.keyPath(f,h,k));return f}/**
     * Applies array of modifier object. Note that order of application matters!
     * @param {Object} src object which receives modificators
     * @param {Array.<Object>} modifiers array of objects, containing modifiers
     * @param {boolean} [overWrite=false] create new object or modify `src`
     */
function d(b,d,e){if(!Array.isArray(d))throw new TypeError('"modifiers" should be array');for(var f=e?b:a.clone(b),g=0,h=d.length;h>g;g++)f=c(f,d[g],!0);return f}var e=/([+\-]?)(\d+)%/,f={apply:b,applyObject:c,applyMulti:d};return f}),function(a,b){"use strict";/* global define, module, require */
"function"==typeof define&&define.amd?// AMD
define([],b):"object"==typeof exports?// Node, browserify and alike
module.exports=b():(// Browser globals (root is window)
a.rpgTools=a.rpgTools||{},a.rpgTools.random=b())}(this,function(){"use strict";/**
     * Returns a random integer between min (included) and max (excluded).
     * With only one parameter given, min will be considered 0
     * @param {number} min inclusive low border. If omitted, this will be max
     * @param {number} [max] exclusive high border
     * @return {number}
     */
function a(a,b){return 1===arguments.length&&(b=a,a=0),Math.floor(Math.random()*(b-a))+a}/**
     * Return random sign: -1 or 1.
     * @return {number}
     */
function b(){return 1-2*a(2)}/**
     * Get random array or object key
     * @param {Array|Object} source
     * @returns {Number|String}
     */
function c(a){if(Array.isArray(a))return Math.floor(Math.random()*a.length);var b=Object.keys(a);return b[c(b)]}/**
     * Get random value from array or object
     * @param {Array|Object} source
     * @return {Object}
     */
function d(a){var b=c(a);return a[b]}var e={"int":a,sign:b,key:c,item:d};return e}),function(a,b){"use strict";/* global define, module, require */
"function"==typeof define&&define.amd?// AMD
define(["./utils"],b):"object"==typeof exports?// Node, browserify and alike
module.exports=b(require("./utils")):(// Browser globals (root is window)
a.rpgTools=a.rpgTools||{},a.rpgTools.requirements=b(a.rpgTools.utils))}(this,function(a){"use strict";/**
     * Does the wearer met this requirements?
     * @param {Object} wearer
     * @param {Object} requirements Each field could be one of following: a) array of possible values, b) object with `min` and/or `max` properties (either numerical or string) or c) primitive value. Missing property means fail.
     * @returns {Boolean}
     */
function b(b,c){if(!c)return!0;if(!a.isObject(b))throw new TypeError("Invalid wearer");var d=Object.keys(c);if(!d.length)// fast return, empty requirements mean "anything goes"
return!0;for(var e,f,g,h=!0,i=0;i<d.length;i++){if(e=d[i],f=c[e],g=a.keyPath(b,e),void 0===g){h=!1;break}if(Array.isArray(f)){// wearer[reqName] should belong to set
if(-1===f.indexOf(g)){h=!1;break}}else if(a.isObject(f)){// wearer[reqName] should be greater than min and/or less than max
if(f.min&&f.min>g){h=!1;break}if(f.max&&f.max<g){h=!1;break}}else// wearer[reqName] should be exactly equal
if(f!==g){h=!1;break}}return h}var c={met:b};return c}),function(a,b){"use strict";/* global define, module, require */
"function"==typeof define&&define.amd?// AMD
define([],b):"object"==typeof exports?// Node, browserify and alike
module.exports=b():(// Browser globals (root is window)
a.rpgTools=a.rpgTools||{},a.rpgTools.utils=b())}(this,function(){"use strict";function a(a){return"[object String]"===f.call(a)}function b(a){return"[object Number]"===f.call(a)}function c(a){var b=typeof a;return!Array.isArray(a)&&"object"===b&&!!a}function d(a,b,c){var d=b.split(".");if(1===d.length)return 2===arguments.length?a[b]:(a[b]=c,c);var e=1,f=d.length,g=d[0],h=a[g];if(2===arguments.length){for(;f>e;)g=d[e],h=h[g],e++;return h}for(;f-1>e;)g=d[e],h=h[g],e++;return h[d[e]]=c,c}function e(a){return c(a)?JSON.parse(JSON.stringify(a)):a}var f=Object.prototype.toString,g={isString:a,isNumber:b,isObject:c,keyPath:d,clone:e};return g});
//# sourceMappingURL=libs.js.map