function cat(name = "Johnson", breed = "Russian Blue", catColor = "Grey"){
  const kitten = {
    name,
    breed,
    greeting(){
      console.log(`Hello, said ${ this.name } the ${ this.breed }.`);
    }
  }
  return kitten;
}

let meowOne = cat();
meowOne.greeting();

