<template>
    <div>
    <navbar></navbar>
        <div class="container">
            <h1>Felkod {{error.statusCode}}</h1>
            <h2 v-if="error.statusCode == 404">"Page not found"</h2>
            <h2 v-else>"{{error.message}}"</h2>
            <p>You're lost, <nuxt-link to="/">click here</nuxt-link> to return home.</p>
        </div>
    </div>
</template>

<script>
import Navbar from "~/components/Navbar.vue";

export default {
    props: ['error'],
    components: {
        Navbar
    },
    head() {
        return {
            title: this.error.statusCode + " - " + this.error.message
        }
    }
};
</script>