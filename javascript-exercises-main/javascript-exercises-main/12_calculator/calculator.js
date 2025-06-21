const add = function(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
};

const subtract = function(firstNumber, secondNumber) {
	return firstNumber - secondNumber;
};

const sum = function(allNumbers) {
  if (!(allNumbers)){
    return 0;
  }
	const total = allNumbers.reduce((accumulator, next) => accumulator += next, 0);
  return total;
};

const multiply = function(allNumbers) {
  if (!(allNumbers)){
    return 0;
  }
  const product = allNumbers.reduce((accumulator, next) => accumulator *= next, 1);
  return product;
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(number) {
	if (number === 1 || number === 0){
    return 1;
  }
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
