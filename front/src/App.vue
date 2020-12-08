<template>
    <div id="app">
        <Header :categories="categories" :cartCount="cartCount"/>
        <router-view/>
    </div>
</template>
<script>
  import Header from './components/layouts/Header';
  import {mapActions, mapGetters} from 'vuex';

  export default {
    name: 'App',
    components: {Header},
    data: () => ({}),
    mounted() {
        this.fetchCategories();
    },
    computed: {
      ...mapGetters({
        categories: 'category/categories',
        cartCount: 'cart/cartCount'
      })
    },
    methods: {
      ...mapActions({
        fetchCategories: 'category/FETCH_CATEGORIES'
      })
    },
    watch: {}
  }
</script>
<style lang="scss">
    @import './style/utils/variables.scss';
    
    body #app {
        font-family: 'Lato', sans-serif;
    }
</style>
