import Component from '../Component.js';

class Filter extends Component{
    
    onRender(form){

        form.addEventListener('submit', event => {
            event.preventDefault();
            // create formData object
            const formData = new FormData(form);
            // get current query string (no #)
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', 1);
            searchParams.set('height', formData.get('min-height'));
            searchParams.delete('type');
            searchParams.delete('pokemon');

            // reset page to 1
           // searchParams.set('page', 1);
            window.location.hash = searchParams.toString();
        });
    }
    
    renderHTML(){
        return `
        <form class="filter-by-height-form">
        <p>Filter By Height: </p>
        <label for="min-height">Min: </label>
        <input name="min-height" type="number">
        <button>🔍</button>  
    </form>
        `;
    }
}

export default Filter;