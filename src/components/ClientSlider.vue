<template>
  <div class="container" id="clients">
    
    <div class="slider"  >
      <h3>Trusted by leading companies worldwide</h3>
      <div class="slide-track">
        <div class="slide" v-for="(image, index) in images" :key="index">
          <img :src="require(`../assets/${image}`)" height="100" width="200" alt="" />
        </div>
        <!-- Repeat the images to ensure infinite scrolling -->
        <div class="slide" v-for="(image, index) in images" :key="'repeat-' + index">
          <img :src="require(`../assets/${image}`)" height="100" width="200" alt="" />
        </div>
      </div>
    </div>

   
    <div class="slider">
      
      <div class="slide-track">
        <div class="slide" v-for="(image, index) in moreImages" :key="index">
          <img :src="require(`../assets/${image}`)" height="100" width="200" alt="" />
        </div>
        <!-- Repeat the images to ensure infinite scrolling -->
        <div class="slide" v-for="(image, index) in moreImages" :key="'repeat-more-' + index">
          <img :src="require(`../assets/${image}`)" height="100" width="200" alt="" />
        </div>
      </div>
    </div>
  </div>

 
</template>

<script>

export default {
  name: "AppSlider",
  components: {
   
  },
  data() {
    return {
      showModal: false,
      images: [
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
      moreImages: [
        "image18.png",
        "image19.png",
        "image20.png",
        "image21.png",
        "image22.png",
        "image23.png",
        "image24.png",
        "image25.png",
        "image26.png",
        "image27.png",
        "image28.png",
        "image29.png",
        "image30.png",
        "image31.png",
        "image32.png",
        "image33.png",
        "image34.png",
      ],
    };
  },
};
</script>

<style scoped>
body {
  align-items: center;
  background: #e3e3e3;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-direction: column;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 17)); 
  }
}

.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 150px; 
  margin: 20px auto;
  overflow: hidden;
  position: relative;
  width: 960px;
}

.slider::before,
.slider::after {
  background: linear-gradient(to right, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 150px; 
  position: absolute;
  width: 200px;
  z-index: 2;
}

.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.slider::before {
  left: 0;
  top: 0;
}

.slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 34); 
}

.slide {
  height: 150px; 
  width: 200px;}
</style>
