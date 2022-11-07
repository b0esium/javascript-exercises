const palindromes = function (phrase) {
  let cleanPhrase = phrase
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");

  let reversedPhrase = cleanPhrase.split("").reverse().join("");

  return reversedPhrase == cleanPhrase;
};

// Do not edit below this line
module.exports = palindromes;
