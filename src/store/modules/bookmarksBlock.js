/* eslint-disable no-shadow */
import Vue from 'vue';

const state = () => ({
  changeComponents: false,
});

const getters = {
  BLOCK_STATE(state) {
    state.blocks = Vue.localStorage.bookmarkBlocks;
    return state.blocks;
  },

  COMPONENTS_CHANGE_STATE(state) {
    return state.changeComponents;
  },
};

const mutations = {
  CHANGE_BLOCKS(state, newStateBlock) {
    Vue.localStorage.bookmarkBlocks = newStateBlock;
    state.blocks = newStateBlock;
  },

  CHANGE_COMPONENTS(state) {
    state.changeComponents = true;
  },

  CLOSE_CHANGE_COMPONENTS(state) {
    state.changeComponents = false;
  },
};

const actions = {
  async changeStateBlocks({ commit }, payload) {
    commit('CHANGE_BLOCKS', payload);
  },

  async changeComponents({ commit }) {
    commit('CHANGE_COMPONENTS');
  },

  async closeChangeComponents({ commit }) {
    commit('CLOSE_CHANGE_COMPONENTS');
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};