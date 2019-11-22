const getters = {
    language: state => state.app.language,
    loggedIn: state => state.app.user && state.app.token,
    token: state => state.app.token,
}

export default getters
