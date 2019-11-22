import http from '../../http';
import router from '../../router';
import uniqId from 'uniq-id'

export default {
    authRequest: async ({commit, dispatch}, user) => {
        await http({url: 'login', method: 'POST', data: user})
            .then(res => {
                if (res && res.data && res.data.jwt) {
                    console.log(res.data)
                    commit('SET_USER', res.data)
                    commit('SET_TOKEN', res.data.jwt)
                    dispatch('addMessage', {
                        message: 'login',
                        type: 'success',
                        locale: true
                    })
                    router.push('/receive-orders')
                }
            }).catch(error => {
                commit('REMOVE_TOKEN')
                dispatch('addMessage', {
                    message: error.message,
                    type: 'error',
                    locale: true
                })
            })
    },
    getUser: async ({commit, dispatch}) => {
        await http({
            url: '/user'
        }).then(res => {
            if (res.data) {
                commit('SET_USER', res)
            }
        }).catch(error => {
            dispatch('logout')
            dispatch('addMessage', {
                message: error.data.message,
                type: 'error',
                locale: true
            })
        })
    },

    logout: ({commit}) => {
        commit('REMOVE_TOKEN')
    },

    addMessage: ({commit, state}, message) => {
        const alreadyExistMessage = state.messages.find(it => {
            let equal = true

            Object.keys(message).forEach(key => {
                if (it[key] && it[key] !== message[key]) {
                    equal = false
                }
            })

            return equal
        })

        if (alreadyExistMessage) {
            commit('REMOVE_MESSAGE', alreadyExistMessage.id)
        }

        const messageObj = Object.assign({id: uniqId(), time: message.time || 2000}, message)

        commit('ADD_MESSAGE', messageObj)

        setTimeout(() => commit('REMOVE_MESSAGE', messageObj.id), messageObj.time)
    }

}
