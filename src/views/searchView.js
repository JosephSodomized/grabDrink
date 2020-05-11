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

// odnblokuj to
const renderRecipe = drinks => {
    console.log(drinks)
    const html = `
    <li id="${drinks.idDrink}" class="searchItem text-center">
    <div class="row text-center p-2">
      <div class="col col-md-4 picBox">
        <img class="pic" src="${drinks.strDrinkThumb}" alt="">
      </div>
      <div class="col">
        <div class="row">${drinks.strDrink}</div>
        <div class="row opis"><p>Category: ${drinks.strCategory}</p></div>
      </div>
    </div>
    </li>
         `;
    elements.resultList.insertAdjacentHTML('beforeend', html);
}


export const renderResults = drinks => {
    drinks.forEach(renderRecipe);
}

export const addActive = (id) => {
    var btns = Array.from(document.querySelectorAll('.searchItem'));
    btns.forEach(el=>el.classList.remove('active'))
    
    document.querySelector(`li[id="${id}"]`).classList.add('active');
}