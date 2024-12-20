<script setup>
import { ref, onMounted } from 'vue'

const selectedLanguage = ref(null)
const videoSrc = ref('')
const videoNumberSrc = ref('')
// Define video sources for each language
const videoSources = {
  American: 'https://www.youtube.com/embed/6_gXiBe9y9A?si=y1AlJolZyEab2sno',
  Filipino: 'https://www.youtube.com/embed/bq6WzqvK76M?si=O79e-iw4qxXwWQdT', // Replace with actual URL
}

const videoNumberSources = {
  American: [
    'https://www.youtube.com/embed/TEGx6ByKUaI?si=XQCJvBhwfEVrkt6X',
    'https://www.youtube.com/embed/jjvzIgFNY9Q?si=syWT52D900bW8iV9',
  ],
  Filipino: ['https://www.youtube.com/embed/Wl-pkKk82Nc?si=2x0CRUh5in3FEIdR'], // Replace with actual URL
}
// Check the selected level from localStorage on component mount
onMounted(() => {
  selectedLanguage.value = localStorage.getItem('selectedLanguage')

  // Set the video source based on the selected language
  if (selectedLanguage.value && videoSources[selectedLanguage.value]) {
    videoSrc.value = videoSources[selectedLanguage.value]
    videoNumberSrc.value = videoNumberSources[selectedLanguage.value]
  }
})
</script>



<template>
  <div class="container text-center HOL-BG d-flex align-items-center justify-content-center">
    <div class="row w-100">
      <!-- !! show lessons -->

      <!-- !! Basic -->
      <!-- Alphabets -->
      <div class="col-12 col-md-6 col-lg-4 mx-auto">
        <div class="card text-center shadow-sm border rounded-pill">
          <div class="card-body border rounded-pill" style="background-color: #fff0d1">
            <h5 class="card-title">Alphabets</h5>
            <button
              type="button"
              class="btn"
              style="background-color: #6c4e31"
              data-bs-toggle="modal"
              data-bs-target="#AlphabetsModal"
            >
              Learn
            </button>
          </div>
        </div>
      </div>
      <!-- Numbers -->
      <div class="col-12 col-md-6 mt-4 col-lg-4 mx-auto">
        <div class="card text-center shadow-sm border rounded-pill">
          <div class="card-body border rounded-pill" style="background-color: #ffdbb5">
            <h5 class="card-title">Numbers</h5>
            <button
              type="button"
              class="btn"
              style="background-color: #6c4e31"
              data-bs-toggle="modal"
              data-bs-target="#NumbersModal"
            >
              Learn
            </button>
          </div>
        </div>
      </div>

      <!-- Alphabet Modal -->
      <div
        class="modal fade"
        id="AlphabetsModal"
        tabindex="-1"
        aria-labelledby="AlphabetsModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-dark" id="AlphabetsModal">Alphabets</h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <iframe
                      :src="videoSrc"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Numbers Modal -->
      <div
        class="modal fade"
        id="NumbersModal"
        tabindex="-1"
        aria-labelledby="NumbersModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-dark" id="NumbersModal">Numbers</h1>
              <button class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>

            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div v-for="src in videoNumberSrc" :key="src" class="col">
                    <iframe
                      :src="src"
                      title="YouTube video player"
                      frameborder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
