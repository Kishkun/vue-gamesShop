const state = () => ({
  productError: null,
  categoryError: null,
  paymentError: null
});

const mutations = {
  SET_PRODUCT_ERROR(state, error) {
    state.productError = error
  },
  SET_CATEGORY_ERROR(state, error) {
    state.categoryError = error
  },
  SET_PAYMENT_ERROR(state, error) {
    state.paymentError = error
  }
};

const getters = {
  productError: state => state.productError,
  categoryError: state => state.categoryError,
  paymentError: state => state.paymentError,
};

export default {
  namespaced: true,
  state,
  mutations,
  getters
}
