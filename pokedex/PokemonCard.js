import Component from '../Component.js';

class PokemonCard extends Component{
    renderHTML(){
        const { pokemon } = this.props;

        const capitalize = (string) => {
            return string[0].toUpperCase() + string.slice(1);
        };
       
        return `
        <li class="pokemon-card">
                    <h1>${capitalize(pokemon.pokemon)}</h1>
                    <div class="pokemon-image-container"><img class="pokemon-image" src="${pokemon.url_image}" alt="${pokemon.pokemon}"></div>
                    <h2>TYPE:${pokemon.type_1}</h2>
                    <h3>ATTACK: ${pokemon.attack}</h3>
                    <h3>DEFENSE: ${pokemon.defense}</h3>
                    <h3>HEIGHT: ${pokemon.height}</h3>
                </li>
        `;
    }
}

export default PokemonCard;