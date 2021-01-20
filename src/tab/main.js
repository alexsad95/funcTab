import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(faCog, faTimes);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;
Vue.config.debug = true;
Vue.config.devtools = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: (h) => h(App),
});
