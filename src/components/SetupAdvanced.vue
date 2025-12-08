<script setup lang="ts">
import { LoiDeRootService } from '@/services/LoiDeRootService'
import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionPanel,
  Checkbox,
  InputNumber,
  Select,
} from 'primevue'
import { ref } from 'vue'

const nbPlayers = ref(3)
const selectedBoard = ref({ name: 'Automne ', code: 'F' })
const boards = ref([
  { name: 'Automne ', code: 'F' },
  { name: 'Hiver', code: 'W' },
  { name: 'Lac', code: 'L' },
  { name: 'Montagne', code: 'M' },
])
const selectedModules = ref()
const modules = ref([
  { name: 'Cartes de mise en place des factions', key: 'F' },
  { name: 'Monuments', key: 'M' },
  { name: 'Nomades', key: 'N' },
  { name: 'Robots', key: 'R' },
])
</script>

<template>
  <h2 class="text-center mb-6">Mise en place avancée</h2>
  <Accordion value="0">
    <AccordionPanel value="0">
      <AccordionHeader>Options de mise en place</AccordionHeader>
      <AccordionContent>
        <div class="mb-4">
          <p><label for="nbPlayers">Nombre de joueurs&nbsp;:</label></p>
          <InputNumber
            v-model="nbPlayers"
            inputId="nbPlayers"
            showButtons
            buttonLayout="horizontal"
            :step="1"
            :min="1"
            :max="6"
            fluid
          >
            <template #incrementicon>
              <span class="pi pi-plus" />
            </template>
            <template #decrementicon>
              <span class="pi pi-minus" />
            </template>
          </InputNumber>
        </div>
        <div class="mb-4">
          <p><label for="boardSelect">Choisissez un plateau&nbsp;:</label></p>
          <Select
            v-model="selectedBoard"
            id="boardSelect"
            :options="boards"
            optionLabel="name"
            placeholder="Sélectionnez un plateau"
            class="w-full md:w-100"
          />
        </div>
        <div>
          <p>Choisissez les modules que vous voulez ajouter à votre partie&nbsp;:</p>
          <div class="flex flex-col gap-4">
            <div v-for="module of modules" :key="module.key" class="flex items-center gap-2">
              <Checkbox
                v-model="selectedModules"
                :inputId="module.key"
                name="category"
                :value="module.key"
              />
              <label :for="module.key">{{ module.name }}</label>
            </div>
          </div>
        </div>
      </AccordionContent>
    </AccordionPanel>
  </Accordion>
  <main v-if="selectedBoard" class="mt-6">
    <section>
      <h3>Mise en place du plateau</h3>
      <ol>
        <li v-if="selectedBoard.code && ['L', 'M'].includes(selectedBoard.code)">
          <strong>Modifications de mise en place du plateau {{ selectedBoard.name }}.</strong>
          <template v-if="selectedBoard.code === 'L'">
            Placez le Radeau dans la clairière côtière du coin inférieur droit.
          </template>
          <template v-else>
            Placez les 6 marqueurs de chemin fermé sur les 6 chemins plus foncés creusés dans la
            terre. Placez la Tour dans la clairière centrale représentant deux tours.
          </template>
        </li>
        <li>
          <strong>Prenez les 12 marqueurs de couleur.</strong>
          Mélangez-les face cachée, puis placez-les un par un sur chaque clairière, en recouvrant
          les symboles de couleur imprimés s'il y en a.
        </li>
        <li>
          <strong>Placez les ruines.</strong>
          <span class="ml-2" v-html="LoiDeRootService.getLoiDeRootTopic('5.1.4')?.text" />
        </li>
        <li>
          <strong>Formez la réserve d’objets.</strong>
          <span class="ml-2" v-html="LoiDeRootService.getLoiDeRootTopic('5.1.5')?.text" />
        </li>
        <li>
          <strong>Rassemblez les autres éléments.</strong>
          <span class="ml-2" v-html="LoiDeRootService.getLoiDeRootTopic('5.1.6')?.text" />
        </li>
      </ol>
    </section>
    <section class="mt-6">
      <h3>Choisir les cartes</h3>
      <div v-html="LoiDeRootService.getLoiDeRootSubsection('A.2')?.content" />
    </section>
    <section v-show="selectedModules?.length && selectedModules.includes('R')" class="mt-6">
      <h3>Choisir des robots</h3>
      <div v-html="LoiDeRootService.getLoiDeRootSubsection('A.3')?.content" />
    </section>
    <section class="mt-6">
      <h3>Placer les joueurs</h3>
      <div v-html="LoiDeRootService.getLoiDeRootSubsection('A.4')?.content" />
    </section>
    <section v-show="selectedModules?.length && selectedModules.includes('M')" class="mt-6">
      <h3>Installer des Monuments</h3>
      <ol>
        <li v-for="topic in LoiDeRootService.getLoiDeRootSubsection('A.5')?.topics" :key="topic.id">
          <strong v-html="topic.title?.split(': ')[1]" />
          <span class="ml-2" v-html="topic.text" />
        </li>
      </ol>
    </section>
    <section v-show="selectedModules?.length && selectedModules.includes('N')" class="mt-6">
      <h3>Installer les Nomades</h3>
      <p>
        Vous pouvez choisir ensemble d’utiliser exactement 3 Nomades, en suivant ces étapes&nbsp;:
      </p>
      <ol>
        <li
          v-for="topic in LoiDeRootService.getLoiDeRootSubsection('A.6')?.topics"
          :key="topic.id"
          v-show="topic.id !== 'A.6.2' || nbPlayers > 2"
        >
          <strong v-html="topic.title?.split(': ')[1]" />
          <span v-if="topic.id !== 'A.6.2'" class="ml-2" v-html="topic.text" />
          <span v-else class="ml-2"
            >Retournez au hasard {{ nbPlayers === 3 ? '1' : nbPlayers === 4 ? '2' : '3' }} des
            Nomades sur sa face Rétrogradé <i>(indiqué par un « R »)</i>.</span
          >
        </li>
      </ol>
    </section>
    <section class="mt-6">
      <h3>Piocher 5 cartes</h3>
      <p v-show="nbPlayers <= 2">Retirez du paquet les 4 cartes Domination.</p>
      <p>
        Mélangez la pioche. Chaque joueur pioche 5 cartes.
        <i
          >(Pas 3, comme lors de la Mise en Place Standard&nbsp;! Vous choisirez les 3 cartes que
          vous souhaitez conserver lors de la dernière étape.)</i
        >
      </p>
    </section>
    <section class="mt-6">
      <h3>Installer les factions</h3>
      <div v-if="!selectedModules?.length || !selectedModules.includes('F')">
        <p v-html="LoiDeRootService.getLoiDeRootTopic('5.1.1')?.text" />
      </div>
      <div v-else>
        <p>
          Utilisez les cartes de Mise en place incluses dans l’extension Maraude, comme indiqué
          ci-dessous.
        </p>
        <ol>
          <li
            v-for="topic in LoiDeRootService.getLoiDeRootSubsection('A.8')?.topics"
            :key="topic.id"
          >
            <strong v-html="topic.title?.split(': ')[1]" />
            <span class="ml-2" v-html="topic.text" />
            <ol v-if="topic.items?.length">
              <li
                v-for="item in topic.items"
                :key="item.id"
                v-show="item.id !== 'A.8.1.I' || nbPlayers === 2"
              >
                <strong v-html="item.title" />
                <span v-if="item.id !== 'A.8.1.I'" class="ml-2" v-html="item.text" />
                <span v-else class="ml-2"
                  >Retirez toutes les cartes de mise en place de faction Insurgée avant d’en
                  piocher.
                  <i
                    >(Vous pouvez les garder si vous jouez avec les Nomades ou que vous pensez
                    pouvoir relever le défi.)</i
                  ></span
                >
              </li>
            </ol>
          </li>
        </ol>
      </div>
    </section>
    <section class="mt-6">
      <h3>Marqueurs de score</h3>
      <div v-html="LoiDeRootService.getLoiDeRootSubsection('A.9')?.content" />
    </section>
    <section class="mt-6">
      <h3>Mains de départ</h3>
      <div v-html="LoiDeRootService.getLoiDeRootSubsection('A.10')?.content" />
    </section>
  </main>
</template>

<style scoped>
main {
  counter-reset: step;
}
section {
  counter-increment: step;
}
h3::before {
  content: counter(step) '. ';
}
</style>
