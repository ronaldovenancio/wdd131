// temples.js

// Insere o ano atual no primeiro parágrafo do footer
const currentYear = new Date().getFullYear();
document.querySelector("footer p:nth-of-type(1)").textContent = `© ${currentYear} .:|:. Ronaldo Venancio da Silva ✌️ .:|:. Recife-Brazil 🇧🇷. `;

// Insere a data da última modificação no segundo parágrafo
const lastModified = document.lastModified;
document.querySelector("footer p:nth-of-type(2)").textContent = `Last modified: ${lastModified}`;

// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

