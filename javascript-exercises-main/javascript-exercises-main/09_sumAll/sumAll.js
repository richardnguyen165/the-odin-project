const sumAll = function(inputOne, inputTwo) {
  // typeof returns string

  // make sure no strings, array or objects pass through
  if (typeof inputOne !== 'number' || typeof inputTwo !== 'number'){
    return 'ERROR';
  }
  // no negative numbers dont pass through
  if (inputOne <= 0 || inputTwo <= 0){
    return 'ERROR';
  }
  // no floats allowed
  if (inputOne % 1 !== 0 || inputTwo % 1 !== 0){
    return 'ERROR';
  }
  if (inputOne === inputTwo){
    return inputOne;
  }
  // https://www.cuemath.com/sum-of-integers-formula/
  let maxInteger = inputTwo > inputOne ? inputTwo : inputOne;
  let minInteger = maxInteger === inputTwo ? inputOne : inputTwo;
  // for example:  4 - 2 = 2 (but we also want 2 3 4 -> 3 integers)
  let numberOfIntegers = maxInteger - minInteger + 1;
  let firstLastTotal = maxInteger + minInteger;
  return ((numberOfIntegers)*(firstLastTotal)) / 2;
};

// Do not edit below this line
module.exports = sumAll;
