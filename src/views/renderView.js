import { elements } from './base'

export const clearPicture = () => {
    elements.infoList.innerHTML = '';
}

//stara metoda, która porównywała kliknięty indeks z state.search.result
// export const getPicture = (results, clickedId) => { //jeżeli id klikniętego elmentu = id zdjęcia
//     for (let index = 0; index < results.length; index++) {
//         const element = results[index];
//         if (element.idDrink == clickedId) {
//             return element; //to uruchom funkcję z klikniętym parametrem
//         }
//     }
// }

export const renderPicture = el => {
    const html = `<img src="${el.strDrinkThumb}" />`;
    elements.infoList.insertAdjacentHTML('beforeend', html); 
}