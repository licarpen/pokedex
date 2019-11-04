import Component from '../Component.js';
import Header from '../common/Header.js';
import SearchName from './SearchName.js';
import SearchType from './SearchType.js';
import Sort from './Sort.js';
import Filter from './Filter.js';
import PokemonList from './PokemonList.js';
import Pagination from './Pagination.js';
import { getPokedex } from '../services/pokedex-api.js';

class PokedexApp extends Component{

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const searchNameDiv = dom.querySelector('#search-name');
        const searchName = new SearchName();
        searchNameDiv.appendChild(searchName.renderDOM());

        const searchTypeDiv = dom.querySelector('#search-type');
        const searchType = new SearchType();
        searchTypeDiv.appendChild(searchType.renderDOM());

        const sortDiv = dom.querySelector('#sort-by');
        const sort = new Sort();
        sortDiv.appendChild(sort.renderDOM());

        const filterDiv = dom.querySelector('#filter-by-height');
        const filter = new Filter();
        filterDiv.appendChild(filter.renderDOM());

        const paginationDiv = dom.querySelector('#pagination-div');
        const pagination = new Pagination({ count: 0 });
        console.log(pagination.renderDOM());
        paginationDiv.appendChild(pagination.renderDOM());
        
        const pokemonListDiv = dom.querySelector('#pokemon-list-div');
        const pokemonList = new PokemonList({ pokedex: [] });
        pokemonListDiv.appendChild(pokemonList.renderDOM());
        

        async function loadPokedex(){
            const response = await getPokedex();
            const pokedex = response.results;
            const count = response.count;
            pokemonList.update({ pokedex: pokedex });
            pagination.update({ count: count });
        } 
        
        loadPokedex();

        window.addEventListener('hashchange', () => {
            loadPokedex();
        });
    }
    
    renderHTML(){
        return `
        <div><main>
        <div id="search-name">
        </div>
        <div id="search-type">
        </div>
        <div id="sort-by">
        </div>
        <div id="filter-by-height">
        </div>
        <div id="pagination-div"></div>
        <div id="pokemon-list-div">
        </div>
    </main>
</div>
        `;
    }
}

export default PokedexApp;