import { createApp } from 'vue'
import { createMetaManager } from 'vue-meta'
import App from './App.vue'
import router from './router'

import '@/assets/styles/global.css'

createApp(App)
  .use(createMetaManager())
  .use(router)
  .mount('#app')
