<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Menubar from 'primevue/menubar'
import { FactionService } from '@/services/FactionService'

const items = ref([
  {
    label: 'Accueil',
    route: '/',
  },
  {
    label: 'Mise en place',
    route: '/loi-de-root/5',
  },
  {
    label: 'La Loi de Root',
    route: '/loi-de-root',
  },
  {
    label: 'Factions',
    items: [
      {
        label: 'Aperçu',
        route: '/factions',
      },
    ],
  },
  {
    label: 'Rootbotique <i>(à venir)</i>',
  },
])

onMounted(() => {
  FactionService.getFactions().then((data) => {
    for (const datum of data) {
      items?.value
        ?.find((item) => item.label === 'Factions')
        .items?.push({
          label: datum.name,
          route: `/factions/${datum.slug}`,
          icon: `<i class="icon-faction text-${datum.icon}">${datum.icon}</i>`,
        })
    }
  })
})
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
            <span v-if="item.icon" class="ml-2" v-html="item.icon" />
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
