<template>
  <div class="home">
   <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
     <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <AppHeader/>
    <passion/>
    <about/>
    <!-- <VerticalTabComponent /> -->
    <vertical-tab-component/>
    <ClientSlider/>
    <join-section/>
    
    <app-footer/>
  </div>
</template>

<script>
import About from '@/components/About.vue'
import AppHeader from '../components/AppHeader.vue'
import Passion from '../components/Passion.vue'

import AppFooter from '@/components/AppFooter.vue'
import ClientSlider from '@/components/ClientSlider.vue'
import JoinSection from '@/components/joinSection.vue'
import VerticalTabComponent from '@/components/VerticalTabComponent.vue'
// import VerticalTabComponent from '@/components/joinSection.vue'
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {
    AppHeader,
    Passion,
    About,
  
    AppFooter,
    ClientSlider,
    JoinSection,
    VerticalTabComponent,
    // VerticalTabComponent
    
    
  }
}
</script>
