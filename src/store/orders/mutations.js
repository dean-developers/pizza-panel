export default {
    SET_ORDERS: (state, orders) => {
        state.orders = orders
    },

    SET_CITIES: (state, cities) => {
        state.cities = cities
    },

    CREATE_ORDER: (state, order) => {
        state.orders.unshift(order[0])
    },

    DELETE_ORDER: (state, order) => {
        const orderIndex = state.orders.findIndex(it => it.id === order.id)
        state.orders.splice(orderIndex, 1)
    },

    SET_PIZZAS: (state, pizzas) => {
        state.pizzas = pizzas
    },

    SET_ADDITIONAL_INGREDIENTS: (state, ingredients) => {
        state.additionalIngredients = ingredients
    },

    SET_CALCULATED_ORDER: (state, order) => {
        state.calculatedOrder = order
    },

    RESET_CALCULATED_ORDER: (state) => {
        state.calculatedOrder = null
    }
}
