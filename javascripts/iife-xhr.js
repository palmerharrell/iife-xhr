

// 			INSTRUCTIONS:
// Create an IIFE with the name of Predator.

// Predator should have two private arrays to store carnivores and herbivores.

// Predator should expose two public functions to load each JSON files and stores 
// the array of animals in the appropriate private array. Each of those functions 
// should accept one argument that will store the callback function to be executed.

// In the iife-xhr.js file, define two functions that will be executed after each 
// type of animal is loaded to then display those animals in your DOM. Example 
// given below.

// In the Predator IIFE, invoke the callback function, passed in from iife-xhr.js, 
// after each file is loaded.

function showCarnivores (carnivores) {

}

function showHerbivores () {

}

Predator.loadCarnivores(showCarnivores);


// Configure XHRs
var carnivoresXHR = new XMLHttpRequest();
carnivoresXHR.addEventListener("load", showCarnivores);
carnivoresXHR.addEventListener("error", failCarnivores);
carnivoresXHR.open("GET", "json/carnivores.json");
carnivoresXHR.send();

var herbivoresXHR = new XMLHttpRequest();
herbivoresXHR.addEventListener("load", showHerbivores);
herbivoresXHR.addEventListener("error", failHerbivores);
herbivoresXHR.open("GET", "json/herbivores.json");
herbivoresXHR.send();
