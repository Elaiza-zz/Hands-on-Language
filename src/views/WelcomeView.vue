<script setup>
import imgHol from "@/assets/images/hol-logo1.jpg"
</script>

<template>
  <div class="welcome-container">
      <div class="container-fluid">
        <div class="row justify-content-center">


          <div class="col text-center">
            <h1 class="card-titles">Welcome to Hands On Language</h1>
          </div>
        </div>
      </div>

    <div class="content">
      <div class="button-container">
        <button type="button" class="btn btn-primary">
          <RouterLink class="text-light text-decoration-none" to="/login">
            Getting Started
          </RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>



