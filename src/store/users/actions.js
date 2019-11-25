import http from '@/http';

export default {
    getUsers: async ({ commit, dispatch }) => {
        commit('users/SET_LOAD', true, { root: true })
        await http({
            url: '/users',
            method: 'GET'
        }).then(res => {
            console.log('here')
            if (res.data) {
                commit('SET_USERS', res.data)
                commit('users/SET_LOAD', false, { root: true })
            }
        }).catch(error => {
            commit('SET_USERS', null)
            dispatch('addMessage', {
                message: error.message,
                type: 'error',
                locale: true
            })
        })
    }
}
