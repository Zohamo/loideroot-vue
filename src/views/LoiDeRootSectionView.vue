<script setup lang="ts">
import { computed, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import loiDeRoot from '@/assets/json/loi-de-root.json'
import LoiDeRootNavigation from '@/components/LoiDeRootNavigation.vue'
import LoiDeRootSectionContent from '@/components/LoiDeRootSectionContent.vue'
import LoiDeRootSommaire from '@/components/LoiDeRootSommaire.vue'

const id = ref(useRoute().params.id)
const currIdx = ref(-1)
const section = ref(
  loiDeRoot.find((sec, idx) => {
    if (sec.id == id.value) {
      currIdx.value = idx
      return true
    }
    return false
  }),
)
const prev = computed(() =>
  currIdx.value > 0 && loiDeRoot[currIdx.value - 1] ? loiDeRoot[currIdx.value - 1] : {},
)
const next = computed(() =>
  currIdx.value <= 15 && loiDeRoot[currIdx.value + 1] ? loiDeRoot[currIdx.value + 1] : {},
)
const hideSommaire = ref(false)

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    section.value = false
    setTimeout(function () {
      id.value = to.params.id
      section.value = loiDeRoot.find((sec, idx) => {
        if (sec.id == id.value) {
          currIdx.value = idx
          return true
        }
        return false
      })
    }, 1)
  }
  hideSommaire.value = true
})
</script>

<template>
  <main class="relative" :style="`counter-set: section ${id}`">
    <LoiDeRootSommaire :hide="hideSommaire" @hide="hideSommaire = false" />
    <h1 class="mb-5">La Loi de Root</h1>
    <Transition appear name="slide-fade" mode="out-in">
      <LoiDeRootSectionContent v-if="section" :section="section" />
    </Transition>
  </main>
  <LoiDeRootNavigation :prev="prev" :next="next" />
</template>
