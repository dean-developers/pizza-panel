import axios from 'axios';
import router from '@/router';
import store from '@/store';
import App from '@/main.js';

console.log(process.env);
const http = axios.create({
    baseURL: process.env.VUE_APP_SERVER,
    timeout: 5000
});

http.interceptors.response.use(
    res => Promise.resolve(res),
    error => {
        if (error.response && error.response.status === 401 && !['/', '/login'].includes(App.$route.path)) {
            store.commit('SET_USER', null);
            router.push('/login');
        }

        return Promise.reject(error);
    }
);

export default http;
