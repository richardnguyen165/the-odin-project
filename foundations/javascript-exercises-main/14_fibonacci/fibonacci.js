const fibonacci = function(input) {
  let testNumber = Number(input);
  // cannot be !(testNumber) -> could be zero
  if (testNumber === NaN || testNumber < 0){
    return 'OOPS';
  }
  if (testNumber === 0){
    return 0;
  }
  else if (testNumber === 1 || testNumber === 2){
    return 1;
  }
  let currentNumber = 3;
  let firstNumber = 1;
  let secondNumber = 1;
  let currentSum;
  while (currentNumber <=testNumber){
    currentSum = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = currentSum;
    currentNumber += 1;
  }
  return currentSum;
};

// Do not edit below this line
module.exports = fibonacci;
