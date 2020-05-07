const capitalize = require('../src/functions').capitalize;
const reverseString = require('../src/functions').reverseString;

describe('capitalize', () => {
  test('empty string is returned if input is an empty string', () => {
    expect(capitalize('')).toEqual('');
  });

  test('it capitalizes a string correctly', () => {
    const result = capitalize('hello');

    expect(result).toEqual('Hello');
  });

  test('it returns the correct result if the input is already capitalized', () => {
    const result = capitalize('Goodbye');

    expect(result).toEqual('Goodbye');
  });
});

describe('reverse string', () => {
  test('empty string is returned if input is an empty string', () => {
    expect(reverseString('')).toEqual('');
  });

  test('a string is reversed correctly', () => {
    const result = reverseString('hello');

    expect(result).toEqual('olleh');
  });
});
