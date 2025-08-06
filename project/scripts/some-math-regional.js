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
        templeName: "Mandacaru Math Olympiad",
        location: "Rio Grande do Norte, Nordeste, Brazil",
        dedicated: "2021, August, 7",
        area: 11500,
        imageUrl: "https://olimpiadamandacaru.com.br/wp-content/uploads/2025/01/mandacaru-3.png",
        reference: '<a href=https://olimpiadamandacaru.com.br target="_blank">Mandacaru Math Olympiad</a>'
    },
    {
        templeName: "OBMEP Math Olympiad",
        location: "National, Brazil",
        dedicated: "2005, May, 21",
        area: 74792,
        imageUrl:
            "https://www2.ifal.edu.br/campus/penedo/noticias/obmep-2023-prova-da-1a-fase-no-ifal-penedo-acontece-no-dia-30-de-maio-em-dois-horarios/obmep-2023-site.jpg/@@images/68201750-4825-40fd-b07a-623ca48afc33.jpeg",
        //"http://www.obmep.org.br/authenticate?redirectUrl=http://server22.obmep.org.br:8080/media/servicos/recursos/1788275.m",
        reference: '<a href=http://www.obmep.org.br/index.htm target="_blank">OBMEP Math Olympiad</a>'
    },
    {
        templeName: "OPEMAT Olympiad",
        location: "Pernambuco, Nordeste, Brazil",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://i.ytimg.com/vi/J4_ze95nBqw/hqdefault.jpg",
        reference: '<a href=https://www.opemat.com.br/#" target="_blank">OPEMAT Math Olympiad</a>'
    },
    {
        templeName: "OBM Math Olympiad",
        location: "National, Brazil",
        dedicated: "1979, May, 2",
        area: 6861,
        imageUrl:
            "https://www.obm.org.br/content/themes/obm/img/logo-full.jpg",
        reference: '<a href=https://www.obm.org.br target="_blank">OBM Math Olympiad</a>'
    },
    {
        templeName: "Canguru Math Olympiad",
        location: "National, Brazil",
        dedicated: "2008, November, 19",
        area: 156558,
        imageUrl:
            "https://www.colegioantoniovieira.com.br/wp-content/uploads/2020/09/bg_sem_fundo_prova_canguru.png",
        reference: '<a href=https://www.cangurudematematicabrasil.com.br target="_blank">Canguru Math Olympiad</a>'
    },
    {
        templeName: "OMU Math Olympiad",
        location: "São Paulo, Sudeste, National, Brazil",
        dedicated: "1984, January, 10",
        area: 9600,
        imageUrl:
            "https://www.cotil.unicamp.br/wp-content/uploads/2024/04/OLIMPIADA-DE-MATEMATICA-DA-UNICAMP.png",
        //  "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
        reference: '<a href=https://www.olimpiada.ime.unicamp.br target="_blank">OMU Math Olympiad</a>'
    },
    {
        templeName: "OMIF Math Olympiad",
        location: "National, Brazil",
        dedicated: "2018, December, 2",
        area: 116642,
        imageUrl:
            "https://www.ifsp.edu.br/images/2023/03_Marco/WhatsApp_Image_2023-03-01_at_173153.jpeg",
        reference: '<a href=https://omif.com.br target="_blank">OMIF Math Olympiad</a>'
    },
    {
        templeName: "OPM Math Olympiad",
        location: "Paraíba, Nordeste, Brazil",
        dedicated: "1990, December, 15",
        area: 37200,
        imageUrl:
            "https://centros.uepb.edu.br/cche/files/2024/09/WhatsApp-Image-2024-09-24-at-20.44.43.jpeg",
        reference: '<a href=https://mat.ufpb.br/opm/ target="_blank">OPM Math Olympiad</a>'
    },
    {
        templeName: "OCMAT Math Olympiad",
        location: "Espírito Santo, Sudeste, Brazil",
        dedicated: "2014, May, 21",
        area: 44175,
        imageUrl:
            "https://sedu.es.gov.br/Media/sedu/_Profiles/c4d8c6e6/982b8e1d/OCMAT%20-%20TERCEIRA%20E%20ÚLTIMA%20FASE_banner.png?v=638899084755199810",
        reference: '<a href=https://matematicanarede.sedu.es.gov.br/ocmat target="_blank">OCMAT Math Olympiad</a>'
    },
    {
        templeName: "OMOC Math Olympiad",
        location: "Santa Catarina, Sul, Brazil",
        dedicated: "2017, November, 22",
        area: 11550,
        imageUrl:
            "https://omoc.uffs.edu.br/images/common/index-banner-mobile.png",
        reference: '<a href=https://omoc.uffs.edu.br target="_blank">OMOC Math Olympiad</a>'
    },
    {
        templeName: "ORM Math Olympiad",
        location: "Rio Grande do Sul, Sul, Brazil",
        dedicated: "2005, September, 15",
        area: 23730,
        imageUrl:
            "https://i.ytimg.com/vi/aGpGMzDkw_c/maxresdefault.jpg",
        reference: '<a href=https://sites.google.com/view/ormgrandepoa target="_blank">ORM Math Olympiad</a>'
    },
    {
        templeName: "Paulista Math Olympiad",
        location: "São Paulo, Sudeste, Brazil",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl:
            "https://cotuca.unicamp.br/wp-content/uploads/2021/02/OPM-250x130.png",
        // "https://churchofjesuschristtemples.org/assets/img/temples/_temp/056-Madrid-Spain-Temple.jpg",
        reference: '<a href=http://www.opm.mat.br/var/www/html/opm.mat.br/web/ target="_blank">OPM Math Olympiad</a>'

    },
    // Add more temple objects here...
];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const nordesteLink = document.querySelector("#nordeste");
const sudesteLink = document.querySelector("#sudeste");
const sulLink = document.querySelector("#sul");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

nordesteLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.location.includes("Nordeste")));
});

sudesteLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.location.includes("Sudeste")));
});

sulLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => temple.location.includes("Sul")));
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
