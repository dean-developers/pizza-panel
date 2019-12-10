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
import Order from './components/Order'

Vue.config.productionTip = false

const socket = io(process.env.VUE_APP_SERVER);
Vue.use(VueSocketIOExt, socket, { store });
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

Vue.component('order', Order)
// ===================================

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
