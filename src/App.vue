<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
import MoviesList from "./components/MoviesList.vue";

export default {
    components: {
        TheHeader,
        TheFooter,
        MoviesList,
    }
}
</script>

<template>
    <TheHeader></TheHeader>
    <MoviesList></MoviesList>
    <TheFooter></TheFooter>
</template>

<style lang="scss"></style>
