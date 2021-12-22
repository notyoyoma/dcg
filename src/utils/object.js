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
