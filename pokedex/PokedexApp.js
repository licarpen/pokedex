import Component from '../Component.js';
import Header from '../common/Header.js';
import SearchName from './SearchName.js';
import SearchType from './SearchType.js';
import Sort from './Sort.js';
import Filter from './Filter.js';
import PokemonList from './PokemonList.js';
import PokemonCard from './PokemonCard.js';
import Pagination from './Pagination.js';

class PokedexApp extends Component{

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const searchName = new SearchName

    }
    
    renderHTML(){
        return `
        <div>        <main>
        <div id="search-name">
        </div>
        <div id="search-type">
        </div>
        <div id="sort-by">
        </div>
        <div id="filter-by-height">
        </div>
        <div id="pokemon-list-div">
        </div>
    </main>
    <footer>
    </footer></div>
        `;
    }
}

export default PokedexApp;