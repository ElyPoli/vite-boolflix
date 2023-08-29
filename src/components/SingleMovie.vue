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
    <div class="card">
        <img v-bind:src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`" v-bind:alt="movie.title">
        <div class="overlay d-flex align-items-center text-center text-white">
            <ul class="list-group">
                <li class="list-group-item">
                    <span class="fw-bold">Titolo: </span> {{ movie.title }}
                </li>
                <li class="list-group-item">
                    <span class="fw-bold">Titolo Originale: </span> {{ movie.original_title }}
                </li>
                <li class="list-group-item">
                    <span class="fw-bold">Lingua: </span>
                    <lang-flag v-bind:iso="movie.original_language"></lang-flag>
                </li>
                <li class="list-group-item">
                    <span class="fw-bold">Voto: </span>
                    <i v-for="(star, i) in transformedVote(movie.vote_average)" :key="i"
                        v-bind:class="star ? 'fa-solid star-active fa-star' : 'fa-regular fa-star'"></i>
                </li>
                <li class="list-group-item">
                    <span class="fw-bold">Overview: </span> {{ movie.overview.substring(0, 50)+"..." }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
