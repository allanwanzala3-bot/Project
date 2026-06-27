import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Work from './components/Work.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Achievements from './components/Achievements.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/work', name: 'work', component: Work },
  { path: '/experience', name: 'experience', component: Experience },
  { path: '/education', name: 'education', component: Education },
  { path: '/achievements', name: 'achievements', component: Achievements },
  { path: '/certificates', name: 'certificates', component: () => import('./components/Certificates.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
