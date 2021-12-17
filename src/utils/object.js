export function objectReduce(object, reducor, startValue) {
  return Object.keys(object).reduce(
    (result, key) => reducor(result, object[key], key),
    startValue
  );
}
