import actions from './actions'
import mutations from './mutations'

const users = {
    namespaced: true,
    state: {
        users: [],
        isLoaded: false
    },
    mutations,
    actions
};

export default users
