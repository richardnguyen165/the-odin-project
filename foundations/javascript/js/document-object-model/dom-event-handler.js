// We can manipulate the DOM so that it responds dynamically (on demand)

/*
 method 1 -> inline in html -> not recommended (remember about not mixing code from diferent languages in one file)
<button onclick="alert('Hello World')">Click Me</button>
*/

/* 
<!-- the HTML file -->
<!-- METHODS 2 & 3 -->
<button id="btn">CLICK ME BABY</button>

// the JavaScript file
// METHODS 2 & 3
function alertFunction() {
  alert("YAY! YOU DID IT!");
}
const btn = document.querySelector("#btn");

// METHOD 2 -> the problem with this is we can only assign one thhing when the button is clicked (we may want to do more things)
btn.onclick = alertFunction;

// METHOD 3 -> best option
btn.addEventListener("click", alertFunction);
*/


// e -> refers to the event itself
btn.addEventListener("click", function (e) {
  console.log(e);
});


// buttons is a node list. It looks and acts much like an array. -> gets all button elements
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});