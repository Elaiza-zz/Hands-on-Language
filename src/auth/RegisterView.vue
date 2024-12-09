<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

// Reactive form fields
const email = ref('')
const password = ref('')
const router = useRouter()

// Register function
const register = () => {
  console.log('Registering with:', { email: email.value, password: password.value })
  router.push('/dashboard') // Update the redirect route as needed
}
</script>

<template>
  <div class="container">
    <!--! 1 row -->
    <div class="row justify-content-center">
      <!--! 1 col -->
      <div class="col">
        <!--! card -->
        <div class="card border-thin px-5 py-5">
          <h5 class="card-title text-center">Signup Form</h5>
          <form @submit.prevent>
            <div class="form-group mt-5">
              <label for="userName">Email</label>
              <input
                type="email"
                class="form-control"
                id="userName"
                v-model="userName"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group mt-3">
              <label for="password">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                :rules="passwordRules"
                placeholder="Password"
              />
            </div>
            <div class="d-grid gap-2">
              <button
                style="background-color: #6665ee"
                type="submit"
                class="btn btn-outline-primary btn-lg mt-2 mb-5 text-light"
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
