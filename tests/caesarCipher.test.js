const caesarCipher = require('../src/caesarCipher').caesarCipher;

describe('caesar cipher', () => {
  test('it shifts the letters by the correct number of places', () => {
    const result = caesarCipher('defend', 3);

    expect(result).toEqual('ghihqg');
  });

  test('it wraps around correctly when at the end of the alphabet', () => {
    const result = caesarCipher('z', 2);

    expect(result).toEqual('b');
  });

  test('it keeps the letter case', () => {
    const result = caesarCipher('AyZ', 2);

    expect(result).toEqual('CaB');
  });

  test('it preserves punctuation', () => {
    const result = caesarCipher('c.t,r', 3);

    expect(result).toEqual('f.w,u');
  });
});
