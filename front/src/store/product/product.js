import {getProduct} from '../../../services/products.service';

const mutations = {
  async SET_PRODUCT(state, product) {
    state.product = product
  },
  async FETCH_PRODUCTS({commit}, products) {
    state.products = products
  }
}
const actions = {
  async FETCH_PRODUCT({commit}, id) {
    try {
      const product = await getProduct(id)
      commit('SET_PRODUCT', product)
    } catch (err) {
      commit('error/SET_PRODUCT_ERROR', err, {root: true})
    }
  },
  async FETCH_PRODUCTS({commit}) {
    try {
      const products = await getProduct()
      commit('FETCH_PRODUCTS', products)
    } catch (err) {
      commit('error/SET_PRODUCT_ERROR', err, {root: true})
    }
  }
}

const getters = {
  product: state => state.product,
  products: state => state.products,
}

const state = () => ({
  product: {},
  products: []
})

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
