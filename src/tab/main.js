import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faTimes, faGrimace } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import devtools from '@vue/devtools'; // eslint-disable-line import/no-extraneous-dependencies
import VueLocalStorage from 'vue-localstorage';
import store from '../store';
import App from './App.vue';

Vue.use(VueLocalStorage);
library.add(faCog, faTimes, faGrimace);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
if (process.env.NODE_ENV === 'development') {
  devtools.connect();
}

/* eslint-disable no-new */
new Vue({
  localStorage: {
    isModalSettingsVisible: {
      type: Boolean,
      default: false,
    },
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
  },
  el: '#app',
  store,
  render: (h) => h(App),
});
