import Component from '../Component.js';

class SearchName extends Component{
    renderHTML(){
        return `
        <form class="search-name-form">
                <p>Search by name:</p>
                <input name="search-by-name" type="text">
                <button>🔍</button>
            </form>
        `;
    }
}

export default SearchName;