<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Tag from 'primevue/tag'
import { FactionService } from '@/services/FactionService'

defineProps(['faction', 'loiDeRootSectionId'])
const specs = ref([
  { key: 'difficulty', label: 'Difficulté' },
  { key: 'aggressivity', label: 'Aggressivité' },
  { key: 'hand', label: 'Main de cartes' },
  { key: 'craft', label: 'Fabrication' },
])
</script>

<template>
  <div>
    <h2>{{ faction.name }}</h2>
    <img
      v-if="faction.img"
      :src="`../src/assets/img/${faction.img}`"
      alt="Faction character"
      style="float: left"
    />
    <div v-if="faction.description" v-html="faction.description" />
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
  </div>
</template>
