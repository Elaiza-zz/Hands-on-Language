<script setup>
import { supabase } from '@/utils/supabase.js'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import Toastify from 'toastify-js'
// !! functionality for notification
// Success Notification
function successNotification(message) {
  Toastify({
    text: message,
    duration: 3000,
    gravity: 'top', // `top` or `bottom`
    position: 'center', // `left`, `center` or `right`
    style: {
      background:
        'linear-gradient(90deg, rgba(0,150,199,1) 25%, rgba(44,168,209,1) 60%, rgba(82,184,217,1) 90%)',
    },
  }).showToast()
}

// Error Notification
function errorNotification(message) {
  Toastify({
    text: message,
    duration: 10000,
    gravity: 'top', // `top` or `bottom`
    position: 'center', // `left`, `center` or `right`
    style: {
      background:
        'linear-gradient(90deg, rgba(187,10,26,1) 15%, rgba(226,37,54,1) 65%, rgba(255,64,81,1) 90%)',
    },
  }).showToast()
}
// !! end of functionality

const router = useRouter()
let form_login = null

onMounted(() => {
  form_login = document.getElementById('form_login')

  form_login.onsubmit = async (e) => {
    e.preventDefault() // Prevent the default form submission behavior

    const submitButton = document.querySelector('#form_login button')
    // Disable the submit button and show loading spinner
    submitButton.disabled = true
    submitButton.innerHTML = `
      <span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span>Loading...</span>
    `

    // Get value from the form
    const formData = new FormData(form_login)

    // Perform authentication with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email: formData.get('email'),
      password: formData.get('password'),
    })

    // Handle session and user data
    const session = data?.session
    const user = data?.user

    if (session) {
      // Store session tokens in localStorage
      localStorage.setItem('access_token', session.access_token)
      localStorage.setItem('refresh_token', session.refresh_token)

      // Store user information
      localStorage.setItem('user_id', user.id)
      localStorage.setItem('email', user.email)
    }

    // Display notification based on the result
    if (!error) {
      successNotification('Log in successful!', 3)
      setTimeout(() => {
        router.push('/home') // Redirect after successful login
      }, 3000) // 3 seconds
    } else {
      // Display error notification
      const errorMessage = error.message.includes('Invalid login credentials')
        ? 'Wrong password or invalid credentials.'
        : 'Something went wrong, please try again later.'

      errorNotification(errorMessage, 10)
      console.error(error)
    }

    // Reset the form
    form_login.reset()

    // Re-enable the submit button
    submitButton.disabled = false
    submitButton.innerHTML = `Log in`
  }
})
</script>

<template>
  <div class="container">
    <!--! 1 row -->
    <div class="row justify-content-center">
      <!--! 1 col -->
      <div class="col">
        <!-- card -->
        <div class="card border-thin px-5 py-5">
          <h5 class="card-title text-center">Login Form</h5>

          <form id="form_login">
            <div class="form-group">
              <label for="userName"></label>
              <input
                name="email"
                type="email"
                class="form-control mt-5"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-group">
              <label for="password"></label>
              <input
                name="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div class="d-grid gap-2">
              <button
                style="background-color: #6665ee"
                type="login"
                class="text-light btn btn-outline-primary btn-block rounded-pill btn-lg mt-4 mb-5"
              >
                Login
              </button>
            </div>
          </form>
          <hr class="my-5" />
          <p class="text-center">
            Don't have an account?
            <router-link to="/register" class="text-primary">Sign up</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
