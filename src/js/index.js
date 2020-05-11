import Search from '../models/Search';
import * as searchView from '../views/searchView';
import * as renderView from '../views/renderView';
import { elements, renderLoader, clearLoader } from '../views/base';
import $ from 'jquery';
import Render from '../models/Render';

const state = {};

const controlSearch = async () => {
    var query = searchView.getInput();

    // 1. Get query
    if (query) {
        state.search = new Search(query);

        // 3. Prepare UI for result
        searchView.clearInput();
        searchView.clearList();
        renderView.clearPicture();

        // 4. Search for recipes
        renderLoader(elements.resultList);
        await state.search.getResults();

        // 5. Render the recipes
        console.log(state.search.result)
        clearLoader();
        searchView.renderResults(state.search.result);

        //6. Show Details

    }
}

elements.searchBtn.addEventListener('click', () => {
    controlSearch();
})
document.addEventListener('keypress', (e) => {
    if (e.keyCode == 13) {
        controlSearch();
    }
})


//////////Render
const controlRender = async (el) => {

    state.render = new Render(el.id);

    //clear the input and photod
    searchView.clearInput();
    renderView.clearPicture();

    //add active class
    if (state.search) searchView.addActive(state.render.id)

    // //get picture zdjęcie
    renderLoader(elements.infoList);
    await state.render.getSelectedResult(); //przekazanie obiektu do funkcji

    //render selected picture
    // clearLoader();

    renderView.renderPicture(state.render);
    state.render.getRecipe();

     //showLong text
     elements.infoList.addEventListener('click', (e) => {
        if(e.target.matches('#shortTextLink')){
            renderView.showShortcutText(state.render.instruction);
        }
    })
}

//render
elements.resultList.addEventListener('click', (e) => {
    controlRender(e.target.closest('li'));
})


