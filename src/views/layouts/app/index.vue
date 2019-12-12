<template lang="pug" src="./app.pug"></template>
<style lang="scss" src="./app.scss"></style>

<script>
    import { mapState, mapGetters } from 'vuex'

    export default {
    data: () => ({
        drawer: false,
        fixed: false
    }),

    created: function() {
        this.$store.dispatch('getUser')
        this.$vuetify.theme.dark = this.theme;
    },

    mounted: function() {
        window.addEventListener('keydown', e => {
            if (e.ctrlKey && e.which === 192) {
                this.drawer = !this.drawer
            }
        })
    },

    methods: {
        logout() {
            this.$store.dispatch('logout').then(() => this.$router.push('/login'));
        }
    },

    computed: {
        ...mapGetters(['type']),
        ...mapState({
            user: state => state.app.user,
            theme: state => state.app.theme
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
        background: function() {
            return !this.theme ? 'light-bg' : 'dark-bg'
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
                    permissions: ['admin', 'operator']
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
                    permissions: ['admin', 'operator', 'driver']
                },

            ]
        },

        routeName() {
            return this.$route.name
        }
    }
}
</script>
