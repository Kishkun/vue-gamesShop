<template>
  <li class="nav-home__item">
    <nuxt-link :to="to" class="link">
      <slot/>
    </nuxt-link>
  </li>
</template>
<script>
  export default {
    name: 'NavItem',
    props: {
      to: {
        type: String,
        default: ''
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
  @import '../../assets/style/global';

  .nav-home__item {
    margin-bottom: 10px;
  }

  .link {
    color: $black-color;
    transition: .3s;

    &:hover {
      color: $blue_dark-color;
      text-decoration: none;
    }

    &.nuxt-link-active {
      color: $blue_dark3-color;
    }
  }
</style>
