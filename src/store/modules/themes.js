/* eslint-disable no-shadow */
import Vue from 'vue';

const state = () => ({
  font: 'Iosevka',
  size: 21,
  theme: 'gruvbox-dark',
});

const getters = {
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
};

const mutations = {
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
};

const actions = {
  async changeThemes({ commit }, payload) {
    commit('CHANGE_THEMES', payload);
  },
  async changeFonts({ commit }, payload) {
    commit('CHANGE_FONTS', payload);
  },
  async changeSize({ commit }, payload) {
    commit('CHANGE_SIZE', payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};