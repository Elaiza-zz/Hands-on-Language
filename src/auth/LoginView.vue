<script setup></script>

<template>
  <div class="container">
    <!--! 1 row -->
    <div class="row justify-content-center">
      <!--! 1 col -->
      <div class="col">
        <!-- card -->
        <div class="card border-thin px-5 py-5">
          <form @submit.prevent>
            <div class="form-group">
              <label for="userName"></label>
              <input
                type="email"
                class="form-control"
                id="userName"
                v-model="userName"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label for="password"></label>
              <input
                type="password"
                class="form-control"
                id="password"
                v-model="password"
                :rules="passwordRules"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              class="btn btn-outline-primary btn-block rounded-pill btn-lg mt-2 mb-5"
            >
              Login
            </button>
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
