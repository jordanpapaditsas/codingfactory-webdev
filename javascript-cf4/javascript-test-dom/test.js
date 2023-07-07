const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
content.style.color = 'blue';

container.appendChild(content);

const para = document.createElement('p');
para.classList.add('para');
para.textContent = 'Hey bro I\'m red!';
para.style.color = 'red';

container.appendChild(para);

const heading = document.createElement('h3');
heading.classList.add('heading');
heading.textContent = 'I\'m blue h3!';
heading.style.color = 'blue';

container.appendChild(heading);

const div = document.createElement('div');
div.classList.add('div1');
div.style.cssText = 'border-style: dotter; color: black; backround-color: pink;';
const headingIn = document.createElement('h1');
headingIn.textContent = 'I\'m in a div!';
const paraIn = document.createElement('p');
paraIn.textContent = 'ME TOO!';

div.appendChild(headingIn);
div.appendChild(paraIn);

container.appendChild(div);



