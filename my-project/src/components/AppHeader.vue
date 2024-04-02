<template>
    <CartModal :isShowCart="isShowCart"/>
    <header id="site_header" class="w-[100vw]  h-[100px] flex items-center justify-between p-2 bg-[#9c2024] text-white">
        <div class="title flex items-center gap-2">
            <img class="w-[80px] rounded-xl" src="https://picsum.photos/200
" alt="LOGO PAGE">
            <h1 class="text-[1.8rem] "> Restaurant Name</h1>
        </div>
        <div class="call-to-action flex gap-3">
            <a href="#" class="fa-solid fa-magnifying-glass"></a>
            <a @click="showCart" href="#" class="fa-solid fa-cart-shopping"></a>
        </div>
    </header>

</template>

<script>
import CartModal from './CartModal.vue';
export default {
    name: 'AppHeader',
    components: {
        CartModal,
    },
    data() {
        return {
            isShowCart: false,

        }
    },
    methods: {
        showCart() {
            this.isShowCart = !this.isShowCart,
            console.log(this.isShowCart)
            console.log('Your cart is Opening...')

        }
    }
}
</script>

<style>

</style>