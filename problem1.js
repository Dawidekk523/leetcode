let numbers = [];
let sum = 0;
const romToNum = {
  chars: [],
  sum: null,
  numbersToArr: (number) => {
    romToNum.chars.push(...number.split(""));
    console.log(romToNum.chars);
    romToNum.translate(number);
    romToNum.count(numbers);
  },
  translate: (input) => {
    for (let i = 0; i < input.length; i++) {
      switch (input[i]) {
        case "I":
          numbers.push(1);
          break;
        case "V":
          numbers.push(5);
          break;
        case "X":
          numbers.push(10);
          break;

        default:
          break;
      }
    }
    console.log(numbers);
  },
  count: (input) => {
    let tempSum = 0;
    for (let index = 0; index < input.length; index++) {
      if (input[index] == input[index - 1] || input[index - 1] == null) {
        tempSum = tempSum + input[index];
      } else if (input[index] < input[index - 1]) {
        sum = sum + tempSum;
        tempSum = 0;
        tempSum = tempSum + input[index];
      } else {
        sum = sum - tempSum;
        tempSum = 0;
        tempSum = tempSum + input[index];
      }
    }
    console.log(sum);
  },
};

romToNum.numbersToArr("XXXXX");
