<script setup></script>

<template>
  <div class="container-fluid h-100 d-flex flex-column justify-content-center align-items-center">
    <div class="row justify-content-center align-items-center w-100">
      <div class="col-12 col-md-8 col-lg-5">
        <!-- Card Container -->
        <br />
        <br />
        <br />
        <br />
        <br />
        <div class="card border-thin p-4 shadow mt-5 text-center">
          <!-- Logo and Title -->
          <div class="text-center my-4">
            <!-- Circular Logo -->
            <img
              src="../assets/images/hol-logo1.jpg"
              alt="hol-logo"
              class="rounded-circle img-fluid mx-auto d-block mb-4"
              style="max-width: 150px"
            />

            <!-- Welcome Text -->
            <h1 class="card-title display-6 fw-bold mt-3">Welcome to Hands On Language</h1>
          </div>

          <!-- Button Section -->
          <div class="button-container mt-4">
            <button type="button" class="btn btn-primary rounded-pill px-5 py-2">
              <RouterLink class="text-light text-decoration-none fw-bold" to="/login">
                Getting Started
              </RouterLink>
            </button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Customizing the height and layout for full-screen experience */
.card-title {
  color: #333; /* Contrast for title */
  font-size: 1.5rem;
}
.button-container button {
  transition: transform 0.2s ease-in-out;
}
.button-container button:hover {
  transform: scale(1.05);
}
</style>
