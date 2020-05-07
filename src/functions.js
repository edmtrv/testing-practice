const capitalize = (input) => {
  if (input.length === 0) return '';

  return input[0].toUpperCase() + input.slice(1);
};

const reverseString = (input) => {
  if (input.length === 0) return '';

  return input.split('').reverse().join('');
};

module.exports = {
  capitalize,
  reverseString,
};
