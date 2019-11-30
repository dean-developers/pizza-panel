import http from '@/http';

export default {
    getUsers: async ({ commit, dispatch }) => {
        commit('SET_LOAD', true)
        await http({
            url: '/users',
            method: 'GET'
        }).then(res => {
            if (res.data) {
                commit('SET_USERS', res.data)
                commit('SET_LOAD', false)
            }
        }).catch(error => {
            commit('SET_USERS', null)
            dispatch('addMessage', {
                message: error.message,
                type: 'error',
                locale: true
            }, { root: true })
        })
    }
}
