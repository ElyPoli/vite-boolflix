<script>
import { store } from "../store.js";
import SingleMovie from "./SingleMovie.vue";

export default {
    components: {
        SingleMovie,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <div class="container pt-2 pb-4">
        <h3 class="fw-bold section-title" v-if="store.searchDone === true">Film</h3>
        <div v-if="store.noMoviesFound === false">
            <div class="row row-cols-2 row-cols-lg-6 row-cols-md-4 gy-3">
                <div class="col" v-for="singleMovie in store.searchbarResultsMovies" :key="singleMovie.id">
                    <SingleMovie v-bind:movie="singleMovie"></SingleMovie>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="fw-bold section-title fs-6">...Nessun film corrisponde alla ricerca effettuata...</p>
        </div>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
