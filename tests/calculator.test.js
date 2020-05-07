const calculator = require('../src/calculator');

describe('calculator', () => {
  test('returns correct result when adding two values', () => {
    const result = calculator.add(2, 4);

    expect(result).toEqual(6);
  });

  test('returns correct result when subtracting two values', () => {
    const result = calculator.subtract(4, 2);

    expect(result).toEqual(2);
  });

  test('returns correct result when multiplying two values', () => {
    const result = calculator.multiply(4, 2);

    expect(result).toEqual(8);
  });

  test('returns correct result from dividing two values', () => {
    const result = calculator.divide(5, 2);

    expect(result).toBeCloseTo(2.5, 5);
  });
});
