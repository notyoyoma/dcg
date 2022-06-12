/**
 * @param  {Object} object
 * @param  {function} reducor
 * @param  {any} startValue
 * @example
 * // returns 3
 * objectReduce({yes: 2, no: 3}, (p, v) => p + v, 0)
 * @returns {any} startValue after mutations by reducor
 */
export function objectReduce(object, reducor, startValue) {
  return Object.keys(object).reduce(
    (result, key) => reducor(result, object[key], key),
    startValue
  );
}

/**
 * @param  {Object} object
 * @param  {Array|String} path
 * @param  {any} fallback
 */
export function get(obj, path, fallback = undefined) {
  if (typeof path === "string") {
    path = path.split(".");
  }

  if (!Array.isArray(path)) {
    throw "object.js:get requires a string or array for <path>";
  }

  const result = path.reduce((prevObj, key) => prevObj && prevObj[key], obj);
  // If found value is undefined return default value; otherwise return the value
  return result === undefined ? fallback : result;
}
