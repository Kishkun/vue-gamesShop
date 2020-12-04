const state = () => ({
  productError: null
});

const mutations = {
  SET_PRODUCT_ERROR(state, error) {
    state.productError = error
  }
};

const getters = {
  productError: state => state.productError
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
