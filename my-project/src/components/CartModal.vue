<template>
    <div class="absolute bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 w-[500px] h-[600px] p-3 z-10 bg-black/[.7] text-white flex flex-col gap-4 border-black border-2 overflow-auto"
        v-if="isShowCart == true">
        <!-- Mostra i prodotti nel carrello -->
        <div class="flex flex-col p-2 gap-2 border-black border-[1px]" v-for="(product, index) in cartState.cartList"
            :key="index">
                
                <table>
                    <tbody>
                        <tr class="flex items-center justify-between">
                            <td class="w-[30%]"><img class=" w-[100px] rounded-md" src="https://picsum.photos/200" alt="Image"></td>
                            <td>{{product.nome}}</td>
                            <td>{{ product.tipo }}</td>
                            <td>{{ (product.prezzo).toFixed(2)}}€</td>
                        </tr>
                        <tr>
                            <td>&nbsp;</td>
                        </tr>
                    </tbody>
                </table>
            {{ product.descrizione }}
        </div>
    </div>
</template>

<script>
import { cartState } from '../store/cart-state'
export default {
    name: 'cartModal',
    props: {
        isShowCart: Boolean,
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
        },
    }
}
</script>

<style lang="scss"></style>
