import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/login',
        component: () => import('@/views/layouts/app'),
        children: [
            {
                path: '/login',
                beforeEnter: '',
                component: () => import('@/views/pages/Login'),
                meta: {}
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
