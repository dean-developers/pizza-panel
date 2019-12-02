import http from '../../http'


export default {
    getCities: async ({ commit, dispatch }) => {
        await http({
            url: 'cities',
            method: 'get'
        }).then(res => {
            if (res.data && res.data.cities)
                commit('SET_CITIES', res.data.cities)
        }).catch(err => {
            dispatch('addMessage', {
                message: err.message,
                type: 'error'
            })
        })
    }
}
