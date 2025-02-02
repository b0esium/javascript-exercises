const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((accum, current) => accum + current, 0);
};

const multiply = function (array) {
  return array.reduce((accum, current) => accum * current);
};

const power = function (num, pow) {
  return num ** pow;
};

const factorial = function (a) {
  if (a == 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
