const removeFromArray = function (arr, ...valuesToRemove) {
  return arr.filter((value, index, arr) => {
    return valuesToRemove.indexOf(value) == -1;
  });
};

// Do not edit below this line
module.exports = removeFromArray;
