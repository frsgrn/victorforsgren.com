<template>
  <div class="navbar">
    <ul class="links">
          <li><nuxt-link to="/">voze-co</nuxt-link></li>
          <li><nuxt-link to="/r/list">läslista</nuxt-link></li>
    </ul>  
  </div>
</template>

<style scoped>
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
  color: rgb(50, 54, 72);
  font-family: 'Tiempos-headline-semibold', 'Times New Roman', Times, serif;
  font-weight: 700;
}

li a:hover {
  color: rgb(28, 31, 44);
}

.navbar .links {
  height: auto;
  list-style-type: none;
  margin: 0;
  padding: 0 20px;
  text-align: center;
}

.navbar{
  position: fixed;
  bottom: 0px;
  width: 100%;
  background-color: rgb(247, 247, 247);
  text-align: center;
}

</style>

