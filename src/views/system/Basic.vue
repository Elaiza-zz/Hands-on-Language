<script setup>

</script>

<style>
       .custom-bg {
  background: url('src/assets/images/background-picture.png') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  width: 100vw; /* Ensures full viewport width */
  margin: 0;
  padding: 0;
  overflow: hidden;
  color: #fff;
}
    </style>

<template>
 <!-- Navbar -->
 <nav class="navbar navbar-dark fixed-top py-3" style="height: 80px; background-color: #795757">
    <div class="container-fluid d-flex align-items-center">
      <!-- Navbar Brand -->
      <p
        class="navbar-brand d-flex align-items-center fs-1"
        href="#"
        style="color: #fff; font-size: 2rem"
      >
        <img
          src="src/assets/images/cropped_image-logo.png"
          alt="Logo"
          class="img-fluid"
          style="height: 40px; width: auto; margin-right: 10px"
        />
        Hands On Language
      </p>

      <!-- Toggler Button aligned to the right -->
      <button
        class="btn btn-outline-light ms-auto"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasDarkNavbar"
        aria-controls="offcanvasDarkNavbar"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Offcanvas Menu -->
      <div
        class="offcanvas offcanvas-end"
        tabindex="-1"
        id="offcanvasDarkNavbar"
        aria-labelledby="offcanvasDarkNavbarLabel"
        style="background-color: #795757"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-light" id="offcanvasDarkNavbarLabel">Menu</h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item pt-4">
              <button class="btn btn-link text-decoration-none text-light" @click="doAbout">
                About
              </button>
            </li>
            <li class="nav-item pt-4">
              <button class="btn btn-link text-decoration-none text-light" @click="doProgress">
                Progress
              </button>
            </li>
            <li class="nav-item pt-4">
              <button class="btn btn-link text-decoration-none text-light" @click="doLogout">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

