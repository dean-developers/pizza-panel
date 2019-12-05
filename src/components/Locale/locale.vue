<template lang="pug" src="./locale.pug"></template>
<style scoped>
.uk {
    background: url(../../../public/img/locales/uk.png) no-repeat center;
    background-size: cover;
}
.en {
    background: url(../../../public/img/locales/uk.png) no-repeat center;
    background-size: cover;
}

.ru {
    background: url(../../../public/img/locales/uk.png) no-repeat center;
    background-size: cover;
}

.v-list {
    background: none !important;
}

.v-list-item {
    padding: 1px 2px 0 2px !important;
}

.active {
    background: #1565C0;
}
</style>
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
