import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isModalSettingsVisible: false,
    isChangeFormVisible: false,
    changeComponents: false,
    changeBookmarks: {
      url: '',
      name: '',
    },
  },
  getters: {
    THEME_STATE(state) {
      state.theme = Vue.localStorage.theme;
      return state.theme;
    },
    FONT_STATE(state) {
      state.font = Vue.localStorage.font;
      return state.font;
    },
    SIZE_STATE(state) {
      state.size = Vue.localStorage.size;
      return state.size;
    },
    MODAL_SETTINGS_STATE(state) {
      return state.isModalSettingsVisible;
    },
    BLOCK_STATE(state) {
      state.blocks = Vue.localStorage.bookmarkBlocks;
      return state.blocks;
    },
    COMPONENTS_CHANGE_STATE(state) {
      return state.changeComponents;
    },
    FORM_CHANGE_STATE(state) {
      return state.isChangeFormVisible;
    },
    BOOKMARKS_URL_STATE(state) {
      return state.changeBookmarks.url;
    },
    BOOKMARKS_NAME_STATE(state) {
      return state.changeBookmarks.name;
    },
  },
  mutations: {
    CHANGE_THEMES(state, theme) {
      Vue.localStorage.theme = theme;
      state.theme = theme;
    },
    CHANGE_FONTS(state, font) {
      Vue.localStorage.font = font;
      state.font = font;
    },
    CHANGE_SIZE(state, size) {
      Vue.localStorage.size = size;
      state.size = size;
    },
    CHANGE_BLOCKS(state, newStateBlock) {
      Vue.localStorage.bookmarkBlocks = newStateBlock;
      state.blocks = newStateBlock;
    },
    CHANGE_BOOKMARKS(state, newBookmark) {
      state.changeBookmarks = newBookmark;
    },
    CHANGE_COMPONENTS(state) {
      state.changeComponents = true;
    },
    OPEN_MODAL(state, modalName) {
      state[modalName] = true;
    },
    CLOSE_MODAL(state, modalName) {
      state[modalName] = false;
    },
    CLOSE_CHANGE_COMPONENTS(state) {
      state.changeComponents = false;
    },
  },
  actions: {
    async changeThemes({ commit }, payload) {
      commit('CHANGE_THEMES', payload);
    },
    async changeFonts({ commit }, payload) {
      commit('CHANGE_FONTS', payload);
    },
    async changeSize({ commit }, payload) {
      commit('CHANGE_SIZE', payload);
    },
    async changeComponents({ commit }) {
      commit('CHANGE_COMPONENTS');
    },
    async closeChangeComponents({ commit }) {
      commit('CLOSE_CHANGE_COMPONENTS');
    },
    async closeModal({ commit }, payload) {
      commit('CLOSE_MODAL', payload);
    },
    async openModal({ commit }, payload) {
      commit('OPEN_MODAL', payload);
    },
    async changeStateBlocks({ commit }, payload) {
      commit('CHANGE_BLOCKS', payload);
    },
    async changeStateBookmark({ commit }, payload) {
      commit('CHANGE_BOOKMARKS', payload);
    },
  },
  modules: {
  },
});
