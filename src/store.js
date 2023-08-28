import { reactive } from "vue";
import axios from "axios";

export const store = reactive({
    searchbarResults: [],
    searchText: "",
});

/**
Data una query effettua una chiamata al server e salva i dati della risposta in "searchbarResults"
 * @param {String} searchText 
 */
export function fetchData(searchText) {
    const url = "https://api.themoviedb.org/3/search/movie";

    axios.get(url, {
        params: {
            api_key: "1199fa75737e691eaf0bcfed3511fee1",
            language: "it-IT",
            query: searchText,
        }
    }).then((response) => {
        store.searchbarResults = response.data.results;
    }).catch((error) => {
        console.error("Si è verificato un errore", error);
    });
}