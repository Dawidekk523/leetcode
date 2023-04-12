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
  math: (input) => {
    for (let index = 1; index < input.length; index++) {
      let currNumber = input[index];
      let lastNumber = input[index - 1];
      if (currNumber == lastNumber) {
        console.log(input[index]);
        romToNum.add(input[index]);
      }
    }
  },
};

romToNum.numbersToArr("XXXXI");
