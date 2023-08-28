<script>
import SearchBar from "./SearchBar.vue";

export default {
    components: {
        SearchBar,
    }
}
</script>

<template>
    <header class="d-flex align-items-center justify-content-between bg-secondary p-5 pt-3 pb-3">
        <h1 class="text-uppercase fs-3 m-0 p-0">BoolFlix</h1>
        <SearchBar></SearchBar>
    </header>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
