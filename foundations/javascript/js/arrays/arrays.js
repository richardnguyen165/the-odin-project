// Arrays

// To declare an array

const exampleArray = [1, 2, 3, 4, 5];

// Arrays can store values of different types (even other arrays, that is called nested arrays)

exampleArray = ["1", 2, "3", "4", true];

// Another way to declare an array


const exampleTwoArray = new Array(8); // array length of 8

// To access an array
// .at() allows for negative indexing (starts from back of the list)
exampleArray.at(0); // returns "1"
exampleArray.at(-1); // returns true

// Other accessing
exampleArray[0]; // returns "1"
exampleArray[exampleArray.length - 1]; // returns true


// Replace an element
// only use square bracketing to replace an entry
exampleArray[exampleArray.length - 1] = false; 

// Add to an array
exampleArray.push(2); // ["1", 2, "3", "4", true, 2] -> adds at the end
exampleArray[6] = "hi!"; // ["1", 2, "3", "4", true, 2, "hi!"]; -> adds at the end -> an index that is one off from the last index (or the index matching the length)
exampleArray.unshift(1); // [1, "1", 2, "3", "4", true, 2, "hi!"]; -> adds from the 0 index

// Remove from an array
exampleArray.shift(); // ["1", 2, "3", "4", true, 2, "hi!"] -> removes from the beginning and returns the first element
exampleArray.pop(); // ["1", 2, "3", "4", true, 2] -> removes from the end 

/* 
shift and unshift are considered more intensive because they operate at the beginning of the array 
(meaning, the array has to shift all proceeding elements)
*/

/*
The length property automatically updates when we modify the array. To be precise, it is actually not the count of values in the array, but the greatest numeric index plus one.
*/

//toString() for arrays in JS

let arr = [1, 2, 3];

alert( arr ); // 1,2,3
alert( String(arr) === '1,2,3' ); // true

alert( [] + 1 ); // "1"
alert( [1] + 1 ); // "11"
alert( [1,2] + 1 ); // "1,21"

// Import to note

fruits = ["Banana"]

arr = fruits; // copy by reference (two variables reference the same array)

alert( arr === fruits ); // true

arr.push("Pear"); // modify the array by reference

alert( fruits ); // Banana, Pear - 2 items now

// Both items point to the same place memory, what happens in one item happens in another item

/*
Don’t compare arrays with ==
Arrays in JavaScript, unlike some other programming languages, shouldn’t be compared with operator ==.

This operator has no special treatment for arrays, it works with them as with any objects.

Let’s recall the rules:

Two objects are equal == only if they’re references to the same object.
If one of the arguments of == is an object, and the other one is a primitive, then the object gets converted to primitive, as explained in the chapter Object to primitive conversion.
…With an exception of null and undefined that equal == each other and nothing else.

Use === instead
*/


