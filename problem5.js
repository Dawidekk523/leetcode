/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let sSplited = s.split("");
  for (let index = 0; index < sSplited.length + 1; index++) {
    switch (sSplited[index]) {
      case "(":
        if (sSplited[index + 1] == ")") {
          index++;
        } else {
          console.log("false");
          return false;
        }
        break;
      case "{":
        if (sSplited[index + 1] == "}") {
          index++;
        } else {
          console.log("false");
          return false;
        }
        break;
      case "[":
        if (sSplited[index + 1] == "]") {
          index++;
        } else {
          console.log("false");
          return false;
        }
        break;
      case undefined:
        console.log("true");
        return true;
    }
  }
};

isValid("{}()");
