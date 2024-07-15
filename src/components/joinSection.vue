<template>
  <div class="container">
  
       <div 
        class="container d-flex flex-row justify-content-center align-items-center mb-5"
      >
        <div class="section d-flex flex-column justify-content-center align-items-center " id="joinUs">
          <p>
            Join us in our mission to innovate and create outstanding marketing
            and advertising solutions.
          </p>
          
           <button class="join-btn" @click="showModal = true">Join Us</button>

        </div>
      </div>

    

      
  </div>

      
 

    <!-- Modal -->
  
    <JoinModal :visible="showModal" @close="showModal = false" />
  
</template>

<script>
import JoinModal from "./JoinModal.vue";
export default {
  name: "joinSection",
  components: {
    JoinModal,
  },
  data() {
    return {
      showModal: false,
      
    };
  },
};
</script>

<style scoped>
body {
  align-items: center;
  background: #fff;
  display: flex;
  height: 100vh;
  justify-content: center;
}




.section {
  background: linear-gradient(to left, #537895, #002347);
  border-radius: 20px;
  height: 150px;
  width: 900px;
  margin-bottom: 0; /* Adjust as needed */
}

p {
  color: #ffffff;
}

.join-btn {
  background-color: white;
  color: #f16a23;
  border: none;
  padding: 10px;
  border-radius: 10px;
  font-weight: bold;
}
</style>
