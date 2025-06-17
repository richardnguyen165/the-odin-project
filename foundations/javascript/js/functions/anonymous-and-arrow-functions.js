(function () {
  alert("hello");
}); // this is an anonymous function -> it has no name

// anonymous funtion and arrows functions are used in addEventListener for example:

function logKey(event) {
  console.log(`You pressed "${event.key}".`);
}

textBox.addEventListener("keydown", logKey);



// or

textBox.addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});



// or

const doubled = originals.map(item => item * 2);


