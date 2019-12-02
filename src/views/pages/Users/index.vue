<template lang="pug" src="./users.pug"></template>
<style lang="scss" src="./users.scss" scoped></style>

<script>
import {mapState} from 'vuex'
export default {

    data: () => ({

    }),
    computed: {
        ...mapState({
            users: state => state.users.users,
            isTableLoad: state => state.users.isLoaded
        }),
        noValue: function() {
            return '-'
        },
        headers() {
            return [
                'login', 'type', 'status', 'createdAt',
            ].map(it => ({
                text: this.$vuetify.lang.t(`$vuetify.pages.Users.table.${it}`),
                value: it,
                sortable: false,
                align: 'center'
            }));
        }
    },
    created: function() {
        this.$store.dispatch('users/getUsers')
    }
}
</script>
