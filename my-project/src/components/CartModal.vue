<template>
    <div class="absolute bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4 w-[500px] h-[600px] p-3 z-10 bg-black/[.7] text-white flex flex-col gap-4 border-black border-2 overflow-auto"
    v-if="isShowCart==true">
    <div v-if="cartState.cartList.length > 0">
        <!-- Mostra i prodotti nel carrello -->
        <div class="flex relative flex-col p-2 gap-2 border-black border-[1px]"
            v-for="(product, index) in cartState.cartList" :key="index">
                <a href="#" @click="RemoveToCart(product, index)"
                    class="absolute top-0 right-2 font-bold text-3xl text-red-500 ">-</a>
                <table>
                    <tbody>
                        <tr class="flex items-center justify-between">
                            <td class="w-[30%]"><img class=" w-[100px] rounded-md" src="https://picsum.photos/200"
                                    alt="Image"></td>
                            <td>{{product.nome}}</td>
                            <td>{{ product.tipo }}</td>
                            <td>{{ (product.prezzo).toFixed(2)}}€</td>
                        </tr>
                    </tbody>
                </table>
                {{ product.descrizione }}
            </div>
        </div>
        <div v-else class="absolute text-3xl text-red-600 bg-black/[0.5] p-3 border-2 border-white bottom-2/4 right-2/4 translate-x-2/4 translate-y-2/4"> Cart is empty !  </div>
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
        RemoveToCart(product) {
            // Trova l'indice del prodotto nel carrello
            const index = this.cartState.cartList.findIndex(item => item === product);
            if (index !== -1) {
                // Rimuovi il prodotto dalla lista del carrello
                this.cartState.cartList.splice(index, 1);
                console.log(this.cartState.cartList.length)
            }
        },
        Stamp() {
            alert('CIAO')
        }
    }
}
</script>

<style lang="scss"></style>
