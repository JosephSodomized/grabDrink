import * as base from './base'

export const clearPicture = () => {
    base.elements.infoList.innerHTML = '';
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
    console.log(el)
    const html = `
    <div id="picBox">
    <img src="${el.drinkImg}" class="card-img-top" alt="...">
    </div>
            <div class="card-body">
              <h5 class="card-title">${el.result.strDrink}</h5>
              <p class="card-text">${shortInstructions(el.instruction)}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>

    `;
    base.elements.infoList.insertAdjacentHTML('beforeend', html); 
}

const shortInstructions = (text) => {
    var arr = base.cutToWords(text);
    return arr.length <= 10 ? arr.join(' ') : `${arr.slice(0, 10).join(' ')} <a id="shortTextLink" href=#>(...)</a>`;
}

export const showShortcutText = (instruction) => {
    document.querySelector('.card-text').innerHTML = instruction;
}