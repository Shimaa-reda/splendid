<template>
  <div class="container" >

    <!-- <pre>We believe we can change the
 dynamics of <span class="gradient-text">healthcare marketing</span></pre> -->
    <!-- <button class="text-uppercase passion"><img src="../assets/passion icon.png" alt=""> passion</button> -->
    <h1 >We believe we can change the  </h1>
    <h1>dynamics of <span class="gradient-text">healthcare marketing</span></h1>

    <p class="text-black-50 mt-4">Empowering brands with innovative marketing solutions and unparalleled expertise.</p>
    
    
  </div>
</template>

<script>
export default {
  name: "passionComponent",
}
</script>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap'); */
h1{
    font-weight: bold;
    color: #002347;
    line-height: 1.4;
   
    
}
.passion{
    background-color: white;
    border-radius: 10px;
    border: 1px solid #002347;
   
    color: #F16A23;
    
    
}
.container{
    padding: 100px;
    border: 1px solid black;
    
    
}
.gradient-text {
  background: linear-gradient(to right, #002347, #F16A23);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}

</style>


