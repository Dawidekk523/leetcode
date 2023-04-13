/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let sSplited = s.split("");
  for (let index = 0; index < sSplited.length; index++) {
    switch (sSplited[index]) {
      case "(":
        if (sSplited[index + 1] == ")") {
          index++;
        } else {
          return false;
        }
        break;
      case "{":
        if (sSplited[index + 1] == "}") {
          index++;
        } else {
          return false;
        }
        break;
      case "[":
        if (sSplited[index + 1] == "]") {
          index++;
        } else {
          return false;
        }
        break;
    }
  }
};

isValid("{}(][]");
