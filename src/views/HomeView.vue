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
</script>
<template>

  <!-- Navbar -->
  <nav class="navbar bg-dark border-bottom" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Hands On Language</a>
      <button class="btn btn-primary" @click="doLogout">Logout</button>
    </div>
  </nav>
  
  <!--  <nav class="navbar-home navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hands On Language</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
      
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">Menu</h5>
        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
          <li class="nav-item1 pt-4 ps-2">
            <button class="btn btn-outline-light" @click="doAbout">About</button>
          </li>
          <li class="nav-item2 pt-4 ps-2">
            <button class="btn btn-outline-light" @click="doProgress">Progress</button>
          </li>
          <li class="nav-item3 pt-4 ps-2">
            <button class="btn btn-outline-light" @click="doLogout">Logout</button> 
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
     -->
  

  <!-- Main Content -->
  <div class="container mt-4">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <div class="col" v-for="language in languageData" :key="language.id">
        <div class="card h-100 shadow-sm mt-5">
          <br />
          <br />
          <br />
          <div class="card-body text-center">
            <h5 class="card-title">{{ language.language_title }}</h5>
            <a href="#" class="btn btn-outline-dark mt-2">Learn</a>
          </div>
          <RouterLink class="btn btn-outline-dark mt-2" to="/level">
  Learn
</RouterLink>
        </div>
      </div>
    </div>
  </div>


 
</template>
