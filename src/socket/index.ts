import store from '../store';
import VueSocketIO from 'vue-socket.io';

const settings = {
    debug: true,
    connection: 'http://localhost:3000/',
    vuex: {
        store,
        actionPrefix: 'SOCKET_',
        mutationPrefix: 'SOCKET_',
    },
};

export default new VueSocketIO(settings);
