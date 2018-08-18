<template>
  <section class="container">
    <post v-bind:postId="$route.params.id"></post>
  </section>
</template>

<script>
import Post from '~/components/Post.vue'

export default {
  components: {
    Post
  },
  beforeMount() {
    if(!this.$route.params.id) this.$router.push("/r/lista")
  }
}
</script>