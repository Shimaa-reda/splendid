<template>
  <div class="footer">
    
    <div class="container">
      <div class="row mt-5">
        <div class="col-lg-3 col-md-3 col-sm-12 ">
          
          <img src="../assets/splendid-logo.png" alt="">
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 mt-5">
          <div class="links">
            <h4>Important Links</h4>
            <ul class="list-unstyled lh-lg">
              <!-- <li>About Us</li>
              <li>Services</li>
              <li>Clients</li>
              <li>Join Us</li>
              <li>Contact Us</li> -->
               <li><a href="#" class="nav-link active" @click.prevent="scrollToSection('about')">About Us</a></li>
              <li> <a href="#" class="nav-link active" @click.prevent="scrollToSection('service')">Service</a></li>
              <li><a href="#" class="nav-link active" @click.prevent="scrollToSection('clients')">Clients</a></li>
              <li><a href="#" class="nav-link active" @click.prevent="scrollToSection('joinUs')">Join Us</a></li>
              <li><a class="nav-link activ contact-btn" @click="showModal = true">Contact Us</a></li>
              
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12 mt-5">
          <div class="links">
            <h4>Policy</h4>
            <ul class="list-unstyled lh-lg">
              <li>ABC Policy</li>
              <li>Terms & Conditions</li>
              <li>Work Healthy & Safety</li>
              <li>Data Privacy Policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <hr>

    <div class="container">
      <section class="p-3 pt-0">
        <div class="row d-flex align-items-center">
          <div class="col-12 text-center">
            <div class="p-3">
              <div>&copy; <span>2024 SPLENDID ADS, All Rights Reserved</span></div>
            </div>
          </div>
          <div class="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"><i class="fab fa-facebook"></i></a>
            <a class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"><i class="fab fa-pinterest"></i></a>
            <a class="btn btn-link btn-floating btn-lg text-body m-1" href="#!" role="button"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </section>
    </div>

   
  </div>
   <ContactModal :visible="showModal" @close="showModal = false" />
</template>

<script>
import ContactModal from './ContactModal.vue';
export default {
  name: "AppFooter",
  components:{
    ContactModal
  },
   data() {
    return {
       showModal: false,
    }
  },
   methods: {

    handleScroll() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
        navbar.classList.add('fixed-navbar');
      } else {
        navbar.classList.remove('fixed-navbar');
      }
    },
   
   scrollToSection(sectionId) {
  console.log('Scrolling to section:', sectionId);
  this.$nextTick(() => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('.navbar').offsetHeight;
      const sectionPosition = section.offsetTop;
      const offsetPosition = sectionPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  });
}

  }
};
</script>

<style scoped>
.footer {
  background-color: #002347;

  padding-top: 70px;
  color: white;
}


.text-center {
  text-align: center !important;
}
h4{
    color: #FF9366;

}

li:hover a{
    color: #FF9366;
    cursor: pointer;
}
</style>
