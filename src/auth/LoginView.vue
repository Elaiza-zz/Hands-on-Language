<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-md-6 mx-auto">
        <div class="card border-thin" style="padding: 20px">
          <form>
            <div class="form-group">
              <label for="userName">Email</label>
              <input type="email" class="form-control" id="userName" placeholder="Enter email" />
            </div>
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" />
            </div>
            <button
              type="submit"
              class="btn btn-outline-primary btn-block rounded-pill btn-lg mt-2 mb-5"
            >
              Login
            </button>
          </form>
          <hr class="my-5" />
          <p class="text-center mt-3"><a href="#">Forgot Password?</a></p>
          <p class="text-center">
            Don't have an account? <a href="/register" class="text-primary">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
