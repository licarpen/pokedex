import Component from '../Component.js';

class Sort extends Component{
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