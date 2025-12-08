<script setup lang="ts">
import SetupAdvanced from '@/components/SetupAdvanced.vue'
import SetupStandard from '@/components/SetupStandard.vue'
import { Button } from 'primevue'
import { ref } from 'vue'

const setup = ref('standard')
</script>

<template>
  <main>
    <h1>Mise en place</h1>
    <p>
      Si vous jouez avec de nouveaux joueurs, utilisez la <strong>Mise en place standard</strong>.
      Si vous avez tous déjà joué et souhaitez apporter un peu de variété à cette partie, utilisez
      la <strong>Mise en place avancée</strong>. Si vous souhaitez utiliser 5 factions ou plus qui
      doivent commencer dans une clairière d’un coin du plateau, vous devez utiliser les règles de
      Mise en place avancée.
    </p>
    <p>Mise en place&nbsp;:</p>
    <div class="flex justify-center flex-wrap gap-4 mb-8">
      <Button
        label="Mise en place standard"
        :variant="setup !== 'standard' ? 'outlined' : undefined"
        @click="setup = 'standard'"
      />
      <Button
        label="Mise en place avancée"
        :variant="setup !== 'advanced' ? 'outlined' : undefined"
        @click="setup = 'advanced'"
      />
    </div>

    <SetupStandard v-if="setup === 'standard'" />
    <SetupAdvanced v-else />
  </main>
</template>
