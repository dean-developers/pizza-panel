export default {
    SET_LANGUAGE: (state, language) => {
        state.language = language
        localStorage.setItem('locale', language)
    },

    SET_USER: (state, user) => {
        state.user = user
    },

    SET_LOAD: (state) => {
        state.loading = true
    },

    SET_TYPE: (state, type) => {
        state.type = type
    },

    SET_TOKEN: (state, token) => {
        state.token = token
        localStorage.setItem('token', token)
    },

    REMOVE_TOKEN: (state) => {
        state.token = null
        localStorage.removeItem('token')
    },

    ADD_MESSAGE: (state, message) => {
        state.messages.push(Object.assign({
            type: 'error',
            message: 'unknown',
            locale: true,
            show: true
        }, message))
    },

    REMOVE_MESSAGE: (state, messageId) => {
        state.messages = state.messages.filter(message => message.id !== messageId)
    },

}
