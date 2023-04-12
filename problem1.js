let s = "XIX";
const romanToInt = (number) => {
  let numbers = [];
  let chars = [];
  let sum = null;
  numbersToArr(number);
  function numbersToArr(number) {
    chars.push(...number.split(""));
    translate(number);
    count(numbers);
  }
  function translate(input) {
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
        case "L":
          numbers.push(50);
          break;
        case "C":
          numbers.push(100);
          break;
        case "D":
          numbers.push(500);
          break;
        case "M":
          numbers.push(1000);
          break;

        default:
          break;
      }
    }
  }
  function count(input) {
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
    sum = sum + tempSum;
  }
  console.log(sum);
  return sum;
};

romanToInt(s);
