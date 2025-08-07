// filtered-temples.js
/* Current Date & Last Modified Code */
const outputDate = document.querySelector("#currentYear");
const outputModified = document.querySelector("#lastModified");

const date = new Date().getFullYear();
let lastModified = document.lastModified;

outputDate.textContent = date;
outputModified.textContent = lastModified;


// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});


const temples = [
    {
        templeName: "IMO - International Mathematical Olympiad",
        location: "Romania, Europe",
        dedicated: "1959, August, 7",
        area: 11500,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXkQifQ5p11wckshQIeHnBumWADSLqRxREuw&s",
        reference: '<a href=https://www.imo-official.org/default.aspx target="_blank">IMO Math Olympiad</a>'
    },
    {
        templeName: "EGMO - European Girls Mathematical Olympiad",
        location: "Europe",
        dedicated: "2012, May, 21",
        area: 74792,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK94p7n8d6UFtrT2YZanVcRh9foO8hV7rG3w&s",
         //   "https://www.obm.org.br/content/uploads/2023/02/EGMO-logo_PNG-881x395.png",
        //"http://www.obmep.org.br/authenticate?redirectUrl=http://server22.obmep.org.br:8080/media/servicos/recursos/1788275.m",
        reference: '<a href=https://www.egmo.org target="_blank">EGMO Math Olympiad</a>'
    },
    {
        templeName: "EMC - European Mathematical Cup",
        location: "Europe",
        dedicated: "2012, May, 21",
        area: 44175,
        imageUrl:
            "https://emc.mnm.hr/wp-content/uploads/2023/10/cropped-header-1.png",
        //  "https://sedu.es.gov.br/Media/sedu/_Profiles/c4d8c6e6/982b8e1d/OCMAT%20-%20TERCEIRA%20E%20ÚLTIMA%20FASE_banner.png?v=638899084755199810",
        reference: '<a href=https://emc.mnm.hr target="_blank">EMC Math Cup</a>'
    }, 
    {
        templeName: "RMM - Romanian Master of Mathematics",
        location: "Romania, Europe",
        dedicated: "2008, May, 2",
        area: 6861,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3Z1QxWVRAjvw-_aROjYaDY6oCz4ub0CvSA&s",
          //  "https://www.obm.org.br/content/themes/obm/img/logo-full.jpg",
        reference: '<a href=https://rmms.lbi.ro/rmm2025/index.php?id=home target="_blank">RMM Maaster of Math</a>'
    },
    {
        templeName: "Animath Math Olympiad",
        location: "France, Europe",
        dedicated: "2009, November, 19",
        area: 156558,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tUUZDU2ZLvcGuMV0ANyVsWePz0wZ-6TFIA&s",
          //  "https://www.colegioantoniovieira.com.br/wp-content/uploads/2020/09/bg_sem_fundo_prova_canguru.png",
        reference: '<a href=https://www.animath.fr target="_blank">Animath Olympiad</a>'
    },
    {
        templeName: "Olimpiada Matemática del Cono Sur",
        location: "Bolívia, América do Sul",
        dedicated: "1985, January, 10",
        area: 9600,
        imageUrl:
            "https://www.omapa.org/wp-content/uploads/2021/11/Logo-nuevo-cono-2021-300x258.png",
          //  "https://www.cotil.unicamp.br/wp-content/uploads/2024/04/OLIMPIADA-DE-MATEMATICA-DA-UNICAMP.png",
        //  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        reference: '<a href=https://www.omatbol.org/internacionales/conosur target="_blank">Olimpįada Boliviana de Matemática</a>'
    },
    {
        templeName: "PAGMO Math Olympiad",
        location: "Bolivia, Brazil, Canada, Chile, Costa Rica, Spain, América",
        dedicated: "2021, December, 2",
        area: 116642,
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfyByBtAjtY-ai6LIrwdLna6oAWHAV3zOrrg&s",
         //   "https://www.ifsp.edu.br/images/2023/03_Marco/WhatsApp_Image_2023-03-01_at_173153.jpeg",
        reference: '<a href=https://www.pagmo.info/home target="_blank">PAGMO Math Olympiad</a>'
    },
    {
        templeName: "APMO Math Olympiad",
        location: "Asia",
        dedicated: "1989, December, 15",
        area: 37200,
        imageUrl:
            "https://sman1jember.sch.id/asset/foto_berita/APMO.png",
         //   "https://www.obm.org.br/content/uploads/2017/12/APMO.jpg",
         //   "https://centros.uepb.edu.br/cche/files/2024/09/WhatsApp-Image-2024-09-24-at-20.44.43.jpeg",
        reference: '<a href=https://www.apmo-official.org target="_blank">APMO Math Olympiad</a>'
    },
    {
        templeName: "IMC - Internation Mathematical Olympiad",
        location: "Bulgaria, Europe",
        dedicated: "1994, June, 7",
        area: 96630,
        imageUrl:
            "https://chiuchang.org/imc/wp-content/uploads/sites/2/2024/02/2024-InIMC-1024x1017.x17381.jpeg",
        //   "https://olimpiadascientificas.org/static/images/imc.jpg",
        //  "https://chiuchang.org/imc/wp-content/uploads/sites/2/2025/05/cropped-IMC_flag_小圖-2.x17381.jpg",
        //  "https://i.ytimg.com/vi/J4_ze95nBqw/hqdefault.jpg",
        reference: '<a https://www.imc-math.org.uk target="_blank">IMC Math Olympiad</a>'
    },
    // Add more temple objects here...
];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const europeLink = document.querySelector("#europe");
const americaLink = document.querySelector("#america");
const asiaLink = document.querySelector("#asia");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

europeLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.location.includes("Europe")));
});

americaLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.location.includes("América")));
});

asiaLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.location.includes("Asia")));
});

oldLink.addEventListener("click", () => {
    const filtered = temples.filter(temple => {
        // Extrair o ano do campo `dedicated` (ex: "1888, May, 21")
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year <= 2000;
    });
    createTempleCard(filtered);
});

newLink.addEventListener("click", () => {
    const filtered = temples.filter(temple => {
        // Extrair o ano do campo `dedicated` (ex: "2015, May, 21")
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year > 2000;
    });
    createTempleCard(filtered);
});

largeLink.addEventListener("click", () => {
    const filtered = temples.filter(temple => temple.area > 90000);
    createTempleCard(filtered);
});

smallLink.addEventListener("click", () => {
    const filtered = temples.filter(temple => temple.area < 10000);
    createTempleCard(filtered);
});



function createTempleCard(filteredTemples) {
    document.querySelector(".container").innerHTML = "";
    filteredTemples.forEach(temple => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let dedication = document.createElement("p");
        let area = document.createElement("p");
        let img = document.createElement("img");
        let reference = document.createElement("reference")

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        reference.innerHTML = `<span class="label"></span> ${temple.reference}`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("reference", `${temple.templeReference} Reference`);

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);
        card.appendChild(reference);

        document.querySelector(".container").appendChild(card);
    })
}
