<template>
    <div class="postView">
        <h1>{{ post.meta.title }}</h1>
        <div v-html="post.content" v-cloak></div>
    </div>
</template>

<style>
    .postView {
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

