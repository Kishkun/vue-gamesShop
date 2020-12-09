<template>
    <div class="container" :class="{'text-center': !cartItems.length}">
        <h2>Cart
            <font-awesome-icon icon="shopping-cart"/>
        </h2>
        <template v-if="cartItems.length > 0">
            <template v-if="!paymentIntent">
                <ul class="list-group">
                    <li class="list-group-item" v-for="(item, i) in cartItems" :key="i">
                        {{item.title}} - {{item.price}}$
                    </li>
                </ul>
                <div class="panel text-right pt-3">
                    Кол-во: {{ cartCount }},
                    <br/>
                    Итого: {{ cartTotalPrice }}$
                    <hr/>
                </div>
            </template>
            
            <template v-if="!paymentIntent">
                <UserForm @onFormSubmit="handelGetPaymentIntent" :isReset="paymentIntent"/>
            </template>
            
            <template v-if="paymentIntent">
                <Card class="stripe__card my-4"
                      ref="card"
                      :class="{ complete }"
                      :stripe="stripeKey"
                      :options="stripeOptions"
                      @change="complete = $event.complete"
                />
                <button class="btn btn-success" @click="pay">Pay with credit card</button>
            </template>
        </template>
      
        <template v-else>
            <img class="empty_image"
                 src="https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                 alt="controller">
            <hr/>
            <p class="empty_caption">Your cart is empty please add items to it...</p>
        </template>
    </div>
</template>
<script>
  import {mapGetters, mapActions, mapMutations} from 'vuex'
  import {Card, handleCardPayment} from 'vue-stripe-elements-plus'
  import UserForm from '../components/UserForm';

  export default {
    name: 'Cart',
    components: {Card, UserForm},
    props: {},
    data: () => ({
      complete: false,
      stripeOptions: {},
      stripeKey: process.env.VUE_APP_STRIPE_KEY,
      paymentIntent: null
    }),
    created() {

    },
    mounted() {

    },
    computed: {
      ...mapGetters({
        cartItems: 'cart/cartItems',
        cartCount: 'cart/cartCount',
        cartTotalPrice: 'cart/cartTotalPrice',
      })
    },
    methods: {
      ...mapActions({
        handelPay: 'cart/PAY_ITEMS'
      }),
      ...mapMutations({
        clearCart: 'cart/CLEAR_CART',
      }),

      async handelGetPaymentIntent(form) {
        try {
          const intent = await this.handelPay({
            ...form,
            products: this.cartItems
          });
          this.paymentIntent = intent.data.paymentIntent.client_secret
        } catch (err) {
          console.log(err)
        }
      },
      async pay() {
        try {
          await handleCardPayment(this.paymentIntent)
          this.clearCart()
        } catch (err) {
          console.log(err)
        }
      },
    },
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
    
    .stripe__card {
        border: 1px solid grey;
        
        &.complete {
            border-color: green;
        }
    }
</style>
