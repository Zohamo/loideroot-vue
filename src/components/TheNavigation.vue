<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'
import Menu from 'primevue/menu'

const items = ref([
  {
    label: 'Loi de Root',
    items: [
      {
        label: "Règles d'or",
        route: '/loi-de-root/1/regles-d-or',
      },
      {
        label: 'Concepts clés',
        route: '/loi-de-root/2/concepts-cles',
      },
      {
        label: 'Victoire',
        route: '/loi-de-root/3/victoire',
      },
    ],
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
      },
      {
        label: 'Alliance de la Forêt',
      },
    ],
  },
  {
    label: 'Rootbotique',
  },
])

const visible = ref(false)
</script>

<template>
  <div
    class="card flex justify-center"
    style="position: fixed; top: 0.5rem; left: 0.5rem; z-index: 500"
  >
    <Drawer v-model:visible="visible" position="top" style="height: auto">
      <div class="card flex justify-center">
        <Menu :model="items">
          <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
              <a v-ripple :href="href" v-bind="props.action" @click="navigate">
                <span class="ml-2">{{ item.label }}</span>
              </a>
            </router-link>
            <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
              <span class="ml-2">{{ item.label }}</span>
            </a>
          </template>
        </Menu>
      </div>
    </Drawer>
    <Button @click="visible = true">
      <i class="pi pi-bars" />
    </Button>
  </div>
</template>
