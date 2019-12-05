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

    calculateOrder: async ({ commit, dispatch }, orderPizzas) => {
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
        }).catch(err => {
            dispatch('addMessage', {
                message: err.message,
                type: 'error'
            }, { root: true })
        })
    }
}
