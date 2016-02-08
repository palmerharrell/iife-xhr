var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      if (carnivores.length === 0) {
        var loader = new XMLHttpRequest();
        loader.addEventListener("load", function () {
          carnivores = JSON.parse(this.responseText);
          callbackToInvoke(carnivores);
        });
        loader.open("GET", "json/carnivores.json");
        loader.send();
      } else {
        callbackToInvoke(carnivores);
      }
    },

    loadHerbivores: function (callbackToInvoke) {
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

