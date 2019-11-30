<template lang="pug" src="./map.pug"></template>

<style lang="scss" scoped>
    .google-map {
        position: absolute;
        right: 0;
        width: calc(100% - 380px);
        height: 100%;
        margin: 0 auto;
        background: gray;
        top: 0;
        z-index: 1;
    }
    .gm-control-active.gm-fullscreen-control {
        display: none !important;
    }
</style>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'google-map'
        }
    },
    data: function() {
        return {
            map: '',
            markers: [
                {
                    position: {
                        latitude: 49.2327805,
                        longitude: 28.4809704
                    }
                }
            ]
        };
    },
    computed: {
        mapMarkers: function () {
            return this.markers
        }
    },
    mounted: function () {

        const element = document.getElementById(this.name)
        const options = {
            height: "100vh",
            width: "100%",
            zoom: 14,
            zoomControl: true,
            fullscreenControl: false,
            streetViewControl: false,
            mapTypeControl: false,

            // eslint-disable-next-line no-undef
            center: new google.maps.LatLng(49.23, 28.48)
        }
        // eslint-disable-next-line no-undef
        this.map = new google.maps.Map(element, options)
        this.markers.forEach((marker) => {
            // eslint-disable-next-line no-undef
            const position = new google.maps.LatLng(marker.position.latitude, marker.position.longitude)
            marker.map = this.map
            marker.position = position
            // eslint-disable-next-line no-undef
            new google.maps.Marker(marker)
        })
    }
}
</script>

