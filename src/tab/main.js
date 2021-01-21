import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import devtools from '@vue/devtools'; // eslint-disable-line import/no-extraneous-dependencies
import store from '../store';
import App from './App.vue';

library.add(faCog, faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
if (process.env.NODE_ENV === 'development') {
  devtools.connect();
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: (h) => h(App),
});
