import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

// Ваши маршруты из роутера (главную плагин добавляет сам)
const routes = [
  '/about',
  '/contact',
  '/services',
  '/services/molds',
  '/services/aluminum',
  '/services/plastic',
  '/services/galvanic',
  '/services/painting',
  '/services/flocking',
  '/privacy',
  '/terms'
]

// Настройки для sitemap
// vite-plugin-sitemap 0.8.x поддерживает dynamicRoutes, а не routes/routesConfig
const sitemapOptions = {
  hostname: 'https://moldrussia.ru', // Ваш домен
  dynamicRoutes: routes,
  exclude: ['/404', '/:pathMatch(.*)*'],
  readable: true,
  changefreq: 'weekly',
  priority: 0.8,
  // Добавим robots.txt
  robots: [
    {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/private'] // если есть закрытые разделы
    }
  ]
}

export default defineConfig({
  plugins: [
    vue(),
    sitemap(sitemapOptions)
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'vue': 'vue/dist/vue.esm-bundler.js'
    },
  },
})