const calculateNumber = require('./0-calcul.js');
const assert = require('assert');

describe("calculateNumber", function() {
    it("checks equality", function() {
        assert.equal(calculateNumber(1, 3), 4);
        assert.equal(calculateNumber(1.5, 3.2), 5);
        assert.equal(calculateNumber(1.5, 3.7), 6);
        assert.equal(calculateNumber(3, 3.7), 7);
    });
  });