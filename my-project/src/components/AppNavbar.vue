<template>
    <nav id="site_navbar" class=" w-[25%] h-[calc(100vh-100px)] bg-gray-100 flex flex-col ">
        <ul class="flex flex-col gap-2 p-2">
            <li class="flex items-center gap-3">
                <img class="w-[100px] rounded-xl" src="https://picsum.photos/200" alt="A">
                <span>1st Product</span>
            </li>
            <li class="flex items-center gap-3">
                <img class="w-[100px] rounded-xl" src="https://picsum.photos/200" alt="B"> <span>2nd Product</span>
            </li>
            <li class="flex items-center gap-3">
                <img class="w-[100px] rounded-xl" src="https://picsum.photos/200" alt="C"> <span>3rd Product</span>
            </li>
            <li class="flex items-center gap-3">
                <img class="w-[100px] rounded-xl" src="https://picsum.photos/200" alt="D"> <span>4th Product</span>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'AppNavbar',
    
}
</script>

<style>

</style>