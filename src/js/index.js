import Search from './models/Search';

/**
 * Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */

const state = {};

const controlSearch = async () => {
    const query = `pizza`;

    if (query) {
        state.search = new Search(query);

       await state.search.getResults();

        console.log(state.search.result);
        
    }
}
document.querySelector('.search').addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});
