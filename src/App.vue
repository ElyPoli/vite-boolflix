<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import MoviesList from "./components/MoviesList.vue";
import TvSeriesList from "./components/TvSeriesList.vue";

export default {
    components: {
        TheHeader,
        TheFooter,
        MoviesList,
        TvSeriesList,
    }
}
</script>

<template>
    <TheHeader></TheHeader>
    <main>
        <MoviesList></MoviesList>
        <TvSeriesList></TvSeriesList>
    </main>
    <TheFooter></TheFooter>
</template>

<style lang="scss"></style>
