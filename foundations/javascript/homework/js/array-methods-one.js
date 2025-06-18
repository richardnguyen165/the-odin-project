function camelize(text){
  text = text.trim();
  if (!text){
    return text;
  }
  const dashedText = text.split('-');
  const noFirstWord = dashedText.slice(1);
  console.log(noFirstWord);
  if (noFirstWord){
    const capitalizedWords = noFirstWord.map((word) => {
      if (word){
        return word[0].toUpperCase() + word.slice(1);
      }
      return "";
    });
    const joinedCapitalizedWords = capitalizedWords.join("");
    return dashedText[0] + joinedCapitalizedWords;
  }
  return "";
}

console.log(camelize("background-color") === 'backgroundColor');
console.log(camelize("list-style-image") === 'listStyleImage');
console.log(camelize("-webkit-transition") === 'WebkitTransition');
console.log(camelize("-") === '');
console.log(camelize('') === "");
console.log(camelize("hello") === "hello");
console.log(camelize("dog-") === "dog");

