import Vue from 'vue';
import Vuetify, { VAppBar, VList, VListItem, VListItemTitle,
    VListItemContent, VListItemAction, VAppBarNavIcon,
    VToolbarTitle, VContent, VContainer, VSwitch, VBtn } from 'vuetify/lib';
import locales from '../locales';

import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify, {
    components: {
        VAppBar, VList, VListItem, VListItemTitle,
        VListItemContent, VListItemAction, VAppBarNavIcon,
        VToolbarTitle, VContent, VContainer, VSwitch,
        VBtn
    }
});

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    lang: {
        locales,
        current: 'ru'
    },
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: '#1976D2',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            }
        }
    }
});
