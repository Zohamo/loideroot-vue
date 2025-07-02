<script setup lang="ts">
import { computed, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import loiDeRoot from '@/assets/json/loi-de-root.json'
import LoiDeRootNavigation from '@/components/LoiDeRootNavigation.vue'
import LoiDeRootSectionContent from '@/components/LoiDeRootSectionContent.vue'
import LoiDeRootSommaire from '@/components/LoiDeRootSommaire.vue'

/** Current section's ID. */
const id = ref(useRoute().params.id)
/** Index of the current section object inside the JSON array. */
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
/** If the current section is an appendice section. */
const isAppendice = computed(() => section.value?.type === 'appendice')
/** Numeric value of the counter to prefix the titles. */
const counterSetValue = computed(() =>
  isAppendice.value ? ['A', 'B', 'C', 'D', 'E', 'F', 'G'].indexOf(id.value) + 1 : id.value,
)
/** Previous section (for navigation). */
const prev = computed(() =>
  currIdx.value > 0 && loiDeRoot[currIdx.value - 1] ? loiDeRoot[currIdx.value - 1] : {},
)
/** Next section (for navigation). */
const next = computed(() =>
  currIdx.value <= loiDeRoot.length && loiDeRoot[currIdx.value + 1]
    ? loiDeRoot[currIdx.value + 1]
    : {},
)
const showContent = ref(true)
const hideSommaire = ref(false)
const transitionName = ref('slide-fade')

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.id !== from.params.id) {
    showContent.value = false
    setTimeout(function () {
      id.value = to.params.id
      section.value = loiDeRoot.find((sec, idx) => {
        if (sec.id == id.value) {
          transitionName.value = idx < currIdx.value ? 'slide-fade-reverse' : 'slide-fade'
          currIdx.value = idx
          return true
        }
        return false
      })
      showContent.value = true
    }, 1)
  }
  hideSommaire.value = true
})
</script>

<template>
  <main
    :class="section?.type"
    :style="{ counterSet: `section ${counterSetValue}`, overflow: 'hidden' }"
  >
    <LoiDeRootSommaire />
    <h1 class="mb-5">
      La Loi de Root
      <template v-if="isAppendice"><br /><small>Appendices</small></template>
    </h1>
    <Transition appear :name="transitionName" mode="out-in">
      <LoiDeRootSectionContent v-if="showContent" :section="section" />
    </Transition>
  </main>
  <LoiDeRootNavigation :prev="prev" :next="next" />
</template>
