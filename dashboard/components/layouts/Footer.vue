<template>
  <footer class="container-fluid">
    <h2>footer</h2>
  </footer>
</template>
<script>
  export default {
    name: 'Footer',
    props: {},
    data: () => ({}),
    mounted() {

    },
    computed: {},
    methods: {},
    watch: {}
  }
</script>
<style scoped lang="scss">
  @import './../../assets/style/global';

  footer {
    background: $footer-bg;
    height: 10%;
  }
</style>
