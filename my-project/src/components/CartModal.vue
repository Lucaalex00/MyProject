<template>
    <div v-if="cartList.length> 0" class="cart-container">
        <!-- Mostra i prodotti nel carrello -->
        <div v-for="(product, index) in cartList" :key="index">
            {{ product.nome }}
        </div>
    </div>
</template>

<script>
import { cartState } from '../store/cart-state'
export default {
    name: 'cartModal',
    props: {
        cartList: Array, // Ricevi l'elenco dei prodotti nel carrello come proprietà
    },
    data() {
        return {
            cartState,
        }
    },
    methods: {
        AddToCart(product) {
            // Aggiungi il prodotto al carrello
            this.$emit('add-to-cart', product);
           
        }
    }
}
</script>

<style lang="scss"></style>
