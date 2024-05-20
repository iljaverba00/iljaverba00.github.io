import {createRouter, createWebHistory} from 'vue-router'

import Main from '../components/Main.vue'
import AR from '../components/projects/ar/AugmentedReality.vue'

const routes = [
  { path: '/', component: Main },
  { path: '/ar', component: AR },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
