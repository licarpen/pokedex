import Component from '../Component.js';

class PokemonList extends Component{
    renderHTML(){
        return `
        <ul id="pokemon-list"></ul>
        `;
    }
}

export default PokemonList;