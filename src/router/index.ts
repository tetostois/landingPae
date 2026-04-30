import { createRouter, createWebHistory } from 'vue-router'
import { isServiceSlug } from '@/data/services'
import LandingView from '@/views/LandingView.vue'
import ApiHttpDocsView from '@/views/ApiHttpDocsView.vue'
import AboutView from '@/views/AboutView.vue'
import ContactView from '@/views/ContactView.vue'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth', top: 80 }
    }
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
      meta: { titleKey: 'aboutPage.pageTitle' },
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
      meta: { titleKey: 'contactPage.pageTitle' },
    },
    {
      path: '/api-docs',
      name: 'api-docs',
      component: ApiHttpDocsView,
      meta: { titleKey: 'httpApiDoc.pageTitle' },
    },
    {
      path: '/services/:slug',
      name: 'service-detail',
      component: () => import('@/views/ServiceDetailView.vue'),
      beforeEnter: (to) => {
        const raw = to.params.slug
        const slug = typeof raw === 'string' ? raw : Array.isArray(raw) ? raw[0] : ''
        if (!slug || !isServiceSlug(slug)) {
          return { path: '/', hash: '#services' }
        }
      },
    },
  ],
})
