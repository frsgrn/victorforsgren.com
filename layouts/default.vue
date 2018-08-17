<template>
  <div>
    <nav-bar></nav-bar>
    <nuxt/>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar.vue'

export default {
  components: {
    NavBar
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=PT+Serif");
@import url("https://fonts.googleapis.com/css?family=Noto+Serif");

@font-face {
  font-family: 'Adam.cg';
  src: url('../static/fonts/ADAM.CG.otf');
}
@font-face {
  font-family: 'GothamRounded-Medium';
  src: url('../static/fonts/gotham/GothamRounded-Medium.otf');
}
@font-face {
  font-family: 'GothamRounded-Bold';
  src: url('../static/fonts/gotham/GothamRounded-Bold.otf');
}

html, body {
  padding: 0px;
  margin: 0px;
}

body {
  background-color: white;
  color: rgba(0,0,0,.84);
  font-family: 'PT Serif', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Times New Roman', Times, serif;
  font-weight: 700;
  color:rgba(0, 0, 0, 0.84);
}

img {
  max-width: 100%;
}

h1 {
  font-size: 40px;
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 25px;
}

blockquote {
  border-left: lightskyblue 2px solid;
  padding-left: 10px;
  margin-left: 20px;
}

.container {
  padding: 15px;
  margin: 0px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  max-width: 750px;
}

[v-cloak] { display: none; }
</style>

