/**
 * Simple function to log a value
 * and return the value logged
 * @param any value
 * @returns
 */
const log = value => {
  console.log(value);
  return value;
};

/**
 * Call a function n times with the same args,
 * returning an array of returned values
 * e.g. repeat(fn)(5)(arg1, arg2, arg3)
 * @param function fn. What function to call
 * @param number n. How many times to repeat
 * @param any ...args. Optional arguments
 * @returns [any] Values returned from each function call
 */
const repeat = fn => n =>
  Array(n)
    .fill(0)
    .map(el => fn());

/**
 * Call a function with a new arg/args each call,
 * returning an array of returned values
 * e.g. map(fn)(arg1, arg2, null, [arg3a, arg3b])
 * @param function fn. What function to call
 * @param any ...args. Arguments for each
 * @returns [any] Values returned from each function call
 */
const map = fn => (...args) =>
  args.map(el => {
    if (Array.isArray(el)) return fn(...el);
    else return fn(el);
  });

/**
 * Call a function with a new arg/args each call,
 * then flatten an array of their returned values
 * into one value via a given reducer function
 * e.g. flatMap(fn)((a, b) => a + b)(arg1, arg2, null, [arg3a, arg3b])
 * @param function fn. What function to call (map by default)
 * @param function reducer. The reducer
 * @param any ...args. Arguments for each
 * @returns [any] Values returned from each function call
 */
const flatMap = (fn = el => el) => reducer => (...args) =>
  map(fn)(...args).reduce(reducer);

module.exports = {
  log,
  repeat,
  map,
  flatMap
};
