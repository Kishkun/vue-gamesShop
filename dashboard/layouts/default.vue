<template>
  <div class="app">
    <Nav :menu="menu" />
    <div class="content">
      <main>
        <Nuxt/>
      </main>
      <Footer />
    </div>
  </div>
</template>
<script>
  import Nav from '../components/layouts/Nav';
  import Footer from '../components/layouts/Footer';

  import menu from './setup'

  export default {
    name: 'DefaultLayout',
    components: {Nav, Footer},
    data: () => ({
      menu
    }),
    mounted() {

    },
  }
</script>
<style lang="scss">
  @import './assets/style/global';

  .app {
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100vh;
      width: 80vw;
    }

    main {
      background: $main-bg;
      height: 90%;
    }
  }
</style>
