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
      <div class="col-12 col-md-6 col-lg-4 mx-auto">
        <div class="card text-center shadow-sm">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
