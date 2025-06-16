"use strict"

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


// What can you do with strings?
let example = 'example';
console.log(example.length); // 7
console.log(example.charAt(0)); // e (this function indexes from 0 - string.length - 1)
console.log(example.charCodeAt(0)); // returns UTF-16 encoding of character at specified index
console.log(example.at(0)); // e (returns character at a specified location, but also allows negative indexing from the end of the string)
console.log(example[0]); // e -> note that you cannot change a character in a string, as strings are immutable (read-only) (if you go out of bounds, returns undefined)



let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); // -> Banana (gets characters 7-12)

text = "Apple, Banana, Kiwi";
part = text.slice(7); // -> slices from 7 to end

text = "Apple, Banana, Kiwi";
part = text.slice(-12); // starts slicing from end of string

/*
substring() is similar to slice().

The difference is that start and end values less than 0 are treated as 0 in substring().
*/

str = "Apple, Banana, Kiwi";
part = str.substring(7, 13);



/*

substr() is similar to slice().

The difference is that the second parameter specifies the length of the extracted part.

*/

str = "Apple, Banana, Kiwi";
part = str.substr(7, 6); // starts from 7 and gets the next 6 characters and adds to the the part substring -> Banana,

part = str.substr(7); // goes until the end

let text1 = "Hello World!";
let text2 = text1.toUpperCase(); // HELLO, WORLD!

text1 = "Hello World!";       // String
text2 = text1.toLowerCase();  // text2 is text1 converted to lower

text1 = "Hello";
text2 = "World";
let text3 = text1.concat(" ", text2); // Hello World


text1 = "      Hello World!      ";
text2 = text1.trim(); // removes leading and trailing white spaces from bothsides of the string


// trimStart() trims whitespaces from the beginning of the string
// trimEnd() trims whitespaces from the end of the string

// padStart() pads strings from the start of the string, until reaching a specified length

// Pad a string with "0" until it reaches the length 4:
text = "5";
let padded = text.padStart(4,"0"); // first param: length you will stop the padding at, second param: what to pad with
// 0005

// padEnd() pads the end of the string until it reaches a specificed length


numb = 5;
text = numb.toString();
padded = text.padEnd(4,"0"); // 5000

// repeat() -> repeat string

let testTwo = "hi!";
console.log(testTwo.repeat(2)); "hi!hi!"

// replace() replaces only the first match
// use /i to replace all words regardless when case insensitive
// replaceAll() replaces all instaces of word


// split() splits a word into array based on a delimiter

/*
text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe
*/



// https://www.w3schools.com/jsref/jsref_obj_string.asp https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String FULL STRING DOCUMENTATION
