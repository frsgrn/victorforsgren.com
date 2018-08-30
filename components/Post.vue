<template>
    <div>
        <h1>{{ post.meta.title }}</h1>
        <div class="post" v-html="post.content" v-cloak></div>
    </div>
</template>

<style>
    .post {
        width: 100%;
    }
</style>

<script>
import { getPost } from '../assets/post.js'

export default {
    data () {
        return {
            post: {
                content: "",
                meta: {}
            }
        }
    },
    props: ["postId"],
    beforeMount() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            this.post = await getPost(this.postId)
        }
    }, 
    head() {
        return {
            title: this.post.meta.title
        }
    }
}
</script>

