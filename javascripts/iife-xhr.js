var animalsEl = document.getElementById("Animals");

function showCarnivores (carnivores) {
	var carnivoresArray = carnivores.carnivores;
	var carnivoresHTML = `<h1>Carnivores</h1>`;

	for (var i = 0; i < carnivoresArray.length; i++) {
		carnivoresHTML += `<p>${carnivoresArray[i]}</p>`;
	};
	animalsEl.innerHTML += carnivoresHTML;
}

function showHerbivores (herbivores) {
	var herbivoresArray = herbivores.herbivores;
	var herbivoresHTML = `<h1>Herbivores</h1>`;

	for (var i = 0; i < herbivoresArray.length; i++) {
		herbivoresHTML += `<p>${herbivoresArray[i]}</p>`;
	};
	animalsEl.innerHTML += herbivoresHTML;
}

Predator.loadCarnivores(showCarnivores);
Predator.loadHerbivores(showHerbivores);
