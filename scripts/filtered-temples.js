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
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Recife Brazil",
        location: "Recife, Brazil",
        dedicated: "2000, December, 15",
        area: 37200,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
    },
    {
        templeName: "Paris France",
        location: "Paris, France",
        dedicated: "2017, May, 21",
        area: 44175,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/paris-france-temple/paris-france-temple-2056-main.jpg"
    },
    {
        templeName: "Montreal Quebec",
        location: "Montreal, Canada",
        dedicated: "2015, November, 22",
        area: 11550,
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/montreal-quebec-temple/montreal-quebec-temple-10671-main.jpg"
    },
    // Add more temple objects here...
];

createTempleCard(temples);

const homeLink = document.querySelector("#home");
const nonutahLink = document.querySelector("#nonutah");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

homeLink.addEventListener("click", () => {
    createTempleCard(temples);
});

nonutahLink.addEventListener("click", () => {
    createTempleCard(temples.filter(temple => !temple.location.includes("Utah")));
});

oldLink.addEventListener("click", () => {
    const filtered = temples.filter(temple => {
        // Extrair o ano do campo `dedicated` (ex: "1888, May, 21")
        const year = parseInt(temple.dedicated.split(",")[0]);
        return year < 1900;
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

        name.textContent = temple.templeName;
        location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
        dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
        area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
        img.setAttribute("src", temple.imageUrl);
        img.setAttribute("alt", `${temple.templeName} Temple`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(dedication);
        card.appendChild(area);
        card.appendChild(img);

        document.querySelector(".container").appendChild(card);
    })
}
