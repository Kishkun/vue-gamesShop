<template>
  <nav class="nav-home">
    <h2>Menu</h2>
    <ul class="nav-home__list">
      <NavItem
        v-for="(item, i) in menu"
        :key="i"
        :to="item.to"
      >{{item.name}}</NavItem>
    </ul>
  </nav>
</template>
<script>
  import NavItem from '../navbar/NavItem';

  export default {
    name: 'Nav',
    components: {NavItem},
    props: {
      menu: {
        type: Array,
        default: () => ([])
      }
    },
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

  .nav-home {
    width: 20vw;
    height: 100vh;
    padding: 1rem;
    box-shadow: $menu-shadow;

    &__list {
      list-style: none;
    }
  }
</style>
