<template lang="pug">
    v-container(grid-list-md)
        v-layout(row wrap)
            v-flex(xs12)
                v-card
                    v-card-title.blue.darken-3.white--text.subheading(primary-title)
                        span.title {{$vuetify.lang.t('$vuetify.pages.404.title')}}
                    v-card-text {{$vuetify.lang.t('$vuetify.pages.404.text')}}
                    v-card-actions
                        v-btn.red--text(outline to="/") {{$vuetify.lang.t('$vuetify.pages.404.return')}}
</template>

<script>
    export default {
        name: 'Page404'
    }
</script>
