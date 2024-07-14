<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light custom-navbar">
      <div class="container-fluid">
        <a class="navbar-brand ms-3 text-uppercase ps-5" href="#">
          <img src="../assets/splendid-logo.png" alt="">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Services</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Clients</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Join Us</router-link>
            </li>
          </ul>
          <!-- <button class="contact-btn">Contact Us</button> -->
          <button class="contact-btn" @click="showModal = true">Contact Us</button>
        </div>
      </div>
    </nav>
     <ContactModal :visible="showModal" @close="showModal = false" />
    <!-- <header class="hero-header"></header> -->
  </div>
</template>

<script>
import ContactModal from './ContactModal.vue';
export default {

  name: "AppHeader",
   components:{
    ContactModal
  },
  data() {
    return {
       showModal: false,
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {

    handleScroll() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('fixed-navbar');
      } else {
        navbar.classList.remove('fixed-navbar');
      }
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

.navbar-brand {
  color: #0d5eba;
  font-size: 30px;
  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;
}

.navbar-nav .nav-item {
  margin: 0 10px; /* Add space between each navigation item */
}

/* Custom CSS to increase navbar height */
.custom-navbar {
  min-height: 40px; /* Adjust this value to increase height */
  padding: 1rem 1rem; /* Adjust padding for more spacing inside the navbar */
  transition: background-color 0.3s ease;
  background-color: white; /* Initial background color */
}

.custom-navbar.fixed-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(to right, #FFC371, #002347);
}

.custom-navbar .navbar-brand {
  line-height: 40px; /* Center align the brand vertically */
}

.custom-navbar .nav-link {
  line-height: 40px; /* Center align the nav links vertically */
  color: #002347; /* Set the color of the nav links */
}

.custom-navbar .nav-link.active {
  color: #002347; 
}

.contact-btn {
  background: linear-gradient(to bottom, #FFC371, #F16A23);
  border: none;
  color: white;
  padding: 0.375rem 0.75rem; /* Adjust padding to match the navbar */
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem; /* Ensure font size matches navbar links */
  cursor: pointer;
  border-radius: 5px;
  line-height: 1.5; /* Align the button vertically with the navbar */
}

/* Centering the navbar links and aligning the button to the right */
/* .navbar-nav {
  display: flex;
  justify-content: center;
  flex: 1;
}

.collapse.navbar-collapse {
  display: flex;
  align-items: center;
} */

.custom-navbar .contact-btn {
  margin-left: auto; /* Push the button to the right */
}

/* .hero-header {
  height: 200px;
} */
</style>
