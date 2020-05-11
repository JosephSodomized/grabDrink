export default class Render {
    constructor(id) {
        this.id = id;
    }

    async getSelectedResult() { //jeżeli id klikniętego elmentu = id zdjęcia
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${this.id}`)
            .then(results => {
                var res = results.json();
                return res;
            })
            .then(results => {
                this.result = results.drinks[0];
                this.drinkImg = results.drinks[0].strDrinkThumb;
                this.instruction = results.drinks[0].strInstructions;
            })
            .catch(error => {
                console.log(error);
            });
    }

    getRecipe() {
        var ingKeys = Object.keys(this.result)
        let ingredients, measures;
        let ingIndexes = [];
        let mesIndexes = [];

        ingKeys.forEach((el) => {
            if (el.includes('strIngredient')) {
                ingIndexes.push(ingKeys.indexOf(el));
            } else if (el.includes('strMeasure')) {
                mesIndexes.push(ingKeys.indexOf(el));
            }
        })

        /* 
       --------------------------------
       */
        /// ingredients
        var ingFilter = this.clearUndefined(ingIndexes);
        ingredients = this.getRecipeElements(ingFilter);

        /* 
        --------------------------------
        */
        //messures
        var mesFilter = this.clearUndefined(mesIndexes);
        measures = this.getRecipeElements(mesFilter);
        // -----------------------------
        let obj = {
            ing: ingredients,
            mes: measures
        }
        this.recipe = obj;
    }

    clearUndefined(arr) {
        var indexes = arr.filter(el => {
            return el != undefined
        })
        return indexes
    }

    getRecipeElements(indexes) {
        var ingVal = Object.values(this.result);
        var arr = [];
        for (let index = 0; index < indexes.length; index++) {
            const element = indexes[index];
            if (ingVal[element] != null) { ///jeżeli nie równa się null to dodaj wartość o tym indeksie do tablicy
                arr.push(ingVal[element])
            }
        }
        return arr;
    }
} 