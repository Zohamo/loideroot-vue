<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute, RouterLink } from 'vue-router'
import { FactionService } from '@/services/FactionService'
import LoiDeRoot from '@/assets/json/loi-de-root.json'
import Tag from 'primevue/tag'

const slug = ref(useRoute().params.slug)
const faction = ref()
const loiDeRootSectionId = ref()
const description = ref()

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

onBeforeRouteUpdate(async (to, from) => {
  if (to.params.slug !== from.params.slug) {
    slug.value = to.params.slug
    initFaction()
  }
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
          <tr>
            <th>Difficulté</th>
            <td>
              <Tag
                :value="FactionService.getSeverityLabel(faction.difficulty)"
                :style="FactionService.getStyleTag(faction.difficulty)"
              />
            </td>
          </tr>
          <tr>
            <th>Aggressivité</th>
            <td>
              <Tag
                :value="FactionService.getSeverityLabel(faction.aggressivity)"
                :style="FactionService.getStyleTag(faction.aggressivity)"
              />
            </td>
          </tr>
          <tr>
            <th>Main de cartes</th>
            <td>
              <Tag
                :value="FactionService.getSeverityLabel(faction.hand)"
                :style="FactionService.getStyleTag(faction.hand)"
              />
            </td>
          </tr>
          <tr>
            <th>Fabrication</th>
            <td>
              <Tag
                :value="FactionService.getSeverityLabel(faction.craft)"
                :style="FactionService.getStyleTag(faction.craft)"
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
</template>
