const analyze = require('../src/arrayAnalysis').analyze;

describe('array analysis', () => {
  const input = [1, 8, 3, 4, 2, 6];

  test('returns an object with 4 properties', () => {
    const result = analyze(input);

    expect(result).toEqual(
      expect.objectContaining({
        average: expect.any(Number),
        min: expect.any(Number),
        max: expect.any(Number),
        length: expect.any(Number),
      })
    );
  });

  test('average returns a correct result', () => {
    const result = analyze(input);

    expect(result.average).toEqual(4);
  });

  test('min returns a correct result', () => {
    const result = analyze(input);

    expect(result.min).toEqual(1);
  });

  test('max returns a correct result', () => {
    const result = analyze(input);

    expect(result.max).toEqual(8);
  });

  test('length returns a correct result', () => {
    const result = analyze(input);

    expect(result.length).toEqual(6);
  });
});
