<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '@/utils/supabase.js'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')

const router = useRouter()

const submitForm = async () => {
  if (password.value === confirmPassword.value) {
    // Disable the submit button and show loading state
    document.querySelector('#form_register button').disabled = true
    document.querySelector('#form_register button').innerHTML =
      `<span class="spinner-border spinner-border-sm" aria-hidden="true"></span>
      <span>Loading...</span>`

    // Create user
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    })

    const user_id = data.user.id

    // Check if the user is created successfully
    if (user_id != null) {
      const { data, error } = await supabase
        .from('language')
        .insert([
          {
            user_id: user_id,
          },
        ])
        .select()

      const { data_p, error_p } = await supabase
        .from('progress')
        .insert([
          {
            user_id: user_id,
          },
        ])
        .select()

      if (!error) {
        console.log('Sign up successful!')
      } else {
        console.log('Something went wrong, please try again later.')
        console.log('Error creating user:', error)
      }
    } else {
      console.log('Error creating user:', error)
    }

    // Reset Form
    email.value = ''
    password.value = ''
    confirmPassword.value = ''

    // Enable Submit Button
    document.querySelector('#form_register button').disabled = false
    document.querySelector('#form_register button').innerHTML = `Sign Up`
  } else {
    console.log('Password does not match. Please try again.')
  }
}
</script>
<template>
  <div class="container h-100">
    <!-- Full-height row for vertical centering -->
    <div class="row justify-content-center align-items-center h-100">
      <!-- Column with responsive sizing -->
      <div class="col-12 col-md-8 col-lg-5">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
        <!-- Card -->
        <div class="card border-thin p-4 shadow mt-5">
          <h5 class="card-title text-center mb-4">Signup Form</h5>
          <form id="form_register" @submit.prevent="submitForm">
            <!-- Email Input -->
            <div class="form-group mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <!-- Password Input -->
            <div class="form-group mb-3">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                placeholder="Enter your password"
                required
              />
            </div>

            <!-- Confirm Password Input -->
            <div class="form-group mb-4">
              <label for="confirmPassword" class="form-label">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                v-model="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </div>

            <!-- Signup Button -->
            <div class="d-grid">
              <button
                style="background-color: #6665ee"
                type="submit"
                class="btn btn-primary btn-lg rounded-pill text-light"
              >
                Signup
              </button>
            </div>
          </form>

          <!-- Divider -->
          <hr class="my-4" />

          <!-- Login Link -->
          <p class="text-center mb-0">
            Already have an account?
            <router-link to="/login" class="text-primary fw-bold text-decoration-none">
              Login
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
