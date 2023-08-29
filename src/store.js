import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    searchbarResultsMovies: [],
    searchbarResultsTvSeries: [],
    searchText: "",
    searchDone: false,
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