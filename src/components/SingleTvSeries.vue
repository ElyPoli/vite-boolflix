<script>
import LangFlag from 'vue-lang-code-flags';
import { store, transformedVote, flagLanguage } from "../store.js";

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
        flagLanguage,
    }
}
</script>

<template>
    <div class="card">
        <img v-bind:src="`https://image.tmdb.org/t/p/w185${tvSeries.poster_path}`" v-bind:alt="tvSeries.name"
            v-if="tvSeries.poster_path">
        <div v-else class="card-without-img">
            <img src="../../public/img/placeholder.png" v-bind:alt="tvSeries.name">
        </div>
        <div class="overlay d-flex align-items-center text-center text-white">
            <ul class="list-group">
                <li class="list-group-item" v-if="tvSeries.name">
                    <span class="fw-bold">Titolo: </span> {{ tvSeries.name }}
                </li>
                <li class="list-group-item" v-if="tvSeries.original_name">
                    <span class="fw-bold">Titolo Originale: </span> {{ tvSeries.original_name }}
                </li>
                <li class="list-group-item" v-if="flagLanguage(tvSeries.original_language)">
                    <span class="fw-bold">Lingua: </span>
                    <lang-flag v-bind:iso="tvSeries.original_language"></lang-flag>
                </li>
                <li class="list-group-item" v-if="tvSeries.vote_average">
                    <span class="fw-bold">Voto: </span>
                    <i v-for="(star, i) in transformedVote(tvSeries.vote_average)" :key="i"
                        v-bind:class="star ? 'fa-solid star-active fa-star' : 'fa-regular fa-star'"></i>
                </li>
                <li class="list-group-item" v-if="tvSeries.overview">
                    <span class="fw-bold">Overview: </span> {{ tvSeries.overview.substring(0, 50) + "..." }}
                </li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
