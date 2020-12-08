<template>
  <div class="product">
    <div class="product__list">
      <ProductCard
          v-for="product in products" :key="product._id"
          :product="product"
          :inCart="cartItemsIds.includes(product._id)"
          @addToCart="addToCart(product)"
          @deleteFromCart="deleteFromCart(product)"
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions, mapMutations } from 'vuex'
  
  import ProductCard from '../components/layouts/ProductCard'

export default {
  name: 'Home',
  components: {ProductCard},
  data: () => ({

  }),
  computed: {
    ...mapGetters({
      products: 'product/products',
      cartItems: 'cart/cartItems'
    }),
    cartItemsIds: ({cartItems}) => cartItems.map(({_id}) => _id)
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions({
      fetchProducts: 'product/FETCH_PRODUCTS'
    }),
    ...mapMutations({
      addToCart: 'cart/ADD_TO_CART',
      deleteFromCart: 'cart/DELETE_FROM_CART'
    })
  }
}
</script>
<style lang="scss" scoped>
  @import '../style/utils/variables';
  
  .product {
  
    &__list {
      display: flex;
      justify-content: space-around;
      padding: 30px;
    }
  }
</style>
