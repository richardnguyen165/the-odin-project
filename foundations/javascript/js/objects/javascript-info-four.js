function multiplyNumeric(input){
  for (let key in input){
    let value = input[key];
    if (typeof value === 'number'){
      input[key] *= 2;
    }
  }
  return input;
}

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(multiplyNumeric(menu));