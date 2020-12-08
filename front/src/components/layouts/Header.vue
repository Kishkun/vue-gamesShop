<template>
    <header class="header">
        <div class="header__left">
            <router-link to="/" class="header__logo">LOGO</router-link>
        </div>
        <div class="header__right">
            <router-link to="/cart" class="header-cart__link">
                <font-awesome-icon icon="shopping-cart" /> {{cartCount}}
            </router-link>
            <nav class="nav">
                <ul class="nav__list">
                    <li class="nav__item" v-for="(category, i) in categories" :key="i">
                        <router-link :to="`category/${category.id}`" class="nav__link">{{category.title}}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>
<script>
  export default {
    name: 'Header',
    props: {
      categories: {
        type: Array,
        default: () => ([])
      },
      cartCount: {
        type: Number,
        default: 0
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
    @import '../../style/utils/variables';
    
    .header {
        $self: &;
        border-bottom: 1px solid $black-color;
        padding: 25px 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
        text-align: center;
        
        &__left {
        
        }
        
        &__logo {
            color: $black-color;
            text-decoration: none;
        }
        
        &__right {
        
        }
    
        &-cart__link {
        
        }
        
        .nav {
            margin-top: 15px;
            
            &__list {
                display: flex;
                justify-content: space-between;
                width: 100%;
            }
            
            &__item {
                
                &:not(:last-child) {
                    margin-right: 35px;
                }
            }
            
            &__link {
                color: $black-color;
                text-decoration: none;
                transition: .3s;
                
                &:hover {
                    color: $blue_light-color;
                }
            }
        }
    }
</style>
