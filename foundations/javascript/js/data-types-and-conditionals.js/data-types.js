// Number -> integers and floats

let d = 12 //integer
let e = 12.678 // float -> has a fractional part
let f = Infinity;
let g = -Infinity;
let h = NaN; // Not A Number -> tells user type is not a number and invalid -> dividing by zero, treat non-numeric strings as numbers

/*
BigInt

The number type cannot safely represent values larger/smaller than 2^53 - 1, or else precision errors can ocur

thus, add an n to have an arbitraily larger integer
*/

// the "n" at the end means it's a BigInt
const bigInt = 1234567890123456789012345678901234567890n;

/* 
String
Artrings represented by three quotes

Double quotes ""
Single quotes ''
backticks ``

Double and single quotes are simple quotes

Backtick quotes are template strings (extended functionality), and you can embed JavaScript, and declare template literals over multiple lines

Use the same chracter at the beginning and end of the string.
*/

// backtick string (template literal)
// embed an expression
alert( `the result is ${1 + 2}` ); // the result is 3

// new lines can be added
const newline = "One day you finally knew\nwhat you had to do, and began,";
console.log(newline);


// Use escape characters in strings, if you have to use a quote within them (or use another one that doesnt match the closing and ending quote)
const bigmouth = 'I\'ve got no right to take my place…';
console.log(bigmouth);

// string -Number()> number
const myString = "123";
const myNum = Number(myString);
console.log(typeof myNum);

// number -String()> string
const myNum2 = 123;
const myString2 = String(myNum2);
console.log(typeof myString2);

/*
Boolean (logical type)
*/

let nameFieldChecked = true; 
// yes, name field is checked

let ageFieldChecked = false; 
// no, age field is not checked

let isGreater = 4 > 1;

alert( isGreater ); // true (the comparison result is "yes");


/*
Null -> means 'nothing', 'empty' or 'value unknown'
*/
let age = null;


/*
Undefined -> means "value is not assinged" -> like null 
*/


let dog;
alert(dog); //shows undefined

/*
Object -> complex data structures
*/

// typeof tells what type is the data typ

typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

/*
SUMMARY:

There are 8 basic data types in JavaScript.

Seven primitive data types:
number for numbers of any kind: integer or floating-point, integers are limited by ±(253-1).
bigint for integer numbers of arbitrary length.
string for strings. A string may have zero or more characters, there’s no separate single-character type.
boolean for true/false.
null for unknown values – a standalone type that has a single value null.
undefined for unassigned values – a standalone type that has a single value undefined.
symbol for unique identifiers.
And one non-primitive data type:
object for more complex data structures.
The typeof operator allows us to see which type is stored in a variable.

Usually used as typeof x, but typeof(x) is also possible.
Returns a string with the name of the type, like "string".
For null returns "object" – this is an error in the language, it’s not actually an object.
*/