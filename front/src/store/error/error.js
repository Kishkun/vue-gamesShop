const state = () => ({
  productError: null,
  categoryError: null
});

const mutations = {
  SET_PRODUCT_ERROR(state, error) {
    state.productError = error
  },
  SET_CATEGORY_ERROR(state, error) {
    state.productError = error
  }
};

const getters = {
  productError: state => state.productError,
  categoryError: state => state.categoryError,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
