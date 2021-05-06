import Vue from 'vue';
import Vuetify, { VAppBar, VList, VListItem, VListItemTitle,
    VListItemContent, VListItemAction, VAppBarNavIcon,
    VToolbarTitle, VContent, VContainer, VSwitch, VBtn,
    VSpacer, VToolbar, VImg, VIcon, VCard, VCardText,
    VCardActions, VCardTitle, VRow, VCol, VTextField,
    VAutocomplete, VDialog, VSelect, VCombobox, VChip,
    VChipGroup, VRating, VDivider, VSheet, VSlideGroup,
    VSlideItem, VCardSubtitle, VExpandTransition, VHover
    } from 'vuetify/lib';
import locales from '../locales';

import '@mdi/font/css/materialdesignicons.css';

Vue.use(Vuetify, {
    components: {
        VAppBar, VList, VListItem, VListItemTitle,
        VListItemContent, VListItemAction, VAppBarNavIcon,
        VToolbarTitle, VContent, VContainer, VSwitch,
        VBtn, VSpacer, VToolbar, VImg, VIcon, VCard,
        VCardText, VCardActions, VCardTitle,VRow,
        VCol, VTextField, VAutocomplete, VDialog,
        VSelect, VCombobox, VChip, VChipGroup, VRating,
        VDivider, VSheet, VSlideGroup, VSlideItem,
        VCardSubtitle, VExpandTransition, VHover
    }
});

export default new Vuetify({
    icons: {
        iconfont: 'mdi'
    },
    lang: {
        locales,
        current: Object.keys(locales).includes(localStorage.getItem('locale')) ? localStorage.getItem('locale') : 'ru'
    },
    theme: {
        options: {
            customProperties: true
        },
        themes: {
            light: {
                primary: '#D81B60',
                secondary: '#424242',
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107'
            },
            dark: {
                primary: '#263238'
            }
        }
    }
});
