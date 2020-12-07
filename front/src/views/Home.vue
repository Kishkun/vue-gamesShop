<template>
  <div class="product">
    <div class="product__list">
      <ProductCard
          v-for="(product, i) in products" :key="i"
          :title="product.title"
          :price="product.price"
          :imageUrl="product.imageUrl"
      />
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  
  import ProductCard from '../components/layouts/ProductCard'

export default {
  name: 'Home',
  components: {ProductCard},
  data: () => ({

  }),
  computed: {
    ...mapGetters({
      products: 'product/products'
    })
  },
  mounted() {
    this.fetchProducts()
  },
  methods: {
    ...mapActions({
      fetchProducts: 'product/FETCH_PRODUCTS'
    })
  }
}
</script>
<style lang="scss" scoped>
  @import '../style/utils/variables';
  
  .product {
  
    &__list {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 30px;
    }
  }
</style>
