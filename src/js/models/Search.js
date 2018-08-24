import axios from 'axios';

// 97cdbbc12323328006fe2d46fb751ba8 API key
// http://food2fork.com/api/search 
// http://food2fork.com/api/get

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try{
            const proxy = `https://cors-anywhere.herokuapp.com/`;
            const key = `97cdbbc12323328006fe2d46fb751ba8`;
            const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            //console.log(this.result);
        }catch(error){
            alert(error);
        }
        
    }

}