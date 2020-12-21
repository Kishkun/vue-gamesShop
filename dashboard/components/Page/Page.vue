<template>
    <div class="page">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'Page',
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
  .page {
    padding: 30px;
  }
</style>
