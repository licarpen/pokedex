import Component from '../Component.js';

class SearchName extends Component{
    
    onRender(form){

        form.addEventListener('submit', event => {
            event.preventDefault();
            // create formData object
            const formData = new FormData(form);
            // get current query string (no #)
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', 1);
            searchParams.set('pokemon', formData.get('search-by-name'));
            searchParams.delete('type_1');
            searchParams.delete('height');
            searchParams.delete('sort');
            form.reset();
            window.location.hash = searchParams.toString();
        });
    }
    
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