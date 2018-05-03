/**
 * Call a function n times with the same args,
 * returning an array of returned values
 * @param {number} n. How many times to repeat
 * @returns {function}. The curried repeater
 * @param {function} fn. What function to call
 * @param {any} ...args. Optional arguments
 * @returns [any] Values returned from each function call
 * e.g. repeat(5)(fn, arg1, arg2, arg3)
 */
const repeat = n => (fn, ...args) =>
  Array(n)
    .fill(0)
    .map(el => fn(...args));

/**
 * Call a function n times with different args,
 * returning an array of returned values
 * @param {number} n. How many times to call
 * @returns {function}. The curried repeater
 * @param {function} fn. What function to call
 * @param {any} ...args. Arguments for each (null if skipping)
 * @returns [any] Values returned from each function call
 * e.g. repeatWith(5)(fn, arg1, arg2, null, [arg3a, arg3b])
 */
const repeatWith = n => (fn, ...args) =>
  Array(n)
    .fill(0)
    .map((el, i) => {
      if (Array.isArray(args[i])) return fn(...args[i]);
      else if (args[i]) return fn(args[i]);
      else return fn();
    });

module.exports = {
  repeat,
  callEach
};
