import Vue from 'vue'
import App from './App.vue'
import VueSocketIOExt from 'vue-socket.io-extended';
import io from 'socket.io-client';

import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'
import VueMask from 'v-mask'
// eslint-disable-next-line no-unused-vars
const sugar = require('sugar')()

import alerts from './components/Alerts/alerts'
import Locale from './components/Locale/locale'
import Map from './components/Map/map'

Vue.config.productionTip = false

import { Icon }  from 'leaflet';
import 'leaflet/dist/leaflet.css';

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const socket = io(process.env.VUE_APP_SERVER)
Vue.use(VueSocketIOExt, socket, { store })
Vue.use(Vuelidate)
Vue.use(VueMask)

// ============= Filters =============
Vue.filter('formatDate', function(value) {
    return new Date(value).format('%H:%M:%S')
})

// ===================================

// =========== Components ============
Vue.component('v-locale', Locale)
Vue.component('alerts', alerts)
Vue.component('v-map', Map)
// ===================================

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
