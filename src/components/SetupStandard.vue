<script setup lang="ts">
import { LoiDeRootService } from '@/services/LoiDeRootService'
import { Checkbox } from 'primevue'
import { onMounted, ref } from 'vue'

const LoiDeRootSetupStandard = LoiDeRootService.getLoiDeRootSubsection('5.1')
const LoiDeRootSetupValue = LoiDeRootService.getLoiDeRootSubsection('5.2')
const setupCheckboxes = ref<Record<string, boolean>>({})

onMounted(() => {
  if (LoiDeRootSetupStandard?.topics) {
    LoiDeRootSetupStandard.topics.forEach((topic) => {
      setupCheckboxes.value[topic.id] = false
    })
  }
})
</script>

<template>
  <h2 class="text-center mb-6">Mise en place standard</h2>
  <div v-for="topic in LoiDeRootSetupStandard?.topics" :key="topic.id" class="mb-4">
    <div class="flex justify-between items-center gap-2">
      <label :for="topic.id" class="h4" v-html="topic.title" />
      <Checkbox v-model="setupCheckboxes[topic.id]" :inputId="topic.id" name="step" binary />
    </div>
    <p v-show="!setupCheckboxes[topic.id]" v-html="topic.text"></p>
    <template v-if="topic.id === '5.1.1' && !setupCheckboxes[topic.id]">
      <div v-html="LoiDeRootSetupValue?.content" />
    </template>
  </div>
</template>
