import http from '../../http'
import router from '@/router';


export default {
    getPizzas: async ({ commit, dispatch }) => {
        await http({ url: 'pizza', method: 'get' })
            .then(res => {
                if (res.data) {
                    commit('SET_PIZZAS', res.data)
                }
            }).catch(err => {
                dispatch('addMessage', {
                    message: err.message,
                    type: 'error',
                    locale: true
                })
            })
    },

    getPizzaById: async ({commit, dispatch}, pizzaId) => {
        console.log(pizzaId)
        await http({
            url: 'pizza/' + pizzaId,
            method: 'get',
        }).then(res => {
            if (res.data) {
                commit('SET_ACTIVE_PIZZA', res.data)
            }
        }).catch(err => {
            dispatch('addMessage', {
                message: err.message,
                type: 'error',
                locale: true
            })
        })
    },

    createPizza: async ({ dispatch }, data) => {
        await http({
            url: 'pizza',
            method: 'post',
            data
        }).then(res => {
            if (res.data) {
                dispatch('addMessage', {
                    message: 'newPizza',
                    type: 'success',
                    locale: true
                }, { root: true })
                router.push('/menu')
            }
        }).catch(err => {
            dispatch('addMessage', {
                message: err.message,
                type: 'error',
                locale: true
            }, { root: true })
        })
    },

    editPizza: async ({ dispatch }, pizza) => {
        await http({
            url: 'pizza/' + pizza.id,
            data: pizza,
            method: 'put'
        }).then(res => {
            if (res.data) {
                dispatch('addMessage', {
                    message: 'pizzaUpdated',
                    type: 'success',
                    locale: true
                }, { root: true })
                router.push('/menu')
            }
        }).catch(err => {
            dispatch('addMessage', {
                message: err.message,
                type: 'error',
                locale: true
            }, {root: true})
        })
    },

    deletePizza: async ({ commit, dispatch }, pizzaId) => {
        await http({
            url: 'pizza/' + pizzaId,
            method: 'delete'
        }).then(res => {
            if (res.data) {
                commit('DELETE_PIZZA', res.data)
                dispatch('addMessage', {
                    message: 'pizzaDeleted',
                    type: 'error',
                    locale: true
                }, { root: true })
            }
        }).catch(err => {
            dispatch('addMessage', {
                message: err.message,
                type: 'error',
                locale: true
            }, { root: true })
        })
    },

    getAdditionalIngredients: async ({ commit, dispatch }) => {
        await http({ url: 'pizza/ingredients', method: 'get' })
            .then(res => {
                if (res.data && res.data.ingredients) {
                    console.log(res.data)
                    commit('SET_ADDITIONAL_INGREDIENTS', res.data.ingredients)
                }
            }).catch(err => {
                dispatch('addMessage', {
                    message: err.message,
                    type: 'error',
                    locale: true
                }, { root: true })
            })
    }
}
