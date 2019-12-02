<template lang="pug" src="./menuEditor.pug"></template>
<style lang="scss" src="./menuEditor.scss" scoped></style>

<script>
import { mapState } from 'vuex'
export default {
    data: () => ({
        pizza: {
            name: null,
            ingredients: [],
            price: null,
            weight: null,
            size: null
        }
    }),

    created: async function() {
        //
        if (this.editing) {
            await this.$store.dispatch('menu/getPizzaById', this.$route.params.id)
            this.pizza = Object.assign({}, this.activePizza, {
                ingredients: this.activePizza.ingredients.map(it => {
                    return {
                        name: it
                    }
                })
            })
        }
    },

    computed: {
        ...mapState({
            ingredients: state => state.menu.additionalIngredients,
            activePizza: state => state.menu.activePizza
        }),

        editing: function () {
            return !!this.$route.params.id
        }
    },

    beforeRouteLeave(from, to, next) {
        this.reset()
        next()
    },

    methods: {
        removeIngredient: function(item) {
            this.pizza.ingredients.splice(this.pizza.ingredients.indexOf(item), 1)
            this.pizza.ingredients = [...this.pizza.ingredients]
        },

        submit: async function() {
            if (this.editing) {
                await this.$store.dispatch('menu/editPizza', Object.assign({}, this.pizza, {
                    ingredients: this.pizza.ingredients.map('name')
                }))
            } else {
                await this.$store.dispatch('menu/createPizza', Object.assign({}, this.pizza, {
                    ingredients: this.pizza.ingredients.map('name')
                }))
            }
        },

        reset: function () {
            this.pizza = {
                name: null,
                ingredients: [],
                price: null,
                weight: null,
                size: null
            }
        }
    }
}
</script>


