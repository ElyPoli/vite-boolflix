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
    <div class="my-search-form d-flex">
        <input class="form-control me-2" placeholder="Search" v-model="store.searchText"
            @keyup.enter="fetchData(store.searchText)">
        <button class="btn my-search-btn" type="submit" @click="fetchData(store.searchText)">Search</button>
    </div>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;

.my-search-form {
    .form-control {
        background-color: $grey;
        color: $white;
        border: none;
        padding: 0.2rem 0.75rem;
        min-width: 130px;

        &:hover {
            border-color: $white;
            box-shadow: 0 0 0 0.18rem rgba(237, 237, 235, 0.25);
        }
    }

    .my-search-btn {
        color: $dark-red;
        font-weight: bold;
        background-color: $white;
        border: none;
        transition: all .4s;

        &:hover {
            //transform: scale(1.05);
            color: $white;
            background-color: $dark-red;
        }

        &:focus {
            transform: scale(.95);
            color: $white;
            background-color: $dark-red;
        }
    }
}
</style>
