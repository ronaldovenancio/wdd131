 // getdates.js

// Insere o ano atual no primeiro parágrafo do footer
const currentYear = new Date().getFullYear();
document.querySelector("footer p:nth-of-type(1)").textContent = `© ${currentYear} .:|:. Ronaldo Venancio da Silva ✌️ .:|:. Recife-Brazil 🇧🇷. `;

// Insere a data da última modificação no segundo parágrafo
const lastModified = document.lastModified;
document.querySelector("footer p:nth-of-type(2)").textContent = `Last modified: ${lastModified}`;
