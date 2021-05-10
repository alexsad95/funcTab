/* eslint-disable no-shadow */
const state = () => ({
  isModalSettingsVisible: false,
  isChangeFormVisible: false,
});

const getters = {
  MODAL_SETTINGS_STATE(state) {
    return state.isModalSettingsVisible;
  },

  FORM_CHANGE_STATE(state) {
    return state.isChangeFormVisible;
  },
};

const mutations = {
  OPEN_MODAL(state, modalName) {
    state[modalName] = true;
  },

  CLOSE_MODAL(state, modalName) {
    state[modalName] = false;
  },
};

const actions = {
  async openModal({ commit }, payload) {
    commit('OPEN_MODAL', payload);
  },

  async closeModal({ commit }, payload) {
    commit('CLOSE_MODAL', payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};