import { elements } from './base'

export const getInput = () => {
    return elements.searchInput.value;
}

export const clearInput = () => {
    elements.searchInput.value = '';
}

export const clearList = () => {
    elements.resultList.innerHTML = '';
}

const renderRecipe = drinks => {
    const html = `
    <li id="${drinks.idDrink}">${drinks.strDrink}</li>
    `;
    elements.resultList.insertAdjacentHTML('beforeend', html);
}


export const renderResults = drinks => {
    drinks.forEach(renderRecipe);
}

