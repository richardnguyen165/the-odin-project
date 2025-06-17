// parameters : items listed between the parenthesis -> use an appropriately named parameter so that they can know what to use the function for, and what to pass in



// function definition (first line) -> use an appropriate function name
function favoriteAnimal(animal) {
    // add code (body)

    // optional: add a return statement
    return animal + " is my favorite animal!"
}

// call the function and passing in value 'Goat' (or you could pass a variable) -> allows flexibibilitt as we can pass anything we want

// and when we console log "Goat is my favorite animal!"
console.log(favoriteAnimal('Goat'));


/*
functions that are part of objects are called methods
*/


// default parameters (if no one passes anything in)
function hello(name = "Chris") {
  console.log(`Hello ${name}!`);
}