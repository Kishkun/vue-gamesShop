<template>
  <div class="container-fluid">
    <h2>This is Categories page</h2>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'CategoriesPage',
    components: {},
    props: {},
    data: () => ({}),
    mounted() {
      this.fetchCategories();
    },
    computed: {
      ...mapGetters({
        categories: 'categories/items'
      })
    },
    methods: {
      ...mapActions({
        fetchCategories: 'categories/FETCH_ALL'
      })
    },
    watch: {}
  }
</script>
