const romToNum = {
  chars: [],
  sum: null,
  numbersToArr: (number) => {
    romToNum.chars.push(...number.split(""));
    console.log(romToNum.chars);
    romToNum.math(romToNum.chars);
    console.log(romToNum.sum);
  },
  add: (e) => {
    switch (e) {
      case "I":
        romToNum.sum = romToNum.sum + 1;
        break;
      case "V":
        romToNum.sum = romToNum.sum + 5;
        break;
      case "X":
        romToNum.sum = romToNum.sum + 10;
        break;

      default:
        break;
    }
  },
  rem: (e) => {
    switch (e) {
      case "I":
        romToNum.sum = romToNum.sum - 1;
        break;
      case "V":
        romToNum.sum = romToNum.sum - 5;
        break;
      case "X":
        romToNum.sum = romToNum.sum - 10;
        break;

      default:
        break;
    }
  },
  math: (input) => {
    for (let index = 0; index < input.length; index++) {
      let currNumber = input[index];
      let lastNumber = input[index - 1];
      if (currNumber == lastNumber || lastNumber == undefined) {
        console.log("dodaje " + currNumber);
        romToNum.add(input[index]);
      } else {
        if (currNumber > lastNumber) {
          romToNum.add(currNumber);
          console.log("dodaje " + currNumber);
        } else {
          romToNum.rem(currNumber);
          console.log("odejmuje " + currNumber);
        }
      }
    }
  },
};

romToNum.numbersToArr("XIX");
