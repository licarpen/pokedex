import Component from '../Component.js';

class Sort extends Component{
    
    onRender(form){

        form.addEventListener('change', event => {
            event.preventDefault();
            // create formData object
            const formData = new FormData(form);
            // get current query string (no #)
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', 1);
            searchParams.set('sort', formData.get('sort-options'));
            searchParams.delete('height');
            searchParams.delete('type_1');
            searchParams.delete('pokemon');
            searchParams.delete('name');
            window.location.hash = searchParams.toString();
        });
    }
    
    renderHTML(){
        return `
        <form class="sort-by-form">
                <p>Sort by: </p>
                <select name="sort-options">
                    <option disabled selected value="">Sort By</option>
                    <option value="attack">Attack</option>
                    <option value="defense">Defense</option>
                </select>
            </form>
        `;
    }
}

export default Sort;