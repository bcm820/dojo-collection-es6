// Fundamentals
// No built-in methods allowed (unless implemented in utils)
// Use recursion where possible for practice
const utils = require("./_utils");
const { log, map, reduce } = utils;
const logEach = map(log);

// Print 1-255
// printRange(1, 255)
const printRange = (start, end, steps = 1) => {
  log(start);
  if (start === end) return;
  return printRange(start + steps, end, steps);
};

// Print Odds 1-255
// printOdds();
const printOdds = () => printRange(1, 255, 2);

// Print and Sum 0-255
// printRangeAndSum(0, 255);
const printRangeAndSum = (start, end, sum = 0) => {
  log(`Number: ${start}, sum: ${start + sum}`);
  if (start === end) return;
  printRangeAndSum(start + 1, end, start + sum);
};

// Print Array Values
// printEach(arr)
let printEach = arr => arr.forEach(el => log(el));
printEach = (arr, idx = 0) => {
  if (!arr[idx]) return;
  log(arr[idx]);
  printEach(arr, idx + 1);
};
printEach = arr => logEach(...arr);

// Print Max of Array
// printMaxOfArray(arr);
let printMaxOfArray = arr => log(Math.max(...arr));
printMaxOfArray = (arr, idx = 0, max = arr[0]) => {
  if (idx === arr.length) return log(max);
  if (arr[idx + 1] > max) max = arr[idx + 1];
  return printMaxOfArray(arr, idx + 1, max);
};

// Print Avg of Array
// printAvgOfArray(arr);
let printAvgOfArray = arr =>
  log(arr.reduce((acc, cur) => acc + cur) / arr.length);
printAvgOfArray = (arr, idx = 0, sum = 0) => {
  if (!arr[idx]) return log(sum / arr.length);
  return printAvgOfArray(arr, idx + 1, sum + arr[idx]);
};

// Return Odds Array 1-255
// oddsArray();
const oddsArray = (arr = [], i = 1) => {
  if (i === 255) return arr;
  return oddsArray([...arr, i], i + 2);
};

// Square Array Values
// squareArrayVals(arr);
let squareArrayVals = arr => arr.map(el => el * el);
const squareEach = map(val => val * val);
squareArrayVals = arr => squareEach(...arr);

// Print Array Count Greater Than Y
// arrayCountGreaterThanY(arr, y)
let arrayCountGreaterThanY = (arr, y) =>
  log(
    arr.filter(el => el > y).map(el => {
      log(el);
      return el;
    }).length
  );
arrayCountGreaterThanY = (arr, y, idx = 0, count = 0) => {
  if (!arr[idx]) return log(count);
  if (arr[idx] > y) count++;
  return arrayCountGreaterThanY(arr, y, idx + 1, count);
};

// Zero out negative array values
let zeroOutNegatives = arr =>
  arr.map(el => {
    if (el < 0) return 0;
    return el;
  });
zeroOutNegatives = (arr, idx = 0) => {
  if (!arr[idx]) return arr;
  if (arr[idx] < 0) arr[idx] = 0;
  return zeroOutNegatives(arr, idx + 1);
};

// Print Max, Min Avg Array Values
let printMaxMinAvg = arr => {
  log(Math.max(...arr));
  log(Math.min(...arr));
  log(printAvgOfArray(arr));
};

// Shift array values left
const shiftArrayLeft = arr => {
  const [a, ...b] = arr;
  return [...b];
};

// Swap negative array values with str
const swapNegatives = (arr, str) =>
  arr.map(el => {
    if (el < 0) return str;
    return el;
  });

// Countdown
const countdown = (n, arr = []) => {
  if (n === -1) return arr;
  return countdown(n - 1, [...arr, n]);
};
