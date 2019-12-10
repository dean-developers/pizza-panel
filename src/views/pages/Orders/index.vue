<template lang="pug" src="./orders.pug"></template>
<style lang="scss" src="./orders.scss"></style>

<script>
import {mapGetters, mapState} from 'vuex'
import { validationMixin } from 'vuelidate'
import validate from '@/mixins/validate'
import { required } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin, validate],
    data: () => ({
        createDialog: false,
        pizzasCount: 1,
        order: {
            name: null,
            surname: null,
            phone: null,
            cityName: null,
            street: null,
            houseNumber: null
        },
        pizza: null,
        orderPizzas: [
            {
                pizzaId: null,
                ingredients: []
            }
        ],
        currentIngd: [],
    }),
    validations: {
        order: {
            name: {
                required
            },
            surname: {
                required
            },
            phone: {
                required
            },
            cityName: {
                required
            }
        }
    },

    created: async function() {
        this.$socket.client.emit('received')

        this.$socket.client.on('orders', (data) => {
            this.$store.commit('orders/SET_ORDERS', data)
        })

        await this.$store.dispatch('orders/getCities')
        await this.$store.dispatch('menu/getPizzas')
        await this.$store.dispatch('menu/getAdditionalIngredients')
    },

    watch: {
        pizza: function(value) {
            if (value) {
                this.currentIngd = this.pizza.ingredients
                this.orderPizzas[0].pizzaId = value.id
            } else {
                this.$store.commit('orders/RESET_CALCULATED_ORDER')
            }
        },

        currentIngd: function(newIngredients) {
            if (newIngredients) {
                this.orderPizzas[0].ingredients = newIngredients.map('id').filter(it => !!it)
            }

        }
    },

    computed: {
        ...mapGetters(['type']),
        ...mapState({
            orders: state => state.orders.orders,
            cities: state => state.orders.cities,
            pizzas: state => state.menu.pizzas,
            ingredients: state => state.menu.additionalIngredients,
            calculatedOrder: state => state.orders.calculatedOrder,
        }),
        totalPrice: function () {
            return this.calculatedOrder &&
                this.calculatedOrder.map('sum')
                    .reduce((a, b) => a + b)
        },
    },

    methods: {
        create: function() {
            if (this.$v.$invalid) {
                this.$v.$touch()
            } else {
                console.log(this.orderPizzas)
                this.$store.dispatch('orders/emitCreateOrder', Object.assign({}, this.order, {
                        pizzas: this.orderPizzas
                    }
                ))
                this.closeCreateDialog()
            }
        },

        calculateOrder: async function() {
            await this.$store.dispatch('orders/calculateOrder', this.orderPizzas)
        },

        disabledIngredient: function(ingredient) {
            return !ingredient.hasOwnProperty('name')
        },

        removeIngredient(item) {
            this.currentIngd.splice(this.currentIngd.indexOf(item), 1)
            this.currentIngd = [...this.currentIngd]
        },

        addPizzaToOrder: function() {
            this.orderPizzas.push({
                id: [],
                ingredients: [],
            })
            this.pizzasCount++
        },

        openCreateDialog: function() {
            this.createDialog = true
        },

        closeCreateDialog: function() {
            this.createDialog = false
            this.reset()
        },

        reset: function () {
            Object.keys(this.order).forEach(it => {
                this.order[it] = null
            })

            this.pizza = null
            this.currentIngd = null

            this.$store.commit('orders/RESET_CALCULATED_ORDER')

            this.$nextTick(() => { this.$v.$reset() })
        }
    }
}
</script>
