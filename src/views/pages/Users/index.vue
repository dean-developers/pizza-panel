<template lang="pug" src="./users.pug"></template>
<style lang="scss" src="./users.scss" scoped></style>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "users",
        data: () => ({
            headers: ['login', 'type', 'status', 'createdAt', 'updatedAt'].map(it => ({
                text: it, value: it
            }))
        }),
        computed: {
            ...mapState({
                users: state => state.users.users,
                isTableLoad: state => state.users.isLoaded
            }),
            noValue: function() {
                return '-'
            }
        },
        created: function() {
            this.$store.dispatch('users/getUsers')
        }
    }
</script>
