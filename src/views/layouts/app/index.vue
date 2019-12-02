<template lang="pug" src="./app.pug"></template>
<style lang="scss" src="./app.scss"></style>

<script>
import { mapState } from 'vuex'
export default {
    data: () => ({
        drawer: false
    }),

    created: function() {
        this.$store.dispatch('getUser')
        this.$vuetify.theme.dark = this.theme;
    },

    methods: {
        logout() {
            this.$store.dispatch('logout').then(() => this.$router.push('/login'));
        }
    },

    computed: {
        ...mapState({
            type: state => state.app.type
        }),
        theme: {
            get() {
                return JSON.parse(this.$store.state.app.isDark);
            },

            set(val) {
                this.$vuetify.theme.dark = val;
                this.$store.commit('TOGGLE_THEME', val);
            },

        },
        navigation() {
            return [
                {
                    name: 'orders',
                    icon: 'mdi-progress-clock',
                    to: '/orders',
                    permissions: ['admin', 'operator']
                },
                {
                    name: 'menu',
                    icon: 'mdi-view-list',
                    to: '/menu',
                    permissions: ['admin']
                },
                {
                    name: 'users',
                    icon: 'mdi-account',
                    to: '/users',
                    permissions: ['admin']
                },
                {
                    name: 'settings',
                    icon: 'mdi-settings',
                    to: '/settings',
                    permissions: ['admin', 'operator']
                },

            ]
        },

        routeName() {
            return this.$route.name
        }
    }
}
</script>
