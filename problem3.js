/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let stringX = x.toString();
  let arr = [];
  let finalString = "";
  arr.push(...stringX.split(""));
  let reversed = arr.reverse();
  for (let i = 0; i < arr.length; i++) {
    finalString = finalString + arr[i];
  }
  if (finalString === stringX) {
    return true;
  } else {
    return false;
  }
};

isPalindrome(123);
