<template lang="pug" src="./menu.pug"></template>
<style lang="scss" src="./menu.scss" scoped></style>

<script>
import { mapState } from 'vuex'
export default {
    data: () => ({
        pizza: null,
        deleteDialog: false
    }),

    created: async function() {
        await this.$store.dispatch('menu/getPizzas')
    },

    computed: {
        ...mapState({
            pizzas: state => state.menu.pizzas
        }),
    },

    methods: {
        goToEditor: function(item) {
            this.$router.push(`menu/pizza/${item.id}/edit`)
        },

        openDeleteDialog: function (item) {
            this.deleteDialog = true
            this.pizza = item
        },

        deletePizza: async function() {
            await this.$store.dispatch('menu/deletePizza', this.pizza.id)
            this.deleteDialog = false
        }
    }
}
</script>


