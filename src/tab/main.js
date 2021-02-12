import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCog, faTimes, faGrimace, faSave, faWindowClose, faEdit, faArrowsAlt, faTrashAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import devtools from '@vue/devtools'; // eslint-disable-line import/no-extraneous-dependencies
import VueLocalStorage from 'vue-localstorage';
import store from '../store';
import App from './App.vue';

Vue.use(VueLocalStorage);
library.add(faCog, faTimes, faGrimace, faSave, faWindowClose, faEdit, faArrowsAlt, faTrashAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
if (process.env.NODE_ENV === 'development') {
  devtools.connect();
}

/* eslint-disable no-new */
new Vue({
  localStorage: {
    size: {
      type: Number,
      default: 21,
    },
    font: {
      type: String,
      default: 'Iosevka',
    },
    theme: {
      type: String,
      default: 'gruvbox-dark',
    },
    bookmarkBlocks: {
      type: Object,
      default: {
        cols: 3,
        value: [
          {
            name: 'social',
            value: [
              {
                text: 'vk',
                href: 'https://vk.com',
                icons: 'vk_icons',
              },
              {
                text: 'youtube',
                href: 'https://youtube.com',
                icons: 'youtube_icons',
              },
              {
                text: 'instagram',
                href: 'https://www.instagram.com/',
                icons: 'instagram_icons',
              },
            ],
          },
          {
            name: 'programming',
            value: [
              {
                text: 'github',
                href: 'https://github.com',
                icons: 'github_icons',
              },
              {
                text: 'codotaJsSearch',
                href: 'https://www.codota.com/code/javascript',
                icons: 'default',
              },
              {
                text: 'monkeytype',
                href: 'https://monkeytype.com/',
                icons: 'default',
              },
            ],
          },
          {
            name: 'other',
            value: [
              {
                text: 'twitch',
                href: 'https://www.twitch.tv/',
                icons: 'twitch_icons',
              },
              {
                text: 'reddit',
                href: 'https://reddit.com/',
                icons: 'reddit_icons',
              },
              {
                text: 'sideProjectList',
                href: 'https://sideprojectlist.co/',
                icons: 'default',
              },
            ],
          },
        ],
      },
    },
  },
  el: '#app',
  store,
  render: (h) => h(App),
});
