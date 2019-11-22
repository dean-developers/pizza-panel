import actions from './actions'
import mutations from './mutations'

const app = {
    state: {
        language: localStorage.getItem('locale') || 'ru',
        token: localStorage.getItem('token'),
        user: {},
        type: null,
        loading: false,
        messages: [],
    },
    mutations,
    actions
}

export default app
