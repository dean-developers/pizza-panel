<template lang="pug" src="./order-pizza.pug"></template>

<script>
import { mapState } from 'vuex'
export default {
    props: {
        index: {
            type: Number,
            defaultValue: 0
        },
        isModalOpened: {
            type: Boolean,
            default: true
        }
    },
    data: () => ({
        pizza: null,
        chosenIngredients: [],
        pizzaDetails: {
            pizzaId: null,
            ingredients: []
        }
    }),
    computed: {
        ...mapState({
            pizzas: state => state.menu.pizzas,
            ingredients: state => state.menu.additionalIngredients
        }),
    },
    watch: {
        isModalOpened() {
            if (!this.isModalOpened) {
                this.$nextTick(() => {
                    this.pizza = null;
                    this.clear();
                })
            }
        },
        pizza: function(value) {
            if (value) {
                this.chosenIngredients = this.pizza.ingredients
                this.pizzaDetails.pizzaId = value.id
            } else {
                this.$store.commit('orders/RESET_CALCULATED_ORDER')
            }
        },

        chosenIngredients: function(newIngredients) {
            if (newIngredients) {
                this.pizzaDetails.ingredients = newIngredients.map('id').filter(it => !!it)
            }
        },
        pizzaDetails: {
            handler: function () {
                if (this.pizza) {
                    this.emitPizzaDetails()
                }
            },

            deep: true
        },
    },
    methods: {
        removeIngredient: function(item) {
            this.chosenIngredients.splice(this.chosenIngredients.indexOf(item), 1)
            this.chosenIngredients = [...this.chosenIngredients]
        },
        disabledIngredient: function(ingredient) {
            return !ingredient.hasOwnProperty('name')
        },
        emitPizzaDetails: function() {
            this.$emit('addPizzaToOrder', {
                index: this.index,
                pizzaDetails: this.pizzaDetails
            })
        },
        clear: function() {
            this.chosenIngredients = []

            Object.keys(this.pizzaDetails).forEach(it => {
                this.pizzaDetails[it] = null
            })
        }
    }
}
</script>

<style scoped>

</style>
