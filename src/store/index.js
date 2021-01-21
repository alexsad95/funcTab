import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    theme: 'gruvbox-dark',
    isModalSettingsVisible: false,
  },
  getters: {
    THEME_STATE(state) {
      return state.theme;
    },
    MODAL_SETTINGS_STATE(state) {
      return state.isModalSettingsVisible;
    },
  },
  mutations: {
    CHANGE_THEME(state, theme) {
      state.theme = theme;
    },
    TOOGLE_SETTINGS(state) {
      state.isModalSettingsVisible = !state.isModalSettingsVisible;
    },

  },
  actions: {
    async changeTheme({ commit }, payload) {
      commit('CHANGE_THEME', payload);
    },
    async changeModal({ commit }) {
      commit('TOOGLE_SETTINGS');
    },
  },
  modules: {
  },
});
