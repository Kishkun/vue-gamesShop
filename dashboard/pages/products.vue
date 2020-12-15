<template>
  <div class="container">
    <h2>This is Products page</h2>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'ProductsPage',
    components: {},
    props: {},
    data: () => ({}),
    mounted() {
      this.fetchProducts();
    },
    computed: {
      ...mapGetters({
        products: 'products/items'
      })
    },
    methods: {
      ...mapActions({
        fetchProducts: 'products/FETCH_ALL'
      })
    },
    watch: {}
  }
</script>
