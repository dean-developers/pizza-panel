import store from '@/store'

const rolesRedirectPages = {
    admin: '/users',
    operator: '/orders',
    driver: '/settings'
}

export async function isAuth(to, from, next) {
    await store.dispatch('getUser')

    if (!store.getters.loggedIn) {
        return next('/login')
    } else if (!to.meta.permission.includes(store.getters.type)) {
        return next(rolesRedirectPages[store.getters.type])
    }

    next()
}

export async function isNotAuth(to, from, next) {
    await store.dispatch('getUser')

    if (store.getters.loggedIn) {
        return next(rolesRedirectPages[store.getters.type])
    }

    next()
}

export async function getUser(to, from, next) {
    await store.dispatch('getUser')
    next()
}
