<script setup>
import { RouterView } from 'vue-router'
import SidebarComponent from './components/sidebar/SidebarComponent.vue';
</script>

<template>
    <SidebarComponent />
    <RouterView class="p-4 sm:ml-64 h-screen bg-gray-800" />
</template>

<style scoped>
</style>