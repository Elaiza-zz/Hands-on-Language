import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Toastify from 'toastify-js';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// Import our custom CSS
import '@/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


// Import Toastify
import "../src/css/toastify.css"

// Make Toastify globally accessible
app.config.globalProperties.$toast = Toastify;
