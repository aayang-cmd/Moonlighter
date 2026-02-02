import { createApp } from 'vue'
import Root from './Root.vue'
import './style.css'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './App.vue'
import Menu from './menu.vue'

const routes = [
	{ path: '/', component: Home },
	{ path: '/menu', component: Menu }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

createApp(Root).use(router).mount('#app')
