<template>
    <div id="app">
        <Header :categories="categories" :cartCount="cartCount"/>
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <h1 class="my-4">Categories</h1>
                    <div class="list-group">
                        <router-link
                            v-for="(category, i) in categories"
                            :key="i"
                            :to="`/category/${category._id}`"
                            class="list-group-item"
                        >
                            {{ category.title }}
                        </router-link>
                    </div>
                </div>
                <div class="col-lg-9 margin-s">
                    <router-view/>
                </div>
            </div>
        </div>
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
        padding-top: 56px;
        
        .margin-s {
            margin-top: 95px;
        }
        
        a {
            text-decoration: none;
        }
    }
</style>
