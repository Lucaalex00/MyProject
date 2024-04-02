<script>
import AppHeader from "./components/AppHeader.vue";
import AppNavbar from "./components/AppNavbar.vue";
import '@fortawesome/fontawesome-free/css/all.css';
export default {
    name: 'App',
    components: {
        AppHeader,
        AppNavbar,
    }
}
</script>

<template>
    <AppHeader />
    <!-- USE COMPONENTS -->
    <div class="w-[100vw] flex">
        <AppNavbar />
        <!-- <AppMain /> -->
    </div>
</template>
    

<style>

</style>