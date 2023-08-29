<script>
import LangFlag from 'vue-lang-code-flags';
import { store, transformedVote } from "../store.js";

export default {
    props: {
        movie: {
            type: Object,
        },
    },
    data() {
        return {
            store,
        }
    },
    components: {
        LangFlag,
    },
    methods: {
        transformedVote,
    }
}
</script>

<template>
    <ul class="list-group">
        <li class="list-group-item">
            <span class="text-uppercase fw-bold">Titolo: </span> {{ movie.title }}
        </li>
        <li class="list-group-item">
            <span class="text-uppercase fw-bold">Titolo Originale: </span> {{ movie.original_title }}
        </li>
        <li class="list-group-item">
            <span class="text-uppercase fw-bold">Lingua: </span>
            <lang-flag v-bind:iso="movie.original_language"></lang-flag>
        </li>
        <li class="list-group-item">
            <span class="text-uppercase fw-bold">Voto: </span>
            <i v-for="(star, i) in transformedVote(movie.vote_average)" :key="i"
                v-bind:class="star ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
        </li>
    </ul>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
