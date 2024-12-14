<script setup>
import { supabase } from '@/utils/supabase.js'
import { onMounted, ref } from 'vue'

const languageData = ref(null)
const error = ref(null)

onMounted(async () => {
  try {
    const { data, error } = await supabase.from('language').select('language_title')
    languageData.value = data
    error.value = error
  } catch (err) {
    console.error('Error fetching language data:', err)
    error.value = err
  }
})

async function doLogout(event) {
  // If the event argument is not undefined, prevent the default action of the anchor tag
  if (event !== undefined) {
    event.preventDefault()
  }

  // Supabase Logout
  let { error } = await supabase.auth.signOut()

  if (error == null) {
    // Clear local Storage
    localStorage.clear()
    // Redirect to account page
    window.location.pathname = '/'
  } else {
    console.log('Error logging out: ', error.message)
  }
}

// Method to determine classes based on language title
const getCardClass = (title) => {
  return {
    'bg-ph': title === 'Filipino',
    'bg-us': title !== 'Filipino',
    'text-light': title === 'Filipino',
    'text-dark': title !== 'Filipino',
  }
}
</script>
<style>
.custom-bg {
  background: url('../assets/images/background-picture.png') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  width: 100vw; /* Ensures full viewport width */
  margin: 0;
  padding: 0;
  overflow: hidden;
  color: #fff;
}

.bg-ph {
  background-image: url('../assets/images/filipino-flag.png');
  background-size: cover;
  background-position: center;
  text-color: white !important;
}

.bg-us {
  background-image: url('../assets/images/american-flag.webp');
  background-size: cover;
  background-position: center;
  text-color: black;
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
          src="../assets/images/cropped_image-logo.png"
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

  <!-- Main Content -->
  <div class="container mt-5 pt-5 custom-bg">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <div class="col" v-for="language in languageData" :key="language.id">
        <div class="card h-100 shadow-sm mt-5" :class="getCardClass(language.language_title)">
          <div class="card-body text-center">
            <h5 class="card-title">{{ language.language_title }}</h5>
            <RouterLink class="btn btn-outline-dark mt-2" to="/level">Learn</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
