const findTheOldest = function (people) {
  let highestAge = 0;
  let age = 0;
  let oldest = {};

  for (person of people) {
    if (!person.yearOfDeath) {
      const d = new Date();
      age = d.getFullYear() - person.yearOfBirth;
    } else {
      age = person.yearOfDeath - person.yearOfBirth;
    }

    if (age > highestAge) {
      highestAge = age;
      oldest = person;
    }
  }

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
