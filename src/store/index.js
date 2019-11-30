import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './app'
import users from './users'
import orders from './orders'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        app,
        users,
        orders
    },
    getters
})
