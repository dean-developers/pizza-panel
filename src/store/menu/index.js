import actions from './actions'
import mutations from './mutations'

const menu = {
    namespaced: true,
    state: {
        loading: false,
        pizzas: [],
        activePizza: null,
        additionalIngredients: []
    },
    mutations,
    actions
}

export default menu
