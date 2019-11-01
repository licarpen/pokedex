import Component from '../Component.js';

class Pagination extends Component{
    renderHTML(){
        return `
        <div>  
            <p class="paging">
            <button class="prev" disabled>◀</button>
            <span>Page 1 of 5</span>
            <button class="next">▶</button>
            </p>
        </div>
        `;
    }
}

export default Pagination;