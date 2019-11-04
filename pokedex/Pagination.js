import Component from '../Component.js';

class Pagination extends Component{
    
    onRender(dom){
        const previous = dom.querySelector('.previous');
        console.log(previous);
        const next = dom.querySelector('.next');
        console.log(next);
        let page = 1;

        if (!previous) {
            console.log('I got inside');
            return;
        }

        console.log('and then I ended up here...');



        function updateControls() {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);

            // make this into a function - but where to put it?
            const pageNum = parseInt(searchParams.get('page'));
            isNaN(pageNum) ? page = 1 : page = pageNum;
        }

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });

        function updatePage(increment) {
            const queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchParams.set('page', page + increment);
            // update url with new hash to trigger new api fetch!
            window.location.hash = searchParams.toString();
        }

        previous.addEventListener('click', () => {
            updatePage(-1);
        });
        
        next.addEventListener('click', () => {
            updatePage(1);
        });
    }

    renderHTML(){
        const perPage = 20;
        const count = this.props.count;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        let page = 1;
        // convert page string to number
        const pageNum = parseInt(searchParams.get('page'));
        // not sure this is needed here
        isNaN(pageNum) ? page = 1 : page = pageNum;

        if (!count) {
            return /*html*/`
                <p class="pagination">No results were found.  Try another search and be certain to use lowercase for name and type.</p>
            `;
        }
        // calculate last page number
        const lastPage = Math.ceil(count / perPage);

        // disable back button if 1st page and disable next button if last page
        return `
        <div>  
            <p class="pagination">
                <button class="previous" ${page === 1 ? 'disabled' : ''}>◀</button>
                <span>Page ${page} of ${lastPage}</span>
                <button class="next" ${page === lastPage ? 'disabled' : ''}>▶</button>
            </p>
        </div>
        `;
    }
}

export default Pagination;