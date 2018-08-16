<template>
  <ul class="navbar">
        <li><nuxt-link to="/">Hem</nuxt-link></li>
        <li><nuxt-link to="/r/om">om</nuxt-link></li>
        <li><nuxt-link to="/r/lista">läs</nuxt-link></li>
    </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  display: inline;
  margin: 0;
  padding: 15px;
}

li {
  float: left;
}

li a {
  display: block;
  text-align: center;
  padding: 8px;
  border-bottom: none;
  text-decoration: none;
  color: rgb(70, 70, 70);
  font-family: 'GothamRounded-Medium', sans-serif;
}

li a:hover {
  color: rgb(150, 59, 59);
}

.navbar{
  position: fixed;
  bottom: 0px;
  padding-top: 5px;
  padding-bottom: 5px;
  width: 100%;
  background-color: rgb(243, 243, 243);
}
</style>

