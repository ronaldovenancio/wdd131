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
const sites = [
    { id: "ac-2000", name: "Canguru Math Olympiad" },
    { id: "jj-1969", name: "EMC - European Mathematical Cup" },
    { id: "fc-2050", name: "IMC - Internation Mathematical Olympiad" },
    { id: "fc-1888", name: "IMO - International Mathematical Olympiad" },
    { id: "fs-1987", name: "OBM Math Olympiad" },
    { id: "jj-1970", name: "OMU Math Olympiad" },
    { id: "tc-2001", name: "RMM - Romanian Master of Mathematics" }
];

// ✅ Preencher o <select> dinamicamente
const selectElement = document.querySelector("#site-name");

if (selectElement) {
    sites.forEach(site => {
        const option = document.createElement("option");
        option.value = site.name;
        option.textContent = site.name;
        selectElement.appendChild(option);
    });
}

// Limita o campo de data para hoje ou datas anteriores
const dateInput = document.querySelector("#install-date");
if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.max = today;
}

