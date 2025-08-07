// scripts.js

// Atualiza o ano corrente e a data de última modificação no rodapé
const outputDate = document.querySelector("#currentYear");
const outputModified = document.querySelector("#lastModified");

const date = new Date().getFullYear();
const lastModified = document.lastModified;

outputDate.textContent = date;
outputModified.textContent = lastModified;

// Referências aos elementos do menu e botão hambúrguer
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

// Alterna visibilidade do menu quando o botão hambúrguer for clicado
hambutton.addEventListener('click', () => {
  mainnav.classList.toggle('show');
  hambutton.classList.toggle('show');
});

// Exemplo de função para mostrar mensagem de boas-vindas (pode expandir)
function welcomeUser(name) {
  alert(`Welcome, ${name}! Thank you for visiting MathStarsCMR Brazil.`);
}

// Exemplo de array com algumas olimpíadas (pode expandir)
const olympiads = [
  { name: "OBM", level: "National" },
  { name: "OBMEP", level: "National" },
  { name: "OMU", level: "Regional" },
];

// Função para listar as olimpíadas no console (exemplo de uso de array e template literals)
function listOlympiads() {
  olympiads.forEach(olympiad => {
    console.log(`Olympiad: ${olympiad.name} - Level: ${olympiad.level}`);
  });
}

// Chamada da função
listOlympiads();

// Exemplo de uso de localStorage para salvar o nome do usuário e mostrar na próxima visita
function saveUserName(name) {
  localStorage.setItem('userName', name);
}

function loadUserName() {
  const storedName = localStorage.getItem('userName');
  if (storedName) {
    welcomeUser(storedName);
  }
}

// Carrega nome do usuário ao abrir a página
window.addEventListener('load', loadUserName);
