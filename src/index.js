const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const reverseString = (str) => {
  const strArray = [...str];
  let l = 0;
  let r = str.length - 1;

  while (l < r) {
    [strArray[l], strArray[r]] = [strArray[r], strArray[l]];
    l++;
    r--;
  }
  return strArray.join('');
};

const calculator = () => {
  const add = (a, b) => {
    if (isNaN(a) || isNaN(b)) throw new Error('Not a valid number!');
    if (a == '' || b == '') throw new Error('Empty strings are not valid!');
    return a + b;
  };

  const subtract = (a, b) => {
    if (isNaN(a) || isNaN(b)) throw new Error('Not a valid number!');
    if (a == '' || b == '') throw new Error('Empty strings are not valid!');

    return a - b;
  };

  const multiply = (a, b) => {
    if (isNaN(a) || isNaN(b)) throw new Error('Not a valid number!');
    if (a == '' || b == '') throw new Error('Empty strings are not valid!');

    return a * b;
  };

  const divide = (a, b) => {
    if (isNaN(a) || isNaN(b)) throw new Error('Not a valid number!');
    if (a == '' || b == '') throw new Error('Empty strings are not valid!');
    if (b == 0) throw new Error('Zero division is illegal');

    return a / b;
  };

  return { add, subtract, multiply, divide };
};

const caesarCipher = (str, key) => {
  const zCode = 'z'.charCodeAt(0);
  const aCode = 'a'.charCodeAt(0);

  const ZCode = 'Z'.charCodeAt(0);
  const ACode = 'A'.charCodeAt(0);

  return [...str]
    .map((char) => {
      let code = char.charCodeAt(0);
      if (code <= zCode && code >= aCode) {
        code += key % 26;
        code = code > zCode ? code - 26 : code;
        code = code < aCode ? code + 26 : code;
        return String.fromCharCode(code);
      }
      if (code <= ZCode && code >= ACode) {
        code += key % 26;
        code = code > ZCode ? code - 26 : code;
        code = code < ACode ? code + 26 : code;
        return String.fromCharCode(code);
      }
      return char;
    })
    .join('');
};

const analyzeArray = (arr) => {
  if (arr.length === 0) throw new Error('This is an empty array!');

  let min = Infinity;
  let max = -Infinity;

  const average =
    arr.reduce((accumulator, item) => {
      if (typeof item !== 'number' || Number.isNaN(item))
        throw new Error('The items need to be a number');

      min = Math.min(min, item);
      max = Math.max(max, item);

      return accumulator + item;
    }, 0) / arr.length;

  const { length } = arr;

  return { average, min, max, length };
};
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
