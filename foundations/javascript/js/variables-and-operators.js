// Command is used to print to the developer console
console.log()


/*
Ways to link an HTML file to JS file
<script src="javascript.js"></script> -> external

<script> -> in HTML file in body

</script>

onlick = "" -> inline
*/

// Variables are the storage blocks of data

// decalre variables using let or const (let allows for changing of variables later)

let a = 6;

// valid
a = 12;

const b = 12;

// will error
b = 7;

/*
There are two limitations on variable names in JavaScript:

The name must contain only letters, digits, or the symbols $ and _.
The first character must not be a digit.

Use camelCase

(You can also use non-latin variables, but inernational convetion to use English names)

There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

For example: let, class, return, and function are reserved.

use "use strict" to avoid bad practices (such as not declaring a variable without let or const)

name variables that make it readable and understand its purpose -> easy to return and modify a codebase

use all-caps on constants only for hard-coded values (PI for example) 

constants guarantee that the data stored inside a variable NEVER changes -> changing it causes an error

variables are case-sensitive (apple and APPLE are two different variables)
*/

// Numbers are always stored in 64-bit form in JS

// Integers accurate up to 15 numbers
let x = 999999999999999;   // x will be 999999999999999
let y = 9999999999999999;  // y will be 10000000000000000


// Note: floating point precision is not always accurate

let e = 10;
let f = 20;
console.log(e + f); // 30

e = '10';
f = '20';
console.log(e + f); // 1020

e = 10;
f = '20';
console.log(e + f); //1020 (this is called type coercion)

e = 10;
f = 20;
g = '30';
console.log(e + f + g); //3030

e = '10';
f = 20;
g =  30;
console.log(e + f + g); //102030 -> type coercion due to the first converting the second one to string, and the first + second converting third to string

// JS try to convert strins to numbers when using operators
e  = '100';
f = ' 10';
g = e / f; // 10
g = e - f; // 90
g = e * f; // 1000
g = e + f // 10010 (does not work)

// NaN (Not a Number)

// when an obtained is not legal

// e = 100 / 'apple'
// use isNan() to find out if a value is not a number

/*
let x = 100 / "Apple";
isNaN(x);

using NaN in mathematical operation results in NaN 
let x = NaN;
let y = 5;
let z = x + y;

or NaN5
let x = NaN;
let y = '5';
let z = x + y;

typeof NaN; -> number
*/


/*
Infinity
Infinity (or -Infinity) is the value JavaScript will return 
if you calculate a number outside the largest possible number.

(or when you divide by zero)

typeof Infinity; -> infinity
*/

/*
Number Base System in JS

Hexadecimal numbers are interpreted as hexacdecimal if they start with '0x'

0x98 for example

dont start a number with a leading on in any case (07 for example)

toString() can be used to output numbers from base 2 to base 36

let myNumber = 32;
myNumber.toString(32);
myNumber.toString(16); // hexadecimal (0-9, a-f)
myNumber.toString(12);
myNumber.toString(10); // decimal (0-9)
myNumber.toString(8); // octal (0-7)
myNumber.toString(2); // binary (0, 1)
*/

/*
Number Objects
let x = 123;
let y = new Number(123);

Do not create number objects, slow down exectuion speed
*/


12 == '12'; // == -> equal in value (returns true)
12 === '12'; // === -> equal in value and equal in data type  (returns false)


/*
Assignment operators

++; -> +1
+=;

--; -> -1
-=;

*=;

/=;
*/


/*
Unary operators

Only works on 1 number

-12 -> makes it negative

+12 -> makes it positive

makes non-numeric types numeric
+true -> 1
+false -> 0
+"12" -> 12
+"" -> 0
+"null" -> 0
+"undefined" -> NaN
*/

/*
Operands -> what operators work on (such as operands)

An operator is unary if it operates on a single operand -> - 6

An operator is binary if it works on two operands -> 12 + 6, "12" + "hi"
*/


/* 
Math operators

The result of a % b is the remainder of the integer division of a by b.

The exponentiation operator a ** b raises a to the power of b.
*/


let s = "my" + "string";
alert(s); // mystring

alert(2 + 2 + '1' ); // "41" and not "221"


let apples = "2";
let oranges = "3";

alert( apples + oranges ); // "23", the binary plus concatenates strings

apples = "2";
oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

// the longer variant
// alert( Number(apples) + Number(oranges) ); // 5



// PRECEDENCE: UNARY PLUS, UNARY SUBTRACTION, PEMDAS, EQUAL SIGN, COMMA


/*
"" + 1 + 0 = "10" // (1)
"" - 1 + 0 = -1 // (2)
true + false = 1
6 / "3" = 2
"2" * "3" = 6
4 + 5 + "px" = "9px"
"$" + 4 + 5 = "$45"
"4" - 2 = 2
"4px" - 2 = NaN
"  -9  " + 5 = "  -9  5" // (3)
"  -9  " - 5 = -14 // (4)
null + 1 = 1 // (5)
undefined + 1 = NaN // (6)
" \t \n" - 2 = -2 // (7)

1. The addition with a string "" + 1 converts 1 to a string: "" + 1 = "1", and then we have "1" + 0, the same rule is applied.
2. The subtraction - (like most math operations) only works with numbers, it converts an empty string "" to 0.
3. The addition with a string appends the number 5 to the string.
4. The subtraction always converts to numbers, so it makes " -9 " a number -9 (ignoring spaces around it).
5. null becomes 0 after the numeric conversion.
6. ndefined becomes NaN after the numeric conversion.
7. Space characters are trimmed off string start and end when a string is converted to a number. Here the whole string consists of space characters, such as \t, \n and a “regular” space between them. So, similarly to an empty string, it becomes 
*/