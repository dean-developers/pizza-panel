<template lang="pug" src="./app.pug"></template>
<style lang="scss" src="./app.scss"></style>

<script>
    export default {
        data: () => ({
            drawer: false
        }),
        computed: {
            menu() {
                return [
                    {
                        name: 'receiveOrders',
                        icon: 'mdi-account-clock',
                        to: '/receive-orders'
                    },
                    {
                        name: 'settings',
                        icon: 'mdi-settings',
                        to: '/settings'
                    },

                ]
            }
        }
    }
</script>
