// IMPORT MODULES under test here:
import PokemonCard from '../pokedex/PokemonCard.js';
import { capitalize } from '../pokedex/PokemonCard.js';

const test = QUnit.test;

test('renders html for pokemon card', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const pokemon = {
        '_id': '5cef3501ef6005a77cd4fdd0',
        'pokemon': 'pichu',
        'id': 187,
        'species_id': 172,
        'height': 3,
        'weight': 20,
        'base_experience': 41,
        'type_1': 'electric',
        'type_2': 'NA',
        'attack': 40,
        'defense': 15,
        'hp': 20,
        'special_attack': 35,
        'special_defense': 35,
        'speed': 60,
        'ability_1': 'static',
        'ability_2': 'NA',
        'ability_hidden': 'lightning-rod',
        'color_1': '#F8D030',
        'color_2': 'NA',
        'color_f': 'NA',
        'egg_group_1': 'no-eggs',
        'egg_group_2': 'NA',
        'url_image': 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png',
        'generation_id': 2,
        'evolves_from_species_id': 'NA',
        'evolution_chain_id': 10,
        'shape_id': 8,
        'shape': 'quadruped',
        'pokebase': 'pichu',
        'pokedex': 'http://www.pokemon.com/us/pokedex/pichu'
    };
    
    const expected = `
    <li class="pokemon-card">
    <h1>${capitalize(pokemon.pokemon)}</h1>
    <div class="pokemon-image-container"><img class="pokemon-image" src="${pokemon.url_image}" alt="${pokemon.pokemon}"></div>
    <h2>TYPE:${pokemon.type_1}</h2>
    <h3>ATTACK: ${pokemon.attack}</h3>
    <h3>DEFENSE: ${pokemon.defense}</h3>
    <h3>HEIGHT: ${pokemon.height}</h3>
</li>
    `;

    //Act 
    // Call the function you're testing and set the result to a const
    const props = { pokemon: pokemon };
    const pokemonCard = new PokemonCard(props);
    const html = pokemonCard.renderHTML();
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, html);
});
