const utils = require("./_utils");
const { log, repeat, map, flatMap } = utils;

const logEach = map(log);
const squareEach = map(n => n * n);
const sumEach = flatMap()((a, b) => a + b);

module.exports = {
  logEach,
  squareEach,
  sumEach
};
