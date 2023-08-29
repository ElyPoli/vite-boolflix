<script>
import LangFlag from 'vue-lang-code-flags';

export default {
    props: {
        tvSeries: {
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
            <span class="text-uppercase fw-bold">Voto: </span> {{ tvSeries.vote_average }}
        </li>
    </ul>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
