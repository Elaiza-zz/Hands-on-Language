<script setup>
import HeaderNavbar from '@/components/common/Header.vue'
const saveChoiceToLocalStorage = (choice) => {
  localStorage.setItem('selectedLevel', choice)
}
</script>

<style>
.custom-bg {
  background: url('src/assets/images/background-picture.png') no-repeat center center;
  background-size: cover;
  min-height: 100vh;
  width: 100vw; /* Ensures full viewport width */
  margin: 0;
  padding: 0;
  overflow: hidden;
  color: #fff;
}
</style>

<template>
  <HeaderNavbar></HeaderNavbar>
  <!-- Main Content -->
  <div class="container text-center custom-bg d-flex align-items-center justify-content-center">
    <div class="row w-100">
      <!-- Basic -->
      <div class="col-12 col-md-6 col-lg-4 mx-auto">
        <div class="card text-center shadow-sm border rounded-pill">
          <div class="card-body border rounded-pill" style="background-color: #fff0d1">
            <h5 class="card-title">Basic</h5>
            <a href="#" class="btn btn-primary" style="background-color: #6c4e31">
              <RouterLink
                class="text-decoration-none text-light"
                to="/lesson"
                @click="saveChoiceToLocalStorage('Basic')"
              >
                Learn
              </RouterLink>
            </a>
          </div>
        </div>
      </div>
      <!-- Intermediate -->
      <div class="col-12 col-md-6 mt-4 col-lg-4 mx-auto">
        <div class="card text-center shadow-sm border rounded-pill">
          <div class="card-body border rounded-pill" style="background-color: #ffdbb5">
            <h5 class="card-title">Intermediate</h5>
            <a href="#" class="btn btn-primary" style="background-color: #6c4e31">
              <RouterLink
                class="text-decoration-none text-light"
                to="/lesson"
                @click="saveChoiceToLocalStorage('Intermediate')"
              >
                Learn
              </RouterLink>
            </a>
          </div>
        </div>
      </div>
      <!--Advanced -->
      <div class="col-12 col-md-6 mt-4 col-lg-4 mx-auto">
        <div class="card text-center shadow-sm border rounded-pill">
          <div class="card-body border rounded-pill" style="background-color: #f0bb78">
            <h5 class="card-title">Advanced</h5>
            <a href="#" class="btn btn-primary" style="background-color: #6c4e31">
              <RouterLink
                class="text-decoration-none text-light"
                to="/lesson"
                @click="saveChoiceToLocalStorage('Advanced')"
              >
                Learn
              </RouterLink>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
