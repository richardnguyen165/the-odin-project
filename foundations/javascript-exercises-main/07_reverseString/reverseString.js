const reverseString = function(input) {
  if (!(input)){
    return input;
  }
  let finalString = [];
  for (let i = input.length - 1; i >= 0; i--){
    finalString.push(input[i]);
  }
  return finalString.join("");
};

// Do not edit below this line
module.exports = reverseString;
