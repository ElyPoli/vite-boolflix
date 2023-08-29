<script>
import LangFlag from 'vue-lang-code-flags';
import { store, transformedVote } from "../store.js";

export default {
    props: {
        tvSeries: {
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
            <img v-bind:src="`https://image.tmdb.org/t/p/w185${tvSeries.poster_path}`" v-bind:alt="tvSeries.title">
        </li>
        <li class="list-group-item">
            <span class="text-uppercase fw-bold">Titolo: </span> {{ tvSeries.name }}
        </li>
        <li class="list-group-item">
            <span class="text-uppercase fw-bold">Titolo Originale: </span> {{ tvSeries.original_name }}
        </li>
        <li class="list-group-item">
            <span class="text-uppercase fw-bold">Lingua: </span>
            <lang-flag v-bind:iso="tvSeries.original_language"></lang-flag>
        </li>
        <li class="list-group-item">
            <span class="text-uppercase fw-bold">Voto: </span>
            <i v-for="(star, i) in transformedVote(tvSeries.vote_average)" :key="i"
                v-bind:class="star ? 'fa-solid fa-star' : 'fa-regular fa-star'"></i>
        </li>
    </ul>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
