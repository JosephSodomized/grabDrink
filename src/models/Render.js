export default class Render {
    constructor(id) {
        this.id = id;
    }

    async getSelectedResult(){ //jeżeli id klikniętego elmentu = id zdjęcia
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`)
        .then(results => {
            var res = results.json();
            return res;
        })
        .then(results => {
            console.log(results);
            this.result = results.drinks[0];
        })
        .catch(error => {
            console.log(error);
        });
    }
    

} 