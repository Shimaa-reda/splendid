<template>
  <div class="home">
   <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
     <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <AppHeader/>
    <passion/>
    <about/>
    <ClientSlider/>
    
    <app-footer/>
  </div>
</template>

<script>
import About from '@/components/About.vue'
import AppHeader from '../components/AppHeader.vue'
import Passion from '../components/Passion.vue'

import AppFooter from '@/components/AppFooter.vue'
import ClientSlider from '@/components/ClientSlider.vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    AppHeader,
    Passion,
    About,
  
    AppFooter,
    ClientSlider
    
  }
}
</script>
,
    ClientSlider