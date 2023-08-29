<script>
import { store } from "../store.js";
import SingleTvSeries from "./SingleTvSeries.vue";

export default {
    components: {
        SingleTvSeries,
    },
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <main class="container pt-5 pb-5">
        <h3 class="text-uppercase fw-bold" v-if="store.searchDone === true">Tv Series:</h3>
        <div class="row row-cols-3 gy-4">
            <div class="col" v-for="singleTvSeries in store.searchbarResultsTvSeries" :key="singleTvSeries.id">
                <SingleTvSeries v-bind:tvSeries="singleTvSeries"></SingleTvSeries>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
