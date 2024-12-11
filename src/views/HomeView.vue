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
  <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Hands On Language</a>
      <button class="btn btn-primary" @click="doLogout">Logout</button>
    </div>
  </nav>

  <div class="container mt-4">
    <div class="row">
      <div class="col-md-4" v-for="language in languageData" :key="language.id">
        <div class="card mt-5">
          <div class="card-body">
            <h5 class="card-title">{{ language.language_title }}</h5>
            <a href="#" class="btn btn-primary">Learn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
