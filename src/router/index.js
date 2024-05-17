import { createMemoryHistory, createRouter } from 'vue-router'

import Main from '../components/Main.vue';
import AugmentedReality from "@/components/ar/AugmentedReality.vue";

const routes = [
    { path: '/', component: Main },
    { path: '/ar', component: AugmentedReality },
]

export default createRouter({
    history: createMemoryHistory(),
    routes,
})
