
// Create an IIFE with the name of Predator.

// Predator should have two private arrays to store carnivores and herbivores.

// Predator should expose two public functions to load each JSON files and stores 
// the array of animals in the appropriate private array. Each of those functions 
// should accept one argument that will store the callback function to be executed.

var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      var loader = new XMLHttpRequest();


      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(carnivores);

      });
    },
    loadHerbivores: function (callbackToInvoke) {
      console.log("Predator.loadHerbivores START");
      if (herbivores.length === 0) {
        var loader = new XMLHttpRequest();
        loader.addEventListener("load", function () {
          herbivores = JSON.parse(this.responseText);
          callbackToInvoke(herbivores);
        });
        loader.open("GET", "json/herbivores.json");
        loader.send();
      } else {
        callbackToInvoke(herbivores);
      }
    }
  }
})();


// // Configure XHR
// var carnivoresXHR = new XMLHttpRequest();
// carnivoresXHR.addEventListener("load", showCarnivores);
// carnivoresXHR.addEventListener("error", failCarnivores);
// carnivoresXHR.open("GET", "json/carnivores.json");
// carnivoresXHR.send();

// // Configure XHR
// var herbivoresXHR = new XMLHttpRequest();
// herbivoresXHR.addEventListener("load", showHerbivores);
// herbivoresXHR.addEventListener("error", failHerbivores);
// herbivoresXHR.open("GET", "json/herbivores.json");
// herbivoresXHR.send();