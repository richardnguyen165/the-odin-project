const palindromes = function (input) {
  // two pointer
  lowerCasedInput = input.toLowerCase();
  let startPoint = 0;
  let endPoint = lowerCasedInput.length - 1;

  while (startPoint <= endPoint){
    let charStartPoint = lowerCasedInput[startPoint];
    // https://stackoverflow.com/questions/9862761/how-to-check-if-character-is-a-letter-in-javascript
    while (charStartPoint.toLowerCase() === charStartPoint.toUpperCase() && !(Number(charStartPoint)) && startPoint < lowerCasedInput.length - 1){
      charStartPoint = lowerCasedInput[++startPoint];
      console.log(startPoint);
    }
    if (!(startPoint <= endPoint)){
      return true;
    }

    let charEndPoint = lowerCasedInput[endPoint];
    while (charEndPoint.toLowerCase() === charEndPoint.toUpperCase() && !(Number(charEndPoint)) && endPoint > 0){
      // have to increment it before, because we already the current character we are standing is not-aplhabetic
      charEndPoint = lowerCasedInput[--endPoint];
    }
    if (!(startPoint <= endPoint)){
      return true;
    }

    console.log(charStartPoint, charEndPoint);

    if (charStartPoint !== charEndPoint){
      return false;
    }
    
    startPoint++;
    endPoint--;
  }
  return true;
};


// Do not edit below this line
module.exports = palindromes;
