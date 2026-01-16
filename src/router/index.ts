// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
      meta: { title: 'Главная - ПТК Технологии' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
      meta: { title: 'О компании - ПТК Технологии' }
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/ContactView.vue'),
      meta: { title: 'Контакты - ПТК Технологии' }
    },
    {
      path: '/services',
      name: 'services',
      component: () => import('@/views/ServicesView.vue'),
      meta: { title: 'Услуги - Полный цикл производства' }
    },
    // {
    //   path: '/services/molds',
    //   name: 'molds',
    //   component: () => import('@/views/services/MoldsView.vue'),
    //   meta: { title: 'Изготовление пресс-форм - Точное оснащение' }
    // },
    // {
    //   path: '/services/aluminum',
    //   name: 'aluminum',
    //   component: () => import('@/views/services/AluminumView.vue'),
    //   meta: { title: 'Литьё алюминия - Лёгкие и прочные компоненты' }
    // },
    // {
    //   path: '/services/plastic',
    //   name: 'plastic',
    //   component: () => import('@/views/services/PlasticView.vue'),
    //   meta: { title: 'Литьё пластмасс - Универсальные решения' }
    // },
    // {
    //   path: '/services/galvanic',
    //   name: 'galvanic',
    //   component: () => import('@/views/services/GalvanicView.vue'),
    //   meta: { title: 'Гальванические покрытия - Электрохимические покрытия' }
    // },
    // {
    //   path: '/services/painting',
    //   name: 'painting',
    //   component: () => import('@/views/services/PaintingView.vue'),
    //   meta: { title: 'Покраска - Защитные и декоративные покрытия' }
    // },
    // {
    //   path: '/services/flocking',
    //   name: 'flocking',
    //   component: () => import('@/views/services/FlockingView.vue'),
    //   meta: { title: 'Флокирование - Декоративные бархатные покрытия' }
    // },
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   component: () => import('@/views/NotFoundView.vue'),
    //   meta: { title: 'Страница не найдена' }
    // }
  ]
})

// Устанавливаем title для каждой страницы
router.beforeEach((to, _, next) => {
  document.title = to.meta.title as string || 'ПТК Технологии'
  next()
})

export default router