const getters = {
    language: state => state.app.language,
    loggedIn: state => !!state.app.token,
    token: state => state.app.token,
    type: state => state.app.type
}

export default getters
