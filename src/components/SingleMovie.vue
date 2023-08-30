<script>
import LangFlag from 'vue-lang-code-flags';
import { store, transformedVote, flagLanguage } from "../store.js";

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
        flagLanguage,
    }
}
</script>

<template>
    <div class="card">
        <img v-bind:src="`https://image.tmdb.org/t/p/w185${movie.poster_path}`" v-bind:alt="movie.title"
            v-if="movie.poster_path">
            <div v-else class="card-without-img">
                <img src="../../public/img/placeholder.png" v-bind:alt="movie.title">
            </div>
        <div class="overlay d-flex align-items-center justify-content-center text-center text-white">
            <ul class="list-group">
                <li class="list-group-item" v-if="movie.title">
                    <span class="fw-bold">Titolo: </span> {{ movie.title }}
                </li>
                <li class="list-group-item" v-if="movie.original_title">
                    <span class="fw-bold">Titolo Originale: </span> {{ movie.original_title }}
                </li>
                <li class="list-group-item" v-if="flagLanguage(movie.original_language)">
                    <span class="fw-bold">Lingua: </span>
                    <lang-flag v-bind:iso="movie.original_language"></lang-flag>
                </li>
                <li class="list-group-item" v-if="movie.vote_average">
                    <span class="fw-bold">Voto: </span>
                    <i v-for="(star, i) in transformedVote(movie.vote_average)" :key="i"
                        v-bind:class="star ? 'fa-solid star-active fa-star' : 'fa-regular fa-star'"></i>
                </li>
                <li class="list-group-item" v-if="movie.overview">
                    <span class="fw-bold">Overview: </span> {{ movie.overview.substring(0, 50) + "..." }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
