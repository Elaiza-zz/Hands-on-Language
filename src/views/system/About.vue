<script setup>
import HeaderNavbar from '@/components/common/Header.vue'
import { onMounted, ref } from 'vue'
</script>
<style scoped>

.card {
  border-radius: 1rem;
  border: none;
}

.card-body {
  padding: 2rem;
}

h1 {
  font-size: 2.5rem;
}

p.lead {
  font-size: 1.25rem;
}

@media (max-width: 768px) {
  .card-body {
    padding: 1.5rem;
  }

  h1 {
    font-size: 2rem;
  }

  p.lead {
    font-size: 1.1rem;
  }
}
</style>

<template>
  <div>
    <HeaderNavbar></HeaderNavbar>

    <!-- Main Content -->
    <div class="container HOL-BG mt-5 pt-5">
      <div class="row justify-content-center">
        <!-- Content Section -->
        <div class="col-12 col-md-10 col-lg-8">
          <div class="card shadow-lg">
            <div class="card-body">
              <h1 class="text-center mb-4 text-primary">Hands On Language</h1>
              <p class="lead text-justify">
                Hands On Language is a learning application that teaches FSL and ASL. Demonstrations
                with practice accompany the learning, ensuring proper knowledge acquisition. The
                design of this application includes aspects of inclusivity and accessibility, making
                it applicable to any age or skill level who tries to reach out to the Deaf and Hard
                of Hearing communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
