<template lang="pug" src="./app.pug"></template>
<style lang="scss" src="./app.scss"></style>

<script>
export default {
    data: () => ({
        drawer: false
    }),
    created: function() {
        this.$vuetify.theme.dark = this.theme;
    },
    methods: {
        logout() {
            this.$store.dispatch('logout').then(() => this.$router.push('/login'));
        }
    },
    computed: {
        theme: {
            get() {
                return JSON.parse(this.$store.state.app.isDark);
            },
            set(val) {
                this.$vuetify.theme.dark = val;
                this.$store.commit('TOGGLE_THEME', val);
            }
        },
        menu() {
            return [
                {
                    name: 'orders',
                    icon: 'mdi-progress-clock',
                    to: '/orders'
                },
                {
                    name: 'users',
                    icon: 'mdi-account',
                    to: '/users'
                },
                {
                    name: 'settings',
                    icon: 'mdi-settings',
                    to: '/settings'
                },

            ]
        },
        routeName() {
            return this.$route.name
        }
    }
}
</script>
