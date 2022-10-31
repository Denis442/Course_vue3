import { createRouter,createWebHistory,createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Item from '@/pages/_itemAlias.vue'
import Error from '@/pages/notFound.vue'


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
            path: '/:aliasItem',
            name:"aliasItem",
            component: Item,
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
