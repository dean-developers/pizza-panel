import http from '../../http'


export default {
    socket_createOrder: async (data) => {
        await this.$socket.emit('order', data)
    },

    socket_getOrders: async ({ commit }) => {
        this.$socket.client.emit('orders')

        this.$socket.client.on('received', data => {
            if (data) {
                commit('SET_ORDERS', data)
            }
        })
    },

    getCities: async ({ commit, dispatch }) => {
        await http({
            url: 'cities',
            method: 'get'
        }).then(res => {
            if (res.data && res.data.cities)
                console.log(res.data)
                commit('SET_CITIES', res.data.cities)
        }).catch(err => {
            dispatch('addMessage', {
                message: err.message,
                type: 'error'
            })
        })
    }

}
