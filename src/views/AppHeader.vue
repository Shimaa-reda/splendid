<template>
  <div class="header">
    <nav class="navbar navbar-expand-lg navbar-light bg-light custom-navbar">
      <div class="container-fluid">
        <a class="navbar-brand ms-3 me-auto text-uppercase ps-5" href="#">Bayside Fine Jewelry</a>
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
          <ul class="navbar-nav justify-content-end w-100 pe-5">
            <li class="nav-item">
              <router-link to="/" class="nav-link active" aria-current="page">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Shop</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Service</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Contact</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link"><i class="bi bi-bag"></i></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <header class="hero-header"></header>
  </div>
</template>

<script>
export default {
  name: "AppHeader",
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
}

.custom-navbar .navbar-brand {
  line-height: 40px; /* Center align the brand vertically */
}

.custom-navbar .nav-link {
  line-height: 40px; /* Center align the nav links vertically */
}


</style>
