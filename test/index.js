const expect = require('chai').expect;
const starWars = require('../src/index');

describe('jo12bar-starwars-names', function () {
  describe('all', () => {
    it('should be an array of strings', () => {
      expect(starWars.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(item => typeof item === 'string');
      }
    });

    it('should contain "Luke Skywalker"', () => {
      expect(starWars.all).to.include('Luke Skywalker');
    });
  });

  describe('random', () => {
    it('should return a random item from the starWars.all', () => {
      const randomItem = starWars.random();
      expect(starWars.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', () => {
      const randomItems = starWars.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach((item) => {
        expect(starWars.all).to.include(item);
      });
    });
  });
});
