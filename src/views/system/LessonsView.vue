<script setup>
import HeaderNavbar from '@/components/common/Header.vue'
import Basic from '@/components/common/BasicLessons.vue'
import Intermediate from '@/components/common/IntermediateLessons.vue'
import Advanced from '@/components/common/AdvancedLessons.vue'
import { ref, onMounted } from 'vue'

// Reactive variable to store selected level
const selectedLevel = ref(null)

// Check the selected level from localStorage on component mount
onMounted(() => {
  selectedLevel.value = localStorage.getItem('selectedLevel')
})
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
  <HeaderNavbar> </HeaderNavbar>
  <!-- Main Content -->
  <div class="container custom-bg d-flex justify-content-center align-items-center">
    <div class="row w-100">
      <!-- Render components conditionally based on selected level -->
      <Basic v-if="selectedLevel === 'Basic'"></Basic>
      <Intermediate v-if="selectedLevel === 'Intermediate'"></Intermediate>
      <Advanced v-if="selectedLevel === 'Advanced'"></Advanced>
      <p v-if="!selectedLevel" class="text-center text-light fs-4">
        Please select a level to view content.
      </p>
    </div>
  </div>
  <!-- End Main Content -->
</template>
