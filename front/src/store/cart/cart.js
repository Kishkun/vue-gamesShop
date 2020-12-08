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
  }
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
  getters
}
