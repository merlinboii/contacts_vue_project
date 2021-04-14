<template>
  <div>
      <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
      <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
      <!-- <h1>EGCO427</h1> -->
      <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="#">
      <img src="./assets/logo.png" width="30" height="30" class="d-inline-block align-top" alt="">
        EGCO427
       </a>
      </nav>
      <router-view/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
