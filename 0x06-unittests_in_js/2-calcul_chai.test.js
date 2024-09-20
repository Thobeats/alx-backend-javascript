const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('tests for the equality of the sum of two floating numbers', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it('tests for the equality of the subtraction of two floating numbers', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it('tests for the equality of the division of two floating numbers', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });

  it('tests for the equality of the division a floating number and 0', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });

  it('tests for the equality of the sum of two whole numbers', () => {
    expect(calculateNumber('SUM', 1, 4)).to.equal(5);
  });

  it('tests for the equality of the sum of a float and an integer', () => {
    expect(calculateNumber('SUM', 1.4, 4)).to.equal(5);
  });

  it('tests for the equality of the sum of two whole floating numbers', () => {
    expect(calculateNumber('SUM', 1.0, 4.0)).to.equal(5);
  });
});
