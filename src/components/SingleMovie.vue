<script>
export default {
    props: {
        movie: {
            type: Object,
        }
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
            <span class="text-uppercase fw-bold">Lingua: </span> {{ movie.original_language }}
        </li>
        <li class="list-group-item">
            <span class="text-uppercase fw-bold">Voto: </span> {{ movie.vote_average }}
        </li>
    </ul>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
