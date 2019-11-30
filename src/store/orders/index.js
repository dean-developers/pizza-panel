import actions from './actions'
import mutations from './mutations'

const orders = {
    namespaced: true,
    state: {
        loading: false,
        orders: [],
        cities: [],
    },
    mutations,
    actions
}

export default orders
