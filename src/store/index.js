import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
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
      state.isModalSettingsVisible = Vue.localStorage.isModalSettingsVisible;
      return state.isModalSettingsVisible;
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
    TOOGLE_SETTINGS(state) {
      Vue.localStorage.isModalSettingsVisible = !state.isModalSettingsVisible;
      state.isModalSettingsVisible = !state.isModalSettingsVisible;
    },
    CHANGE_COMPONENTS(state) {
      Vue.localStorage.isModalSettingsVisible = !state.isModalSettingsVisible;
      state.isModalSettingsVisible = !state.isModalSettingsVisible;
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
    async changeModal({ commit }) {
      commit('TOOGLE_SETTINGS');
    },
    async changeComponents({ commit }) {
      // commit('CHANGE_COMPONENTS');
    },
  },
  modules: {
  },
});
