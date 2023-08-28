<script>
import { store, fetchData } from "../store.js";

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        fetchData,
    },
}
</script>

<template>
    <div class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" v-model="store.searchText"
            @keyup.enter="fetchData(store.searchText)">
        <button class="btn btn-success" type="submit" @click="fetchData(store.searchText)">Search</button>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;
</style>
