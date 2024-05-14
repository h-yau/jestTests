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

export { capitalize, reverseString };
