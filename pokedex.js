// Call and order data from the pokeapi
fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=150')
.then((response) => response.json())
.then(async (response) => {
    console.log(response.results);
    for (const pokemon in response.results) {
        const p = response.results[pokemon];
        await fetchPokemon(p.url);
    }
    
});

// Apply data from pokeapi to the DOM
function fetchPokemon(url) {
    return fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        const types = response.types.map((entry) => entry.type.name);
        const img = response.sprites.front_default;
        const number = response.id;
        const name = response.name;
        addToPokedex(createPokemon(number, name, types, img));
});
}




function addToPokedex(pokemon) {
    const pokedex = document.querySelector('.pokedex');
    pokedex.appendChild(pokemon);
}

function createPokemon(number, name, types, img) {
    const entry = document.querySelector('#pokemon-template').content;
    const pokemon = entry.cloneNode(true); // clone the node
    pokemon.querySelector('.number').innerText = `#${number}`; // DOM-targeting
    pokemon.querySelector('.name').innerText = name[0].toUpperCase() + name.substring(1);; // DOM-targeting
    pokemon.querySelector('.img-container img').src = img; // DOM-targeting
    
    if(types) { 
        const typeInfoElement = pokemon.querySelector('.type-info');
        typeInfoElement.innerHTML = "";
        types.forEach(type => {
            const typeElement = document.createElement("span");
            typeElement.classList.add('type');   
            typeElement.classList.add(`type-${type.toLowerCase()}`);
            typeElement.innerText = type[0].toUpperCase() + type.substring(1);
            typeInfoElement.appendChild(typeElement);
        });
        
    }
    
    return pokemon;

}

/*
addToPokedex(createPokemon('001', 'Bulbasaur',  ["Grass", "Poison"]));
addToPokedex(createPokemon('002', 'Ivysaur', ["Grass", "Poison"]));
addToPokedex(createPokemon('003', 'Venusaur', ["Grass", "Poison"]));
addToPokedex(createPokemon('004', 'Charmander', ["Fire"]));
*/
