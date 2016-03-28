const uniqueRandomArray = require('unique-random-array');
const starWarsNames = require('./starwars-names.min.json');

module.exports = {
  all: starWarsNames,
  random: uniqueRandomArray(starWarsNames),
};
