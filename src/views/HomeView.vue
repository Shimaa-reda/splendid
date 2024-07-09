<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <AppHeader/>
  </div>
</template>

<script>
import AppHeader from './AppHeader.vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    AppHeader
    
  }
}
</script>
