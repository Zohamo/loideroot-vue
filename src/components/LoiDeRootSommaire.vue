<script setup lang="ts">
import { ref } from 'vue'
import Button from 'primevue/button'
import Drawer from 'primevue/drawer'
import Menu from 'primevue/menu'

const items = ref([
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
])

const visible = ref(false)
</script>

<template>
  <div class="card flex justify-center btn-sommaire">
    <Drawer v-model:visible="visible" header="La Loi de Root">
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
      <i class="pi pi-book" />
    </Button>
  </div>
</template>

<style scoped>
.btn-sommaire {
  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 500;
}
</style>
