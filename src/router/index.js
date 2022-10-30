import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Error from '../pages/404.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
        path: '/',
        // component: () => import('./views/Home.vue')
        name:"home",
        component: Home,
        },
        {
            path: '/about',
            name:"about",
            component: About,
        },
        {
            // path: '/:PathMatch(.*)*',
            path: '/:CatchAll(.*)',
            name: "404",
            component: Error
        }

    ]
})

export default router
