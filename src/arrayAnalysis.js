const analyze = (input) => {
  return {
    average: calcAverage(input),
    min: Math.min(...input),
    max: Math.max(...input),
    length: input.length,
  };
};

const calcAverage = (input) => {
  return input.reduce((a, b) => a + b, 0) / input.length;
};

module.exports = {
  analyze,
};
