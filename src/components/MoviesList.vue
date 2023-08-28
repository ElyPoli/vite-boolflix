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
    <main class="container pt-5 pb-5">
        <div class="row row-cols-3 gy-4">
            <div class="col" v-for="singleMovie in store.searchbarResults" :key="singleMovie.id">
                <SingleMovie v-bind:movie="singleMovie"></SingleMovie>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
