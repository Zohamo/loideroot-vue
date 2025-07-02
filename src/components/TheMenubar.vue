<script setup lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar'

const items = ref([
  {
    label: 'Accueil',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'Mise en place',
    route: '/loi-de-root/5',
  },
  {
    label: 'La Loi de Root',
    icon: 'pi pi-book',
    route: '/loi-de-root',
  },
  {
    label: 'Factions',
    items: [
      {
        label: 'Aperçu',
        route: '/factions',
      },
      {
        label: 'Marquise de Chat',
        route: '/factions/marquise-de-chat',
      },
      {
        label: 'Dynasties de la Canopée',
        route: '/factions/dynasties-de-la-canopee',
      },
      {
        label: 'Alliance de la Forêt',
        route: '/factions/alliance-de-la-foret',
      },
    ],
  },
  {
    label: 'Rootbotique <i>(à venir)</i>',
  },
])
</script>

<template>
  <div class="card">
    <Menubar :model="items">
      <template #start>
        <img src="../assets/img/logo-root-sm.png" alt="Logo Root" />
      </template>
      <template #item="{ item, props, hasSubmenu, root }">
        <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
          <a v-ripple :href="href" v-bind="props.action" @click="navigate">
            <span class="ml-2" v-html="item.label" />
          </a>
        </router-link>
        <a v-else v-ripple class="flex items-center" v-bind="props.action">
          <span class="ml-2" v-html="item.label" />
          <span
            v-if="item.shortcut"
            class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
            >{{ item.shortcut }}</span
          >
          <i
            v-if="hasSubmenu"
            :class="[
              'pi pi-angle-down ml-auto',
              { 'pi-angle-down': root, 'pi-angle-right': !root },
            ]"
          ></i>
        </a>
      </template>
      <!-- TODO <template #end>
        <div class="flex items-center gap-2">
          <i class="pi pi-search" />
        </div>
      </template> -->
    </Menubar>
  </div>
</template>
