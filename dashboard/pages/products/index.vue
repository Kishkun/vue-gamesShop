<template>
  <div class="container-fluid p-4">
    <h2>Товары</h2>
    <Card>
      <nuxt-link class="btn btn-success mt-1 mb-3" to="products/form">Добавить продукт</nuxt-link>
      <DataTable :columns="columns" :actions="actions" :data="products.items" @onEdit="handleEdit" @onDelete="handleDelete" />
    </Card>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'

  // components
  import DataTable from '../../components/table/DataTable';
  import Card from '../../components/Card/Card';

  // data
  import {columns, actions} from './setup';

  export default {
    name: 'ProductsPage',
    components: {DataTable, Card},
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
        fetchProducts: 'products/FETCH_ALL',
        deleteProduct: 'products/DELETE'
      }),
      handleEdit({id}) {
        this.$router.push(`/products/form/${id}`)
      },
      handleDelete({id}) {
        // delete
        this.deleteProduct(id)
      }
    },
    watch: {}
  }
</script>
