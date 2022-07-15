
const pokedex = document.querySelector('.pokedex');
const entry = document.querySelector('.pokedex-entry');


const cloneOne = entry.cloneNode(true);
cloneOne.querySelector('.number').innerText = "#002";
cloneOne.querySelector('.name').innerText = "Ivysaur";
cloneOne.querySelector('.img-container img').src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png";
pokedex.appendChild(cloneOne);

const cloneTwo = entry.cloneNode(true);
cloneTwo.querySelector('.number').innerText = "#003";
cloneTwo.querySelector('.name').innerText = "Venusaur";
cloneTwo.querySelector('.img-container img').src = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png";
pokedex.appendChild(cloneTwo);