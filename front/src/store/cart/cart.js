import {getPaymentIntent} from '../../../services/payment.service';

const state = () => ({
  cart: {
    total: 0
  },
  cartItems: []
});

const mutations = {
  ADD_TO_CART(state, product) {
    state.cartItems.push(product)
  },
  DELETE_FROM_CART(state, product) {
    state.cartItems = state.cartItems.filter(items => items._id !== product._id)
  },
  CLEAR_CART(state) {
    state.cartItems = []
  }
};

const actions = {
  async PAY_ITEMS({commit, getters}, form) {
    try {
      return await getPaymentIntent({
        amount: getters.cartTotalPrice,
        ...form
      })
    } catch (err) {
      commit('error/SET_PAYMENT_ERROR', err, {root: true})
    }
  },
};

const getters = {
  cartItems: state => state.cartItems,
  cartCount: state => state.cartItems.length,
  cartTotalPrice: state => state.cartItems.reduce((sum, item) => sum + Number(item.price), 0)
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
