import Component from '../Component.js';
import Header from '../common/Header.js';

class HomeApp extends Component{

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
    }
    
    renderHTML(){
        return `
        <div><main><a class='customize' href="../pokedex/pokedex.html">Get Started</a></main></div>
        `;
    }
}

export default HomeApp;