import Vue from 'vue'
import VueRouter from 'vue-router'
import {isAuth, isNotAuth } from './guard';

import Layout from '@/views/layouts/app'
import baseLayout from '@/views/layouts/baseLayout'

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/orders',
        component: () => Layout,
        children: [
            {
                path: '/orders',
                beforeEnter: isAuth,
                component: () => import('@/views/pages/Orders'),
                meta: {
                    permission: ['admin', 'operator']
                }
            }
        ]
    },
    {
        path: '',
        component: baseLayout,
        redirect: '404',
        children: [
            {
                path: 'login',
                beforeEnter: isNotAuth,
                component: () => import('@/views/pages/Login'),
                meta: {
                    permission: ['admin', 'operator', 'boss']
                }
            }
        ]
    },
    { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes
})

export default router
