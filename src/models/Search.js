// https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka API
// import axios from 'axios';


export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults(){
        await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${this.query}`)
        .then(results => {
            return results.json();
        })
        .then(results => {
            this.result = results.drinks;
        })
        .catch(error => {
            console.log(error)
        })
    }

} 