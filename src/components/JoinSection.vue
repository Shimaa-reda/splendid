<template>
 <div class="container d-flex flex-row justify-content-center align-items-center">
    <div class="section d-flex flex-column justify-content-center align-items-center">
        <p>Join us in our mission to innovate and create outstanding marketing and advertising solutions.</p>
        <button class="join-btn">Join Us</button>
    </div>

    <div class="text" style="height:200px"></div>

 </div>

</template>

<script>
export default {
  name: "joinsectionComponent",
}
</script>
<style scoped>
.section
{
    background: linear-gradient(to left, #537895, #002347);
    border-radius: 20px;
    height: 150px;
    width: 900px;
}
p{
    color: #FFFFFF;
    
}
.join-btn
{
    background-color: white;
    color: #F16A23;
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-weight: bold;

}
</style>
