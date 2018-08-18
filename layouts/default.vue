<template>
  <div>
    <navbar></navbar>
    <nuxt/>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'

export default {
  components: {
    Navbar
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
  font-family: 'Tiempos-headline-bold';
  src: url('../static/fonts/tiempos/tiempos-headline-bold.woff2');
}
@font-face {
  font-family: 'Tiempos-headline-semibold';
  src: url('../static/fonts/tiempos/tiempos-headline-semibold.woff2');
}

html, body {
  padding: 0px;
  margin: 0px;
  background-color: white;
}

body {
  color: rgba(0,0,0,.84);
  font-family: 'PT Serif', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Tiempos-headline-semibold', 'Times New Roman', Times, serif;
  font-weight: 500;
  color:rgb(50, 54, 72);
}

img {
  max-width: 100%;
}

h1 {
  font-size: 40px;
  font-family: 'Tiempos-headline-bold';
}

h2 {
  font-size: 30px;
}

h3 {
  font-size: 25px;
}

p {
  font-size: 18px;
}

  a {
    font-size: 18px;
    text-decoration: none;
    border-bottom: 2px solid rgb(0, 184, 0);
  }
  a {color:rgb(12, 12, 12);}      /* unvisited link */
  a:visited {color:rgb(12, 12, 12);}  /* visited link */
  a:hover {color:rgb(12, 12, 12);}  /* mouse over link */
  a:active {color:rgb(12, 12, 12);}

blockquote {
  border-left: lightskyblue 2px solid;
  padding-left: 10px;
  margin-left: 20px;
}

.container {
  padding: 0 8vw;
  margin: 0px;
  display: block;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 750px;
}

[v-cloak] { display: none; }
</style>
