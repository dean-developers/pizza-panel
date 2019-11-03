import { USER_REQUEST, USER_ERROR, USER_SUCCESS } from '../actions/user'
import http from '../../http'

import Vue from 'vue'
import { AUTH_LOGOUT } from '../actions/auth'

const state = { status: '', profile: {} }

const getters = {
    getProfile: state => state.profile,
    isProfileLoaded: state => !!state.profile.name,
}

const actions = {
    [USER_REQUEST]: async ( { commit, dispatch } ) => {
        commit(USER_REQUEST)
        await http( {url: '/user'} )
            .then(res => {
                commit(USER_SUCCESS, res)
            })
            .catch(res => {
                console.log(res);
                commit(USER_ERROR)
                dispatch(AUTH_LOGOUT)
            })
    },
}

const mutations = {
    [USER_REQUEST]: (state) => {
        state.status = 'loading'
    },
    [USER_SUCCESS]: (state, res) => {
        state.status = 'success'
        Vue.set(state, 'profile', res)
    },
    [USER_ERROR]: (state) => {
        state.status = 'error'
    },
    [AUTH_LOGOUT]: (state) => {
        state.profile = {}
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
