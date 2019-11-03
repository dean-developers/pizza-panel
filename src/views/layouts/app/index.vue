<template lang="pug" src="./app.pug"></template>
<style lang="scss" src="./app.scss"></style>

<script>
    import { AUTH_LOGOUT }  from '@/store/actions/auth'

    export default {
        data: () => ({
            drawer: false
        }),
        created: function() {
          console.log(this.$store.getters.isAuthenticated);
        },
        methods: {
            logout() {
                this.$store.dispatch(AUTH_LOGOUT).then(() => this.$router.push('/login'));
            }
        },
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
