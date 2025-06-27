<script setup lang="ts">
import { Button } from 'primevue'
defineProps(['prev', 'next'])
</script>

<template>
  <nav class="px-4 pb-8 flex gap-2">
    <Button v-if="prev?.id" asChild v-slot="slotProps" class="mr-auto">
      <RouterLink :class="`${slotProps.class} mr-auto`" :to="`/loi-de-root/${prev.id}`">
        <i class="pi pi-arrow-left mr-2" />
        <span v-html="`${prev.id}. ${prev.title}`" />
      </RouterLink>
    </Button>
    <Button v-if="next?.id" asChild v-slot="slotProps" class="ml-auto">
      <RouterLink :class="`${slotProps.class} ml-auto`" :to="`/loi-de-root/${next.id}`">
        <span v-html="`${next.id}. ${next.title}`" />
        <i class="pi pi-arrow-right ml-2" />
      </RouterLink>
    </Button>
  </nav>
</template>
