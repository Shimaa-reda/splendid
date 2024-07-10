<template>
  <div class="home">
   <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
     <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <AppHeader/>
    <passion/>
    <about/>
    <join-section/>
  </div>
</template>

<script>
import About from '@/components/About.vue'
import AppHeader from '../components/AppHeader.vue'
import Passion from '../components/Passion.vue'
import JoinSection from '@/components/JoinSection.vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    AppHeader,
    Passion,
    About,
    JoinSection
    
  }
}
</script>
