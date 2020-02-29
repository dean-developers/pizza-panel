<template lang="pug" src="./orders.pug"></template>
<style lang="scss" src="./orders.scss"></style>

<script>
import {mapGetters, mapState} from 'vuex'
import Order from '@/components/Order'
import OrderPizza from '@/components/OrderPizza'
import { validationMixin } from 'vuelidate'
import validate from '@/mixins/validate'
import { required } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin, validate],
    components: {
        'v-order': Order,
        'v-pizza': OrderPizza
    },
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
        orderPizzas: []
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

    computed: {
        ...mapGetters(['type']),
        ...mapState({
            orders: state => state.orders.orders,
            cities: state => state.orders.cities,
            ingredients: state => state.menu.additionalIngredients,
            calculatedOrder: state => state.orders.calculatedOrder,
            loading: state => state.orders.loading
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
                this.$store.dispatch('orders/emitCreateOrder', Object.assign({}, this.order, {
                        pizzas: this.orderPizzas.map('pizzaDetails')
                    }
                ))
                this.closeCreateDialog()
            }
        },

        calculateOrder: async function() {
            await this.$store.dispatch('orders/calculateOrder', this.orderPizzas.map('pizzaDetails'))
        },

        addPizzaToOrder: function(data) {
            const index = this.orderPizzas.findIndex(it => it.index === data.index);

            if (index !== -1) {
                return this.orderPizzas.splice(index, 1, data)
            }

            this.orderPizzas.push(data)
        },

        openCreateDialog: function() {
            this.createDialog = true
        },

        closeCreateDialog: function() {
            this.createDialog = false
            this.reset()
        },

        reset: function () {
            this.pizzasCount = 1

            Object.keys(this.order).forEach(it => {
                this.order[it] = null
            });

            this.$store.commit('orders/RESET_CALCULATED_ORDER')

            this.$nextTick(() => { this.$v.$reset() })
        }
    }
}
</script>
