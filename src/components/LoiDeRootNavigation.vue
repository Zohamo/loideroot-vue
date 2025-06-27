<script setup lang="ts">
import { Button } from 'primevue'
defineProps(['prev', 'next'])
</script>

<template>
  <nav class="px-4 pb-8 flex gap-2">
    <Button v-if="prev?.id" class="mr-auto">
      <RouterLink v-slot="{ href, navigate }" :to="`/loi-de-root/${prev.id}`" custom>
        <a v-ripple :href="href" @click="navigate">
          <i class="pi pi-arrow-left mr-2" />
          <span v-html="`${prev.id}. ${prev.title}`" />
        </a>
      </RouterLink>
    </Button>
    <Button v-if="next?.id" class="ml-auto">
      <RouterLink v-slot="{ href, navigate }" :to="`/loi-de-root/${next.id}`" custom>
        <a v-ripple :href="href" @click="navigate">
          <span v-html="`${next.id}. ${next.title}`" />
          <i class="pi pi-arrow-right ml-2" />
        </a>
      </RouterLink>
    </Button>
  </nav>
</template>
