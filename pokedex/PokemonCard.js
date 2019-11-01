import Component from '../Component.js';

class PokemonCard extends Component{
    renderHTML(){
        return `
        <li class="pokemon-card">
                    <h1>NAME</h1>
                    <h2>TYPE</h2>
                    <div class="pokemon-image-container"><img class="pokemon-image" src="./assets/p-sample.png" alt=""></div>
                    <h3>ATTACK: </h3>
                    <h3>DEFENSE: </h3>
                    <h3>HEIGHT: </h3>
                </li>
        `;
    }
}

export default PokemonCard;