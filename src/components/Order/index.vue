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
        let seconds = timestamp.getSeconds()
        this.interval = setInterval(() => {
            let minutes = timestamp.getMinutes()
            ++seconds
            timestamp =  new Date(timestamp.getTime() + 1000)
            this.timeAfterCreate = `${this.checkTime(minutes)}:${this.checkTime(seconds % 60)}`
        }, 1000)
    },

    mounted: function() {
    },

    methods: {
        checkTime(value) {
            if (parseInt(value) <= 9) {
                return `0${value}`
            }

            return value
        }
    },
}
</script>

