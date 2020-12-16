<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9">
        <CrudForm v-if="model" :formSchema="schema" :formModel="model" title="Форма продукта"/>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>
<script>
  import CrudForm from '../../../components/CrudForm';
  import {schema} from './fields';

  export default {
    name: 'ProductForm',
    components: {CrudForm},
    data: () => ({
      model: null,
      schema
    }),
    computed: {
      isUpdated() {
        return this.$route.params.id !== undefined
      }
    },
    mounted() {
      if (this.isUpdated) {
        // this.model = {} то что получим с api
        return
      }
      this.setModal()
    },
    methods: {
      setModal() {
        this.model = {
          title: '',
          description: '',
          price: 0,
          amount: 0,
          imageUrl: '',
        }
      }
    },
  }
</script>
<style lang="scss">
  .product-form {

  }
</style>
