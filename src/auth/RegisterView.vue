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
  <div class="container">
    <div class="row justify-content-center">
      <div class="col">
        <div class="card border-thin px-5 py-5">
          <h5 class="card-title text-center">Signup Form</h5>
          <form id="form_register" @submit.prevent="submitForm">
            <div class="form-group mt-5">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                v-model="email"
                placeholder="Enter email"
                required
              />
            </div>
            <div class="form-group mt-3">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group mt-3">
              <label for="confirmPassword">Confirm Password</label>
              <input
                type="password"
                class="form-control"
                id="confirmPassword"
                v-model="confirmPassword"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div class="d-grid gap-2">
              <button
                style="background-color: #6665ee"
                type="submit"
                class="btn btn-outline-primary btn-lg mt-4 mb-5 text-light"
              >
                Signup
              </button>
            </div>
          </form>
          <hr class="my-5" />
          <p class="text-center">
            Already have an account?
            <router-link to="/login" class="text-primary text-decoration-none">Login</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
