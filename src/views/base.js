
export const elements = {
    searchInput: document.querySelector('#drinkInput'),
    searchBtn: document.querySelector('#buttonOne'),
    resultList: document.querySelector('#resultList'),
    infoList: document.querySelector('#infoList')
} 

export const elementStrings = {
    loader: 'loader',
}


export const renderLoader = parent => {
    const html = `
        <div class="${elementStrings.loader}">
            <svg>
                <use href="img/icons.svg#icon-cw"></use>
            </svg>
        </div>
    `;
    parent.insertAdjacentHTML('afterbegin', html);
}

export const clearLoader = () => {
    const loader = document.querySelector(`.${elementStrings.loader}`)
    if(loader) loader.parentElement.removeChild(loader);
}