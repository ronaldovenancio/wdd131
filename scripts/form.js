// ✅ Atualiza ano e data de modificação
document.querySelector("#currentYear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// ✅ Menu hambúrguer responsivo
const mainnav = document.querySelector('.navigation');
const hambutton = document.querySelector('#menu');

if (hambutton && mainnav) {
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });
}

// ✅ Lista de produtos
const products = [
    { id: "fc-1888", name: "Flux Capacitor" },
    { id: "fc-2050", name: "Power Laces" },
    { id: "fs-1987", name: "Hoverboard" },
    { id: "ac-2000", name: "Time Circuits" },
    { id: "jj-1969", name: "Plutonium" },
    { id: "tc-2001", name: "Mr. Fusion" }
];

// ✅ Preencher o <select> dinamicamente
const selectElement = document.querySelector("#product-name");

if (selectElement) {
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

// Limita o campo de data para hoje ou datas anteriores
const dateInput = document.querySelector("#install-date");
if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.max = today;
}

