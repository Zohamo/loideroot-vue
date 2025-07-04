<script setup lang="ts">
import { FactionService } from '@/services/FactionService'
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'

const slug = ref(useRoute().params.slug)
const faction = ref()

const initFaction = () => {
  FactionService.getFaction(slug.value).then((data) => (faction.value = data))
}

onMounted(() => initFaction())

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.slug !== from.params.slug) {
    slug.value = to.params.slug
    initFaction()
  }
})
</script>

<template>
  <main>
    <p>{{ slug }}</p>
    <div>{{ faction }}</div>
    <main v-if="faction">
      <h1>{{ faction.name }}</h1>
    </main>
  </main>
</template>
