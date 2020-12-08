import {getCategory, getCategories} from '../../../services/categories.service';

const state = () => ({
  category: {},
  categories: []
});

const mutations = {
  SET_CATEGORY(state, category) {
    state.category = category
  },
  SET_CATEGORIES(state, categories) {
    state.categories = categories
  }
};

const actions = {
  async FETCH_CATEGORY({commit}, id) {
    try {
      const res = await getCategory(id);
      console.log(res)
      if (res.status && res.data.items) {
        commit('SET_CATEGORY', res.data)
      }
    } catch (err) {
      commit('error/SET_CATEGORY_ERROR', err, {root: true})
    }
  },
  async FETCH_CATEGORIES({commit}) {
    try {
      const res = await getCategories();
      if (res.status && res.data.items) {
        commit('SET_CATEGORIES', res.data.items)
      }
    } catch (err) {
      commit('error/SET_CATEGORY_ERROR', err, {root: true})
    }
  }
};

const getters = {
  category: state => state.category,
  categories: state => state.categories,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
