/**
 * Dice Games (p. 33)
 * 1. Create roll() that rolls dice, returning a number 1-6.
 * 2. Create playFives(n), which calls roll() n times. If 5 is returned, log "Lucky!".
 * 3. Create playStats(), which calls roll() 8 times and prints the lowest and highest values.
 * 4. Create sumStats(), which calls playStats() and prints the sum of all 8 rolls.
 * 5. Create practice(n), which calls roll() n times and prints the lowest, highest, and sum.
 * 6. Create avgStats(n), which calls roll() n times and prints the average of all rolls.
 * 7. Implement doubles() using a 20-sided die. Roll until you get a value twice in a row.
 *    Display number of rolls, min, max, and average.
 */

const utils = require("./_utils");
const helpers = require("./_helpers");
const { log, repeat } = utils;
const { sumEach } = helpers;
const roll = (n = 6) => Math.ceil(Math.random() * n);
const playDice = repeat(roll);

const playFives = n => {
  const results = playDice(n);
  results.forEach(turn => {
    turn === 5 ? log("You rolled a lucky 5!") : log(`You rolled a ${turn}.`);
  });
};

const playStats = (n = 8) => {
  const stats = playDice(n);
  log(`Your scoresheet: ${stats}`);
  log(`Your Best Roll: ${Math.max(...stats)}`);
  log(`Your Worst Roll: ${Math.min(...stats)}`);
  return stats;
};

const sumStats = n => {
  const sum = flatMap(n => n)((a, b) => a + b)(...playDice(n));
  log(`Total Score: ${sum}`);
  return sum;
};

const practice = n => sumStats(n);

const avgStats = n => {
  const avg = sumStats(n) / n;
  log(`Average: ${avg}`);
  return avg;
};

const doubles = (rolls = []) => {
  if (rolls.length && rolls[rolls.length - 1] === rolls[rolls.length - 2]) {
    log("You rolled doubles!");
    log(`It took you ${rolls.length} rolls.`);
    log(`Best: ${Math.max(...rolls)}  Worst: ${Math.min(...rolls)}`);
    log(`Average: ${sumEach(...rolls) / rolls.length}`);
    return;
  }
  return doubles([...rolls, roll(20)]);
};
