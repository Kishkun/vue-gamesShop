<template>
  <div class="container-fluid">
    <h2>Товары</h2>
    <nuxt-link class="btn btn-success" to="products/form">Добавить продукт</nuxt-link>
    <DataTable :columns="columns" :actions="actions" :data="products.items" @onEdit="handleEdit" />
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'

  // components
  import DataTable from '../../components/table/DataTable';

  // data
  import {columns, actions} from './setup';

  export default {
    name: 'ProductsPage',
    components: {DataTable},
    props: {},
    data: () => ({
      columns,
      actions
    }),
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
      }),
      handleEdit() {
        console.log('edit btn')
      }
    },
    watch: {}
  }
</script>
