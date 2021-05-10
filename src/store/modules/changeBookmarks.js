/* eslint-disable no-shadow */
const state = () => ({
  changeBookmarks: {},
});

const getters = {
  BOOKMARKS_CHANGE_STATE(state) {
    return state.changeBookmarks;
  },
};

const mutations = {
  CHANGE_BOOKMARKS(state, newBookmark) {
    state.changeBookmarks = newBookmark;
  },
};

const actions = {
  async changeStateBookmark({ commit }, payload) {
    commit('CHANGE_BOOKMARKS', payload);
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};