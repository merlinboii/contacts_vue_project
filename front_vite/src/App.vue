<template>
  <div>
      <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
      <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
      <!-- <h1>EGCO427</h1> -->
      <nav class="navbar navbar-light" style="background-color:#564C2C;">
      <a class="navbar-brand" href="/contacts" style="color:#FFFFFF;">
      <img src="./assets/icons8-happy-96@2x.png" width="30" height="30" class="d-inline-block align-top" alt="">
        Contact
       </a>
      </nav>
      <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>
