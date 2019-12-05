import actions from './actions'
import mutations from './mutations'

const orders = {
    namespaced: true,
    state: {
        loading: false,
        orders: [],
        cities: [],
        calculatedOrder: null
    },
    mutations,
    actions
}

export default orders
