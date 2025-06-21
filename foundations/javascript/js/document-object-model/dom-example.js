const contentDiv = document.createElement('div');
contentDiv.classList.add('content');
contentDiv.innerText = 'This is the glorious text-content!';

const containerDiv = document.querySelector('#container');
containerDiv.appendChild(contentDiv);

// 1
const paragraphElement = document.createElement('p');
paragraphElement.innerText = 'Hey I\'m Red!';
paragraphElement.style.color = 'red';

// https://stackoverflow.com/questions/15741006/adding-div-element-to-body-or-document-in-javascript
const bodyElement = document.body;
bodyElement.appendChild(paragraphElement);

// 2
const headerElement = document.createElement('h3');
headerElement.textContent = "I’m a blue h3!";
headerElement.style.color = 'blue';
bodyElement.appendChild(headerElement);

// 3

const divThree = document.createElement('div');
divThree.style.border = 'solid';
divThree.style.backgroundColor = 'pink';

const divThreeHeader = document.createElement('h1');
divThreeHeader.innerText = 'I\'m in a div';
divThree.appendChild(divThreeHeader);

const paraDivThree = document.createElement('p');
paraDivThree.innerHTML = 'ME TOO!';
divThree.appendChild(paraDivThree);

bodyElement.appendChild(divThree);