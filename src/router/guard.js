import store from '@/store'

export const isNotAuth = (to, from, next) => {
    if (!store.getters.isAuthenticated) {
        next()
        return
    }
    next('/receive-orders')
}

export const isAuth = (to, from, next) => {
    if (store.getters.isAuthenticated) {
        next()
        return
    }
    next('/login')
}
