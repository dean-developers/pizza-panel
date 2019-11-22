import axios from 'axios'
import store from '@/store'

const http = axios.create({
    baseURL: process.env.VUE_APP_SERVER,
    timeout: 5000
})

http.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.headers = Object.assign({}, config.headers, {
                'Authorization': `JWT ${store.getters.token}`
            })
        }

        return config
    },
    error => Promise.reject(error)
)

export default http
