// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { seoConfig, PageNames } from './seo.config'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 100 }
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: PageNames.HOME,
      component: () => import('@/views/HomeView.vue'),
      meta: { 
        title: seoConfig.HOME.title,
        description: seoConfig.HOME.description
      }
    },
    {
      path: '/about',
      name: PageNames.ABOUT,
      component: () => import('@/views/AboutView.vue'),
      meta: { 
        title: seoConfig.ABOUT.title,
        description: seoConfig.ABOUT.description
      }
    },
    {
      path: '/contact',
      name: PageNames.CONTACT,
      component: () => import('@/views/ContactView.vue'),
      meta: { 
        title: seoConfig.CONTACT.title,
        description: seoConfig.CONTACT.description
      }
    },
    {
      path: '/services',
      name: PageNames.SERVICES,
      component: () => import('@/views/ServicesView.vue'),
      meta: { 
        title: seoConfig.SERVICES.title,
        description: seoConfig.SERVICES.description
      }
    },
    {
      path: '/services/molds',
      name: PageNames.MOLDS,
      component: () => import('@/views/services/MoldsView.vue'),
      meta: { 
        title: seoConfig.MOLDS.title,
        description: seoConfig.MOLDS.description
      }
    },
    {
      path: '/services/aluminum',
      name: PageNames.ALUMINUM,
      component: () => import('@/views/services/AluminumView.vue'),
      meta: { 
        title: seoConfig.ALUMINUM.title,
        description: seoConfig.ALUMINUM.description
      }
    },
    {
      path: '/services/plastic',
      name: PageNames.PLASTIC,
      component: () => import('@/views/services/PlasticView.vue'),
      meta: { 
        title: seoConfig.PLASTIC.title,
        description: seoConfig.PLASTIC.description
      }
    },
    {
      path: '/services/galvanic',
      name: PageNames.GALVANIC,
      component: () => import('@/views/services/GalvanicView.vue'),
      meta: { 
        title: seoConfig.GALVANIC.title,
        description: seoConfig.GALVANIC.description
      }
    },
    {
      path: '/services/painting',
      name: PageNames.PAINTING,
      component: () => import('@/views/services/PaintingView.vue'),
      meta: { 
        title: seoConfig.PAINTING.title,
        description: seoConfig.PAINTING.description
      }
    },
    {
      path: '/services/flocking',
      name: PageNames.FLOCKING,
      component: () => import('@/views/services/FlockingView.vue'),
      meta: { 
        title: seoConfig.FLOCKING.title,
        description: seoConfig.FLOCKING.description
      }
    },
    {
      path: '/privacy',
      name: PageNames.PRIVACY,
      component: () => import('@/views/PrivacyView.vue'),
      meta: {
        title: seoConfig.PRIVACY.title,
        description: seoConfig.PRIVACY.description
      }
    },
    {
      path: '/terms',
      name: PageNames.TERMS,
      component: () => import('@/views/TermsView.vue'),
      meta: {
        title: seoConfig.TERMS.title,
        description: seoConfig.TERMS.description
      }
    },
    {
      path: '/:pathMatch(.*)*',
      name: PageNames.NOT_FOUND,
      component: () => import('@/views/NotFoundView.vue'),
      meta: { 
        title: seoConfig.NOT_FOUND.title,
        description: seoConfig.NOT_FOUND.description
      }
    }
  ]
})

export default router