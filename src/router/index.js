import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: HomeView
		},
		{
			path: '/about',
			name: 'About',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue')
		},
		{
			path: '/attrbute',
			name: 'Attrbute Scoring',
			component: () => import('../views/AttributeScoringView.vue')
		},
		{
			path: '/moneyball',
			name: 'Moneyball',
			component: () => import('../views/MoneyballView.vue')
		},
		{
			path: '/personality',
			name: 'Personality',
			component: () => import('../views/PersonalityView.vue')
		}
	]
})

export default router
