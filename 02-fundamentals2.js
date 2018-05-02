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

// Sum to One
// Given an integer, sum its digits until the sum is only one digit. Return that digit.
// e.g. sumToOne(928) -> 9 + 2 + 8 === 19 -> 1 + 9 === 10 -> 1 + 0 === 1
const sumToOne = n => {
  if (n.toString().length === 1) return n;
  return sumToOne(
    n
      .toString()
      .split("")
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
