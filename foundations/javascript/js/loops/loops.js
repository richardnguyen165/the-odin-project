/* LOOPS */

// Useful when doing the same thing over and over again

/*
Syntax of For Loops

for (initializer; condition; final-expression) {
  // code to run
}

(From MDN)
An initializer — this is usually a variable set to a number, which is incremented to count the number of times the loop has run. It is also sometimes referred to as a counter variable.
A condition — this defines when the loop should stop looping. This is generally an expression featuring a comparison operator, a test to see if the exit condition has been met.
A final-expression — this is always evaluated (or run) each time the loop has gone through a full iteration. It usually serves to increment (or in some cases decrement) the counter variable, to bring it closer to the point where the condition is no longer true.
*/

// normal for loops
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = "rgb(255 0 0 / 50%)";
  ctx.arc(
    random(canvas.width),
    random(canvas.height),
    random(50),
    0,
    2 * Math.PI,
  );
  ctx.fill();
}

// enhanced for loop

const cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
  console.log(cat);
}


// .map() does something to each item in the collection, and can be used to create a new cleection
function toUpper(string) {
  return string.toUpperCase();
}

cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const upperCats = cats.map(toUpper);

console.log(upperCats);
// [ "LEOPARD", "SERVAL", "JAGUAR", "TIGER", "CARACAL", "LION" ]

// .filter() removes items from array (you can test item to see if it belongs in the new collection)

function lCat(cat) {
  return cat.startsWith("L");
}

cats = ["Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

const filtered = cats.filter(lCat);

console.log(filtered);
// [ "Leopard", "Lion" ]





/*
while loop syntax

initializer
while (condition) {
  // code to run

  final-expression
}
*/

// Example:

cats = ["Pete", "Biggles", "Jasmine"];

let myFavoriteCats = "My cats are called ";

let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
}

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."


/*
do while loop syntax 
(its a post check loop, meaning the code inside the loop is executed at least once)

initializer
do {
  // code to run

  final-expression
} while (condition)
*/


cats = ["Pete", "Biggles", "Jasmine"];

myFavoriteCats = "My cats are called ";

i = 0;

do {
  if (i === cats.length - 1) {
    myFavoriteCats += `and ${cats[i]}.`;
  } else {
    myFavoriteCats += `${cats[i]}, `;
  }

  i++;
} while (i < cats.length);

console.log(myFavoriteCats); // "My cats are called Pete, Biggles, and Jasmine."


