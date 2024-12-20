<script setup>
import { ref, onMounted } from 'vue'

const selectedLanguage = ref(null)
const videoSrc = ref('')
const PhraseSrc = ref('')
// Define video sources for each language
const videoSources = {
  American: [
    'https://www.youtube.com/embed/jWCk3WqtVi4?si=C-Xh_KWQUjuEs8CG',
    'https://www.youtube.com/embed/glkmwIPlhrI?si=AicXQ0DKbaIwOgZW',
  ],
  Filipino: ['https://www.youtube.com/embed/Y1IfQ4DuQxU?si=0cw3gX58L-ODI1Hl'], // Replace with actual URL
}

const PhraseSources = {
  American: ['https://www.youtube.com/embed/v1desDduz5M?si=eX5NymEnIFTv465x'],
  Filipino: ['https://www.youtube.com/embed/yfxBeSeDY3c?si=AD_iqNs83d1P4bUL'], // Replace with actual URL
}

// Check the selected level from localStorage on component mount
onMounted(() => {
  selectedLanguage.value = localStorage.getItem('selectedLanguage')

  // Set the video source based on the selected language
  if (selectedLanguage.value && videoSources[selectedLanguage.value]) {
    videoSrc.value = videoSources[selectedLanguage.value]
    PhraseSrc.value = PhraseSources[selectedLanguage.value]
  }
})
</script>

<template>
  <div class="container text-center HOL-BG d-flex align-items-center justify-content-center">
    <div class="row w-100">
      <!-- !! show lessons -->

      <!-- !! Intermediate -->
      <!-- Formal Greetings -->
      <div class="col-12 col-md-6 col-lg-4 mx-auto">
        <div class="card text-center shadow-sm border rounded-pill">
          <div class="card-body border rounded-pill" style="background-color: #fff0d1">
            <h5 class="card-title">Greetings</h5>
            <button
              type="button"
              class="btn"
              style="background-color: #6c4e31"
              data-bs-toggle="modal"
              data-bs-target="#GreetingsModal"
            >
              Learn
            </button>
          </div>
        </div>
      </div>

      <!-- Phrases -->
      <div class="col-12 col-md-6 mt-4 col-lg-4 mx-auto">
        <div class="card text-center shadow-sm border rounded-pill">
          <div class="card-body border rounded-pill" style="background-color: #ffdbb5">
            <h5 class="card-title">Phrases</h5>
            <button
              type="button"
              class="btn"
              style="background-color: #6c4e31"
              data-bs-toggle="modal"
              data-bs-target="#PhrasesModal"
            >
              Learn
            </button>
          </div>
        </div>
      </div>
      <!-- !Greetings Modal -->
      <div
        class="modal fade"
        id="GreetingsModal"
        tabindex="-1"
        aria-labelledby="GreetingsModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-dark" id="GreetingsModal">Greetings</h1>
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
                  <div v-for="src in videoSrc" :key="src" class="col">
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

      <!-- Phrases Modal -->
      <div
        class="modal fade"
        id="PhrasesModal"
        tabindex="-1"
        aria-labelledby="PhrasesModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-dark" id="PhrasesModal">Phrases</h1>
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
                  <div v-for="src in PhraseSrc" :key="src" class="col">
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
