<template>
  <div class="container">
    <h2>This is Categories page</h2>
  </div>
</template>
<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: 'Categories',
    components: {},
    props: {},
    data: () => ({}),
    mounted() {
      this.fetchCategories();
    },
    computed: {
      ...mapGetters({
        categories: 'categories/categorys'
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
<style lang="scss">
</style>
