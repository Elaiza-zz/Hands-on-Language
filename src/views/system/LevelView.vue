<script setup>
import HeaderNavbar from '@/components/common/Header.vue'
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
        <div class="card text-center shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Basic</h5>
            <a href="#" class="btn btn-primary">Learn</a>
          </div>
        </div>
      </div>
      <!-- Intermediate -->
      <div class="col-12 col-md-6 mt-4 col-lg-4 mx-auto">
        <div class="card text-center shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Intermediate</h5>
            <a href="#" class="btn btn-primary">Learn</a>
          </div>
        </div>
      </div>
      <!--Advanced -->
      <div class="col-12 col-md-6 mt-4 col-lg-4 mx-auto">
        <div class="card text-center shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Advanced</h5>
            <a href="#" class="btn btn-primary">Learn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
