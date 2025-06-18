// If the loop body has a single statement, we can omit the curly braces {…}:

let i = 3;
while (i) alert(i--);

// The do while loop shuld only be used if you want the body to be executed once


// INITIALIZATION CAN BE SKIPPED
i = 0; // we have i already declared and assigned

for (; i < 3; i++) { // no need for "begin"
  alert( i ); // 0, 1, 2
}


// STEP PART CAN BE SKIPPED

i = 0;

for (; i < 3;) {
  alert( i++ );
}

// CONDITION CAN BE SKIPPED (AS LONG AS THEY ARE TWO SEMICOLONS) -> INFINITE LOOP
for (;;) {
  // repeats without limits
}

// BREAK AND CONTINUE CANNOT BE USED IN TERNARY


// Labels do not allow us to jump anywhere, but break out of nested loops

outer: for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    let input = prompt(`Value at coords (${i},${j})`, '');

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert('Done!');

// when there is no input, it will break out to outer and the end the nested loop
// other array methods: https://javascript.info/array-methods