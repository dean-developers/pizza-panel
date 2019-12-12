<template lang="pug">
    v-container(grid-list-md)
        v-layout(row wrap)
            v-flex
                v-card.card-404(style="margin-top: 50px" max-width="800px")
                    v-card-title.blue.darken-3.white--text.subheading(primary-title)
                        span.title {{$vuetify.lang.t('$vuetify.pages.404.title')}}
                    v-img(src="/img/404.png" max-width="800px")
                    v-card-text {{$vuetify.lang.t('$vuetify.pages.404.text')}}
                    v-card-actions.actions-404
                        v-btn.red--text(outlined to="/") {{$vuetify.lang.t('$vuetify.pages.404.back')}}
</template>

<script>
export default {
    name: 'Page404'
}
</script>

<style lang="scss" scoped>
    .card-404 {
        margin: 0 auto;
    }

    .actions-404 {
        display: flex;
        justify-content: center;
    }

    .v-card__title {
        text-align: center !important;
    }
</style>
