import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
import users from './users'
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        app,
        users
    },
    getters
})
