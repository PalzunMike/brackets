module.exports = function check(str, bracketsConfig) {
  let newStr = str;
  let brackets = bracketsConfig.flat();

  for (let i = 0; i <newStr.length; i++) {
    for (let j = 0; j < brackets.length; j++) {
      if (brackets[j] === newStr[i] && brackets[j+1] === newStr[i + 1]) {
        newStr = newStr.slice(0, i) + newStr.slice(i + 2);
      };
    };
  };

  if (newStr.length === 0) {
    return true;
  };

  if (str === newStr) {
    return false;
  } else {
    return check(newStr, bracketsConfig);
    };  
}
