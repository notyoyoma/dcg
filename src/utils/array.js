/**
 * @param  {array} array an array of <any>
 * @param  {function} isValid a function to test with all items in {array}
 * @example
 * // returns [[2,4], [1,3]]
 * const [even, odd] = partition([1,2,3,4], (n) => n%2===0)
 *
 * @returns {[array, array]} [[...truty], [...falsey]]
 */
export function partition(array, isValid) {
  return array.reduce(
    ([pass, fail], elem) => {
      return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
    },
    [[], []]
  );
}
