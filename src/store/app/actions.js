import http from '@/http';
import router from '@/router';
import uniqId from 'uniq-id'

export default {
    authRequest: async ({ commit, dispatch }, user) => {
        await http({url: 'login', method: 'POST', data: user})
            .then(res => {
                if (res.data) {
                    console.log(res.data)
                    commit('SET_USER', res.data.user)
                    commit('SET_TOKEN', res.data.jwt)
                    commit('SET_TYPE', res.data.user.type)
                    dispatch('addMessage', {
                        message: 'login',
                        type: 'success',
                        locale: true
                    })
                    router.push('/')
                }
            }).catch(() => {
                commit('REMOVE_TOKEN')
                dispatch('addMessage', {
                    message: 'incorrectLoginOrPassword',
                    type: 'ervalror',
                    locale: true
                })
            })
    },
    getUser: async ({ commit, dispatch }) => {
        await http({
            url: '/user',
            method: 'GET'
        }).then(res => {
            if (res.data) {
                commit('SET_USER', res.data)
            }
        }).catch(error => {
            commit('SET_USER', null)
            dispatch('addMessage', {
                message: error.message,
                type: 'error',
                locale: true
            })
        })
    },

    logout: ({ commit }) => {
        commit('REMOVE_TOKEN')
    },

    addMessage: ({ commit, state }, message) => {
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
