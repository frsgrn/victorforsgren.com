<template>
  <section class="container">
    <div class="post" v-html="post.content" v-cloak></div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import marked from 'marked'
import axios from 'axios'

export default {
  components: {
    AppLogo
  },
  data() {
    return {
      post: {
        title: "",
        content: ""
      }
    }
  },
  beforeMount() {
    this.loadPost(this.$route.params.id)
  },
  methods: {
    async loadPost(id) {
      try {
        let post = await axios.get("https://files.voze.co/posts/" + id + ".md")
        document.title = post.data.split('\n')[0]
        this.post.title = post.data.split('\n')[0]
        this.post.content = marked(post.data)
      } catch(e) {
        this.post.title = ":("
        this.post.content = marked("# 404, inlägget hittades inte")
      }
    }
  },
  head() {
    return {
      title: this.post.title
    }
  }
}
</script>

<style>
  a {
    font-size: 18px;
    text-decoration: none;
    border-bottom: 2px solid rgb(0, 184, 0);
  }
  a {color:rgb(12, 12, 12);}      /* unvisited link */
  a:visited {color:rgb(12, 12, 12);}  /* visited link */
  a:hover {color:rgb(12, 12, 12);}  /* mouse over link */
  a:active {color:rgb(12, 12, 12);}
</style>