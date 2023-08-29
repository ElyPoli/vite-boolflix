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
    <div class="container pt-2 pb-4">
        <h3 class="fw-bold section-title" v-if="store.searchDone === true">Serie TV</h3>
        <div class="row row-cols-2 row-cols-lg-6 row-cols-md-4 gy-3">
            <div class="col" v-for="singleTvSeries in store.searchbarResultsTvSeries" :key="singleTvSeries.id">
                <SingleTvSeries v-bind:tvSeries="singleTvSeries"></SingleTvSeries>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
