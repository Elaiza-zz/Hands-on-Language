<script setup>
import { supabase } from '@/utils/supabase.js'
import { onMounted, ref } from 'vue'
import HeaderNavbar from '@/components/common/Header.vue'

// Method to save the selected language to local storage
const saveLanguageToLocalStorage = (languageTitle) => {
  localStorage.setItem('selectedLanguage', languageTitle)
}

const languageData = ref(null)
const error = ref(null)

onMounted(async () => {
  try {
    const { data, error } = await supabase.from('language').select('language_title')
    languageData.value = data
    error.value = error
  } catch (err) {
    console.error('Error fetching language data:', err)
    error.value = err
  }
})
// Method to determine classes based on language title
const getCardClass = (title) => {
  return {
    'bg-ph': title === 'Filipino',
    'bg-us': title !== 'Filipino',
    'text-light': title === 'Filipino',
    'text-dark': title !== 'Filipino',
  }
}
</script>
<style>
.bg-ph {
  background-image: url('../assets/images/filipino-flag.png');
  background-size: cover;
  background-position: center;
  text-color: white !important;
}

.bg-us {
  background-image: url('../assets/images/american-flag.webp');
  background-size: cover;
  background-position: center;
  text-color: black;
}
</style>

<template>
  <HeaderNavbar></HeaderNavbar>

  <!-- Main Content -->
  <div class="container HOL-BG mt-5 pt-5">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
      <div class="col" v-for="language in languageData" :key="language.id">
        <div class="card h-100 shadow-sm mt-5" :class="getCardClass(language.language_title)">
          <div class="card-body text-center">
            <h5 class="card-title">{{ language.language_title }}</h5>
            <RouterLink
              class="btn btn-outline-dark mt-2"
              :style="{ backgroundColor: '#FFEAC5' }"
              to="/level"
              @click="saveLanguageToLocalStorage(language.language_title)"
            >
              Learn
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
