<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute, RouterLink } from 'vue-router'
import { FactionService } from '@/services/FactionService'
import LoiDeRoot from '@/assets/json/loi-de-root.json'
import Tag from 'primevue/tag'
import TheBottomNavigation from '@/components/TheBottomNavigation.vue'

const slug = ref<string>(useRoute().params.slug as string)
const faction = ref()
const loiDeRootSectionId = ref()
const description = ref()
/** Previous section (for navigation). */
const prev = computed(() => FactionService.getPreviousFactionData(slug.value))
/** Next section (for navigation). */
const next = computed(() => FactionService.getNextFactionData(slug.value))

const specs = ref([
  { key: 'difficulty', label: 'Difficulté' },
  { key: 'aggressivity', label: 'Aggressivité' },
  { key: 'hand', label: 'Main de cartes' },
  { key: 'craft', label: 'Fabrication' },
])

const initFaction = () => {
  FactionService.getFaction(slug.value)
    .then((data) => (faction.value = data))
    .then(() => {
      const loiDeRootSection = LoiDeRoot.find((section) => section?.faction === faction.value.slug)
      loiDeRootSectionId.value = loiDeRootSection?.id
      description.value = loiDeRootSection?.subsections[0].content
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
    <main v-if="faction">
      <h2>{{ faction.name }}</h2>
      <img
        v-if="faction.img"
        :src="`../src/assets/img/${faction.img}`"
        alt="Faction character"
        style="float: left"
      />
      <div v-if="description" v-html="description" />
      <table>
        <tbody>
          <tr v-for="spec in specs" :key="spec.key">
            <th>{{ spec.label }}</th>
            <td>
              <Tag
                :value="FactionService.getSeverityLabel(faction[spec.key])"
                :style="FactionService.getStyleTag(faction[spec.key])"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <p class="text-center">
        <RouterLink :to="{ path: `/loi-de-root/${loiDeRootSectionId}` }">
          Loi de Root {{ loiDeRootSectionId }}. <span v-html="faction.name" />
        </RouterLink>
      </p>
    </main>
  </main>
  <TheBottomNavigation :prev="prev" :next="next" />
</template>
