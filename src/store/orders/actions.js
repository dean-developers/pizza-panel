import http from '../../http'


export default {
    getCities: async ({ commit, dispatch }) => {
        await http({
            url: 'cities',
            method: 'get'
        }).then(res => {
            if (res.data && res.data.cities)
                commit('SET_CITIES', res.data.cities)
        }).catch(err => {
            dispatch('addMessage', {
                message: err.message,
                type: 'error'
            })
        })
    },

    // eslint-disable-next-line no-unused-vars
    emitCreateOrder: function({commit, dispatch}, order) {
        this._vm.$socket.client.emit('order', order)
    },

    socket_order: ({ commit, dispatch }, data) => {
        if (data) {
            commit('CREATE_ORDER', data)
            dispatch('addMessage', {
                message: 'created',
                type: 'success',
                locale: true
            }, { root: true })
        }
    },

    calculateOrder: async ({ commit, dispatch }, orderPizzas) => {
        commit('SET_LOADING', true)
        await http({
            url: 'order/calculate',
            method: 'post',
            data: {
                pizzas: orderPizzas
            }
        }).then(res => {
            if (res.data) {
                commit('SET_CALCULATED_ORDER', res.data)
            }

            commit('SET_LOADING', false)
        }).catch(err => {
            dispatch('addMessage', {
                message: err.message,
                type: 'error'
            }, { root: true })
        })
    },

    deleteOrder: async({ commit, dispatch }, orderId) => {
        await http({
            url: `order/${orderId}`,
            method: 'delete'
        }).then(res => {
            if (res.data) {
                commit('DELETE_ORDER', res.data[0])
                dispatch('addMessage', {
                    message: 'orderDeleted',
                    type: 'error'
                }, { root: true })
            }
        }).catch(err => {
            dispatch('addMessage', {
                message: err.message,
                type: 'error'
            }, { root: true })
        })
    }
}
