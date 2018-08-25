import Search from './models/Search';
import Recipe from './models/Recipe';
import * as searchView from './views/searchView';
import {elements, renderLoader, clearLoader} from './views/base';

/**
 * Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */

const state = {};

const controlSearch = async () => {
    const query = searchView.getInput();

    if (query) {
        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResult);

        try{
            await state.search.getResults();
            clearLoader();

            searchView.renderResults(state.search.result);

        }catch(error){

            alert(error);
            clearLoader();
        }

        
        
    }
}
elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn){
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

const controlRecipe = async () => {
    const id = window.location.hash.replace('#', '');

    if (id) {
        state.recipe = new Recipe(id);

        try{
            await state.recipe.getRecipe();
            state.recipe.parseIngredients();

            state.recipe.calcTime();
            state.recipe.calcServings();

            console.log(state.recipe);

        }catch(error){

            alert(error);

        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

// const r = new Recipe(47746);
// r.getRecipe();
// r.getRecipe().then(result => {
//     console.log(r.ingredients);
//     r.calcTime();
// });
// console.log(r);
// console.log(r.ingredients);