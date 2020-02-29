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
        showDetails: false,
        timeAfterCreate: '00:00',
        interval: null,
        deleteDialog: false
    }),

    computed: {
        detailsIcon: function() {
            return this.showDetails ? 'mdi-arrow-collapse' : 'mdi-arrow-expand'
        },
        isNewOrder: function () {
            return new Date().addMinutes(-10) < new Date(this.order.createdAt)
        }
    },

    created: function() {
        const now = new Date()
        const created = new Date(this.order.createdAt)

        let timestamp = new Date(Math.abs(now - created))

        this.interval = setInterval(() => {
            timestamp =  new Date(timestamp.getTime() + 1000)
            this.timeAfterCreate = timestamp.format('{mm}:{ss}')
        }, 1000)
    },

    methods: {
        deleteOrder: async function() {
            await this.$store.dispatch('orders/deleteOrder', this.order.orderId)
        }
    },
}
</script>

