<template>
    <div class="card h-100 p-3 mb-5">
        <a href="#"> <img :src="product.imageUrl" class="card-img-top" alt="image"/></a>
        <div class="card-body p-0 mt-3">
            <h4 class="card-title">
                <a href="#">{{ product.title }}</a>
            </h4>
            <h5>{{ product.price }}$</h5>
            <p class="card-text">{{ product.description.slice(0, 80) }}...</p>
        </div>
        <div class="card__footer my-3">
            <button class="btn btn-info" @click="handlerAdd" v-if="!inCart">Добавить в корзину</button>
            <button class="btn btn-danger" @click="handlerDelete" v-else>Убрать из корзины</button>
        </div>
    </div>
</template>
<script>
  export default {
    name: 'ProductCard',
    props: {
      product: {
        type: Object,
        default: () => ({})
      },
      inCart: {
        type: Boolean,
        default: false,
      },

    },
    data: () => ({}),
    mounted() {

    },
    computed: {},
    methods: {
      handlerAdd() {
        this.$emit('addToCart')
      },
      handlerDelete() {
        this.$emit('deleteFromCart')
      }
    },
    watch: {}
  }
</script>
<style scoped lang="scss">
    @import './../../style/utils/variables';
    
    .card {
        width: 300px;
        text-align: center;
    }
</style>
