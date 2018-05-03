/**
 * Dice Games (p. 33)
 * 1. Create roll() that rolls dice, returning a number 1-6.
 * 2. Create playFives(n), which calls roll() n times. If 5 is returned, log "Lucky!".
 * 3. Create playStats(), which calls roll() 8 times and prints the lowest and highest values.
 * 4. Create sumStats(), which calls playStats() and prints the sum of all 8 rolls.
 * 5. Create practice(n), which calls roll() n times and prints the lowest, highest, and sum.
 * 6. Create avgStats(n), which calls roll() n times and prints the average of all rolls.
 */

const roll = () => {
  const n = Math.ceil(Math.random() * 6);
  console.log(`You rolled a ${n}.`);
  return n;
};

/**
 * Utility function for repeating function calls n times
 * @param {any} n => function, ...args
 * @returns an array of values returned from repeated function calls
 */
const repeat = n => (func, args) =>
  Array(n)
    .fill(0)
    .map(el => func(...args));

const playFives = n => {
  repeat(n)(() => {
    const roll = roll();
    if (roll === 5) console.log('Lucky!');
    return roll;
  });
};

const playStats = (n = 8) => {
  const stats = repeat(n)(() => roll());
  console.log(`Your Best Roll: ${Math.max(...stats)}`);
  console.log(`Your Worst Roll: ${Math.min(...stats)}`);
  return stats;
};

const sumStats = n => {
  const sum = playStats(n).reduce((acc, curr) => acc + curr);
  console.log(`Total Score: ${sum}`);
  return sum;
};

const practice = n => sumStats(n);

const avgStats = n => {
  const avg = sumStats(n) / n;
  console.log(`Average: ${avg}`);
  return avg;
};
