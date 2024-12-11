<script setup>
import imgHol from "@/assets/images/hol-logo1.jpg"
</script>

<template>
  <div class="welcome-container">
    <div class="container-fluid d-flex flex-column justify-content-center align-items-center min-vh-85">
      <div class="row justify-content-center">
        <div class="col text-center">
          <h1 class="card-titles">Welcome to Hands On Language</h1>
        </div>
      </div>
      <div class="row mt-auto">
        <div class="col text-center">
          <button type="button" class="btn btn-primary">
            <RouterLink class="text-light text-decoration-none" to="/login">
              Getting Started
            </RouterLink>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>



