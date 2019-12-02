<template lang="pug" src="./orders.pug"></template>
<style lang="scss" src="./orders.scss"></style>

<script>
import {mapGetters, mapState} from 'vuex'
import { validationMixin } from 'vuelidate';
import validate from '@/mixins/validate'
import { required } from 'vuelidate/lib/validators'

export default {
    mixins: [validationMixin, validate],
    data: () => ({
        createDialog: false,
        order: {
            name: null,
            surname: null,
            phone: null,
            cityName: null,
            street: null,
            houseNumber: null
        },
        pizza: null,
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
        pizza: function() {
            const pizza = this.pizzas.find(it => it.name === this.pizza)
            if (pizza && pizza.ingredients) {
                this.currentIngd = pizza.ingredients.map(it => {
                    return {
                        name: it,
                        disabled: true
                    }
                })
            }
        }
    },

    computed: {
        ...mapGetters(['type']),
        ...mapState({
            orders: state => state.orders.orders,
            cities: state => state.orders.cities,
            pizzas: state => state.menu.pizzas,
            ingredients: state => state.menu.additionalIngredients
        })
    },

    methods: {
        create: function() {
            if (this.$v.$invalid) {
                this.$v.$touch()
            } else {
                this.$socket.client.emit('order', this.order)

                this.$socket.client.on('order', order => {
                    this.$store.commit('orders/CREATE_ORDER', order)
                    this.$store.dispatch('addMessage', {
                        message: 'created',
                        type: 'success',
                        locale: true
                    })
                })

                this.closeCreateDialog()
            }
        },

        removeIngredient(item) {
            this.currentIngd.splice(this.currentIngd.indexOf(item), 1)
            this.currentIngd = [...this.currentIngd]
        },

        openCreateDialog: function() {
            this.createDialog = true

        },

        closeCreateDialog: function() {
            this.createDialog = false
            this.reset()
        },

        reset: function () {
            this.order = {
                name: '',
                surname: '',
                phone: '',
                cityName: '',
                street: '',
                houseNumber: ''
            }

            this.$nextTick(() => { this.$v.$reset() })
        }
    }
}
</script>
