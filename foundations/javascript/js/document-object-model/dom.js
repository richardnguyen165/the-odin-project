// Document Object Model is a tree like representation of the contents of a webpage - 
// a tree of "nodes" with different relationships depending on how they are arranged in the HTML document.

/*
// continater is the parent
<div id="container">
  // these are the children
  // display is the sibling to controls, controls is the sibling to display
  <div class="display"></div>
  <div class="controls"></div>
</div>
*/



// When working with DOM, you use 'selectors' to target the nodes you want to work with (similar to CSS)
/*
In the above example, you could use the following selectors to refer to <div class="display"></div>
- div.display
- .display
- #container > .display
- div#container > div.display
*/


/*
Example:
// selects the #container div (don't worry about the syntax, we'll get there)
const container = document.querySelector("#container");

// selects the first child of #container => .display
const display = container.firstElementChild;
console.log(display);  // <div class="display"></div>


// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => .display
const display = controls.previousElementSibling;
console.log(display); // <div class="display"></div>
*/


// How to choose an element:

// Use the following commands -> and input a class selector (starting with a dot) or an id selector (starting with an #):

/*
element.querySelector(selector) - returns a reference to the first match of selector.
element.querySelectorAll(selectors) - returns a “NodeList” containing references to all of the matches of the selectors. -> convery to Array using Array.from() or ... (spread operator)
*/


// How to create an element
// document.createElement(tagName, [options])

// Example: const div = document.createElement("div"); -> its not put into the apge -> until you append to another element

// How to append to an element
/*
parentNode.appendChild(childNode) - appends childNode as the last child of parentNode.
parentNode.insertBefore(newNode, referenceNode) - inserts newNode into parentNode before referenceNode. 
*/

// How to remove an element
/*
parentNode.removeChild(child) - removes child from parentNode on the DOM and returns a reference to child.
*/

// How to alter an element
/*
div.style.{attribute} = "{value}";

div.setAttribute("style", "{values}");

Example:

// dot notation with kebab case: doesn't work as it attempts to subtract color from div.style.background
// equivalent to: div.style.background - color
div.style.background-color; // DONES NOT WORK

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];

// The property name must be string when using brackets, else, use camelCase.
*/


// Editing attributes:

/*
div.setAttribute, div.getAttribute, div.removeAttribute

// if id exists, update it to 'theDiv', else create an id with value "theDiv"
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");
*/

// Working with classes

// Use {tag}.classList.add({class}), {tag}.classList.remove({class}), {tag}.classList.toggle({class}) -> if its does not have the class add it, if it does have it, remove it -> note (do not add the period at the beginning)

// Adding text content
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";

// Adding HTML content
// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";

