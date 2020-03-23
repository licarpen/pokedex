import Component from '../Component.js';
import PokemonCard from './PokemonCard.js';

class PokemonList extends Component{
    
    onRender(dom){
        const { pokedex } = this.props;

        pokedex.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokemonCard = new PokemonCard(props);
            const pokemonCardDOM = pokemonCard.renderDOM();
            pokemonCardDOM.style.background = pokemon.color_1;
            dom.appendChild(pokemonCardDOM);
        });
    }
    
    renderHTML(){
        return `
        <ul id="pokemon-list"></ul>
        `;
    }
}

export default PokemonList;