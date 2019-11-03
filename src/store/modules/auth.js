import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
import { USER_REQUEST } from '../actions/user'
import http from '../../http'

const state = { token: localStorage.getItem('user-token') || '', status: ''}

const getters = {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status
}

const actions = {
    [AUTH_REQUEST]: async ({commit, dispatch}, user) => {
        commit(AUTH_REQUEST)
        await http({ url: 'login', method: 'POST', data: user })
            .then(res => {
                localStorage.setItem('user-token', res.data.jwt)
                commit(AUTH_SUCCESS, res)
                dispatch(USER_REQUEST)

            }).catch(error => {
                commit(AUTH_ERROR, error)
                localStorage.removeItem('user-token')
            })
    },
    [AUTH_LOGOUT]: ({commit}) => {
        commit(AUTH_LOGOUT)
        localStorage.removeItem('user-token')
    }
}

const mutations = {
    [AUTH_REQUEST]: (state) => {
        state.status = 'loading'
    },
    [AUTH_SUCCESS]: (state, resp) => {
        state.status = 'success'
        state.token = resp.token
    },
    [AUTH_ERROR]: (state) => {
        state.status = 'error'
    },
    [AUTH_LOGOUT]: (state) => {
        state.token = ''
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}
