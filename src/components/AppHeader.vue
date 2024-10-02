<template>
  <div class="header">
    <nav :class="['navbar', 'navbar-expand-lg', 'navbar-light', 'custom-navbar', { 'fixed-navbar': isFixed }]" ref="navbar">
      <div class="container-fluid">
        <a class="navbar-brand ms-3 text-uppercase ps-5" href="#">
          <img src="../assets/splendid-logo.png" alt="Logo">
        </a>
        <button
          class="navbar-toggler"
          type="button"
          @click="toggleNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ 'show': isNavbarOpen }" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item">
              <a href="#" class="nav-link active" @click.prevent="scrollToSection('about')">About Us</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="scrollToSection('services')">Services</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="scrollToSection('clients')">Clients</a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link" @click.prevent="scrollToSection('joinUs')">Join Us</a>
            </li>
          </ul>
          <button class="contact-btn" @click="showModal = true">Contact Us</button>
        </div>
      </div>
    </nav>
    <ContactModal :visible="showModal" @close="showModal = false" />
  </div>
</template>

<script>
import ContactModal from './ContactModal.vue';

export default {
  name: "AppHeader",
  components: {
    ContactModal
  },
  data() {
    return {
      showModal: false,
      isNavbarOpen: false,
      isFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    toggleNavbar() {
      this.isNavbarOpen = !this.isNavbarOpen;
    },
    scrollToSection(sectionId) {
      console.log('Scrolling to section:', sectionId);
      this.$nextTick(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const navbarHeight = this.$refs.navbar.offsetHeight;
          const sectionPosition = section.offsetTop;
          const offsetPosition = sectionPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      });
    },
    handleScroll() {
      this.isFixed = window.scrollY > 50;
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
  margin: 0 10px; 
}

.custom-navbar {
  min-height: 40px; 
  padding: 1rem 1rem; 
  transition: background-color 0.3s ease;
  background-color: white; }

.fixed-navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: linear-gradient(to right, #FFC371, #002347);
}

.custom-navbar .navbar-brand {
  line-height: 40px; 
}

.custom-navbar .nav-link {
  line-height: 40px;
  color: #002347; 
}

.custom-navbar .nav-link.active {
  color: #002347;
}
.navbar-toggler-icon{
  border: #F16A23;
}
.contact-btn {
  background: linear-gradient(to bottom, #FFC371, #F16A23);
  border: none;
  color: white;
  padding: 0.375rem 0.75rem; 
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1rem; 
  cursor: pointer;
  border-radius: 5px;
  line-height: 1.5; 
}

.custom-navbar .contact-btn {
  margin-left: auto;
}
/* .navbar-toggler.active
{
  border: 2px solid #F16A23 !important;
} */
</style>
