<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9 mt-3">
        <Card>
          <CrudForm v-if="model" :formSchema="schema" :formModel="model" @onSubmit="onFormSubmit" title="Форма продукта"/>
          <p class="text-danger">{{error}}</p>
        </Card>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>
<script>
  import CrudForm from '../../../components/CrudForm';
  import Card from '../../../components/Card/Card';
  import {schema} from './fields';
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: 'ProductForm',
    components: {CrudForm, Card},
    data: () => ({
      model: null,
      schema
    }),
    computed: {
      ...mapGetters({
        product: 'products/item',
        error: 'products/itemError',
      }),
      isUpdating() {
        return this.$route.params.id !== undefined
      }
    },
    async mounted() {
      if (this.isUpdating) {
        await this.fetchProduct(this.$route.params.id);
        return this.model = {...this.product.item};
      }
      this.setModal()
    },
    methods: {
      ...mapActions({
        fetchProduct: 'products/FETCH_ONE',
        createProduct: 'products/CREATE',
        updateProduct: 'products/UPDATE'
      }),
      setModal() {
        this.model = {
          title: '',
          description: '',
          price: 0,
          amount: 0,
          imageUrl: '',
        }
      },
      async onProductCreate() {
        await this.createProduct(this.model)
      },
      async onProductUpdate() {
        await this.updateProduct({
          id: this.$route.params.id,
          payload: this.model
        })
      },
      onFormSubmit() {
        if (this.isUpdating) {
          this.onProductUpdate();
        } else {
          this.onProductCreate();
        }
        this.$router.back()
      }
    },
  }
</script>
<style lang="scss">
  .product-form {

  }
</style>
