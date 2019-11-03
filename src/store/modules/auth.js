import { AUTH_REQUEST, AUTH_ERROR, AUTH_SUCCESS, AUTH_LOGOUT } from '../actions/auth'
import { USER_REQUEST } from '../actions/user'
import http from '@/http'
import router from '@/router';

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
                if (res && res.data && res.data.jwt) {
                    const token = res.data.jwt

                    localStorage.setItem('user-token', token)
                    http.defaults.headers.common['Authorization'] = `JWT ${token}`

                    commit(AUTH_SUCCESS, res.data)
                    dispatch(USER_REQUEST)

                    router.push('/receive-orders');
                }
            }).catch(error => {
                commit(AUTH_ERROR, error)
                localStorage.removeItem('user-token')
            })
    },
    [AUTH_LOGOUT]: ({commit}) => {
        commit(AUTH_LOGOUT)
        localStorage.removeItem('user-token')
        delete http.defaults.headers.common['Authorization']
    }
}

const mutations = {
    [AUTH_REQUEST]: (state) => {
        state.status = 'loading'
    },
    [AUTH_SUCCESS]: (state, response) => {
        state.status = 'success'
        state.token = response.jwt
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
