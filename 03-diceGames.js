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

const repeat = require('./_utils').repeat;

const roll = () => Math.ceil(Math.random() * 6);

const playFives = n => {
  const results = repeat(n)(roll);
  results.forEach(turn => {
    turn === 5
      ? console.log('You rolled a lucky 5!')
      : console.log(`You rolled a ${turn}.`);
  });
};

const playStats = (n = 8) => {
  const stats = repeat(n)(roll);
  console.log(`Your scoresheet: ${stats}`);
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

const roll20 = () => Math.ceil(Math.random() * 20);
const doubles = (rolls = []) => {
  if (rolls.length && rolls[rolls.length - 1] === rolls[rolls.length - 2]) {
    console.log('You rolled doubles!');
    console.log(`It took you ${rolls.length} rolls.`);
    console.log(`Best: ${Math.max(...rolls)}  Worst: ${Math.min(...rolls)}`);
    console.log(
      `Average: ${rolls.reduce((acc, curr) => acc + curr) / rolls.length}`
    );
    return;
  }
  return doubles([...rolls, roll20()]);
};
doubles();
