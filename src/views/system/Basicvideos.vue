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
    <div class="container text-center custom-bg d-flex align-items-center justify-content-center">
      <div class="row w-100">
        <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </div>
      </div>

</template>