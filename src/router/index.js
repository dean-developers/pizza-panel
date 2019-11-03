import Vue from 'vue'
import VueRouter from 'vue-router'
import {isAuth, isNotAuth } from './guard';

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/login',
        component: () => import('@/views/layouts/app'),
        children: [
            {
                path: '/login',
                beforeEnter: isNotAuth,
                component: () => import('@/views/pages/Login'),
                meta: {}
            },
            {
                path: '/receive-orders',
                beforeEnter: isAuth,
                component: () => import('@/views/pages/Orders'),
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
