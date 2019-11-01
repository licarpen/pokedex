import Component from '../Component.js';

class Filter extends Component{
    renderHTML(){
        return `
        <form class="filter-by-height-form">
        <p>Filter By Height: </p>
        <label for="min-height">Min: </label>
        <input name="min-height" type="number">
        <label for="max-height">Max: </label>
        <input name="max-height" type="number">
        <button>🔍</button>  
    </form>
        `;
    }
}

export default Filter;