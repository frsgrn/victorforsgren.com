<template>
    <div>
    <navbar></navbar>
        <div class="container">
            <h1 v-if="error.statusCode === 404">Kunde inte hitta sidan :(</h1>
            <h1 v-else>Ett fel inträffade :(</h1>
            <nuxt-link to="/">Hem</nuxt-link>
        </div>
    </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
    props: ['error'],
    components: {
        Navbar
    }
};
</script>