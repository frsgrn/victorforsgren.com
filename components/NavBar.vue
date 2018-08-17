<template>
  <ul class="navbar">
    <div class="links">
        <li><nuxt-link to="/">Hem</nuxt-link></li>
        <li><nuxt-link to="/r/om">om</nuxt-link></li>
        <li><nuxt-link to="/r/lista">läslista</nuxt-link></li>
    </div>
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
  display: inline-block;
}

li a {
  display: block;
  text-align: center;
  padding: 12px;
  border-bottom: none;
  text-decoration: none;
  font-size: 20px;
  color: rgb(51, 51, 51);
}

li a:hover {
  color: gray;
}

.links {
  max-width: 750px;
  text-align: left;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.navbar{
  position: fixed;
  bottom: 0px;
  padding: 0px;
  width: 100%;
  background-color: rgb(247, 247, 247);
}

</style>

