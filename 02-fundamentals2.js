// Sigma
// Given a number, return the sum of all positive integers up to n (inclusive)
// e.g. sigma(5) === 5 + 4 + 3 + 2 + 1 === 15
const sigma = (n, sum = 0) => {
  if (n === 0) return sum;
  return sigma(n - 1, sum + n);
};

// Factorial
// Given a number, return the product of all positive integers up to n (inclusive)
// e.g. factorial(5) === 5 * 4 * 3 * 2 * 1 === 120
const factorial = (n, product = 1) => {
  if (n === 1) return product;
  return factorial(n - 1, product * n);
};

// Fibonacci
// Return the value at the given index of the Fibonacci sequence, the sum of the previous two values.
// e.g. fibonacci(7) === 5 + 8 === 13
const fibonacci = i => {
  if (i < 2) return i;
  return fibonacci(i - 2) + fibonacci(i - 1);
};

// isPrime
// Given a number, evaluate whether it is a prime number (divisible only by itself and 1).
const isPrime = (n, next = n - 1) => {
  if (next === 1) return true;
  if (n % next === 0) return false;
  return isPrime(n, next - 1);
};

// Sum to One
// Given an integer, sum its digits until the sum is only one digit. Return that digit.
// e.g. sumToOne(928) -> 9 + 2 + 8 === 19 -> 1 + 9 === 10 -> 1 + 0 === 1
const sumToOne = n => {
  if (n.toString().length === 1) return n;
  return sumToOne(
    n
      .toString()
      .split('')
      .reduce((sum, el) => parseInt(sum, 10) + parseInt(el, 10))
  );
};

// Generate Coin Change
// Given a number of cents, print that amount using the smallest amount of coins
// e.g. generateCoinChange(94) === 3 quarters, 1 dime, 1 nickel, 4 pennies
const generateCoinChange = cents => {
  const bank = { quarters: 25, dimes: 10, nickels: 5, pennies: 1 };
  Object.keys(bank).forEach(coin => {
    const amount = bank[coin];
    bank[coin] = Math.floor(cents / amount);
    if (bank[coin] === 0) delete bank[coin];
    cents %= amount;
  });
  console.log(bank);
};

// Extract-o-Matic
// Given a number and a digit number, return the numeral value of that digit.
// 0 represents the ones digit, 1 represents the tens, etc.
// e.g. extractDigit(1824, 2) === 8; extractDigit(1824, 0) === 4
const extractDigit = (n, i) => {
  n = n.toString();
  if (i > n.length - 1) return 0;
  n = n.split('').reverse();
  return parseInt(n[i], 10);
};

// Extract-o-Matic Pt. 2
// Handle negative digit values; -1 represents the tenths digit, etc.
// e.g. extractDigit(123.45, -1) === 4
const extractAnyDigit = (n, i) => {
  if (i > -1) return extractDigit(n, i);
  n = n.toString();
  const decimal = n.indexOf('.');
  if (!decimal) return 0;
  n = n.substring(decimal);
  return parseInt(n[i * i], 10);
};

// Most Significant Digit
// Given a number of any size, return the left-most digit.
// Don't parse the number as a string!
const mostSignificant = (n, p = 1) => {
  if (n < 10) return Math.floor(n);
  return mostSignificant(n / (10 * p), p++);
};
