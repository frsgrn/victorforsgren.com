<template>
    <div>
        <h1>{{ post.meta.title }}</h1>
        <div class="postView" v-html="post.content" v-cloak></div>
    </div>
</template>

<style>
    .post {
        width: 100%;
    }
</style>

<script>
export default {
    props: ["post"],
    head() {
        return {
            title: this.post.meta.title
        }
    }
}
</script>

