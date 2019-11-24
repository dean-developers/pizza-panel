import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/views/layouts/app'
import baseLayout from '@/views/layouts/baseLayout'

import { isAuth, isNotAuth, getUser } from './guard'
Vue.use(Router)

export const constantRouterMap = [
    {
        path: '',
        redirect: '/orders',
        component: Layout,
        children: [
            {
                path: 'orders',
                name: 'orders',
                beforeEnter: isAuth,
                component: () => import('@/views/pages/Orders'),
                meta: {
                    permission: ['admin', 'operator']
                }
            },
            {
                path: 'users',
                name: 'users',
                beforeEnter: isAuth,
                component: () => import('@/views/pages/Users'),
                meta: {
                    permission: ['admin']
                }
            },
            {
                path: 'settings',
                name: 'settings',
                beforeEnter: isAuth,
                component: () => import('@/views/pages/Settings'),
                meta: {
                    permission: ['admin']
                }
            },
            {
                path: '404',
                beforeEnter: getUser,
                component: () => import('@/views/pages/404'),
                hidden: true
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
                    permission: ['admin', 'operator']
                }
            }

        ]
    },
    { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
})
