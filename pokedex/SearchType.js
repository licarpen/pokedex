import Component from '../Component.js';

class SearchType extends Component{
    
    // form is the dom element created when renderHTML is called
    onRender(form){

        form.addEventListener('submit', event => {
            event.preventDefault();
            // create formData object
            const formData = new FormData(form);
            // get current query string (no #)
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('type', formData.get('search-by-type'));
            searchParams.delete('pokemon');
            searchParams.delete('height');

            // reset page to 1
           // searchParams.set('page', 1);
            window.location.hash = searchParams.toString();
        });
    }

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