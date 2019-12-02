export default {
    SET_ORDERS: (state, orders) => {
        state.orders = orders
    },

    SET_CITIES: (state, cities) => {
        state.cities = cities
    },

    CREATE_ORDER: (state, order) => {
        state.orders.unshift(order)
    },

    SET_PIZZAS: (state, pizzas) => {
        state.pizzas = pizzas
    },

    SET_ADDITIONAL_INGREDIENTS: (state, ingredients) => {
        state.additionalIngredients = ingredients
    },
}
