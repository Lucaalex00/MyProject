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
    <div class="w-[100vw]">
        <AppNavbar />
    </div>
    <!-- USE COMPONENTS -->
</template>
    

<style>

</style>