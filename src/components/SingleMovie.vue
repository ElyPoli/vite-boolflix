<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    props: {
        movie: {
            type: Object,
        },
    },
    components: {
        LangFlag,
    },
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
            <span class="text-uppercase fw-bold">Voto: </span> {{ movie.vote_average }}
        </li>
    </ul>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
