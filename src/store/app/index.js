import actions from './actions'
import mutations from './mutations'

const app = {
    state: {
        language: localStorage.getItem('locale') || 'ru',
        token: localStorage.getItem('user-token') || '',
        user: null,
        type: '',
        loading: false,
        messages: [],
        isDark: localStorage.getItem('theme') || false,
    },
    mutations,
    actions
}

export default app
