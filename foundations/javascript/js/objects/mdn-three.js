const cat = {
  name : 'Bertie',
  breed : 'Cymric',
  color : 'white',
  greeting: function() {
    // 'this' refers to variables in object
    console.log(`Hello, said ${this.name} the ${this.breed}`);
  }
}

cat.greeting();
