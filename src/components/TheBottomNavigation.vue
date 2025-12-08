<script setup lang="ts">
import { Button } from 'primevue'
defineProps(['prev', 'next'])
</script>

<template>
  <nav class="px-4 pb-8 flex gap-2">
    <Button v-if="prev && prev.route" asChild v-slot="slotProps" class="mr-auto">
      <RouterLink :class="`${slotProps.class} mr-auto`" :to="prev.route">
        <i class="pi pi-arrow-left mr-2" />
        <span v-html="prev.title" />
      </RouterLink>
    </Button>
    <Button v-if="next && next.route" asChild v-slot="slotProps" class="ml-auto">
      <RouterLink :class="`${slotProps.class} ml-auto`" :to="next.route">
        <span v-html="next.title" />
        <i class="pi pi-arrow-right ml-2" />
      </RouterLink>
    </Button>
  </nav>
</template>
