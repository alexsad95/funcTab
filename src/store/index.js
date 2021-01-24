import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: 'gruvbox-dark',
    font: 'Iosevka',
    size: 21,
    isModalSettingsVisible: false,
  },
  getters: {
    THEME_STATE(state) {
      return state.theme;
    },
    MODAL_SETTINGS_STATE(state) {
      return state.isModalSettingsVisible;
    },
    FONT_STATE(state) {
      return state.font;
    },
    SIZE_STATE(state) {
      return state.size;
    },
  },
  mutations: {
    CHANGE_THEMES(state, theme) {
      state.theme = theme;
    },
    CHANGE_FONTS(state, font) {
      state.font = font;
    },
    CHANGE_SIZE(state, size) {
      state.size = size;
    },
    TOOGLE_SETTINGS(state) {
      state.isModalSettingsVisible = !state.isModalSettingsVisible;
    },

  },
  actions: {
    async changeThemes({ commit }, payload) {
      commit('CHANGE_THEMES', payload);
    },
    async changeModal({ commit }) {
      commit('TOOGLE_SETTINGS');
    },
    async changeFonts({ commit }, payload) {
      commit('CHANGE_FONTS', payload);
    },
    async changeSize({ commit }, payload) {
      commit('CHANGE_SIZE', payload);
    },
  },
  modules: {
  },
});
