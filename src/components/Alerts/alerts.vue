<template lang="pug" src="./alerts.pug"></template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'Alerts',
    data: () => ({
    }),
    computed: {
        ...mapState({
            items: state => state.app.messages
        })
    }
}
</script>

<style scoped>
    .errors {
        position: absolute;
        bottom: 20px;
        right: 20px;
        z-index: 3;
    }

    .slide-fade-enter-active {
        transition: all .6s ease;
    }
    .slide-fade-leave-active {
        transition: all .4s ease-in-out;
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(100px);
        opacity: 0;
    }
    .slide-fade-leave-to {
        transform: translateY(-50px);
    }
</style>
