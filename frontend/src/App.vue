<script setup lang="ts">
import { RouterView } from 'vue-router'
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <div class="app-shell">
    <SiteHeader />
    <RouterView />
    <SiteFooter />
  </div>
</template>

<style></style>
