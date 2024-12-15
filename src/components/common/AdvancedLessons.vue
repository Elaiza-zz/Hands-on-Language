<script setup>
import { ref, onMounted } from 'vue'

const selectedLanguage = ref(null)

const videoSrc = ref('')

// Define video sources for each language
const videoSources = {
  American: [
    'https://www.youtube.com/embed/bSKP_Fvrajw?si=QOC_wYdxotrj0pTK',
    'https://www.youtube.com/embed/MyTJaclSJgo?si=V36HYyaB1xbiGM6U',
  ],
  Filipino: [
    'https://www.youtube.com/embed/xSxzWBtDGWs?si=sq-a6J6k3L2gAfgw',
    'https://www.youtube.com/embed/bTByfLMr7II?si=4IB-2im131f8OBaP'
    ], // Replace with actual URL
}


onMounted(() => {
  selectedLanguage.value = localStorage.getItem('selectedLanguage')

  // Set the video source based on the selected language
  if (selectedLanguage.value && videoSources[selectedLanguage.value]) {
    videoSrc.value = videoSources[selectedLanguage.value]
  }
})
</script
</script>

<template>
  <div class="container text-center custom-bg d-flex align-items-center justify-content-center">
    <div class="row w-100">
      <!-- !! show lessons -->

      <!-- !! Advanced -->
      <!-- Songs -->
      <div class="col-12 col-md-6 col-lg-4 mx-auto">
        <div class="card text-center shadow-sm border rounded-pill">
          <div class="card-body border rounded-pill" style="background-color: #fff0d1">
            <h5 class="card-title">Songs</h5>
            <button
              type="button"
              class="btn"
              style="background-color: #6c4e31"
              data-bs-toggle="modal"
              data-bs-target="#SongModal"
            >
              Learn
            </button>
          </div>
        </div>
      </div>

      <!-- ! Song modal -->
      <div
        class="modal fade"
        id="SongModal"
        tabindex="-1"
        aria-labelledby="SongModal"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen-sm-down">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5 text-dark" id="SongModal">Songs</h1>
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
    </div>
  </div>
</template>
