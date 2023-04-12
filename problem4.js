/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  strs.sort();
  if (strs != "") {
    console.log("nie pusty");
    if (strs.length > 1) {
      console.log("tabela wieksza niz 1");
      for (let i = 0; i < strs[0].length; i++) {
        if (strs[0][i] !== strs[strs.length - 1][i]) {
          console.log(strs[0].substring(0, i));
          return strs[0].substring(0, i);
        }
      }
    } else {
      console.log(strs);
      return strs;
    }
  } else {
    console.log("pusty");
    return "";
  }
};

longestCommonPrefix(["abyeqeqwe", "ab", "abo"]);
