import Component from '../Component.js';
import Header from '../common/Header.js';

class HomeApp extends Component{

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }
    
    renderHTML(){
        return `
        <div><main><p>Home Page</p><a href="../pokedex/pokedex.html">Click to customize your POKEDEX</a></main></div>
        `;
    }
}

export default HomeApp;