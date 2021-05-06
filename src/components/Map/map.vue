<template lang="pug" src="./map.pug"></template>

<script>
import { LMap, LTileLayer, LMarker, LPopup, LIcon, LPolyline } from 'vue2-leaflet';
import Vue2LeafletMarkerCluster from 'vue2-leaflet-markercluster';

export default {
    components: {
        'l-marker-cluster': Vue2LeafletMarkerCluster,
        LMap,
        LTileLayer,
        LMarker,
        LIcon,
        LPopup,
        LPolyline
    },
    props: {
        name: {
            type: String,
            default: 'google-map'
        },
        centerCoords: {
            type: Array,
            default: () => []
        }
    },
    data: () => ({
        url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
        zoom: 12,
        center: [51.107883, 17.038538],
        markerObjects: null
    }),
    watch: {
        centerCoords(value) {
            if (!value || !value.length) return;

            const coords = value.map(parseFloat);
            this.center = coords;
        }
    },
    methods: {
        zoomUpdated (zoom) {
            this.zoom = zoom;
        },
        centerUpdated (center) {
            this.center = center;
        },
    }
}
</script>

<style lang="scss" scoped>
    .page-map {
        position: fixed;
        right: 0;
        padding: unset;
        width: calc(100% - 380px);
        height: 100%;
        margin: 0 auto;
        top: 64px;
        z-index: 1;
    }
</style>

