import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import router from './router'

import '@/assets/styles/global.css'

createApp(App)
  .use(createPinia())
  .use(router)
  .mount('#app')
