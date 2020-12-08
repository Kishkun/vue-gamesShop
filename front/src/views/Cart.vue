<template>
    <div class="container">
        <h2>Cart <font-awesome-icon icon="shopping-cart" /></h2>
        <template v-if="cartItems">
            <ul class="list-group">
                <li class="list-group-item" v-for="(item, i) in cartItems" :key="i">
                    {{item.title}} - {{item.price}}$
                </li>
            </ul>
            <div class="panel text-right pt-3">
                Кол-во: {{ cartCount }},
                <br />
                Итого: {{ cartTotalPrice }}$
                <hr />
            </div>
        </template>
        <template v-else>
            <img class="empty_image" src="https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="controller">
            <hr />
            <p class="empty_caption">Your cart is empty please add items to it...</p>
        </template>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Cart',
    props: {},
    data: () => ({}),
    mounted() {
    },
    computed: {
      ...mapGetters({
        cartItems: 'cart/cartItems',
        cartCount: 'cart/cartCount',
        cartTotalPrice: 'cart/cartTotalPrice',
      })
    },
    methods: {},
    watch: {}
  }
</script>
<style scoped lang="scss">
    @import '../style/utils/variables';

    .empty_image {
        max-width: 400px;
        margin: 30px 0;
    }

    .empty_caption {
        padding-top: 25px;
    }
</style>
