export default {
    SET_PIZZAS: (state, pizzas) => {
        state.pizzas = pizzas
    },

    SET_ACTIVE_PIZZA: (state, pizza) => {
        state.activePizza = pizza
    },

    DELETE_PIZZA: (state, pizza) => {
        const pizzaIndex = state.pizzas.findIndex(it => it.id === pizza.id)
        state.pizzas.splice(pizzaIndex, 1)
    },

    SET_ADDITIONAL_INGREDIENTS: (state, ingredients) => {
        state.additionalIngredients = ingredients
    }
}
