export default {
    SET_ORDERS: (state, orders) => {
        state.orders = orders
    },

    SET_CITIES: (state, cities) => {
        state.cities = cities
    },

    CREATE_ORDER: (state, order) => {
        state.orders.unshift(order)
    }
}
