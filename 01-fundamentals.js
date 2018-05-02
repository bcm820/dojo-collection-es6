// Print 1-255
// printRange(1, 255)(1)
const printRange = (start, end) => steps => {
  console.log(start);
  if (start === end) return;
  return printRange(start + steps, end)(steps);
};

// Print Odds 1-255
// printRange(1, 255)(2)
printRange(1, 255)(2);

// Print Ints and Sum 0-255
const printIntsAndSum0To255 = (int = 0, sum = 1) => {
  console.log(`int: ${int}, sum: ${int + sum}`);
  if (int === 255) return;
  printIntsAndSum0To255(int + 1, int + sum);
};

// Print Array Values
const printEach = arr => arr.forEach(el => console.log(el));

// Print Max of Array
const printMaxOfArray = arr => console.log(Math.max(...arr));

// Print Avg of Array
const printAvgOfArray = arr =>
  console.log(arr.reduce((acc, cur) => acc + cur) / arr.length);

// Return Odds Array 1-255
const oddsArray = (arr = [], i = 1) => {
  if (i === 255) return arr;
  return oddsArray([...arr, i], i + 2);
};

// Square Array Values
const squareArrayVals = arr => arr.map(el => el * el);

// Print Array Count Greater Than Y
const arrayCountGreaterThanY = (arr, y) => {
  console.log(
    arr.filter(el => el > y).map(el => {
      console.log(el);
      return el;
    }).length
  );
};

// Zero out negative array values
const zeroOutNegatives = arr =>
  arr.map(el => {
    if (el < 0) return 0;
    return el;
  });

// Print Max, Min Avg Array Values
const printMaxMinAvg = arr => {
  console.log(Math.max(...arr));
  console.log(Math.min(...arr));
  console.log(arr.reduce((acc, cur) => acc + cur) / arr.length);
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
