import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import sitemap from 'vite-plugin-sitemap'

// Ваши маршруты из роутера
const routes = [
  '/',
  '/about',
  '/contact',
  '/services',
  '/services/molds',
  '/services/aluminum',
  '/services/plastic',
  '/services/galvanic',
  '/services/painting',
  '/services/flocking'
]

// Настройки для sitemap
const sitemapOptions = {
  hostname: 'https://moldrussia.ru', // Ваш домен
  routes: routes,
  exclude: ['/404', '/:pathMatch(.*)*'],
  readable: true,
  // Индивидуальные приоритеты для страниц
  routesConfig: {
    '/': { priority: 1.0, changefreq: 'daily' },
    '/services': { priority: 0.9, changefreq: 'weekly' },
    '/about': { priority: 0.8, changefreq: 'monthly' },
    '/contact': { priority: 0.7, changefreq: 'monthly' },
    '/services/molds': { priority: 0.8, changefreq: 'weekly' },
    '/services/aluminum': { priority: 0.8, changefreq: 'weekly' },
    '/services/plastic': { priority: 0.8, changefreq: 'weekly' },
    '/services/galvanic': { priority: 0.8, changefreq: 'weekly' },
    '/services/painting': { priority: 0.8, changefreq: 'weekly' },
    '/services/flocking': { priority: 0.8, changefreq: 'weekly' }
  },
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