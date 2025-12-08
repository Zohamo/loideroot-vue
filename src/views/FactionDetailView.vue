<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { FactionService } from '@/services/FactionService'
import LoiDeRoot from '@/assets/json/loi-de-root.json'
import TheBottomNavigation from '@/components/TheBottomNavigation.vue'
import FactionDetail from '@/components/FactionDetail.vue'

const slug = ref<string>(useRoute().params.slug as string)
const faction = ref()
const loiDeRootSectionId = ref()
const description = ref()
/** Previous section (for navigation). */
const prev = computed(() => FactionService.getPreviousFactionData(slug.value))
/** Next section (for navigation). */
const next = computed(() => FactionService.getNextFactionData(slug.value))

const initFaction = () => {
  FactionService.getFaction(slug.value)
    .then((data) => (faction.value = data))
    .then(() => {
      const loiDeRootSection = LoiDeRoot.find((section) => section?.faction === faction.value.slug)
      loiDeRootSectionId.value = loiDeRootSection?.id
    })
}

onMounted(() => initFaction())

onBeforeRouteUpdate(async (to) => {
  slug.value = to.params.slug as string
  faction.value = null
  loiDeRootSectionId.value = null
  description.value = null
  window.scroll({ top: 0 })
  initFaction()
})
</script>

<template>
  <main>
    <FactionDetail v-if="faction" :faction="faction" :loiDeRootSectionId="loiDeRootSectionId" />
  </main>
  <TheBottomNavigation :prev="prev" :next="next" />
</template>
