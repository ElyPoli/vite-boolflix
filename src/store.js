import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    searchbarResultsMovies: [],
    searchbarResultsTvSeries: [],
    searchText: "",
    searchDone: false,
    voteStars: [false, false, false, false, false],
});

/**
Data una query richiama la funzione che effettua la chiamata al server
 * @param {String} searchText 
 */
export function fetchData(searchText) {
    serverCall("https://api.themoviedb.org/3/search/movie", "searchbarResultsMovies", searchText);
    serverCall("https://api.themoviedb.org/3/search/tv", "searchbarResultsTvSeries", searchText);
    store.searchDone = true;
}

/**
 * Effettua una chiamata al server a un URL specifico per ottenere dati in base alla query
 * @param {String} urlSearch 
 * @param {String} saveAnswer 
 * @param {String} searchText 
 */
export function serverCall(urlSearch, saveAnswer, searchText) {
    axios.get(urlSearch, {
        params: {
            api_key: "1199fa75737e691eaf0bcfed3511fee1",
            language: "it-IT",
            query: searchText,
        }
    }).then((response) => {
        store[saveAnswer] = response.data.results;
    }).catch((error) => {
        console.error("Si è verificato un errore", error);
    });
}

/**
 * Trasforma il voto in formato da 1 a 5 e restituisce un array booleano di 5 elementi
 * @param {Number} vote 
 * @returns {Array}
 */
export function transformedVote(vote) {
    let voteNumber = Math.ceil(vote / 2);
    vote = [false, false, false, false, false];

    for(let i = 0; i < voteNumber; i++) {
        store.voteStars[i] = true;
        vote[i] = true;
    }

    return vote;
}