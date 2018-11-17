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
  },
  head() {
    return {
      title: "voze-co"
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=PT+Serif:400,700');
@import url('https://fonts.googleapis.com/css?family=Tinos:400,700');

@import url('https://fonts.googleapis.com/css?family=Source+Serif+Pro:600,700');


@font-face {
  font-family: 'Adam.cg';
  src: url('https://s3.eu-central-1.amazonaws.com/www.voze.co/fonts/ADAM.CG.otf');
}

html, body {
  padding: 0px;
  margin: 0px;
  background-color: white;
}

body {
  color: rgba(0,0,0,.84);
  font-family: 'PT Serif', serif;
}

h1, h2, h3, h4, h5, h6 {
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Source Serif Pro', serif;
  font-weight: 600;
  color:rgb(50, 54, 72);
}

img {
  max-width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}

h1 {
  font-size: 38px;
  font-family: 'Source Serif Pro', serif;
  font-weight: 700;
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
  border-bottom: 2px solid #3498db;
  color:rgb(12, 12, 12);
}
a:visited {border-bottom: 2px solid #2980b9;}
a:hover {color:rgb(12, 12, 12);}
a:active {color:rgb(12, 12, 12);}

blockquote {
  border-left: lightskyblue 2px solid;
  padding-left: 10px;
  margin-left: 20px;
}

.container {
  padding: 10px 8vw;
  margin: 0px;
  display: block;
  margin-bottom: 60px;
  margin-left: auto;
  margin-right: auto;
  max-width: 750px;
}

[v-cloak] { display: none; }
</style>
