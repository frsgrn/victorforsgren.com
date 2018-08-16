<template>
  <section class="container">
    <div class="post" v-html="post" v-cloak></div>
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
      post:null
    }
  },
  beforeMount() {
    this.loadPost(this.$route.params.id)
  },
  methods: {
    async loadPost(id) {
      try {
        let post = await axios.get("/posts/" + id + ".md")
        this.post = marked(post.data)
      } catch(e) {
        this.post = marked("# 404, post not found")
      }
    }
  }
}
</script>

<style>
  .post {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 740px;
    padding: 10px;
    margin-bottom: 20px;
  }
  p {
    font-size: 18px;
  }
  a {
    text-decoration: none;
    border-bottom: 2px solid rgb(0, 184, 0);
  }
  a {color:rgb(12, 12, 12);}      /* unvisited link */
  a:visited {color:rgb(12, 12, 12);}  /* visited link */
  a:hover {color:rgb(12, 12, 12);}  /* mouse over link */
  a:active {color:rgb(12, 12, 12);}
</style>