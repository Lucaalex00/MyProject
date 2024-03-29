<template>
    <nav id="site_navbar" class=" w-[25%] h-[calc(100vh-100px)] bg-gray-100 flex flex-col ">
        <ul class="flex flex-col gap-2 p-2 overflow-auto">
            <li v-for="product in state.products" class="flex flex-wrap items-center gap-3">
                <img class="w-[100px] rounded-xl" src="https://picsum.photos/200" alt="A">
                <span class="w-[200px]"> {{product.id}}. {{product.nome}}</span>
            </li>
        </ul>
    </nav>
</template>

<script>
import { state } from '../state.js'
export default {
    name: 'AppNavbar',
    data() {
        return {
            state,
            
        }
    },
    mounted(){
       this.state.getProducts(this.state.products_url)
    },
}
</script>

<style>

</style>