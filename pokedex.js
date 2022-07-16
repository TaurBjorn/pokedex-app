function addToPokedex(pokemon) {
    const pokedex = document.querySelector('.pokedex');
    pokedex.appendChild(pokemon);
}

function createPokemon(number, name, types) {
    const entry = document.querySelector('#pokemon-template').content;
    const pokemon = entry.cloneNode(true); // clone the node
    pokemon.querySelector('.number').innerText = `#${number}`; // DOM-targeting
    pokemon.querySelector('.name').innerText = name; // DOM-targeting
    pokemon.querySelector('.img-container img').src = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${number}.png`; // DOM-targeting
    
    if(types) { 
        const typeInfoElement = pokemon.querySelector('.type-info');
        typeInfoElement.innerHTML = "";
        types.forEach(type => {
            const typeElement = document.createElement("span");
            typeElement.classList.add('type');   
            typeElement.classList.add(`type-${type.toLowerCase()}`);
            typeElement.innerText = type;
            typeInfoElement.appendChild(typeElement);
        });
        
    }
    
    return pokemon;

}


addToPokedex(createPokemon('001', 'Bulbasaur',  ["Grass", "Poison"]));
addToPokedex(createPokemon('002', 'Ivysaur', ["Grass", "Poison"]));
addToPokedex(createPokemon('003', 'Venusaur', ["Grass", "Poison"]));
addToPokedex(createPokemon('004', 'Charmander', ["Fire"]));

