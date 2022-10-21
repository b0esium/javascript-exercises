const reverseString = function (string) {
  let arr = string.split("");
  let res = [];
  for (letter of arr) {
    res.unshift(letter);
  }
  return res.join("");
};

// Do not edit below this line
module.exports = reverseString;
