/* OBJECTS */

// There are 8 data types: Number, string, boolean, BigInt, null, undefined, symbol, objects

// 7 of these data types are primitive, meaning they are designed to only hold one thing

// Objects are not primitive, they can hold more than one data, and more than one data types (think) of them as cabinets

let user = new Object(); // "object constructor" syntax
user = {};  // "object literal" syntax

// We can edit literals in code editors by putting key value pairs (or just keys in some cases)
user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30,        // by key "age" store value 30
  "likes birds": true //multiwords needs quotes
};

// you can access properties using the dot
console.log(user.name); // John


// To set it however, you have to use brackets
user["likes birds"] = true;

// you can also get
alert(user["likes birds"]); // true

// delete
delete user["likes birds"];

// you can also store  strings inside variables, put those variable inside those square brackets, and still reference them
let key = prompt("What do you want to know about the user?", "name");
// access by variable
alert( user[key] ); // John (if enter "name") -> gets the name

// or
key = prompt("What do you want to know about the user?", "name");
// access by variable
alert( user[key] ); // John (if enter "name")

// Square brackets also allow for more complext things such as
let fruit = prompt("Which fruit to buy?", "apple");
let bag = {};

// take property name from the fruit variable
bag[fruit] = 5;
// Stores in bag -> apple:5

fruit = 'apple';
bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

// There is no limitations on key-naming conventions in objects (and some will get coverted to strings)

// these properties are all right
let obj = {
  for: 1,
  let: 2,
  return: 3,
  0: "test" // same as "0": "test" > numbes get converted to strings when using a key
};


// in operator -> checks if an item is in the keys of the object

let user = { name: "John", age: 30 };

alert( "age" in user ); // true, user.age exists
alert( "blabla" in user ); // false, user.blabla doesn't exist

/**
 Please note that on the left side of in there must be a property name. That’s usually a quoted string.

If we omit quotes, that means a variable should contain the actual name to be tested. For instance:
 */

user = { age: 30 };

key = "age";
alert( key in user ); // true, property "age" exists

// ALWAYS USE IN TO INDICATE IF A KEY IS IN AN OBJECT (DONT USE DOT NOTATION, DOESNT WORK FOR KEYS THAT STORE UNDEFINED VALUES)

// iterates through all keys in objects
for (key in object) {
  // executes the body for each key among object properties
  // key -> key
  // object[key] -> value
}

// Example:

let user = {
  name: "John",
  age: 30,
  isAdmin: true
};

for (let key in user) {
  // keys
  alert( key );  // name, age, isAdmin
  // values for the keys
  alert( user[key] ); // John, 30, true
}

// in some cases object keys are orderd (such as when the keys are integers) (ordered in special fashion) -> this is called "integer property", when a string can be converted to and from an integer without a change

let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  // ..,
  "1": "USA"
};

for (let code in codes) {
  alert(code); // 1, 41, 44, 49
}


// if they are non-integer, they are in creation-order

codes = {
  "+49": "Germany",
  "+41": "Switzerland",
  "+44": "Great Britain",
  // ..,
  "+1": "USA"
};

for (let code in codes) {
  alert( +code ); // 49, 41, 44, 1
}

// You can add methods in objects

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf() {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

// "this" can be used in an object to access self-variables

const person1 = {
  name: "Chris",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

const person2 = {
  name: "Deepti",
  introduceSelf() {
    console.log(`Hi! I'm ${this.name}.`);
  },
};

// "this" is helpful for constructors

function createPerson(name) {
  const obj = {};
  obj.name = name;
  obj.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name}.`);
  };
  return obj;
}