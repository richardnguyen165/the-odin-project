const repeatString = function(input, number) {
  if (number < 0){
    return "ERROR";
  }
  if ((!(input)) || number === 1){
    return input;
  }
  if (number === 0){
    return "";
  }
   let finalString = "";
   for (let i = 0; i < number; i++){
    finalString += input;
   }
   return finalString;
};

// Do not edit below this line
module.exports = repeatString;
