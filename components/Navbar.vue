<template>
  <div class="navbar">
    <ul class="links">
          <li><nuxt-link to="/">victorforsgren</nuxt-link></li>
          <li><nuxt-link to="/r/list">läslista</nuxt-link></li>
    </ul>  
  </div>
</template>

<style scoped>
li {
  display: inline-block;
}

.navbar li a {
  display: block;
  text-align: center;
  margin: 9px;
  text-decoration: none;
  padding: 3px;
  font-size: 20px;
  border-color: rgba(0,0,0,0);
  color: rgb(50, 54, 72);
  font-family: "Tinos", serif;
  transition: border-color 0.3s ease-in-out;
}

.navbar li a:hover {
  border-bottom: 2px solid #3498db;
  margin-bottom: -1px;
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

