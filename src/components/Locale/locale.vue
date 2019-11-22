<template lang="pug" src="./locale.pug"></template>

<script>
export default {
    data: () => ({
        currentLang: '',
        locales: []
    }),
    created: function() {
        this.currentLang = this.$vuetify.lang.current
        this.locales = Object.keys(this.$vuetify.lang.locales)
    },
    methods: {
        changeLocale: function(lang) {
            if (this.locales.includes(lang)) {
                this.currentLang = lang
                this.$vuetify.lang.current = lang
                this.$store.commit('SET_LANGUAGE', lang)
            }
        }
    }
}
</script>
