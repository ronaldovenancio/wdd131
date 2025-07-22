/* Current Date & Last Modified Code */
const outputDate = document.querySelector("#currentYear");
const outputModified = document.querySelector("#lastModified");
  
const date = new Date().getFullYear();
let lastModified = document.lastModified;

outputDate.textContent = date;
outputModified.textContent = lastModified;

// ----------------------------
// Static Weather Data (in Celsius)
const temperatureC = 7; // Example static value: 7°C
const windSpeedKmh = 10; // Example static value: 10 km/h

// ----------------------------
// Function: Windchill (Metric Units)
function calculateWindChill(temp, windSpeed) {
	return (
		13.12 +
		0.6215 * temp -
		11.37 * Math.pow(windSpeed, 0.16) +
		0.3965 * temp * Math.pow(windSpeed, 0.16)
	).toFixed(1);
}


// ----------------------------
// Display Windchill if Conditions Met
const windchillOutput = document.createElement("p");
if (temperatureC <= 10 && windSpeedKmh > 4.8) {
	const windChill = calculateWindChill(temperatureC, windSpeedKmh);
	windchillOutput.textContent = `Windchill: ${windChill} °C`;
} else {
	windchillOutput.textContent = "Windchill: N/A";
}


// Append windchill to the weather section
document.querySelector(".weather").appendChild(windchillOutput);


/*
// Store the selected elements that we are going to use. This is not required but a good practice with larger programs where the variable will be referenced more than once.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that toggles the list element's list of classes.
hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});
*/


/* ❔What does toggle mean?
We could write separate add and remove statements. Toggle adds the class if it does not currently exist or removes the class if it does exist. 
The CSS class rules will handle the different views, layouts, and displays.
🗝️ JavaScript only applies the class value or not.
*/

