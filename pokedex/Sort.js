import Component from '../Component.js';

class Sort extends Component{
    
    onRender(form){

        form.addEventListener('submit', event => {
            event.preventDefault();
            // create formData object
            const formData = new FormData(form);
            // get current query string (no #)
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', 1);
            // add sort here
            searchParams.delete('height', formData.get('min-height'));
            searchParams.delete('type');
            searchParams.delete('pokemon');

            // reset page to 1
           // searchParams.set('page', 1);
            window.location.hash = searchParams.toString();
        });
    }
    
    renderHTML(){
        return `
        <form class="sort-by-form">
                <p>Sort by: </p>
                <select name="sort-options">
                    <option value="Name">Name</option>
                    <option value="Type">Type</option>
                    <option value="Attack">Attack</option>
                    <option value="Defense">Defense</option>
                </select>
            </form>
        `;
    }
}

export default Sort;