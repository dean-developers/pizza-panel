<template lang="pug" src="./map.pug"></template>

<style lang="scss" scoped>
    .page-map {
        position: absolute;
        right: 0;
        padding: unset;
        width: calc(100% - 380px);
        height: 100%;
        margin: 0 auto;
        top: 64px;
        z-index: 1;
    }
</style>

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
        }
    },
    data: () => ({
        url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
        zoom: 12,
        center: [49.2327805, 28.4809704],
        markerObjects: null

    }),
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

