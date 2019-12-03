<template lang="pug" src="./menuEditor.pug"></template>
<style lang="scss" src="./menuEditor.scss" scoped></style>

<script>
    import { mapState } from 'vuex'
    import { validationMixin } from 'vuelidate';
    import validate from '@/mixins/validate'
    import { required } from 'vuelidate/lib/validators'
    export default {
        mixins:[validate, validationMixin],
        data: () => ({
            pizza: {
                name: null,
                ingredients: [],
                price: null,
                weight: null,
                size: null
            }
        }),
        validations: {
            pizza: {
                name: {
                    required
                },
                ingredients: {
                    required
                },
                price: {
                    required
                },
                weight: {
                    required
                },
                size: {
                    required
                }
            }
        },

        created: async function() {
            await this.$store.dispatch('menu/getAdditionalIngredients')
            if (this.editing) {
                await this.$store.dispatch('menu/getPizzaById', this.$route.params.id)
                this.pizza = Object.assign({}, this.activePizza)
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
            this.$store.commit('menu/RESET_ACTIVE_PIZZA')
            this.reset()
            next()
        },

        methods: {
            removeIngredient: function(item) {
                this.pizza.ingredients.splice(this.pizza.ingredients.indexOf(item), 1)
                this.pizza.ingredients = [...this.pizza.ingredients]
            },

            submit: async function() {
                if (this.$v.$invalid) {
                    this.$v.$touch();
                } else {
                    this.pizza.ingredients = this.pizza.ingredients.map(it => it.name || it)

                    if (this.editing) {
                        await this.$store.dispatch('menu/editPizza', this.pizza)
                    } else {
                        await this.$store.dispatch('menu/createPizza', this.pizza)
                    }

                    this.reset()
                }
            },

            reset: function () {
                this.$nextTick(() => {
                    this.pizza = {
                        name: null,
                        ingredients: [],
                        cost: null,
                        weight: null,
                        size: null
                    }

                    this.$v.$reset()
                })
            }
        }
    }
</script>


