<script>
import SearchBar from "./SearchBar.vue";

export default {
    components: {
        SearchBar,
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary ps-3 pe-3">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">BoolFlix</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Serie TV</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Film</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Originali</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Aggiunti di recente</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">La mia lista</a>
                        </li>
                    </ul>
                    <SearchBar></SearchBar>
                </div>
            </div>
        </nav>
    </header>
</template>

<style lang="scss">
@use "../styles/partials/variables" as *;

header {
    .bg-body-tertiary {
        background-color: $black !important;
    }

    .navbar-brand {
        color: $red;
        font-size: 2rem;
        text-transform: uppercase;
        font-weight: bold;

        &:hover, &:focus {
            color: $red;
        }
    }

    .nav-link {
        color: $white;

        &:hover {
            color: $white;
            text-decoration: underline;
            text-underline-offset: 5px;
        }

        &:focus {
            color: $white;
        }
    }

    .navbar-nav .nav-link.active {
        color: $red;
        text-decoration: underline;
        text-underline-offset: 5px;
    }

    .navbar-toggler {
        background-color: $grey;
    }
}
</style>
