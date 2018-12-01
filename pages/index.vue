<template>
  <section class="container">
    <div id="outer">
      <div id="inner">
        <img src="logo-grand.png" id="logo"/>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style>
  #outer {
    position: relative;
    height: 70vh;
    overflow: initial;
  }
  #inner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>