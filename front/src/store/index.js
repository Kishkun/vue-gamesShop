import Vue from 'vue'
import Vuex from 'vuex'

import error from './error/error'
import product from './product/product'
import category from './category/category'
import cart from './cart/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    error,
    product,
    category,
    cart
  }
})
