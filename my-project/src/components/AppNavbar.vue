<template>
    <nav id="site_navbar" class="w-[25%] h-[calc(100vh-100px)] bg-gray-100 flex flex-col">
        <ul class="flex flex-col gap-2 p-2 overflow-auto">
            <li v-for="product in callState.products" :key="product.id" class="flex flex-wrap items-center gap-3">
                <img class="w-[100px] rounded-xl" src="https://picsum.photos/200" :alt="product.nome">
                <span class="w-[200px]">{{ product.id }}. {{ product.nome }}</span>
                <button class="text-[1.5rem]" @click="AddToCart(product)">+</button>
            </li>
        </ul>
    </nav>
</template>

<script>
import { callState } from '../store/call-state'
import { cartState } from '../store/cart-state';
export default {
    name: 'AppNavbar',
    data() {
        return {
            callState,
            cartState,
        }
    },
    methods: {
        AddToCart(product) {
            // Emetti un evento per aggiungere il prodotto al carrello
            cartState.cartList.push(product);
            console.log(cartState.cartList);
            alert(`Added ${product.nome} to your cart !`);
        },
    },
    mounted() {
        this.callState.getProducts(this.callState.products_url);
    },
}
</script>

<style></style>
