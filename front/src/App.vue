<template>
    <div id="app">
        <Header :categories="categories"/>
        <router-view/>
    </div>
</template>
<script>
  import Header from './components/layouts/Header';

  export default {
    name: 'App',
    components: {Header},
    data: () => ({
      categories: [
        {
          id: '1',
          title: 'Ps4'
        },
        {
          id: '2',
          title: 'test'
        }
      ]
    }),
    mounted() {

    },
    computed: {},
    methods: {},
    watch: {}
  }
</script>
<style lang="scss">
    @import './style/utils/variables.scss';
    
    body {
        font-family: 'Lato', sans-serif;
        
        a {
            color: $black-color;
            text-decoration: none;
            transition: .3s;
        }
    }
</style>
