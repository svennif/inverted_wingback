<script setup>
import { RouterView } from 'vue-router'
import SidebarComponent from './components/sidebar/SidebarComponent.vue';
</script>

<template>
  <div class="container">
    <SidebarComponent class="sidebar" />
    <RouterView class="p-4 Rsm:ml-64" />
  </div>
</template>

<style scoped>
</style>