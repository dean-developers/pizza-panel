<template lang="pug" src="./order.pug"></template>
<style lang="scss" src="./order.scss"></style>

<script>
export default {
    props: {
        order: {
            type: Object,
            default: null
        }
    },

    data: () => ({
        showDetails: false
    }),

    computed: {
        detailsIcon: function() {
            return this.showDetails ? 'mdi-arrow-collapse' : 'mdi-arrow-expand'
        }
    },

    created: function() {
    },

    mounted: function() {
    },

    methods: {

    },


}
</script>

