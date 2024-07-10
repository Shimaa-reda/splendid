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
              <li>About Us</li>
              <li>Services</li>
              <li>Clients</li>
              <li>Join Us</li>
              <li>Contact Us</li>
              
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
              <div>&copy; <span>2024 SPLENDID ADS. , All Rights Reserved</span></div>
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
</template>

<script>
export default {
  name: "AppFooter",
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
li:hover{
    color: #FF9366;
    cursor: pointer;
}
</style>
