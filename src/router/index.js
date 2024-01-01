import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomeView
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/AboutView.vue')
		},
		{
			path: '/attrbute',
			name: 'attrbute',
			component: () => import('../views/AttributeCalculatorView.vue')
		},
		{
			path: '/moneyball',
			name: 'moneyball',
			component: () => import('../views/MoneyballView.vue')
		},
		{
			path: '/personality',
			name: 'personality',
			component: () => import('../views/PersonalityView.vue')
		}
	]
})

export default router
