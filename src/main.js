import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import Vuelidate from 'vuelidate'

import alerts from './components/Alerts/alerts'
import Locale from './components/Locale/locale'
import Map from './components/Map/map'
import Order from './components/Order'


Vue.config.productionTip = false

Vue.use(Vuelidate)

Vue.component('v-locale', Locale)
Vue.component('alerts', alerts)
Vue.component('v-map', Map)

Vue.component('order', Order)

new Vue({
    vuetify,
    router,
    store,
    render: h => h(App)
}).$mount('#app')
