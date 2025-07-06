<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheMenubar from './components/TheMenubar.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <TheMenubar />
  <RouterView />
  <TheFooter />
</template>
