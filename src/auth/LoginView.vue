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
  <div class="container h-100">
    <!-- Full-height row for centering -->
    <div class="row justify-content-center align-items-center h-100">
      <!-- Col with responsive width -->
      <div class="col-12 col-md-8 col-lg-5">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <!-- Card -->
        <div class="card border-thin p-4 shadow mt-5">
          <h5 class="card-title text-center mb-4">Login Form</h5>

          <form id="form_login">
            <!-- Email Input -->
            <div class="form-group mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                name="email"
                type="email"
                class="form-control"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <!-- Password Input -->
            <div class="form-group mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                name="password"
                type="password"
                class="form-control"
                id="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <!-- Login Button -->
            <div class="d-grid">
              <button
                type="login"
                class="btn btn-primary btn-lg rounded-pill"
              >
                Login
              </button>
            </div>
          </form>

          <!-- Divider -->
          <hr class="my-4" />

          <!-- Sign-Up Link -->
          <p class="text-center mb-0">
            Don't have an account?
            <router-link to="/register" class="text-primary fw-bold">
              Sign up
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

