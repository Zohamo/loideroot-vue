<script setup lang="ts">
import { useRoute } from 'vue-router'

const slug = useRoute().params.slug
</script>

<template>
  <p>{{ slug }}</p>
</template>
