<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import factions from '@/assets/json/factions.json'

function getSeverityLabel(val: number): string {
  switch (val) {
    case 3:
      return 'Elevée'
    case 2:
      return 'Modérée'
    case 1:
    default:
      return 'Faible'
  }
}

function getStyleTag(val: number): object {
  switch (val) {
    case 3:
      return { background: 'var(--p-primary-700)' }
    case 2:
      return { background: 'var(--p-primary-500)', color: 'var(--p-black)' }
    case 1:
    default:
      return { background: 'var(--p-primary-200)', color: 'var(--p-black)' }
  }
}
</script>

<template>
  <main>
    <DataTable v-i header="Factions" :value="factions" sortMode="multiple" size="small">
      <Column field="name" class="font-bold" sortable>
        <template #body="slotProps">
          <span class="hidden md:inline-block lg:mr-2" v-text="slotProps.data.name" />
          <i
            :class="`text-${slotProps.data.icon}`"
            class="block md:hidden lg:inline-block icon-faction"
            v-text="slotProps.data.icon"
          />
        </template>
      </Column>
      <Column field="setup" header="Mise en place" class="text-center" sortable />
      <Column field="difficulty" header="Difficulté" class="text-center" sortable>
        <template #body="slotProps">
          <Tag
            :value="getSeverityLabel(slotProps.data.difficulty)"
            :style="getStyleTag(slotProps.data.difficulty)"
          />
        </template>
      </Column>
      <Column field="aggressivity" header="Aggressivité" class="text-center" sortable>
        <template #body="slotProps">
          <Tag
            :value="getSeverityLabel(slotProps.data.aggressivity)"
            :style="getStyleTag(slotProps.data.aggressivity)"
          />
        </template>
      </Column>
      <Column field="hand" header="Main de cartes" class="text-center" sortable>
        <template #body="slotProps">
          <Tag
            :value="getSeverityLabel(slotProps.data.hand)"
            :style="getStyleTag(slotProps.data.hand)"
          />
        </template>
      </Column>
      <Column field="craft" header="Fabrication" class="text-center" sortable>
        <template #body="slotProps">
          <Tag
            :value="getSeverityLabel(slotProps.data.craft)"
            :style="getStyleTag(slotProps.data.craft)"
          />
        </template>
      </Column>
    </DataTable>
  </main>
</template>
