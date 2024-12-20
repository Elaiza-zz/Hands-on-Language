<script setup>
import HeaderNavbar from '@/components/common/Header.vue'
</script>

<template>
  <div>
    <HeaderNavbar></HeaderNavbar>

    <!-- Progress Section -->
    <div class="container mt-5 pt-5 HOL-BG">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8">
          <div class="card shadow-sm">
            <div class="card-body">
              <h3 class="text-center mb-4">Progress</h3>

              <!-- ASL Progress Bar -->
              <h5>ASL Progress</h5>
              <div class="progress mb-4">
                <div
                  class="progress-bar bg-primary"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  50%
                </div>
              </div>

              <!-- FSL Progress Bar -->
              <h5>FSL Progress</h5>
              <div class="progress">
                <div
                  class="progress-bar bg-success"
                  role="progressbar"
                  style="width: 50%"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  50%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-body {
  padding: 2rem;
}

h3 {
  font-size: 1.75rem;
  color: #333;
}

h5 {
  font-size: 1.25rem;
  color: #555;
}
</style>
