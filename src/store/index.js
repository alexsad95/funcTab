import Vue from 'vue';
import Vuex from 'vuex';

import themes from './modules/themes';
import modals from './modules/modals';
import bookmarksBlock from './modules/bookmarksBlock';
import changeBookmarks from './modules/changeBookmarks';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    themes,
    modals,
    bookmarksBlock,
    changeBookmarks,
  },
});
