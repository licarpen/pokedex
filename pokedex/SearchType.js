import Component from '../Component.js';

class SearchType extends Component{
    renderHTML(){
        return `
        <form class="search-type-form">
                <p>Search by type:</p>
                <input name="search-by-type" type="text">
                <button>🔍</button>
            </form>
        `;
    }
}

export default SearchType;