import Component from '../Component.js';

class Header extends Component{
    renderHTML(){
        return `
        <header>
            <h1>POKEDEX</h1>
            <h2>MAKING YOUR POKEMON DREAMS A REALITY</h2>
        </header>
        `;
    }
}

export default Header;