import {getProduct, getProducts} from '../../../services/products.service';

const state = () => ({
  product: {},
  products: []
});

const mutations = {
  SET_PRODUCT(state, product) {
    state.product = product
  },
  SET_PRODUCTS(state, products) {
    state.products = products
  }
};

const actions = {
  async FETCH_PRODUCT({commit}, id) {
    try {
      const res = await getProduct(id);
      if (res.status && res.data.items) {
        commit('SET_PRODUCT', res.data)
      }
    } catch (err) {
      commit('error/SET_PRODUCT_ERROR', err, {root: true})
    }
  },
  async FETCH_PRODUCTS({commit}) {
    try {
      const res = await getProducts();
      if (res.status && res.data.items) {
        commit('SET_PRODUCTS', res.data.items)
      }
    } catch (err) {
      commit('error/SET_PRODUCT_ERROR', err, {root: true})
    }
  }
};

const getters = {
  product: state => state.product,
  products: state => state.products,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
