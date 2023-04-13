/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let sSplited = s.split("");
  let NormalOpen = 0;
  let NormalClosed = 0;
  let curlyOpen = 0;
  let curlyClosed = 0;
  let hardOpen = 0;
  let hardClosed = 0;

  for (let index = 0; index < sSplited.length; index++) {
    switch (sSplited[index]) {
      case "(":
        NormalOpen += 1;
        break;
      case "{":
        curlyOpen += 1;
        break;
      case "[":
        hardOpen += 1;
        break;
      case ")":
        NormalClosed += 1;
        break;
      case "]":
        hardClosed += 1;
        break;
      case "}":
        curlyClosed += 1;
        break;
    }
  }
  console.log(NormalOpen);
  console.log(NormalClosed);
  console.log(curlyOpen);
  console.log(curlyClosed);
  if (
    NormalOpen == NormalClosed &&
    curlyOpen == curlyClosed &&
    hardOpen == hardClosed
  ) {
    console.log("wartosci zgodne");
    if (sSplited[0] == sSplited.slice(-1)[0]) {
      console.log("dobrze zamkniete");
      console.log("true");
      return true;
    } else {
      console.log("zle zamkniete");
      console.log("false");
    }
  } else {
    console.log("wszystko zle");
    console.log("false");
    return false;
  }
};
isValid("[{}(){}]");
