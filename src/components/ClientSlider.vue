<template>
  <div class="container">
  
      <div class="slider" id="clients">
        <h3>Trusted by leading companies worldwide</h3>
      <div class="slide-track">
              <img
                v-for="(image, index) in firstRowImages"
                :key="'row1-' + index"
                :src="require(`@/assets/${image}`)"
                :alt="'Image ' + (index + 1)"
              />
            </div>

            <div class="slide-track">
              <img
                v-for="(image, index) in secondRowImages"
                :key="'row2-' + index"
                :src="require(`@/assets/${image}`)"
                :alt="'Image ' + (index + 19)"
              />
            </div>
      </div>

    

      
  </div>

      
 

    <!-- Modal -->
  
    <JoinModal :visible="showModal" @close="showModal = false" />
  
</template>

<script>
import JoinModal from "./JoinModal.vue";
export default {
  name: "AppSlider",
  components: {
    JoinModal,
  },
  data() {
    return {
      showModal: false,
      firstRowImages: [
        "image1.png",
        "image2.png",
        "image3.png",
        "image4.png",
        "image5.png",
        "image6.png",
        "image7.png",
        "image8.png",
        "image9.png",
        "image10.png",
        "image11.png",
        "image12.png",
        "image13.png",
        "image14.png",
        "image15.png",
        "image16.png",
        "image17.png",
      ],
      secondRowImages: [
        "image1.png",
        "image2.png",
        "image3.png",
        "image4.png",
        "image5.png",
        "image6.png",
        "image7.png",
        "image8.png",
        "image9.png",
        "image10.png",
        "image11.png",
        "image12.png",
        "image13.png",
        "image14.png",
        "image15.png",
        "image16.png",
        "image17.png",
      ],
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


.slider .slide-track {
  animation: scroll 50s linear infinite;
  display: flex;
  width: calc(100% * 2);
}

.slider .slide-track:hover {
  animation-play-state: paused;
}

.slider .slide {
  height: 250px;
  width: 250px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 9));
  }
}

.slider {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}


.slider .slide {
  height: 200px;
  width: 200px;
}
.slide-track img {
  width: calc((100% / 17) - 8px);
  height: auto;
  margin: 0 24px; /* Increased margin for more space */
}


h3 {
  color: #002347;
  font-weight: bold;
  margin-top: 45px;
}


.section {
  background: linear-gradient(to left, #537895, #002347);
  border-radius: 20px;
  height: 150px;
  width: 900px;
  margin-bottom: 0; 
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
