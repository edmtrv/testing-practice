const caesarCipher = (text, cipher) => {
  const symbols = text.split('');
  const result = [];

  symbols.forEach((sym) => {
    const symCode = sym.charCodeAt(0);
    let currentCode;

    if (symCode >= 65 && symCode <= 90) {
      currentCode = 65 + ((symCode + cipher - 65) % 26);
    } else if (symCode >= 97 && symCode <= 122) {
      currentCode = 97 + ((symCode + cipher - 97) % 26);
    } else {
      currentCode = symCode;
    }

    result.push(String.fromCharCode(currentCode));
  });

  return result.join('');
};

module.exports = {
  caesarCipher,
};
